import type { Metadata } from "next";
import Link from "next/link";

import "../homes.css";
export const metadata: Metadata = { title: "Home page drafts", robots: { index: false } };

const drafts = [
  { href: "/home-a/", name: "A · Desk", note: "Scanned scraps, tape and plates on a foxed paper table." },
  { href: "/home-b/", name: "B · Night garden", note: "Botanical prints behind gold art nouveau frames." },
  { href: "/home-c/", name: "C · Lookbook", note: "A sideways lookbook with burnt-paper windows." },
];

export default function Homes() {
  return (
    <section className="section">
      <h1 className="page-title">Home page drafts</h1>
      <ul className="draft-list">
        {drafts.map((d) => (
          <li key={d.href}>
            <Link href={d.href}>
              <span className="t">{d.name}</span>
              <span className="small">{d.note}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
