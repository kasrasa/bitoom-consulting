import { site } from "../data/site";

export function Footer() {
  return (
    <footer className="footer">
      <div>
        <div className="brand footer-brand"><span className="brand-mark">B/</span><span>{site.shortBrand}</span></div>
        <p>Applied AI, computer vision & machine vision engineering.</p>
      </div>
      <div className="footer-links">
        <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        <a href={site.github} target="_blank" rel="noreferrer">GitHub ↗</a>
        <span>Ontario, Canada</span>
      </div>
      <div className="footer-bottom">© {new Date().getFullYear()} {site.brand}</div>
    </footer>
  );
}
