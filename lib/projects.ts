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
    title: "Strapless Dress",
    slug: "strapless-dress",
    cover: img("strapless-dress", "01", "Collage of a woman's face, pressed flowers and soft pink petals"),
    description:
      "These designs explore the tension between control and release, combining a structured corset with an asymmetrically draped skirt. Inspired by fragile floral forms and surreal distortion, the piece contrasts precision with organic movement, expressing a femininity that is both composed and unstable.",
    images: set("strapless-dress", [
      ["03", "Fabric palette in flower-shaped swatches: taffeta, chiffon, suiting and silk"],
      ["04", "Three illustrated strapless looks"],
      ["05", "Illustrated looks beside technical flats"],
      ["06", "Draped skirt illustration and technical flat"],
      ["07", "Corset and trouser illustration with technical flats"],
      ["08", "Back and front views of the finished black dress"],
    ]),
  },
  {
    title: "Isabel Marant",
    slug: "isabel-marant",
    cover: img("isabel-marant", "01", "Collage of a California street sign, a motorcycle and white lace"),
    images: set("isabel-marant", [
      ["02", "Muse board: photographs and written profile"],
      ["03", "Fabrics and colour palette"],
      ["04", "Illustrated looks with fabric swatches"],
      ["05", "Illustrated looks with technical flats"],
      ["06", "Blouse and shorts technical flats"],
      ["07", "The full collection illustrated together"],
      ["08", "Hand sketches and working notes"],
    ]),
  },
  {
    title: "Knitwear Technique Portfolio",
    slug: "knitwear-technique",
    category: "Technique portfolio",
    cover: img("knitwear-technique", "03", "Collage cover of colourful fruit, textiles and the title Knitwear Technique Portfolio"),
    images: set("knitwear-technique", [
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
