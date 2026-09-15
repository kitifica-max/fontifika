import {
  CATALOG,
  searchFonts,
  getFont,
  listCategories,
  buildEmbedSnippet,
  buildEmbedUrl,
} from "./catalog.ts";
import { createClient } from "jsr:@supabase/supabase-js@2";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_KEY = Deno.env.get("SUPABASE_ANON_KEY") ?? "";

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

function json(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...CORS, "Content-Type": "application/json" },
  });
}

function err(msg: string, status = 400) {
  return json({ error: msg }, status);
}

// ── MCP server ────────────────────────────────────────────────────────────────

const MCP_TOOLS = [
  {
    name: "search_fonts",
    description: "Search Fontshare fonts by name, category, or designer",
    inputSchema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search text" },
        limit: { type: "number", description: "Max results (default 3)" },
      },
      required: ["query"],
    },
  },
  {
    name: "get_font",
    description: "Get full metadata for a Fontshare font by slug",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string", description: "Font slug, e.g. 'satoshi'" },
      },
      required: ["slug"],
    },
  },
  {
    name: "get_embed_snippet",
    description: "Get ready-to-use <link>, @import, and font-family CSS for a font",
    inputSchema: {
      type: "object",
      properties: {
        slug: { type: "string" },
        weights: {
          type: "array",
          items: { type: "number" },
          description: "Weight numbers, e.g. [400, 700]. Defaults to [400].",
        },
        italic: { type: "boolean", description: "Include italic variants" },
      },
      required: ["slug"],
    },
  },
  {
    name: "list_categories",
    description: "List all available font categories",
    inputSchema: { type: "object", properties: {} },
  },
];

function handleMcpTool(name: string, args: Record<string, unknown>): unknown {
  switch (name) {
    case "search_fonts": {
      const results = searchFonts(String(args.query ?? ""), Number(args.limit ?? 3));
      return { results };
    }
    case "get_font": {
      const font = getFont(String(args.slug ?? ""));
      if (!font) return { error: "Font not found" };
      return { font };
    }
    case "get_embed_snippet": {
      const font = getFont(String(args.slug ?? ""));
      if (!font) return { error: "Font not found" };
      const weights = Array.isArray(args.weights)
        ? (args.weights as number[])
        : [400];
      return buildEmbedSnippet(font, weights);
    }
    case "list_categories":
      return { categories: listCategories() };
    default:
      return { error: `Unknown tool: ${name}` };
  }
}

async function handleMcp(req: Request): Promise<Response> {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return err("Invalid JSON", 400);
  }

  const { method, id, params } = body as {
    method: string;
    id?: unknown;
    params?: Record<string, unknown>;
  };

  const respond = (result: unknown) =>
    json({ jsonrpc: "2.0", id: id ?? null, result });

  switch (method) {
    case "initialize":
      return respond({
        protocolVersion: "2024-11-05",
        capabilities: { tools: {} },
        serverInfo: { name: "fontifika", version: "1.0.0" },
      });
    case "tools/list":
      return respond({ tools: MCP_TOOLS });
    case "tools/call": {
      const toolName = String((params as Record<string, unknown>)?.name ?? "");
      const toolArgs = ((params as Record<string, unknown>)?.arguments ?? {}) as Record<string, unknown>;
      const result = handleMcpTool(toolName, toolArgs);
      return respond({
        content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
      });
    }
    default:
      return json(
        { jsonrpc: "2.0", id: id ?? null, error: { code: -32601, message: "Method not found" } },
        200
      );
  }
}

// ── CSS builder ───────────────────────────────────────────────────────────────

async function handleCss(slug: string, url: URL): Promise<Response> {
  const font = getFont(slug);
  if (!font) return err("Font not found", 404);

  const weightsParam = url.searchParams.get("weights");
  const weights = weightsParam
    ? weightsParam.split(",").map(Number).filter(Boolean)
    : [400];

  const embedUrl = buildEmbedUrl(font.slug, weights);

  try {
    const upstream = await fetch(`https:${embedUrl}`);
    const css = await upstream.text();
    return new Response(css, {
      headers: { ...CORS, "Content-Type": "text/css" },
    });
  } catch {
    // fallback: return redirect
    return Response.redirect(`https:${embedUrl}`, 302);
  }
}

// ── Copy counter (Supabase DB) ────────────────────────────────────────────────

const ALLOWED_EVENTS = new Set([
  "skill_curl", "skill_example", "skill_manual_mkdir", "skill_manual_url",
  "mcp_url", "mcp_claude_ai", "mcp_claude_code",
  "mcp_cursor", "mcp_windsurf", "mcp_zed",
]);

function getSupabase() {
  return createClient(SUPABASE_URL, SUPABASE_KEY);
}

async function handleTrack(req: Request): Promise<Response> {
  let event: string;
  try {
    const body = await req.json();
    event = String(body?.event ?? "");
  } catch {
    return err("Invalid JSON", 400);
  }
  if (!ALLOWED_EVENTS.has(event)) return err("Unknown event", 400);

  const sb = getSupabase();

  const { data: existing } = await sb
    .from("copy_counts")
    .select("count")
    .eq("event", event)
    .single();

  const newCount = (existing?.count ?? 0) + 1;

  if (existing) {
    await sb.from("copy_counts").update({ count: newCount }).eq("event", event);
  } else {
    await sb.from("copy_counts").insert({ event, count: newCount });
  }

  return json({ ok: true, event, count: newCount });
}

async function handleStats(): Promise<Response> {
  const sb = getSupabase();
  const { data } = await sb.from("copy_counts").select("event, count");
  const counts: Record<string, number> = {};
  for (const row of data ?? []) {
    counts[row.event] = row.count;
  }
  return json({ counts });
}

// ── Router ────────────────────────────────────────────────────────────────────

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: CORS });
  }

  const url = new URL(req.url);
  // strip /api prefix added by Supabase function routing
  const path = url.pathname.replace(/^\/api/, "").replace(/^\/fontifika/, "");

  // POST /api/mcp
  if (path === "/mcp" && req.method === "POST") {
    return handleMcp(req);
  }

  // POST /api/track
  if (path === "/track" && req.method === "POST") {
    return handleTrack(req);
  }

  // GET /api/stats
  if (path === "/stats" && req.method === "GET") {
    return handleStats();
  }

  // GET /api/search?q=&limit=
  if (path === "/search") {
    const q = url.searchParams.get("q") ?? "";
    const limit = Math.min(Number(url.searchParams.get("limit") ?? 5), 20);
    const results = searchFonts(q, limit).map(({ slug, name, category, weights, is_variable }) => ({
      slug, name, category, weights, is_variable,
    }));
    return json({ results });
  }

  // GET /api/list?category=
  if (path === "/list") {
    const category = url.searchParams.get("category") ?? "";
    const fonts = category
      ? CATALOG.filter((f) => f.category === category)
      : CATALOG;
    return json({ fonts, total: fonts.length });
  }

  // GET /api/font/:slug
  const fontMatch = path.match(/^\/font\/([^/]+)$/);
  if (fontMatch) {
    const font = getFont(fontMatch[1]);
    if (!font) return err("Font not found", 404);
    const snippet = buildEmbedSnippet(font, [400, 700]);
    return json({ font, embed: snippet });
  }

  // GET /api/css/:slug?weights=
  const cssMatch = path.match(/^\/css\/([^/]+)$/);
  if (cssMatch) {
    return handleCss(cssMatch[1], url);
  }

  return err("Not found", 404);
});
