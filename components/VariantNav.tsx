import Link from "next/link";

const variants = [
  { href: "/home-a/", id: "a", label: "A Desk" },
  { href: "/home-b/", id: "b", label: "B Night" },
  { href: "/home-c/", id: "c", label: "C Lookbook" },
];

/** Floating switcher so the three home page drafts can be compared side by side. Remove once one is chosen. */
export default function VariantNav({ current }: { current: "a" | "b" | "c" }) {
  return (
    <nav className="variant-nav" aria-label="Home page drafts">
      <span className="variant-nav-title">Draft</span>
      {variants.map((v) => (
        <Link key={v.id} href={v.href} aria-current={v.id === current ? "page" : undefined}>
          {v.label}
        </Link>
      ))}
    </nav>
  );
}
