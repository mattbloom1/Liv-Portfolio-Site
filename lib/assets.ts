const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a /public path with the GitHub Pages basePath. */
export const asset = (path: string) => `${base}${path}`;

const url = (path: string) => `url("${asset(path)}")`;

/** CSS custom properties for textures and ornaments, so stylesheets never hardcode the basePath. */
export const assetVars = {
  "--t-paper": url("/textures/paper-light.webp"),
  "--t-shadow": url("/textures/paper-shadow.webp"),
  "--t-lace": url("/collage/lace/lace-b.webp"),
  "--t-damask": url("/textures/damask.webp"),
  "--t-night": url("/textures/botanical-night.webp"),
  "--t-pale": url("/textures/botanical-pale.webp"),
  "--m-corner": url("/ornaments/corner_ornament02.svg"),
  "--m-arch": url("/ornaments/ornament_frame01.svg"),
  "--m-rule": url("/ornaments/text_divider04.svg"),
} as React.CSSProperties;
