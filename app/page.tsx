import type { CSSProperties } from "react";
import Link from "next/link";
import InkName from "@/components/InkName";
import { asset } from "@/lib/assets";
import { contact, introLine, projects } from "@/lib/projects";
import "./home.css";

const bySlug = (slug: string) => projects.find((p) => p.slug === slug)!;
const scrap = (n: number) => asset(`/collage/scrap/bt${n}.webp`);

/** Decorative paper piece: empty alt, hidden from assistive tech. */
const Piece = ({ src, className }: { src: string; className: string }) => (
  <img className={`pc ${className}`} src={src} alt="" aria-hidden="true" loading="lazy" decoding="async" />
);

export default function Home() {
  const endure = bySlug("endure");
  const strapless = bySlug("strapless-dress");
  const marant = bySlug("isabel-marant");
  return (
    <div className="ha" style={{ "--sepia-fox": `url("${asset("/collage/bg/sepia-32.webp")}")` } as CSSProperties}>
      <section className="ha-desk" aria-labelledby="ha-title">
        <div className="ha-stage">
          <Piece src={scrap(29)} className="pc-math" />
          <Piece src={scrap(6)} className="pc-burnt" />
          <Piece src={scrap(5)} className="pc-ledger" />
          <Piece src={scrap(31)} className="pc-note" />

          <div className="ha-title">
            <h1 id="ha-title"><InkName text="Liv Polani" /></h1>
            <p className="ha-sub">Fashion portfolio</p>
          </div>

          <figure className="spec spec-liv fx-shadow">
            <img src={asset("/about/liv.webp")} alt="Liv Polani resting her chin on her hand" loading="eager" decoding="async" />
            <Piece src={scrap(3)} className="tape tape-liv" />
          </figure>
          <figure className="spec spec-a fx-shadow">
            <img src={asset(endure.cover.src)} alt={endure.cover.alt} loading="eager" decoding="async" />
            <Piece src={scrap(20)} className="tape tape-a" />
            <figcaption>Plate 01</figcaption>
          </figure>
          <figure className="spec spec-b fx-shadow">
            <img src={asset(strapless.cover.src)} alt={strapless.cover.alt} loading="lazy" decoding="async" />
            <Piece src={scrap(22)} className="tape tape-b" />
            <figcaption>Plate 02</figcaption>
          </figure>
          <figure className="spec spec-c fx-shadow">
            <img src={asset(marant.cover.src)} alt={marant.cover.alt} loading="lazy" decoding="async" />
            <Piece src={scrap(2)} className="tape tape-c" />
            <figcaption>Plate 03</figcaption>
          </figure>
        </div>
      </section>

      <section className="ha-index" aria-labelledby="ha-index-h">
        <div className="ha-index-head">
          <h2 id="ha-index-h" className="eyebrow">Register of work</h2>
          <p className="ha-intro">{introLine}</p>
        </div>
        <ol className="ha-ledger">
          {projects.map((p, i) => (
            <li key={p.slug}>
              <Link href={`/projects/${p.slug}/`}>
                <span className="n">{String(i + 1).padStart(2, "0")}</span>
                <span className="t">{p.title}</span>
                <span className="k">{p.category ?? "Collection"}</span>
                <img className="peek" src={asset(p.cover.src)} alt="" aria-hidden="true" loading="lazy" decoding="async" />
              </Link>
            </li>
          ))}
        </ol>
        <Piece src={scrap(23)} className="pc-margin" />
      </section>

      <section className="ha-slip" aria-labelledby="ha-slip-h">
        <div className="slip fx-shadow">
          <Piece src={scrap(3)} className="tape tape-slip" />
          <h2 id="ha-slip-h" className="eyebrow">Correspondence</h2>
          <a className="ha-mail" href={`mailto:${contact.email}`}>{contact.email}</a>
          <p className="ha-links">
            <a href={contact.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a>
            <a href={contact.instagram} rel="noopener noreferrer" target="_blank">Instagram</a>
          </p>
        </div>
      </section>
    </div>
  );
}
