import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { contact } from "@/lib/projects";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <section className="section contact">
      <div>
        <h1 className="page-title">Say hello.</h1>
        <p className="lede">Collaborations, internships and conversations about fashion are always welcome.</p>
        <p><a className="link-rule" href={`mailto:${contact.email}`}>{contact.email}</a></p>
        <ul className="social">
          <li><a href={contact.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href={contact.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
        </ul>
      </div>
      <ContactForm />
    </section>
  );
}
