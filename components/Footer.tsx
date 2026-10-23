import { contact } from "@/lib/projects";

export default function Footer() {
  return (
    <footer className="site-footer">
      <p className="wordmark-sm">Liv Polani</p>
      <ul>
        <li><a href={`mailto:${contact.email}`}>Email</a></li>
        <li><a href={contact.linkedin} rel="noopener noreferrer" target="_blank">LinkedIn</a></li>
        <li><a href={contact.instagram} rel="noopener noreferrer" target="_blank">Instagram</a></li>
      </ul>
      <p className="small">&copy; {new Date().getFullYear()} Liv Polani</p>
    </footer>
  );
}
