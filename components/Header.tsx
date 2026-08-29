import Link from "next/link";
import { site } from "../data/site";

export function Header() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Bitoom Consulting home">
        <span className="brand-mark">B/</span>
        <span>{site.shortBrand}</span>
      </Link>
      <nav className="nav" aria-label="Primary navigation">
        <Link href="/work">Work</Link>
        <Link href="/notes">Notes</Link>
        <Link href="/#experience">Experience</Link>
        <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
      </nav>
      <a className="header-cta" href="/#contact">Start a project</a>
    </header>
  );
}
