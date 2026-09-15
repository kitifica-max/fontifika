#!/usr/bin/env ts-node
/**
 * Fontifika — sync-catalog
 * Fetches the complete Fontshare catalog and writes catalog.json.
 * Source: https://api.fontshare.com/v2/fonts (internal API, no auth required)
 * Run: npx ts-node scripts/sync-catalog.ts
 */

const API_URL = "https://api.fontshare.com/v2/fonts";
const OUT_FILE = new URL("../catalog.json", import.meta.url).pathname;

interface RawStyle {
  is_variable: boolean;
  is_italic: boolean;
  weight?: { weight: number };
}

interface RawFont {
  slug: string;
  name: string;
  category: string;
  styles: RawStyle[];
  axes: unknown[];
  designers: Array<{ name: string }>;
  publisher?: { name: string };
  display_publisher_as_designer: boolean;
  license_type: string;
}

interface ApiResponse {
  fonts: RawFont[];
  count: number;
  count_total: number;
  has_more: boolean;
}

interface CatalogEntry {
  slug: string;
  name: string;
  category: string;
  styles: string[];
  weights: number[];
  is_variable: boolean;
  designer: string;
  license: string;
}

async function fetchAllFonts(): Promise<CatalogEntry[]> {
  const url = `${API_URL}?offset=0&limit=200&order_by=popularity`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status} from ${url}`);
  const data: ApiResponse = await res.json();
  console.log(`Fetched ${data.fonts.length} / ${data.count_total} fonts. has_more=${data.has_more}`);
  return data.fonts.map(mapFont);
}

function mapFont(f: RawFont): CatalogEntry {
  const weights: number[] = [];
  const styles: string[] = [];
  let isVariable = false;

  for (const s of f.styles) {
    if (s.is_variable) {
      isVariable = true;
    } else {
      const w = s.weight?.weight;
      if (w && !weights.includes(w)) weights.push(w);
      const style = s.is_italic ? "italic" : "normal";
      if (!styles.includes(style)) styles.push(style);
    }
  }

  const category = (f.category || "").split(",")[0].trim().toLowerCase();

  const designer = f.display_publisher_as_designer
    ? (f.publisher?.name ?? "")
    : f.designers.map((d) => d.name).join(", ");

  return {
    slug: f.slug,
    name: f.name,
    category,
    styles: styles.sort(),
    weights: weights.sort((a, b) => a - b),
    is_variable: isVariable,
    designer,
    license: f.license_type ?? "itf_ffl",
  };
}

async function main() {
  const fonts = await fetchAllFonts();
  const { writeFileSync } = await import("fs");
  writeFileSync(OUT_FILE, JSON.stringify(fonts, null, 2));
  console.log(`Written ${fonts.length} fonts to catalog.json`);

  // Summary by category
  const byCategory: Record<string, number> = {};
  for (const f of fonts) {
    byCategory[f.category] = (byCategory[f.category] || 0) + 1;
  }
  console.table(byCategory);
}

main().catch((e) => { console.error(e); process.exit(1); });
