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
      ["13", "Technical flats in boiled wool, chiffon and nylon spandex"],
      ["14", "Technical flats in velvet, leather and jersey"],
      ["15", "Process photographs from the studio"],
      ["16", "Models wearing the finished collection"],
    ]),
  },
  {
    title: "Distorted Bloom",
    slug: "strapless-dress",
    category: "Collection",
    cover: img("strapless-dress", "01", "Title page: Distorted Bloom over a blurred pink flower"),
    description:
      "These designs explore the tension between control and release, combining a structured corset with an asymmetrically draped skirt. Inspired by fragile floral forms and surreal distortion, the piece contrasts precision with organic movement, expressing a femininity that is both composed and unstable.",
    images: set("strapless-dress", [
      ["02", "Collage of a woman's face, pressed flowers and soft pink petals"],
      ["04", "Fabric palette in flower-shaped swatches: taffeta, chiffon, suiting and silk"],
      ["05", "Three illustrated strapless looks"],
      ["06", "Black strapless gown illustration with front and back technical flats"],
      ["07", "Pink corset and ruffled high-low skirt illustration with technical flats"],
      ["08", "Black corset with draped pink peplum and wide trousers, with technical flats"],
      ["09", "Back and front views of the finished black dress"],
    ]),
  },
  {
    title: "Desert Wildflower",
    slug: "isabel-marant",
    category: "Collection",
    cover: img("isabel-marant", "01", "Title page: Desert Wildflower"),
    images: set("isabel-marant", [
      ["02", "Collage of a California street sign, a motorcycle and white lace"],
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
    title: "Mali Blouse Tech Pack",
    slug: "mali-blouse-tech-pack",
    category: "Tech pack",
    cover: img("mali-blouse-tech-pack", "01", "Style sheet for the Mali Blouse with front and back flat sketches"),
    images: set("mali-blouse-tech-pack", [
      ["02", "Bill of materials: fabric, lace, thread, labels and ribbon with swatches and suppliers"],
      ["03", "Spec sheet with measurement points and tolerances"],
      ["04", "Construction sheet: seams, bindings, topstitching, hems and label placement"],
      ["05", "Grading sheet from XXS to XXL"],
      ["06", "Costing sheet for materials, trims, labels and labour"],
    ]),
  },
  {
    title: "Soft Structure",
    slug: "soft-structure",
    category: "Product line",
    cover: img("soft-structure", "01", "Softness structured for the office: illustrated shirt, trousers and knit dresses with prices, a silk headscarf, colour swatches and a showroom"),
    images: set("soft-structure", [
      ["02", "Branding strategy, target customer, distribution channel, competitive advantage and AATCC testing notes"],
    ]),
  },
  {
    title: "Knitwear Technique Binder",
    slug: "knitwear-technique",
    category: "Technique portfolio",
    cover: img("knitwear-technique", "02", "Title Knitwear Technique Binder over close-up orange and blue knit texture"),
    images: set("knitwear-technique", [
      ["03", "Inspiration board collage of knitwear, citrus and blue textiles"],
      ["05", "Swatch 1: stockinette with stripes, yarn and machine details"],
      ["07", "Swatch 2: gauge swatch with yarn and tension details"],
      ["09", "Swatch 3: edge shaping with knitting chart"],
      ["11", "Swatch 4: fully fashioned shaping with knitting chart"],
      ["13", "Swatch 5: lace design with illustrated look and chart"],
      ["15", "Swatch 6: short rows with illustrated look and chart"],
      ["17", "Swatch 7: Fair Isle design with illustrated look and chart"],
      ["19", "Swatch 8: colour with tucks, illustrated look and chart"],
      ["21", "Swatch 9: mock rib edge"],
      ["23", "Swatch 10: cable knit with illustrated look"],
      ["25", "Half-scale sweater pattern and charts"],
    ]),
  },
  {
    title: "The Sweat Set",
    slug: "the-sweat-set",
    category: "Merchandise development",
    cover: img("the-sweat-set", "01", "Title slide: University Merchandise Innovation, The Sweat Set"),
    images: set("the-sweat-set", [
      ["02", "Market research slide with the University of Delaware store"],
      ["03", "Pricing and style research"],
      ["04", "Market opportunity in women's apparel"],
      ["05", "Product selection: a grey sweatshirt and sweatpants set"],
      ["06", "Target user: University of Delaware women aged 18 to 24"],
      ["07", "User research survey and results chart"],
      ["08", "User responses"],
      ["09", "Design ideation and user feedback"],
      ["10", "Line sheet with construction details"],
      ["11", "Line sheet with style information and pricing"],
      ["12", "Bill of materials"],
      ["13", "Bill of materials, continued"],
      ["14", "Business plan: target audience, key features and appeal"],
      ["15", "Business plan: manufacturing"],
      ["16", "Business plan: promotion and advertising"],
      ["17", "Business plan: quality control"],
      ["18", "Business plan: pricing"],
      ["19", "Sources"],
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
