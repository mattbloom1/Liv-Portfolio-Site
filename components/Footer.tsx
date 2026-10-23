import Link from "next/link";
import { contact, projects } from "@/lib/projects";

export default function Footer() {
  return (
    <footer className="site-footer">
      <span className="foot-mark" aria-hidden="true" />
      <div className="foot-hello">
        <h2>Write to Liv</h2>
        <a href={`mailto:${contact.email}`}>{contact.email}</a>
      </div>
      <div className="foot-cols">
        <nav aria-label="Projects">
          <h2>Work</h2>
          <ul>
            {projects.map((p) => (
              <li key={p.slug}><Link href={`/projects/${p.slug}/`}>{p.title}</Link></li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Pages">
          <h2>Pages</h2>
          <ul>
            <li><Link href="/projects/">Projects</Link></li>
            <li><Link href="/about/">About</Link></li>
            <li><Link href="/contact/">Contact</Link></li>
          </ul>
        </nav>
        <nav aria-label="Elsewhere">
          <h2>Elsewhere</h2>
          <ul>
            <li><a href={contact.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
            <li><a href={contact.instagram} rel="noopener noreferrer" target="_blank">Instagram</a></li>
          </ul>
        </nav>
      </div>
      <p className="foot-word">Liv Polani</p>
      <p className="foot-legal">&copy; {new Date().getFullYear()} Liv Polani</p>
    </footer>
  );
}
