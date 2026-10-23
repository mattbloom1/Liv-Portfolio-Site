import Link from "next/link";
import Frame from "./Frame";
import type { Project } from "@/lib/projects";

export default function ProjectTile({ project, number, className = "" }: { project: Project; number: number; className?: string }) {
  const meta = [project.year, project.category].filter(Boolean).join(" · ");
  return (
    <Link href={`/projects/${project.slug}/`} className={`tile ${className}`}>
      <Frame alt={project.coverAlt} ratio={project.ratio} tone={number % 2 ? "paper" : "rose"} />
      <span className="tile-meta">
        <span className="idx">{String(number).padStart(2, "0")}</span>
        <span className="tile-title">{project.title}</span>
        {meta && <span className="small">{meta}</span>}
      </span>
    </Link>
  );
}
