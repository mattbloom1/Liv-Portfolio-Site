export type Project = {
  title: string;
  slug: string;
  coverAlt: string;
  /** Aspect ratio of the cover tile, e.g. "4 / 5". */
  ratio: string;
  /** Aspect ratios of the sequence images on the detail page, in order. */
  images: string[];
  description?: string;
  year?: string;
  category?: string;
  role?: string;
  credits?: string;
};

/** Placeholder entries. Replace with Liv's real projects, covers and metadata. */
export const projects: Project[] = [
  { title: "Project One", slug: "project-one", coverAlt: "Cover image for Project One", ratio: "4 / 5", images: ["3 / 4", "1 / 1", "4 / 5", "16 / 10"] },
  { title: "Project Two", slug: "project-two", coverAlt: "Cover image for Project Two", ratio: "1 / 1", images: ["1 / 1", "3 / 4", "16 / 10"] },
  { title: "Project Three", slug: "project-three", coverAlt: "Cover image for Project Three", ratio: "3 / 4", images: ["4 / 5", "3 / 4", "1 / 1", "3 / 4", "16 / 10"] },
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
