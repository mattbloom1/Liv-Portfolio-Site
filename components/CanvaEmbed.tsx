import type { CSSProperties } from "react";

type Props = {
  /** Path segment after /design/, e.g. "DAHBmzVpfSs/_JIvJPOZP5z4Q3EvfFH_3Q". */
  design: string;
  /** Page of a multi-page design to open on. */
  page?: number;
  /** CSS aspect-ratio of one page, e.g. "17 / 22". */
  ratio: string;
  title: string;
  index?: string;
  className?: string;
};

/**
 * A live Canva page with none of Canva's controls showing. The embed is made taller than its frame
 * (see .canva-art in globals.css) so the toolbar lands in a strip that is clipped away, and a cover
 * stops clicks and hover from reaching it.
 */
export default function CanvaEmbed({ design, page, ratio, title, index, className = "" }: Props) {
  const src = `https://www.canva.com/design/${design}/view?embed${page ? `#${page}` : ""}`;
  return (
    <figure className={`frame canva ${className}`}>
      <div className="frame-art canva-art" style={{ aspectRatio: ratio } as CSSProperties}>
        <iframe src={src} title={title} loading="lazy" tabIndex={-1} />
        <span className="canva-cover" aria-hidden="true" />
      </div>
      {index && (
        <figcaption>
          <span className="idx">{index}</span>
        </figcaption>
      )}
    </figure>
  );
}
