import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import VariantNav from "@/components/VariantNav";
import { asset } from "@/lib/assets";
import { contact, introLine, projects } from "@/lib/projects";
import "../homes.css";
import "./home-c.css";

export const metadata: Metadata = { title: "Home draft C: Lookbook", robots: { index: false } };

const grounds = ["32", "19", "26", "06", "21"];
const windows = [10, 11, 10, 11, 10];

const bg = (n: string) => ({ "--ground": `url("${asset(`/collage/bg/sepia-${n}.webp`)}")` }) as CSSProperties;

export default function HomeC() {
  return (
    <div className="hc">
      <div className="hc-rail" role="region" aria-label="Lookbook, scroll sideways" tabIndex={0}>
        <section className="hc-panel hc-cover" style={bg("14")} aria-labelledby="hc-title">
          <img className="hc-print" src={asset("/collage/bg/sepia-03.webp")} alt="" aria-hidden="true" decoding="async" />
          <p className="hc-side" aria-hidden="true">Fashion · Research · Concept</p>
          <h1 id="hc-title">
            <span>Liv</span>{" "}
            <span>Polani</span>
          </h1>
          <div className="hc-liv">
            <img className="hc-liv-photo" src={asset("/about/liv.webp")} alt="Liv Polani resting her chin on her hand" loading="eager" decoding="async" />
            <img className="hc-liv-scrap" src={asset("/collage/scrap/bt11.webp")} alt="" aria-hidden="true" decoding="async" />
          </div>
          <p className="hc-intro">{introLine}</p>
          <p className="hc-hint">Scroll sideways <span aria-hidden="true">&rarr;</span></p>
        </section>

        {projects.map((p, i) => (
          <section key={p.slug} className={`hc-panel hc-work ${i % 2 ? "flip" : ""}`} style={bg(grounds[i % grounds.length])} aria-label={p.title}>
            <span className="hc-no" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <Link href={`/projects/${p.slug}/`} className="hc-plate">
              <span className="hc-win">
                <img src={asset(p.cover.src)} alt="" aria-hidden="true" loading="lazy" decoding="async" />
                <img className="hc-burn" src={asset(`/collage/scrap/bt${windows[i % windows.length]}.webp`)} alt="" aria-hidden="true" loading="lazy" decoding="async" />
              </span>
              <span className="hc-name">{p.title}</span>
              <span className="hc-open">View project</span>
            </Link>
            <img className="hc-tape" src={asset(`/collage/scrap/bt${i % 2 ? 3 : 22}.webp`)} alt="" aria-hidden="true" loading="lazy" decoding="async" />
          </section>
        ))}

        <section className="hc-panel hc-end" style={bg("23")} aria-labelledby="hc-end-h">
          <img className="hc-note" src={asset("/collage/scrap/bt24.webp")} alt="" aria-hidden="true" loading="lazy" decoding="async" />
          <h2 id="hc-end-h">Write to Liv</h2>
          <a className="hc-mail" href={`mailto:${contact.email}`}>{contact.email}</a>
          <p className="hc-links">
            <a href={contact.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a>
            <a href={contact.instagram} rel="noopener noreferrer" target="_blank">Instagram</a>
            <Link href="/about/">About</Link>
          </p>
        </section>
      </div>
      <VariantNav current="c" />
    </div>
  );
}
