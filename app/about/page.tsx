import type { Metadata } from "next";
import Link from "next/link";
import Frame from "@/components/Frame";
import { bio } from "@/lib/projects";

export const metadata: Metadata = { title: "About" };

export default function About() {
  return (
    <section className="section about">
      <h1 className="page-title">About</h1>
      <div className="about-grid">
        <Frame className="headshot" src="/about/liv.webp" alt="Portrait of Liv Polani" ratio="4 / 5" priority />
        <div className="prose">
          {bio.map((p, i) => <p key={i} className={i === 0 ? "lede" : undefined}>{p}</p>)}
          <Link href="/contact/" className="link-rule">Get in touch</Link>
        </div>
      </div>
    </section>
  );
}
