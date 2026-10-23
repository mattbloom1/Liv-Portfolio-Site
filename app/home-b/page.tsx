import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import VariantNav from "@/components/VariantNav";
import { asset } from "@/lib/assets";
import { contact, introLine, projects } from "@/lib/projects";
import "../homes.css";
import "./home-b.css";

export const metadata: Metadata = { title: "Home draft B: Night garden", robots: { index: false } };

const gold = (n: string) => asset(`/collage/gold/${n}.webp`);
const Gold = ({ n, className }: { n: string; className: string }) => (
  <img className={`gd ${className}`} src={gold(n)} alt="" aria-hidden="true" loading="lazy" decoding="async" />
);

export default function HomeB() {
  const endure = projects[0];
  const vars = {
    "--rose": `url("${asset("/collage/bg/rose-night.webp")}")`,
    "--navy": `url("${asset("/collage/bg/botanical-navy.webp")}")`,
  } as CSSProperties;
  return (
    <div className="hb" style={vars}>
      <section className="hb-hero" aria-labelledby="hb-title">
        <div className="hb-hero-bg" aria-hidden="true" />
        <Gold n="swoosh-l" className="gd-sw" />
        <Gold n="leaf" className="gd-leaf" />
        <div className="hb-portrait">
          <img src={asset(endure.cover.src)} alt="Black-and-white portrait with a scorpion across the face, from the Endure collection" loading="eager" decoding="async" />
          <img className="hb-frame" src={gold("frame-tall")} alt="" aria-hidden="true" decoding="async" />
        </div>
        <div className="hb-copy">
          <p className="eyebrow">Fashion · Research · Concept</p>
          <h1 id="hb-title">
            <span className="l1">Liv</span>{" "}
            <span className="l2">Polani</span>
          </h1>
          <Link href="/projects/" className="hb-btn">Enter the collections</Link>
        </div>
      </section>

      <section className="hb-intro" aria-label="Introduction">
        <Gold n="corner-tl" className="gd-c gd-c1" />
        <Gold n="corner-tl" className="gd-c gd-c2" />
        <p>{introLine}</p>
      </section>

      <section className="hb-works" aria-labelledby="hb-works-h">
        <h2 id="hb-works-h" className="hb-vert">The collections</h2>
        {projects.map((p, i) => (
          <article key={p.slug} className={`work ${i % 2 ? "work-r" : ""}`}>
            <Link href={`/projects/${p.slug}/`} className="work-link">
              <span className="work-no" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <span className="work-img">
                <img src={asset(p.cover.src)} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <img className="work-frame" src={gold("frame-square")} alt="" aria-hidden="true" loading="lazy" decoding="async" />
              </span>
              <span className="work-title">{p.title}</span>
              <span className="work-open">View project</span>
            </Link>
          </article>
        ))}
      </section>

      <section className="hb-end" aria-labelledby="hb-end-h">
        <Gold n="swoosh-l" className="gd-sw2" />
        <h2 id="hb-end-h">Write to Liv</h2>
        <a className="hb-mail" href={`mailto:${contact.email}`}>{contact.email}</a>
      </section>
      <VariantNav current="b" />
    </div>
  );
}
