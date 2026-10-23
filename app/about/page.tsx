import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import { asset } from "@/lib/assets";
import { bio } from "@/lib/projects";

const piece = (src: string, cls: string) => (
  <img className={`ap ${cls}`} src={asset(src)} alt="" aria-hidden="true" loading="lazy" decoding="async" />
);

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <section className="section about">
      <h1 className="page-title">About</h1>
      <div className="about-grid">
        <div className="about-art">
          {piece("/collage/lace/lace-b.webp", "ap-lace-1")}
          {piece("/collage/lace/lace-d.webp", "ap-lace-2")}
          {piece("/collage/scrap/bt5.webp", "ap-ledger")}
          {piece("/collage/scrap/bt31.webp", "ap-note")}
          <Frame className="headshot" src="/about/liv.webp" alt="Portrait of Liv Polani" ratio="4 / 5" priority />
          {piece("/collage/scrap/bt3.webp", "ap-tape-1")}
          {piece("/collage/scrap/bt20.webp", "ap-tape-2")}
        </div>
        <div className="prose">
          {bio.map((p, i) => <p key={i} className={i === 0 ? "lede" : undefined}>{p}</p>)}
          <Link href="/contact/" className="link-rule">Get in touch</Link>
        </div>
      </div>
    </section>
  );
}
