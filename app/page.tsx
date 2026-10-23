import Link from "next/link";
import Frame from "@/components/Frame";
import ProjectTile from "@/components/ProjectTile";
import { introLine, projects } from "@/lib/projects";

export default function Home() {
  return (
    <>
      <section className="hero dark botanical">
        <div className="hero-copy reveal">
          <p className="eyebrow">Fashion · Research · Concept</p>
          <h1>
            <span className="h1-script">Liv Polani&rsquo;s</span>
            <span className="h1-main">Fashion Portfolio</span>
          </h1>
          <Link href="/projects/" className="btn btn-light">View projects</Link>
        </div>
        <div className="collage">
          <div className="panel" aria-hidden="true" />
          <Frame className="c-main reveal" alt="Hero fashion image" ratio="4 / 5" index="Fig. 01" tone="paper" priority />
          <Frame className="c-a reveal" decorative alt="" ratio="1 / 1" tone="rose" />
          <Frame className="c-b reveal" decorative alt="" ratio="3 / 4" tone="midnight" />
        </div>
      </section>

      <section className="section paper intro">
        <p className="lede big">{introLine}</p>
        <nav className="contents" aria-label="Selected projects">
          <h2 className="eyebrow">Contents</h2>
          <ol>
            {projects.map((p, i) => (
              <li key={p.slug}>
                <Link href={`/projects/${p.slug}/`}>
                  <span className="idx">{String(i + 1).padStart(2, "0")}</span>
                  <span className="t">{p.title}</span>
                </Link>
              </li>
            ))}
          </ol>
          <Link href="/about/" className="link-rule">About Liv</Link>
        </nav>
      </section>

      <span className="rule" aria-hidden="true" />

      <section className="section paper selected">
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

      <section className="section dark invite pale">
        <span className="rule rule-gold" aria-hidden="true" />
        <h2>Let&rsquo;s make something.</h2>
        <Link href="/contact/" className="btn btn-light">Get in touch</Link>
      </section>
    </>
  );
}
