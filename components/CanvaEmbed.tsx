import type { CSSProperties } from "react";

type Props = {
  /** Path segment after /design/, e.g. "DAHS80ffgVs/lejtuiogrhS9UHDM8wEC-A". */
  design: string;
  /** Page of the design the embed opens on. */
  page: number;
  /** CSS aspect-ratio of one page, e.g. "14 / 11". */
  ratio: string;
  title: string;
  index?: string;
  className?: string;
};

/** One page of a Canva "Embed" share, framed like a Frame plate so it keeps the project page layout. */
export default function CanvaEmbed({ design, page, ratio, title, index, className = "" }: Props) {
  return (
    <figure className={`frame canva ${className}`}>
      <div className="frame-art canva-art" style={{ aspectRatio: ratio } as CSSProperties}>
        <iframe src={`https://www.canva.com/design/${design}/view?embed#${page}`} title={title} loading="lazy" allow="fullscreen" allowFullScreen />
      </div>
      {index && (
        <figcaption>
          <span className="idx">{index}</span>
        </figcaption>
      )}
    </figure>
  );
}
