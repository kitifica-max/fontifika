export interface Font {
  slug: string;
  name: string;
  category: string;
  styles: string[];
  weights: number[];
  is_variable: boolean;
  designer: string;
  license: string;
}

// ponytail: bundled catalog — 100 static items, no DB round-trip needed
export const CATALOG: Font[] = [
  {"slug":"satoshi","name":"Satoshi","category":"sans","styles":["italic","normal"],"weights":[300,400,500,700,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"clash-display","name":"Clash Display","category":"sans","styles":["normal"],"weights":[200,300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"general-sans","name":"General Sans","category":"sans","styles":["italic","normal"],"weights":[200,300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"cabinet-grotesk","name":"Cabinet Grotesk","category":"sans","styles":["normal"],"weights":[100,200,300,400,500,700,800,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"ranade","name":"Ranade","category":"sans","styles":["italic","normal"],"weights":[100,300,400,500,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"chillax","name":"Chillax","category":"sans","styles":["normal"],"weights":[200,300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"clash-grotesk","name":"Clash Grotesk","category":"sans","styles":["normal"],"weights":[200,300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"switzer","name":"Switzer","category":"sans","styles":["italic","normal"],"weights":[100,200,300,400,500,600,700,800,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"panchang","name":"Panchang","category":"sans","styles":["normal"],"weights":[200,300,400,500,600,700,800],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"stardom","name":"Stardom","category":"display","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"zodiak","name":"Zodiak","category":"serif","styles":["italic","normal"],"weights":[100,300,400,700,800,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"sentient","name":"Sentient","category":"serif","styles":["italic","normal"],"weights":[200,300,400,500,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"supreme","name":"Supreme","category":"sans","styles":["italic","normal"],"weights":[100,200,300,400,500,700,800],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"boska","name":"Boska","category":"serif","styles":["italic","normal"],"weights":[200,300,400,500,700,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"author","name":"Author","category":"sans","styles":["italic","normal"],"weights":[200,300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"telma","name":"Telma","category":"script","styles":["normal"],"weights":[300,400,500,700,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"bespoke-serif","name":"Bespoke Serif","category":"serif","styles":["italic","normal"],"weights":[300,400,500,700,800],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"gambetta","name":"Gambetta","category":"serif","styles":["italic","normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"tanker","name":"Tanker","category":"sans","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"excon","name":"Excon","category":"sans","styles":["normal"],"weights":[100,300,400,500,700,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"gambarino","name":"Gambarino","category":"serif","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"neco","name":"Neco","category":"serif","styles":["italic","normal"],"weights":[400,500,700,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"alpino","name":"Alpino","category":"sans","styles":["normal"],"weights":[100,300,400,500,700,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"quilon","name":"Quilon","category":"sans","styles":["normal"],"weights":[400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"pally","name":"Pally","category":"sans","styles":["normal"],"weights":[400,500,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"bespoke-sans","name":"Bespoke Sans","category":"sans","styles":["italic","normal"],"weights":[300,400,500,700,800],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"erode","name":"Erode","category":"serif","styles":["italic","normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"pencerio","name":"Pencerio","category":"script","styles":["normal"],"weights":[50],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"nippo","name":"Nippo","category":"display","styles":["normal"],"weights":[200,300,400,500,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"sharpie","name":"Sharpie","category":"display","styles":["normal"],"weights":[300,400,700,800,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"pramukh-rounded","name":"Pramukh Rounded","category":"sans","styles":["italic","normal"],"weights":[200,300,350,400,600,700,800,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"plein","name":"Plein","category":"sans","styles":["italic","normal"],"weights":[300,400,500,700,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"bespoke-stencil","name":"Bespoke Stencil","category":"sans","styles":["italic","normal"],"weights":[300,400,500,700,800],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"amulya","name":"Amulya","category":"sans","styles":["italic","normal"],"weights":[300,400,500,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"bevellier","name":"Bevellier","category":"display","styles":["italic","normal"],"weights":[100,200,300,400,500,600,700,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"synonym","name":"Synonym","category":"sans","styles":["normal"],"weights":[200,300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"bonny","name":"Bonny","category":"serif","styles":["normal"],"weights":[100,300,400,500,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"comico","name":"Comico","category":"handwritten","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"rowan","name":"Rowan","category":"serif","styles":["italic","normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"aktura","name":"Aktura","category":"display","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"technor","name":"Technor","category":"sans","styles":["normal"],"weights":[200,300,400,500,600,700,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"bespoke-slab","name":"Bespoke Slab","category":"slab","styles":["italic","normal"],"weights":[300,400,500,700,800],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"britney","name":"Britney","category":"script","styles":["normal"],"weights":[300,400,700,1000],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"array","name":"Array","category":"display","styles":["normal"],"weights":[400,600,700],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"styro","name":"Styro","category":"display","styles":["normal"],"weights":[200,300,400,500,600,700,800,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"recia","name":"Recia","category":"serif","styles":["italic","normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"melodrama","name":"Melodrama","category":"sans","styles":["normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"rosaline","name":"Rosaline","category":"script","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"hoover","name":"Hoover","category":"slab","styles":["normal"],"weights":[100,300,400,500,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"trench-slab","name":"Trench Slab","category":"slab","styles":["normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"chubbo","name":"Chubbo","category":"display","styles":["italic","normal"],"weights":[200,300,400,500,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"boxing","name":"Boxing","category":"display","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"kola","name":"Kola","category":"display","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"rx-100","name":"RX100","category":"sans","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"paquito","name":"Paquito","category":"serif","styles":["normal"],"weights":[400,500,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"zina","name":"Zina","category":"display","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"tabular","name":"Tabular","category":"sans","styles":["italic","normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"expose","name":"Expose","category":"sans","styles":["normal"],"weights":[400,500,700,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"segment","name":"Segment","category":"display","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"kihim","name":"Kihim","category":"display","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"pilcrow-rounded","name":"Pilcrow Rounded","category":"sans","styles":["normal"],"weights":[400,500,600,700,900],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"striper","name":"Striper","category":"display","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"new-title","name":"New Title","category":"sans","styles":["normal"],"weights":[200,300,400,500,700],"is_variable":true,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"kohinoor-zerone","name":"Kohinoor Zerone","category":"display","styles":["normal"],"weights":[100,200],"is_variable":false,"designer":"Indian Type Foundry","license":"itf_ffl"},
  {"slug":"khand","name":"Khand","category":"sans","styles":["normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"sil_ofl"},
  {"slug":"hind","name":"Hind","category":"sans","styles":["normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"sil_ofl"},
  {"slug":"kalam","name":"Kalam","category":"handwritten","styles":["normal"],"weights":[300,400,700],"is_variable":true,"designer":"Indian Type Foundry","license":"sil_ofl"},
  {"slug":"anton","name":"Anton","category":"sans","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Vernon Adams","license":"sil_ofl"},
  {"slug":"oswald","name":"Oswald","category":"sans","styles":["normal"],"weights":[200,300,400,500,600,700],"is_variable":true,"designer":"Vernon Adams, Kalapi Gajjar, Cyreal","license":"sil_ofl"},
  {"slug":"karma","name":"Karma","category":"serif","styles":["normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"sil_ofl"},
  {"slug":"montserrat","name":"Montserrat","category":"sans","styles":["italic","normal"],"weights":[100,200,300,400,500,600,700,800,900],"is_variable":true,"designer":"Julieta Ulanovsky, Sol Matas, Juan Pablo del Peral, Jacques Le Bailly","license":"sil_ofl"},
  {"slug":"epilogue","name":"Epilogue","category":"sans","styles":["italic","normal"],"weights":[100,200,300,400,500,600,700,800,900],"is_variable":true,"designer":"Tyler Finck, Etcetera Type Co","license":"sil_ofl"},
  {"slug":"archivo","name":"Archivo","category":"sans","styles":["italic","normal"],"weights":[100,200,300,400,500,600,700,800,900],"is_variable":true,"designer":"Omnibus-Type","license":"sil_ofl"},
  {"slug":"azeret-mono","name":"Azeret Mono","category":"sans","styles":["italic","normal"],"weights":[100,200,300,400,500,600,700,800,900],"is_variable":true,"designer":"Displaay, Martin Vácha, Daniel Quisek","license":"sil_ofl"},
  {"slug":"beVietnam-pro","name":"Be Vietnam Pro","category":"sans","styles":["italic","normal"],"weights":[100,200,300,400,500,600,700,800,900],"is_variable":true,"designer":"Lam Bao, Tony Le, Vietanh Nguyen","license":"sil_ofl"},
  {"slug":"dancing-script","name":"Dancing Script","category":"script","styles":["normal"],"weights":[400,700],"is_variable":true,"designer":"Impallari Type","license":"sil_ofl"},
  {"slug":"roundo","name":"Roundo","category":"sans","styles":["normal"],"weights":[200,300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"sil_ofl"},
  {"slug":"familjen-grotesk","name":"Familjen Grotesk","category":"sans","styles":["italic","normal"],"weights":[400,500,600,700],"is_variable":true,"designer":"Familjen STHLM AB","license":"sil_ofl"},
  {"slug":"crimson-pro","name":"Crimson Pro","category":"serif","styles":["italic","normal"],"weights":[200,300,400,500,600,700,800,900],"is_variable":true,"designer":"Jacques Le Bailly","license":"sil_ofl"},
  {"slug":"literata","name":"Literata","category":"serif","styles":["italic","normal"],"weights":[200,300,400,500,600,700,800,900],"is_variable":true,"designer":"TypeTogether","license":"sil_ofl"},
  {"slug":"outfit","name":"Outfit","category":"sans","styles":["normal"],"weights":[100,200,300,400,500,600,700,800,900],"is_variable":true,"designer":"On Brand Investments Pty Ltd, Rodrigo Fuenzalida","license":"sil_ofl"},
  {"slug":"lora","name":"Lora","category":"serif","styles":["italic","normal"],"weights":[400,500,600,700],"is_variable":true,"designer":"Cyreal, Olga Karpushina, Alexei Vanyashin","license":"sil_ofl"},
  {"slug":"space-grotesk","name":"Space Grotesk","category":"sans","styles":["normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Florian Karsten","license":"sil_ofl"},
  {"slug":"poppins","name":"Poppins","category":"sans","styles":["italic","normal"],"weights":[100,200,300,400,500,600,700,800,900],"is_variable":true,"designer":"Indian Type Foundry","license":"sil_ofl"},
  {"slug":"plus-jakarta-sans","name":"Plus Jakarta Sans","category":"sans","styles":["italic","normal"],"weights":[200,300,400,500,600,700,800],"is_variable":true,"designer":"Tokotype","license":"sil_ofl"},
  {"slug":"public-sans","name":"Public Sans","category":"sans","styles":["italic","normal"],"weights":[100,200,300,400,500,600,700,800,900],"is_variable":true,"designer":"Pablo Impallari, Rodrigo Fuenzalida, Dan Williams, USWDS","license":"sil_ofl"},
  {"slug":"nunito","name":"Nunito","category":"sans","styles":["italic","normal"],"weights":[200,300,400,500,600,700,800,900],"is_variable":true,"designer":"Vernon Adams, Cyreal, Jacques Le Bailly","license":"sil_ofl"},
  {"slug":"red-hat-display","name":"Red Hat Display","category":"sans","styles":["italic","normal"],"weights":[300,400,500,600,700,800,900],"is_variable":true,"designer":"MCKL, Jeremy Mickel","license":"sil_ofl"},
  {"slug":"bebas-neue","name":"Bebas Neue","category":"sans","styles":["normal"],"weights":[400],"is_variable":false,"designer":"Ryoichi Tsunekawa, Dharma Type","license":"sil_ofl"},
  {"slug":"fira-sans","name":"Fira Sans","category":"sans","styles":["italic","normal"],"weights":[100,200,300,400,500,600,700,800,900],"is_variable":true,"designer":"Carrois Apostrophe","license":"sil_ofl"},
  {"slug":"quicksand","name":"Quicksand","category":"sans","styles":["normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Andrew Paglinawan","license":"sil_ofl"},
  {"slug":"jet-brains-mono","name":"JetBrains Mono","category":"sans","styles":["italic","normal"],"weights":[100,200,300,400,500,600,700,800],"is_variable":true,"designer":"JetBrains, Philipp Nurullin, Konstantin Bulenkov","license":"sil_ofl"},
  {"slug":"teko","name":"Teko","category":"sans","styles":["normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"sil_ofl"},
  {"slug":"spline-sans","name":"Spline Sans","category":"sans","styles":["normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Eben Sorkin, Mirko Velimirović","license":"sil_ofl"},
  {"slug":"sora","name":"Sora","category":"sans","styles":["italic","normal"],"weights":[100,200,300,400,500,600,700,800],"is_variable":true,"designer":"Jonathan Barnbrook, Julián Moncada","license":"sil_ofl"},
  {"slug":"asap","name":"Asap","category":"sans","styles":["italic","normal"],"weights":[400,500,600,700],"is_variable":true,"designer":"Omnibus-Type","license":"sil_ofl"},
  {"slug":"manrope","name":"Manrope","category":"sans","styles":["normal"],"weights":[200,300,400,500,600,700,800],"is_variable":true,"designer":"Mikhail Sharanda","license":"sil_ofl"},
  {"slug":"work-sans","name":"Work Sans","category":"sans","styles":["italic","normal"],"weights":[100,200,300,400,500,600,700,800,900],"is_variable":true,"designer":"Wei Huang","license":"sil_ofl"},
  {"slug":"rajdhani","name":"Rajdhani","category":"sans","styles":["normal"],"weights":[300,400,500,600,700],"is_variable":true,"designer":"Indian Type Foundry","license":"sil_ofl"},
  {"slug":"merriweather-sans","name":"Merriweather Sans","category":"sans","styles":["italic","normal"],"weights":[300,400,500,600,700,800],"is_variable":true,"designer":"Eben Sorkin, Sorkin Type","license":"sil_ofl"}
];

export function searchFonts(q: string, limit = 5): Font[] {
  const query = q.toLowerCase().trim();
  if (!query) return CATALOG.slice(0, limit);
  return CATALOG.filter(
    (f) =>
      f.name.toLowerCase().includes(query) ||
      f.category.toLowerCase().includes(query) ||
      f.designer.toLowerCase().includes(query)
  ).slice(0, limit);
}

export function getFont(slug: string): Font | undefined {
  return CATALOG.find((f) => f.slug === slug);
}

export function listCategories(): string[] {
  return [...new Set(CATALOG.map((f) => f.category))].sort();
}

// Fontshare CSS API: weights only — the CDN returns all available styles (normal + italic) per weight
export function buildEmbedUrl(slug: string, weights: number[]): string {
  const w = weights.length ? weights.join(",") : "400";
  return `https://api.fontshare.com/v2/css?f[]=${slug}@${w}&display=swap`;
}

export interface FontPair {
  id: string;
  heading: string;
  body: string;
  vibe: string;
  use_cases: string[];
  description: string;
}

export const PAIRS: FontPair[] = [
  { id: "editorial-classic", heading: "zodiak", body: "satoshi", vibe: "Editorial clásico", use_cases: ["editorial", "magazine", "blog", "periodico", "news", "articulo"], description: "Serif elegante para titulares, sans neutro para cuerpo" },
  { id: "editorial-modern", heading: "sentient", body: "general-sans", vibe: "Editorial moderno", use_cases: ["editorial", "revista", "magazine", "cultural"], description: "Serif contemporáneo con humanista versátil" },
  { id: "editorial-bold", heading: "boska", body: "switzer", vibe: "Editorial audaz", use_cases: ["editorial", "magazine", "feature", "portada"], description: "Serif expresivo con grotesque limpio" },
  { id: "tech-sharp", heading: "clash-display", body: "satoshi", vibe: "Tech sharp", use_cases: ["saas", "tech", "startup", "app", "software", "producto", "landing"], description: "Display impactante con body neutral para SaaS/tech" },
  { id: "tech-mono", heading: "space-grotesk", body: "switzer", vibe: "Tech geométrico", use_cases: ["tech", "developer", "herramienta", "tool", "dev", "codigo"], description: "Geométrico técnico para productos de código" },
  { id: "tech-minimal", heading: "supreme", body: "general-sans", vibe: "Tech minimal", use_cases: ["saas", "startup", "minimal", "clean", "simple"], description: "Sans condensado + humanista sin fricciones" },
  { id: "fashion-luxury", heading: "stardom", body: "satoshi", vibe: "Fashion luxury", use_cases: ["fashion", "moda", "lujo", "luxury", "marca", "brand"], description: "Display de moda con sans contemporáneo" },
  { id: "fashion-modern", heading: "bevellier", body: "general-sans", vibe: "Fashion contemporáneo", use_cases: ["fashion", "moda", "editorial", "e-commerce", "tienda"], description: "Display elegante con humanista legible" },
  { id: "branding-bold", heading: "panchang", body: "cabinet-grotesk", vibe: "Branding bold", use_cases: ["branding", "marca", "brand", "identidad", "identity", "logo"], description: "Sans expresivo + grotesque versátil para marca fuerte" },
  { id: "branding-clean", heading: "clash-grotesk", body: "satoshi", vibe: "Branding limpio", use_cases: ["branding", "marca", "brand", "startup", "agencia", "agency"], description: "Grotesque sistemático para branding moderno" },
  { id: "blog-readable", heading: "erode", body: "satoshi", vibe: "Blog legible", use_cases: ["blog", "articulo", "content", "contenido", "largo", "lectura", "read"], description: "Serif humanista con sans para lectura larga" },
  { id: "blog-literary", heading: "gambetta", body: "general-sans", vibe: "Blog literario", use_cases: ["blog", "escritura", "literatura", "book", "libro", "ensayo"], description: "Serif literario con humanista para prosa" },
  { id: "portfolio-creative", heading: "sharpie", body: "switzer", vibe: "Portfolio creativo", use_cases: ["portfolio", "portafolio", "creative", "creativo", "diseño", "design"], description: "Display expresivo para portafolio de diseño" },
  { id: "portfolio-minimal", heading: "nippo", body: "general-sans", vibe: "Portfolio minimal", use_cases: ["portfolio", "portafolio", "minimal", "clean", "personal"], description: "Display geométrico con sans legible" },
  { id: "dev-docs", heading: "azeret-mono", body: "general-sans", vibe: "Dev / Docs", use_cases: ["developer", "dev", "docs", "documentacion", "documentacion", "codigo", "code", "technical"], description: "Mono para headings técnicos con humanista para prosa" },
  { id: "marketing-landing", heading: "cabinet-grotesk", body: "satoshi", vibe: "Marketing / Landing", use_cases: ["marketing", "landing", "campaña", "campaign", "conversion", "ventas", "sales"], description: "Grotesque expresivo + body limpio para conversión" },
  { id: "health-wellness", heading: "sentient", body: "switzer", vibe: "Salud / Bienestar", use_cases: ["salud", "health", "wellness", "bienestar", "medico", "clinic", "farmacia"], description: "Serif cálido con sans accesible" },
  { id: "education-content", heading: "epilogue", body: "outfit", vibe: "Educación / Contenido", use_cases: ["educacion", "education", "curso", "course", "aprendizaje", "learning", "escuela", "school"], description: "Sans humanista claro para contextos educativos" },
  { id: "fintech-trust", heading: "switzer", body: "tabular", vibe: "Fintech / Confianza", use_cases: ["fintech", "finanzas", "finance", "banco", "bank", "datos", "data", "tabla"], description: "Grotesque sistemático + tabular para datos financieros" },
  { id: "playful-fun", heading: "chillax", body: "general-sans", vibe: "Playful / Fun", use_cases: ["infantil", "kids", "divertido", "playful", "fun", "juego", "game", "creativo"], description: "Sans redondeado amigable para contextos lúdicos" },
];

export function suggestPairs(query: string, limit = 3): FontPair[] {
  const q = query.toLowerCase().trim();
  if (!q) return PAIRS.slice(0, limit);
  const scored = PAIRS.map(p => {
    let score = 0;
    if (p.vibe.toLowerCase().includes(q)) score += 3;
    if (p.use_cases.some(u => u.includes(q))) score += 2;
    if (p.description.toLowerCase().includes(q)) score += 1;
    return { p, score };
  }).filter(x => x.score > 0).sort((a, b) => b.score - a.score);
  return (scored.length ? scored : PAIRS.map(p => ({ p, score: 0 }))).slice(0, limit).map(x => x.p);
}

export function buildEmbedSnippet(font: Font, weights: number[]) {
  const effectiveWeights = weights.length ? weights : [400];
  const embedUrl = buildEmbedUrl(font.slug, effectiveWeights);
  const wAxis = font.is_variable
    ? `font-weight: ${Math.min(...effectiveWeights)} ${Math.max(...effectiveWeights)};`
    : `font-weight: ${effectiveWeights.join(", ")};`;
  return {
    link: `<link rel="stylesheet" href="${embedUrl}">`,
    import: `@import url('${embedUrl}');`,
    css: `font-family: '${font.name}', sans-serif;\n${wAxis}`,
    embed_url: embedUrl,
  };
}
