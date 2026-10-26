import sizes from "./image-sizes.json";

export type Img = {
  src: string;
  alt: string;
  /** CSS aspect-ratio, e.g. "16 / 9". */
  ratio: string;
};

export type Project = {
  title: string;
  slug: string;
  cover: Img;
  images: Img[];
  /** Only text taken from Liv's own project files. */
  description?: string;
  year?: string;
  category?: string;
  role?: string;
  credits?: string;
};

const img = (slug: string, file: string, alt: string): Img => {
  const src = `/projects/${slug}/${file}.webp`;
  const [w, h] = (sizes as Record<string, number[]>)[src];
  return { src, alt, ratio: `${w} / ${h}` };
};

const set = (slug: string, items: [string, string][]) => items.map(([file, alt]) => img(slug, file, alt));

/** Project order is a placeholder until Liv decides it. Years and credits are not yet provided. */
export const projects: Project[] = [
  {
    title: "Endure",
    slug: "endure",
    cover: img("endure", "03", "Black-and-white portrait with a scorpion across the face, the cover of the Endure collection"),
    images: set("endure", [
      ["04", "Collage moodboard of torn paper, portraits and typography"],
      ["05", "Illustrated collection in deep red and black"],
      ["06", "Balkan Baroque look: illustration and technical flat"],
      ["07", "Models wearing the Balkan Baroque look"],
      ["08", "Rhythm 5 look: illustration and technical flat"],
      ["09", "Model wearing the Rhythm 5 coat"],
      ["10", "Nightsea Crossing look: illustration and technical flat"],
      ["11", "Model wearing a red chiffon cape"],
      ["12", "Technical flats for the collection"],
      ["15", "Process photographs from the studio"],
      ["16", "Models wearing the finished collection"],
    ]),
  },
  {
    title: "Distorted Bloom",
    slug: "strapless-dress",
    category: "Strapless dress",
    cover: img("strapless-dress", "02", "Collage of a woman's face, pressed flowers and soft pink petals"),
    description:
      "These designs explore the tension between control and release, combining a structured corset with an asymmetrically draped skirt. Inspired by fragile floral forms and surreal distortion, the piece contrasts precision with organic movement, expressing a femininity that is both composed and unstable.",
    images: set("strapless-dress", [
      ["01", "Title page: Distorted Bloom over a blurred pink flower"],
      ["04", "Fabric palette in flower-shaped swatches: taffeta, chiffon, suiting and silk"],
      ["05", "Three illustrated strapless looks"],
      ["06", "Black strapless gown illustration with front and back technical flats"],
      ["07", "Pink corset and ruffled high-low skirt illustration with technical flats"],
      ["08", "Black corset with draped pink peplum and wide trousers, with technical flats"],
      ["09", "Back and front views of the finished black dress"],
      ["11", "Pencil sketches of the strapless looks"],
    ]),
  },
  {
    title: "Desert Wildflower",
    slug: "isabel-marant",
    category: "Isabel Marant",
    cover: img("isabel-marant", "02", "Collage of a California street sign, a motorcycle and white lace"),
    images: set("isabel-marant", [
      ["01", "Title page: Desert Wildflower"],
      ["03", "Muse board: photographs and written profile"],
      ["04", "Fabrics and colour palette"],
      ["05", "Illustrated looks with fabric swatches"],
      ["06", "Illustrated looks with technical flats"],
      ["07", "Blouse and shorts technical flats"],
      ["08", "The full collection illustrated together"],
      ["09", "Hand sketches and working notes"],
    ]),
  },
  {
    title: "Knitwear Technique Binder",
    slug: "knitwear-technique",
    category: "Technique portfolio",
    cover: img("knitwear-technique", "02", "Title Knitwear Technique Binder over close-up orange and blue knit texture"),
    images: set("knitwear-technique", [
      ["03", "Inspiration board collage of knitwear, citrus and blue textiles"],
      ["04", "Swatch 1: stockinette with stripes"],
      ["06", "Swatch 2: gauge swatch"],
      ["08", "Swatch 3: edge shaping"],
      ["10", "Swatch 4: fully fashioned shaping"],
      ["12", "Swatch 5: lace design"],
      ["16", "Swatch 7: Fair Isle design"],
      ["20", "Swatch 9: mock rib edge"],
      ["22", "Swatch 10: cable knit"],
      ["24", "Half-scale sweater"],
      ["25", "Half-scale sweater pattern and charts"],
    ]),
  },
  {
    title: "The Sweat Set",
    slug: "the-sweat-set",
    category: "Merchandise development",
    cover: img("the-sweat-set", "cover", "Title slide: University Merchandise Innovation, The Sweat Set"),
    images: set("the-sweat-set", [
      ["02", "Market research slide with the University of Delaware store"],
      ["03", "Pricing research slide"],
      ["05", "Product selection: a grey sweatshirt and sweatpants set"],
      ["06", "Target user slide"],
      ["10", "Line sheet, front view"],
      ["11", "Line sheet, back view"],
      ["12", "Bill of materials"],
      ["14", "Business plan overview"],
    ]),
  },
  {
    title: "Mali Blouse Tech Pack",
    slug: "mali-blouse-tech-pack",
    category: "Tech pack",
    cover: img("mali-blouse-tech-pack", "01", "Style sheet for the Ralph Lauren Mali Blouse with front and back flat sketches"),
    images: set("mali-blouse-tech-pack", [
      ["02", "Bill of materials: fabric, lace, thread, labels and ribbon with swatches and suppliers"],
      ["03", "Spec sheet with measurement points and tolerances"],
      ["04", "Construction sheet: seams, bindings, topstitching, hems and label placement"],
      ["05", "Grading sheet from XXS to XXL"],
      ["06", "Costing sheet for materials, trims, labels and labour"],
    ]),
  },
];

export const contact = {
  email: "livpolani@gmail.com",
  linkedin: "https://www.linkedin.com/in/livpolani/",
  instagram: "https://www.instagram.com/livpolani/",
};

/** Opening line of the bio; confirm with Liv as the homepage intro. */
export const introLine = "I design with intention, not impulse.";

export const bio = [
  "I design with intention, not impulse. As a fashion student at the University of Delaware, I'm deeply interested in directional trend research, concept development, and translating cultural insight into cohesive collections. My work is grounded in research but driven by instinct, balancing strategy with imagination.",
  "Through experiences including studying abroad in Paris and working behind the scenes at major runway shows, I've developed a global perspective and a sharp eye for detail. I've interned in both creative and production-focused roles, giving me a strong understanding of how ideas move from concept to final garment. Whether I'm building moodboards, refining silhouettes, or supporting the production process through garment coordination and quality control, I approach each project with curiosity and discipline.",
  "I'm especially drawn to brands that value storytelling, craftsmanship, and forward-thinking design. Long term, I aim to contribute to teams that push fashion culturally and creatively while remaining commercially aware.",
  "I'm always learning, always refining, and always building toward something bigger.",
];
