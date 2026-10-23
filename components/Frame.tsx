import type { CSSProperties } from "react";

type Props = {
  alt: string;
  ratio: string;
  /** Archive-style index shown in the caption and placeholder. */
  index?: string;
  caption?: string;
  src?: string;
  tone?: "paper" | "rose" | "midnight";
  priority?: boolean;
  /** Purely ornamental: empty alt, hidden from assistive tech. */
  decorative?: boolean;
  className?: string;
};

/** Image with explicit aspect ratio. Renders a marked placeholder until `src` is supplied. */
export default function Frame({ alt, ratio, index, caption, src, tone = "paper", priority, decorative, className = "" }: Props) {
  return (
    <figure className={`frame ${decorative ? "decorative" : ""} ${className}`} aria-hidden={decorative || undefined}>
      <div className={`frame-art tone-${tone}`} style={{ aspectRatio: ratio } as CSSProperties}>
        {src ? (
          <img src={src} alt={decorative ? "" : alt} loading={priority ? "eager" : "lazy"} decoding="async" />
        ) : (
          <div className="placeholder" role={decorative ? undefined : "img"} aria-label={decorative ? undefined : `${alt} (placeholder)`}>
            <span>Image needed</span>
          </div>
        )}
      </div>
      {(index || caption) && (
        <figcaption>
          {index && <span className="idx">{index}</span>}
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
