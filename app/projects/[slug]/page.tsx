import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Frame from "@/components/Frame";
import { projects } from "@/lib/projects";

type Params = { slug: string };

const isPortrait = (ratio: string) => {
  const [w, h] = ratio.split("/").map(Number);
  return h > w;
};

export const dynamicParams = false;
export const generateStaticParams = () => projects.map(({ slug }) => ({ slug }));

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  return { title: projects.find((p) => p.slug === slug)?.title };
}

export default async function ProjectPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const i = projects.findIndex((p) => p.slug === slug);
  if (i < 0) notFound();
  const project = projects[i];
  const prev = projects[(i + projects.length - 1) % projects.length];
  const next = projects[(i + 1) % projects.length];
  const meta = [
    ["Year", project.year],
    ["Category", project.category],
    ["Role", project.role],
  ].filter(([, v]) => v);

  return (
    <article className="section project">
      <header>
        <h1 className="page-title">{project.title}</h1>
        {meta.length > 0 && (
          <dl className="meta">
            {meta.map(([k, v]) => (
              <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
            ))}
          </dl>
        )}
      </header>

      <Frame className="opening" src={project.cover.src} alt={project.cover.alt} ratio={project.cover.ratio} index="Plate 01" priority />

      {project.description && <p className="lede description">{project.description}</p>}

      <div className="sequence">
        {project.images.map((image, n) => (
          <Frame
            key={n}
            className={`s-${n % 4} ${isPortrait(image.ratio) ? "portrait" : ""}`}
            src={image.src}
            alt={image.alt}
            ratio={image.ratio}
            index={`Plate ${String(n + 2).padStart(2, "0")}`}
          />
        ))}
      </div>

      {project.credits && <p className="small credits">Credits: {project.credits}</p>}

      <nav className="pager" aria-label="Project navigation">
        <Link href={`/projects/${prev.slug}/`} rel="prev">&larr; {prev.title}</Link>
        <Link href="/projects/">All projects</Link>
        <Link href={`/projects/${next.slug}/`} rel="next">{next.title} &rarr;</Link>
      </nav>
    </article>
  );
}
