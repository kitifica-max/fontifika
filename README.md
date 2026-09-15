# Fontifika

**100 fuentes Fontshare para tu AI assistant.**  
Busca, previsualiza y embebe desde Claude, Cursor, Windsurf, Cline, Zed — sin copiar y pegar manualmente.

🌐 **[fontifika.kitifica.com](https://fontifika.kitifica.com)**

---

## ¿Qué es Fontifika?

Fontifika expone el catálogo completo de [Fontshare](https://fontshare.com) (Indian Type Foundry) a cualquier AI assistant, vía dos canales:

| Canal | Qué hace | Requiere instalación |
|-------|----------|----------------------|
| **Claude Skill** | Claude Code busca fuentes, muestra previewer visual, genera embed | Solo un `curl` |
| **MCP Server** | Tools nativos en cualquier cliente compatible con MCP | Configurar MCP |

---

## Claude Skill

El Skill funciona **sin instalar el MCP**. Claude hace fetch directo a la API HTTP.

```bash
mkdir -p ~/.claude/skills/fontifika && \
curl -o ~/.claude/skills/fontifika/SKILL.md https://fontifika.kitifica.com/SKILL.md
```

Luego en Claude Code:

```
necesito una fuente sans-serif para una app SaaS
```

Claude busca 2–3 opciones, muestra un previewer con sliders de peso, y copia el embed listo para pegar.

---

## MCP Server

**URL:** `https://thnmfysiwxtksehagara.supabase.co/functions/v1/api/mcp`

### Claude.ai
Settings → Connectors → Add MCP server → pega la URL.

### Claude Code
```bash
claude mcp add fontifika --transport http https://thnmfysiwxtksehagara.supabase.co/functions/v1/api/mcp
```

### Cursor
Settings → MCP → Add server → HTTP → pega la URL.

### Windsurf
`~/.codeium/windsurf/mcp_config.json`:
```json
{
  "mcpServers": {
    "fontifika": {
      "serverUrl": "https://thnmfysiwxtksehagara.supabase.co/functions/v1/api/mcp"
    }
  }
}
```

### Cline
Cline extension → MCP Servers → Add Server → HTTP → pega la URL.

### Zed
`settings.json` → `context_servers` → agrega la URL.

---

## API HTTP (sin auth, CORS abierto)

**Base URL:** `https://thnmfysiwxtksehagara.supabase.co/functions/v1/api`

| Endpoint | Descripción |
|----------|-------------|
| `GET /search?q=satoshi&limit=3` | Busca fuentes por nombre, categoría o diseñador |
| `GET /font/:slug` | Metadata completa + embed snippet listo |
| `GET /list?category=sans` | Lista por categoría |
| `POST /mcp` | MCP Server (JSON-RPC 2.0) |

### Ejemplo

```bash
curl "https://thnmfysiwxtksehagara.supabase.co/functions/v1/api/search?q=sans&limit=3"
```

```json
{
  "results": [
    { "slug": "satoshi", "name": "Satoshi", "category": "sans", "weights": [300,400,500,700,900], "is_variable": true },
    { "slug": "general-sans", "name": "General Sans", "category": "sans", "weights": [200,300,400,500,600,700], "is_variable": true },
    { "slug": "switzer", "name": "Switzer", "category": "sans", "weights": [100,200,300,400,500,600,700,800,900], "is_variable": true }
  ]
}
```

---

## MCP Tools

| Tool | Parámetros | Descripción |
|------|------------|-------------|
| `search_fonts` | `query`, `limit` | Busca fuentes |
| `get_font` | `slug` | Metadata completa |
| `get_embed_snippet` | `slug`, `weights[]`, `italic` | `<link>`, `@import`, CSS listo |
| `list_categories` | — | Categorías disponibles |

---

## Catálogo

100 fuentes Fontshare — 82 variables, actualizadas en `catalog.json`.

**Categorías:** `sans` · `serif` · `display` · `script` · `slab` · `handwritten`

**Licencias:**
- **ITF FFL** (64 fuentes): uso comercial libre, self-hosting permitido, sin atribución obligatoria.
- **SIL OFL** (36 fuentes): igual — sin atribución obligatoria en uso.

Actualizar catálogo:
```bash
deno run --allow-net scripts/sync-catalog.ts
```

---

## Stack

- **Backend:** Supabase Edge Functions (Deno)
- **Frontend:** HTML/CSS/JS estático, Netlify
- **Protocolo MCP:** Streamable HTTP, JSON-RPC 2.0, `2024-11-05`

---

## Parte de Kitifica

Fontifika es un producto de [Kitifica](https://kitifica.com) — apps web ligeras para workflows de diseño y desarrollo.

Producto hermano: [Iconifika](https://iconifika.kitifica.com) — 200,000+ íconos Iconify para AI assistants.
