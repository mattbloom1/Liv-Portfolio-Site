const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** Prefix a /public path with the GitHub Pages basePath. */
export const asset = (path: string) => `${base}${path}`;

const url = (path: string) => `url("${asset(path)}")`;

/** CSS custom properties for textures and ornaments, so stylesheets never hardcode the basePath. */
export const assetVars = {
  "--t-paper": url("/textures/paper-light.webp"),
  "--t-shadow": url("/textures/paper-shadow.webp"),
  "--t-night": url("/textures/botanical-night.webp"),
  "--t-pale": url("/textures/botanical-pale.webp"),
  "--t-print": url("/textures/print-overlay.webp"),
  "--m-corner": url("/ornaments/corner_ornament02.svg"),
  "--m-corner-b": url("/ornaments/corner_ornament03.svg"),
  "--m-arch": url("/ornaments/ornament_frame01.svg"),
  "--m-plate": url("/ornaments/ornament_frame03.svg"),
  "--m-rule": url("/ornaments/text_divider04.svg"),
  "--m-rule-rich": url("/ornaments/text_divider10.svg"),
  "--m-rule-thin": url("/ornaments/text_divider13.svg"),
} as React.CSSProperties;
