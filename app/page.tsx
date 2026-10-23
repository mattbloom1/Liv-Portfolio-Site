import Link from "next/link";
import Frame from "@/components/Frame";
import ProjectTile from "@/components/ProjectTile";
import { introLine, projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <section className="hero dark grain">
        <div className="hero-copy reveal">
          <p className="eyebrow">Fashion · Research · Concept</p>
          <h1>Liv Polani&rsquo;s Fashion Portfolio</h1>
          <Link href="/projects/" className="btn btn-light">View projects</Link>
        </div>
        <div className="collage">
          <Frame className="c-main reveal" alt="Hero fashion image" ratio="4 / 5" index="No. 01" tone="paper" priority />
          <Frame className="c-a reveal" decorative alt="" ratio="1 / 1" tone="rose" />
          <Frame className="c-b reveal" decorative alt="" ratio="3 / 4" tone="midnight" />
        </div>
      </section>

      <section className="section intro">
        <p className="lede">{introLine}</p>
        <Link href="/about/" className="link-rule">About Liv</Link>
      </section>

      <section className="section selected">
        <div className="section-head">
          <h2>Selected projects</h2>
          <Link href="/projects/" className="link-rule">All projects</Link>
        </div>
        <div className="row">
          {projects.map((p, i) => (
            <ProjectTile key={p.slug} project={p} number={i + 1} />
          ))}
        </div>
      </section>

      <section className="section dark invite">
        <h2>Let&rsquo;s make something.</h2>
        <Link href="/contact/" className="btn btn-light">Get in touch</Link>
      </section>
    </>
  );
}
