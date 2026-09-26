export interface AITool {
  id: string;
  name: string;
  launchUrl: string;
  supportsQueryParam: boolean;
}

export interface StyleCategory {
  id: string;
  label: string;
  badgeClass: string;
}

export interface Prompt {
  id: string;
  text: string;
  styleCategory: string;
  styleCategoryLabel: string;
  badgeClass: string;
  carModel: string;
  aiTool: string;
  tags: string[];
}

export const AI_TOOLS: AITool[] = [
  {
    id: 'craiyon',
    name: 'Craiyon',
    launchUrl: 'https://www.craiyon.com',
    supportsQueryParam: false,
  },
  {
    id: 'local-forge',
    name: 'Stable Diffusion Forge (Local)',
    launchUrl: 'http://127.0.0.1:7860',
    supportsQueryParam: false,
  },
  {
    id: 'tensorart',
    name: 'Tensor.art',
    launchUrl: 'https://tensor.art',
    supportsQueryParam: false,
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    launchUrl: 'https://ideogram.ai/t/explore',
    supportsQueryParam: false,
  },
  {
    id: 'lexica',
    name: 'Lexica',
    launchUrl: 'https://lexica.art',
    supportsQueryParam: true,
  },
  {
    id: 'playground',
    name: 'Playground AI',
    launchUrl: 'https://playground.com',
    supportsQueryParam: false,
  },
];

export const STYLE_CATEGORIES: StyleCategory[] = [
  { id: 'cinematic', label: 'Cinematic', badgeClass: 'badge-cinematic' },
  { id: 'oil-painting', label: 'Oil Painting', badgeClass: 'badge-oil-painting' },
  { id: 'pencil-drawing', label: 'Pencil Drawing', badgeClass: 'badge-pencil-drawing' },
  { id: 'watercolor', label: 'Watercolor', badgeClass: 'badge-watercolor' },
  { id: 'digital-art', label: 'Digital Art', badgeClass: 'badge-digital-art' },
  { id: 'vintage-photo', label: 'Vintage Photo', badgeClass: 'badge-vintage-photo' },
  { id: 'neon-cyberpunk', label: 'Neon / Cyberpunk', badgeClass: 'badge-neon-cyberpunk' },
  { id: 'anime', label: 'Anime', badgeClass: 'badge-anime' },
  { id: 'concept-art', label: 'Concept Art', badgeClass: 'badge-concept-art' },
  { id: 'sketch', label: 'Sketch', badgeClass: 'badge-sketch' },
];

export const CAR_MODELS: string[] = [
  'Mature BBW',
  'Voluptuous Woman',
  'Plus-size Nude',
  'Chubby Buxom',
  'Elderly BBW',
  'Curvy Nude',
  'BBW Portrait',
  'Nude Female',
  'Buxom Mature',
  'Soft BBW',
];

// NSFW prompts adapted from source (style categories mapped by content)
export const ALL_PROMPTS: Prompt[] = [
  // ── PENCIL DRAWING ──────────────────────────────────────────────────────
  {
    id: 'prompt-001',
    text: 'black and white pencil drawing, Ein hochwertiges, professionelles Foto einer Frau, 50 Jahre, Chubby, buxom, breasts Cup J, Shaggy Long hanging breasts, fully nude, die im Freien Hände flac[...]
    styleCategory: 'pencil-drawing',
    styleCategoryLabel: 'Pencil Drawing',
    badgeClass: 'badge-pencil-drawing',
    carModel: 'Mature BBW',
    aiTool: 'craiyon',
    tags: ['pencil', 'black-white', 'bbw', 'nude', 'cat-pose'],
  },
  {
    id: 'prompt-002',
    text: 'black and white pencil drawing, A plus-size nude woman sitting on a crumpled green patterned velvet fabric against a pure black studio background, holding a large open white umbrella over h[...]
    styleCategory: 'pencil-drawing',
    styleCategoryLabel: 'Pencil Drawing',
    badgeClass: 'badge-pencil-drawing',
    carModel: 'Plus-size Nude',
    aiTool: 'lexica',
    tags: ['pencil', 'studio', 'umbrella', 'voluptuous', 'black-white'],
  },
  {
    id: 'prompt-003',
    text: 'black and white pencil drawing, A voluptuous nude woman with large natural breasts lying on the ground in an autumn forest, one hand in her long wavy blonde-brown hair, the other supporting[...]
    styleCategory: 'pencil-drawing',
    styleCategoryLabel: 'Pencil Drawing',
    badgeClass: 'badge-pencil-drawing',
    carModel: 'Voluptuous Woman',
    aiTool: 'craiyon',
    tags: ['pencil', 'forest', 'autumn', 'outdoor', 'black-white'],
  },
  {
    id: 'prompt-004',
    text: 'black and white pencil drawing, A highly detailed portrait of a beautiful voluptuous woman in her mid-20s, extremely curvy soft BBW body, massive heavy natural breasts with large areolas an[...]
    styleCategory: 'pencil-drawing',
    styleCategoryLabel: 'Pencil Drawing',
    badgeClass: 'badge-pencil-drawing',
    carModel: 'Soft BBW',
    aiTool: 'lexica',
    tags: ['pencil', 'portrait', 'bbw', 'studio', 'black-white'],
  },
  {
    id: 'prompt-005',
    text: 'black and white pencil drawing, Eine extrem detaillierte, fotorealistische oder hochrealistische digitale Illustration einer erwachsenen, üppigen BBW-Frau in voller Frontalansicht, komplet[...]
    styleCategory: 'pencil-drawing',
    styleCategoryLabel: 'Pencil Drawing',
    badgeClass: 'badge-pencil-drawing',
    carModel: 'BBW Portrait',
    aiTool: 'craiyon',
    tags: ['pencil', 'frontal', 'bbw', 'explicit', 'black-white'],
  },
  {
    id: 'prompt-006',
    text: 'black and white pencil drawing, Nude chubby buxom mid 50 female in Studio environment Body portrait, black and white, breathtaking pencil illustration, highly detailed, 4k, textured paper, [...]
    styleCategory: 'pencil-drawing',
    styleCategoryLabel: 'Pencil Drawing',
    badgeClass: 'badge-pencil-drawing',
    carModel: 'Chubby Buxom',
    aiTool: 'lexica',
    tags: ['pencil', 'studio', 'portrait', 'mid-50', 'black-white'],
  },

  // ── CINEMATIC ──��────────────────────────────────────────────────────────
  {
    id: 'prompt-007',
    text: 'Nude buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy, Shaggy, flat breasts, camera rising from the ground to the sky, legs spreading wide in the air, s[...]
    styleCategory: 'cinematic',
    styleCategoryLabel: 'Cinematic',
    badgeClass: 'badge-cinematic',
    carModel: 'Buxom Mature',
    aiTool: 'local-forge',
    tags: ['cinematic', 'river', 'spread', 'explicit', 'film-still'],
  },
  {
    id: 'prompt-008',
    text: 'Nude chubby buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy breasts, camera rising from the ground to the sky, legs spreading wide, showing her shaved [...]
    styleCategory: 'cinematic',
    styleCategoryLabel: 'Cinematic',
    badgeClass: 'badge-cinematic',
    carModel: 'Chubby Buxom',
    aiTool: 'local-forge',
    tags: ['cinematic', 'river', 'spread', 'explicit', 'hdr'],
  },
  {
    id: 'prompt-009',
    text: 'Nude female 40, normal Belly, big Long hanging empty saggy breasts, portrait profile. Negative prompt: anatomy fault, No extra Body parts, cinematic shot, dynamic lighting, 75mm, Technicolo[...]
    styleCategory: 'cinematic',
    styleCategoryLabel: 'Cinematic',
    badgeClass: 'badge-cinematic',
    carModel: 'Nude Female',
    aiTool: 'ideogram',
    tags: ['cinematic', 'profile', 'saggy', 'portrait', 'film'],
  },
  {
    id: 'prompt-010',
    text: 'Nude female 30, big Long hanging empty saggy breasts, cinematic shot, dynamic lighting, 75mm, Technicolor, Panavision, cinemascope, sharp focus, fine details, 8k, HDR, realism, realistic, k[...]
    styleCategory: 'cinematic',
    styleCategoryLabel: 'Cinematic',
    badgeClass: 'badge-cinematic',
    carModel: 'Curvy Nude',
    aiTool: 'local-forge',
    tags: ['cinematic', 'saggy', 'portrait', 'hdr', 'film-still'],
  },
  {
    id: 'prompt-011',
    text: 'Nude buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy breasts, camera rising from the ground to the sky, legs spreading wide in the air, showing her sha[...]
    styleCategory: 'cinematic',
    styleCategoryLabel: 'Cinematic',
    badgeClass: 'badge-cinematic',
    carModel: 'Buxom Mature',
    aiTool: 'playground',
    tags: ['cinematic', 'river', 'dslr', 'spread', 'explicit'],
  },

  // ── OIL PAINTING ────────────────────────────────────────────────────────
  {
    id: 'prompt-012',
    text: 'breathtaking alla prima oil painting, Nude chubby buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy breasts, camera rising from the ground to the sky, le[...]
    styleCategory: 'oil-painting',
    styleCategoryLabel: 'Oil Painting',
    badgeClass: 'badge-oil-painting',
    carModel: 'Chubby Buxom',
    aiTool: 'ideogram',
    tags: ['oil-painting', 'alla-prima', 'river', 'explicit', 'zaitsev'],
  },
  {
    id: 'prompt-013',
    text: 'breathtaking alla prima oil painting, A highly detailed portrait of a beautiful voluptuous woman in her mid-20s, extremely curvy soft BBW body, massive heavy natural breasts with large areo[...]
    styleCategory: 'oil-painting',
    styleCategoryLabel: 'Oil Painting',
    badgeClass: 'badge-oil-painting',
    carModel: 'Soft BBW',
    aiTool: 'ideogram',
    tags: ['oil-painting', 'alla-prima', 'portrait', 'bbw', 'studio'],
  },
  {
    id: 'prompt-014',
    text: 'breathtaking oil painting, Nude buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy breasts, camera rising from the ground to the sky, legs spreading wide [...]
    styleCategory: 'oil-painting',
    styleCategoryLabel: 'Oil Painting',
    badgeClass: 'badge-oil-painting',
    carModel: 'Buxom Mature',
    aiTool: 'playground',
    tags: ['oil-painting', 'wlop', 'river', 'explicit', 'artstation'],
  },
  {
    id: 'prompt-015',
    text: 'breathtaking oil painting, Nude female 40, normal Belly, big Long hanging empty saggy breasts, portrait profile. Negative prompt: anatomy fault, No extra Body parts, extreme close-up, low-a[...]
    styleCategory: 'oil-painting',
    styleCategoryLabel: 'Oil Painting',
    badgeClass: 'badge-oil-painting',
    carModel: 'Nude Female',
    aiTool: 'ideogram',
    tags: ['oil-painting', 'profile', 'saggy', 'wlop', 'artstation'],
  },
  {
    id: 'prompt-016',
    text: 'breathtaking alla prima oil painting, Nude female 40, normal Belly, big Long hanging empty saggy breasts, portrait profile. Negative prompt: anatomy fault, No extra Body parts, extreme clos[...]
    styleCategory: 'oil-painting',
    styleCategoryLabel: 'Oil Painting',
    badgeClass: 'badge-oil-painting',
    carModel: 'Curvy Nude',
    aiTool: 'local-forge',
    tags: ['oil-painting', 'alla-prima', 'profile', 'saggy', 'zaitsev'],
  },

  // ── WATERCOLOR ──────────────────────────────────────────────────────────
  {
    id: 'prompt-017',
    text: 'Nude chubby buxom mid 50 female in Studio Environment Body portrait, (watercolor), high resolution, intricate details, 4k, wallpaper, concept art, watercolor on textured paper. Overall, it\[...]
    styleCategory: 'watercolor',
    styleCategoryLabel: 'Watercolor',
    badgeClass: 'badge-watercolor',
    carModel: 'Chubby Buxom',
    aiTool: 'local-forge',
    tags: ['watercolor', 'studio', 'portrait', 'textured', 'mid-50'],
  },
  {
    id: 'prompt-018',
    text: 'A highly detailed portrait of a beautiful voluptuous woman in her mid-20s, extremely curvy soft BBW body, massive heavy natural breasts with large areolas and prominent nipples, soft rounde[...]
    styleCategory: 'watercolor',
    styleCategoryLabel: 'Watercolor',
    badgeClass: 'badge-watercolor',
    carModel: 'Soft BBW',
    aiTool: 'ideogram',
    tags: ['watercolor', 'portrait', 'bbw', 'studio', 'textured'],
  },
  {
    id: 'prompt-019',
    text: 'Nude buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy, Shaggy, flat breasts, camera rising from the ground to the sky, legs spreading wide in the air, s[...]
    styleCategory: 'watercolor',
    styleCategoryLabel: 'Watercolor',
    badgeClass: 'badge-watercolor',
    carModel: 'Buxom Mature',
    aiTool: 'local-forge',
    tags: ['watercolor', 'river', 'spread', 'explicit', 'textured'],
  },
  {
    id: 'prompt-020',
    text: 'Ein hochwertiges, professionelles Foto einer Frau, 50 Jahre, Chubby, buxom, breasts Cup J, Shaggy Long hanging breasts, fully nude, die im Freien eine Cat-Pose ausführt. Schlüsselwörter [...]
    styleCategory: 'watercolor',
    styleCategoryLabel: 'Watercolor',
    badgeClass: 'badge-watercolor',
    carModel: 'Mature BBW',
    aiTool: 'craiyon',
    tags: ['crayon', 'cat-pose', 'outdoor', 'bbw', 'nude'],
  },
  {
    id: 'prompt-021',
    text: 'Ein hochwertiges, professionelles Foto einer Frau, 50 Jahre, Chubby, buxom, breasts Cup J, Shaggy Long hanging breasts, fully nude, die im Freien eine Cow-Pose (when combined with the saggi[...]
    styleCategory: 'watercolor',
    styleCategoryLabel: 'Watercolor',
    badgeClass: 'badge-watercolor',
    carModel: 'Mature BBW',
    aiTool: 'craiyon',
    tags: ['crayon', 'cow-pose', 'outdoor', 'bbw', 'nude'],
  },

  // ── DIGITAL ART ─────────────────────────────────────────────────────────
  {
    id: 'prompt-022',
    text: 'painterly digital painting, Nude female 30, big Long hanging empty saggy breasts, digital painting in the style of Ilya Kuvshinov with painterly brush strokes, in the style of Ilya Kuvshino[...]
    styleCategory: 'digital-art',
    styleCategoryLabel: 'Digital Art',
    badgeClass: 'badge-digital-art',
    carModel: 'Curvy Nude',
    aiTool: 'playground',
    tags: ['digital', 'kuvshinov', 'painterly', 'saggy', 'portrait'],
  },
  {
    id: 'prompt-023',
    text: 'Nude female 40, normal Belly, big Long hanging empty saggy breasts, portrait profile, d&d, fantasy, highly detailed, digital painting, artstation, sharp focus, fantasy art, character art, i[...]
    styleCategory: 'digital-art',
    styleCategoryLabel: 'Digital Art',
    badgeClass: 'badge-digital-art',
    carModel: 'Nude Female',
    aiTool: 'ideogram',
    tags: ['digital', 'fantasy', 'artgerm', 'rutkowski', 'profile'],
  },
  {
    id: 'prompt-024',
    text: 'painterly digital painting, Nude female 40, normal Belly, big Long hanging empty saggy breasts, portrait profile. Negative prompt: anatomy fault, No extra Body parts, extreme close-up, low-[...]
    styleCategory: 'digital-art',
    styleCategoryLabel: 'Digital Art',
    badgeClass: 'badge-digital-art',
    carModel: 'Nude Female',
    aiTool: 'playground',
    tags: ['digital', 'kuvshinov', 'profile', 'painterly', 'saggy'],
  },
  {
    id: 'prompt-025',
    text: 'Nude chubby buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy breasts, camera rising from the ground to the sky, legs spreading wide, showing her shaved [...]
    styleCategory: 'digital-art',
    styleCategoryLabel: 'Digital Art',
    badgeClass: 'badge-digital-art',
    carModel: 'Chubby Buxom',
    aiTool: 'ideogram',
    tags: ['digital', 'artstation', 'river', 'explicit', 'rutkowski'],
  },
  {
    id: 'prompt-026',
    text: 'Nude chubby buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy breasts, camera rising from the ground to the sky, legs spreading wide, showing her shaved [...]
    styleCategory: 'digital-art',
    styleCategoryLabel: 'Digital Art',
    badgeClass: 'badge-digital-art',
    carModel: 'Chubby Buxom',
    aiTool: 'playground',
    tags: ['digital', 'kuvshinov', 'river', 'explicit', 'painterly'],
  },

  // ── VINTAGE PHOTO ───────────────────────────────────────────────────────
  {
    id: 'prompt-027',
    text: 'famous vintage 50s photo, Nude buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy, Shaggy, flat breasts, camera rising from the ground to the sky, legs sp[...]
    styleCategory: 'vintage-photo',
    styleCategoryLabel: 'Vintage Photo',
    badgeClass: 'badge-vintage-photo',
    carModel: 'Buxom Mature',
    aiTool: 'local-forge',
    tags: ['vintage', '1950s', 'film-grain', 'river', 'explicit'],
  },
  {
    id: 'prompt-028',
    text: 'Nude buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy, Shaggy, flat breasts, camera rising from the ground to the sky, legs spreading wide in the air, s[...]
    styleCategory: 'vintage-photo',
    styleCategoryLabel: 'Vintage Photo',
    badgeClass: 'badge-vintage-photo',
    carModel: 'Buxom Mature',
    aiTool: 'craiyon',
    tags: ['vintage', '90s', 'disposable', 'river', 'explicit'],
  },
  {
    id: 'prompt-029',
    text: 'A casual real-life photograph. A casual photo of Nude chubby buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy breasts, camera rising from the ground to [...]
    styleCategory: 'vintage-photo',
    styleCategoryLabel: 'Vintage Photo',
    badgeClass: 'badge-vintage-photo',
    carModel: 'Chubby Buxom',
    aiTool: 'local-forge',
    tags: ['photo', 'casual', 'river', 'spread', 'explicit'],
  },
  {
    id: 'prompt-030',
    text: 'Ein hochwertiges, professionelles Foto einer Frau, 50 Jahre, Chubby, buxom, breasts Cup J, Shaggy Long hanging breasts, fully nude, die im Freien eine Cat-Pose ausführt. Schlüsselwörter [...]
    styleCategory: 'vintage-photo',
    styleCategoryLabel: 'Vintage Photo',
    badgeClass: 'badge-vintage-photo',
    carModel: 'Mature BBW',
    aiTool: 'lexica',
    tags: ['photo', 'cat-pose', 'outdoor', 'bbw', 'nude'],
  },
  {
    id: 'prompt-031',
    text: 'Ein hochwertiges, professionelles Foto einer Frau, 50 Jahre, Chubby, buxom, breasts Cup J, Shaggy Long hanging breasts, fully nude, die im Freien auf Händen und Füßen mit Katzenbuckel Sc[...]
    styleCategory: 'vintage-photo',
    styleCategoryLabel: 'Vintage Photo',
    badgeClass: 'badge-vintage-photo',
    carModel: 'Mature BBW',
    aiTool: 'lexica',
    tags: ['photo', 'cat-arch', 'outdoor', 'bbw', 'nude'],
  },

  // ── SKETCH ────────────────────────────────────────────────────────────
  {
    id: 'prompt-032',
    text: 'black and white pencil drawing, Nude chubby buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy breasts, camera Zoom 45 deepest angle take, legs spreading [...]
    styleCategory: 'sketch',
    styleCategoryLabel: 'Sketch',
    badgeClass: 'badge-sketch',
    carModel: 'Chubby Buxom',
    aiTool: 'craiyon',
    tags: ['sketch', 'pencil', 'river', 'spread', 'explicit'],
  },
  {
    id: 'prompt-033',
    text: 'black and white technical drawing showcasing a Nude chubby buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy breasts, camera rising from the ground to th[...]
    styleCategory: 'sketch',
    styleCategoryLabel: 'Sketch',
    badgeClass: 'badge-sketch',
    carModel: 'Chubby Buxom',
    aiTool: 'lexica',
    tags: ['sketch', 'technical', 'annotated', 'river', 'explicit'],
  },
  {
    id: 'prompt-034',
    text: 'Glen Keane character concept art black and white pencil sketch of Nude chubby buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy breasts, camera rising fr[...]
    styleCategory: 'sketch',
    styleCategoryLabel: 'Sketch',
    badgeClass: 'badge-sketch',
    carModel: 'Chubby Buxom',
    aiTool: 'craiyon',
    tags: ['sketch', 'glen-keane', 'disney', 'river', 'explicit'],
  },
  {
    id: 'prompt-035',
    text: 'Nude chubby buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy breasts, camera rising from the ground to the sky, legs spreading wide, showing her shaved [...]
    styleCategory: 'sketch',
    styleCategoryLabel: 'Sketch',
    badgeClass: 'badge-sketch',
    carModel: 'Chubby Buxom',
    aiTool: 'lexica',
    tags: ['sketch', 'charcoal', 'river', 'spread', 'explicit'],
  },
  {
    id: 'prompt-036',
    text: 'Nude chubby buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy breasts, camera rising from the ground to the sky, legs spreading wide, showing her shaved [...]
    styleCategory: 'sketch',
    styleCategoryLabel: 'Sketch',
    badgeClass: 'badge-sketch',
    carModel: 'Chubby Buxom',
    aiTool: 'craiyon',
    tags: ['sketch', 'ink', 'pen-and-ink', 'river', 'explicit'],
  },
  {
    id: 'prompt-037',
    text: 'Nude chubby buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy breasts, camera rising from the ground to the sky, legs spreading wide, showing her shaved [...]
    styleCategory: 'sketch',
    styleCategoryLabel: 'Sketch',
    badgeClass: 'badge-sketch',
    carModel: 'Chubby Buxom',
    aiTool: 'lexica',
    tags: ['sketch', 'ink', 'river', 'spread', 'explicit'],
  },

  // ── CONCEPT ART ─────────────────────────────────────────────────────────
  {
    id: 'prompt-038',
    text: 'Nude chubby buxom mid 50 female in Studio Environment Body portrait, app logo icon, digital art pictogram icon, trending on artstation, app icon in the style of atey ghailan, app icon in th[...]
    styleCategory: 'concept-art',
    styleCategoryLabel: 'Concept Art',
    badgeClass: 'badge-concept-art',
    carModel: 'Chubby Buxom',
    aiTool: 'playground',
    tags: ['concept', 'icon', 'artstation', 'studio', 'portrait'],
  },
  {
    id: 'prompt-039',
    text: 'Nude chubby buxom mid 50 female in Studio Environment Body portrait, a concept art icon, a digital art logo, illustration, league of legends style concept art logo icon, inspired by wlop st[...]
    styleCategory: 'concept-art',
    styleCategoryLabel: 'Concept Art',
    badgeClass: 'badge-concept-art',
    carModel: 'Chubby Buxom',
    aiTool: 'ideogram',
    tags: ['concept', 'logo', 'wlop', 'studio', 'portrait'],
  },
  {
    id: 'prompt-040',
    text: 'Nude chubby buxom mid 50 female at a small river, sitting on a polished big rock, big large puffy breasts, camera rising from the ground to the sky, legs spreading wide, showing her shaved [...]
    styleCategory: 'concept-art',
    styleCategoryLabel: 'Concept Art',
    badgeClass: 'badge-concept-art',
    carModel: 'Chubby Buxom',
    aiTool: 'playground',
    tags: ['concept', 'wlop', 'river', 'explicit', 'artstation'],
  },
  {
    id: 'prompt-041',
    text: 'medieval illuminated manuscript picture of Nude female 40, normal Belly, big Long hanging empty saggy breasts, portrait profile. Negative prompt: anatomy fault, No extra Body parts, extreme[...]
    styleCategory: 'concept-art',
    styleCategoryLabel: 'Concept Art',
    badgeClass: 'badge-concept-art',
    carModel: 'Nude Female',
    aiTool: 'ideogram',
    tags: ['concept', 'medieval', 'manuscript', 'profile', 'saggy'],
  },
  {
    id: 'prompt-042',
    text: 'black and white pencil drawing, Nude female 40, normal Belly, big Long hanging empty saggy breasts, portrait profile. Negative prompt: anatomy fault, No extra Body parts, extreme close-up, [...]
    styleCategory: 'concept-art',
    styleCategoryLabel: 'Concept Art',
    badgeClass: 'badge-concept-art',
    carModel: 'Nude Female',
    aiTool: 'craiyon',
    tags: ['concept', 'pencil', 'profile', 'saggy', 'black-white'],
  },

  // ── ANIME ────────────────────────────────────────────────────────────
  {
    id: 'prompt-043',
    text: 'anime art of Nude female 40, normal Belly, big Long hanging empty saggy breasts, portrait profile, world-class masterpiece, 4k, best quality, anime art. Overall, it\'s an absolute world-cla[...]
    styleCategory: 'anime',
    styleCategoryLabel: 'Anime',
    badgeClass: 'badge-anime',
    carModel: 'Nude Female',
    aiTool: 'craiyon',
    tags: ['anime', 'profile', 'saggy', 'portrait', 'masterpiece'],
  },
  {
    id: 'prompt-044',
    text: 'Eine extrem detaillierte, fotorealistische Abbildung einer 70 Jahre alten, erwachsenen, üppigen BBW-Frau in voller Profilansicht, komplett nackt. FOCUS AUF DIE NIPPEL. Sie steht selbstbewu[...]
    styleCategory: 'anime',
    styleCategoryLabel: 'Anime',
    badgeClass: 'badge-anime',
    carModel: 'Elderly BBW',
    aiTool: 'ideogram',
    tags: ['anime', 'elderly', 'profile', 'bbw', 'explicit'],
  },
  {
    id: 'prompt-045',
    text: 'Eine extrem detaillierte, fotorealistische Abbildung einer erwachsenen, 86-jährigen üppigen BBW-Frau in voller Profilansicht, komplett nackt. FOCUS AUF DIE NIPPEL. Sie steht selbstbewusst[...]
    styleCategory: 'anime',
    styleCategoryLabel: 'Anime',
    badgeClass: 'badge-anime',
    carModel: 'Elderly BBW',
    aiTool: 'ideogram',
    tags: ['anime', '86-years', 'profile', 'bbw', 'explicit'],
  },
  {
    id: 'prompt-046',
    text: 'Eine extrem detaillierte, fotorealistische Abbildung einer erwachsenen, elderly üppigen BBW-Frau in voller Profilansicht, komplett nackt. FOCUS AUF DIE NIPPEL. Sie steht selbstbewusst und [...]
    styleCategory: 'anime',
    styleCategoryLabel: 'Anime',
    badgeClass: 'badge-anime',
    carModel: 'Elderly BBW',
    aiTool: 'craiyon',
    tags: ['anime', 'elderly', 'profile', 'bbw', 'explicit'],
  },
  {
    id: 'prompt-047',
    text: 'Eine extrem detaillierte, fotorealistische Abbildung einer alten, erwachsenen, üppigen BBW-Frau in voller Profilansicht, komplett nackt. FOCUS AUF DIE NIPPEL. Sie steht selbstbewusst und l[...]
    styleCategory: 'anime',
    styleCategoryLabel: 'Anime',
    badgeClass: 'badge-anime',
    carModel: 'Elderly BBW',
    aiTool: 'ideogram',
    tags: ['anime', 'old', 'profile', 'bbw', 'explicit'],
  },

  // ── NEON / CYBERPUNK (remaining detailed prompts) ───────────────────────
  {
    id: 'prompt-048',
    text: 'black and white pencil drawing, Detaillierte, explizite Bildbeschreibung (als Prompt-Vorlage): Eine extrem korpulente, vollschlanke Frau Mitte 30 mit voluminösem, weichem Körper, steht fr[...]
    styleCategory: 'neon-cyberpunk',
    styleCategoryLabel: 'Neon / Cyberpunk',
    badgeClass: 'badge-neon-cyberpunk',
    carModel: 'Plus-size Nude',
    aiTool: 'playground',
    tags: ['studio', 'extreme-bbw', 'frontal', 'explicit', 'detailed'],
  },
  {
    id: 'prompt-049',
    text: 'Eine extrem detaillierte, fotorealistische Abbildung einer 70 Jahre alten, erwachsenen, üppigen BBW-Frau in voller Profilansicht, komplett nackt. FOCUS AUF DIE NIPPEL. Sie steht selbstbewu[...]
    styleCategory: 'neon-cyberpunk',
    styleCategoryLabel: 'Neon / Cyberpunk',
    badgeClass: 'badge-neon-cyberpunk',
    carModel: 'Elderly BBW',
    aiTool: 'local-forge',
    tags: ['profile', '70-years', 'bbw', 'explicit', 'detailed'],
  },
  {
    id: 'prompt-050',
    text: 'Eine extrem detaillierte, fotorealistische Abbildung einer erwachsenen, 86-jährigen üppigen BBW-Frau in voller Profilansicht, komplett nackt. FOCUS AUF DIE NIPPEL. Sie steht selbstbewusst[...]
    styleCategory: 'neon-cyberpunk',
    styleCategoryLabel: 'Neon / Cyberpunk',
    badgeClass: 'badge-neon-cyberpunk',
    carModel: 'Elderly BBW',
    aiTool: 'ideogram',
    tags: ['profile', '86-years', 'bbw', 'explicit', 'detailed'],
  },
  {
    id: 'prompt-051',
    text: 'Nude chubby buxom mid 50 female in Studio Environment Body portrait, crayon drawing',
    styleCategory: 'neon-cyberpunk',
    styleCategoryLabel: 'Neon / Cyberpunk',
    badgeClass: 'badge-neon-cyberpunk',
    carModel: 'Chubby Buxom',
    aiTool: 'craiyon',
    tags: ['crayon', 'studio', 'portrait', 'mid-50', 'nude'],
  },
  {
    id: 'prompt-052',
    text: 'Ein hochwertiges, professionelles Foto einer Frau, 50 Jahre, Chubby, buxom, breasts Cup J, Shaggy Long hanging breasts, fully nude, die im Freien eine Cow-Pose ausführt. Schlüsselwörter [...]
    styleCategory: 'neon-cyberpunk',
    styleCategoryLabel: 'Neon / Cyberpunk',
    badgeClass: 'badge-neon-cyberpunk',
    carModel: 'Mature BBW',
    aiTool: 'local-forge',
    tags: ['crayon', 'cow-pose', 'outdoor', 'bbw', 'nude'],
  },
];


