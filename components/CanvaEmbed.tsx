import type { CSSProperties } from "react";

type Props = {
  /** Path segment after /design/, e.g. "DAHS80ffgVs/lejtuiogrhS9UHDM8wEC-A". */
  design: string;
  /** CSS aspect-ratio of one page, e.g. "14 / 11". */
  ratio: string;
  title: string;
};

/** Canva's "Embed" share, laid out like a Frame so it sits in the project page rhythm. */
export default function CanvaEmbed({ design, ratio, title }: Props) {
  const view = `https://www.canva.com/design/${design}/view`;
  return (
    <figure className="frame canva" style={{ "--fit": `calc(82svh * (${ratio}))` } as CSSProperties}>
      <div className="frame-art canva-art" style={{ aspectRatio: ratio } as CSSProperties}>
        <iframe src={`${view}?embed`} title={title} loading="lazy" allow="fullscreen" allowFullScreen />
      </div>
      <figcaption>
        <a href={view} target="_blank" rel="noopener">Open in Canva</a>
      </figcaption>
    </figure>
  );
}
