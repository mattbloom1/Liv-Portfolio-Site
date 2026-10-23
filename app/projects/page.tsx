import type { Metadata } from "next";
import ProjectTile from "@/components/ProjectTile";
import { projects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projects" };

export default function Projects() {
  return (
    <section className="section">
      <h1 className="page-title">Projects</h1>
      <div className="gallery">
        {projects.map((p, i) => (
          <ProjectTile key={p.slug} project={p} number={i + 1} />
        ))}
      </div>
    </section>
  );
}
