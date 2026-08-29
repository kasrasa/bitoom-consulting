import Link from "next/link";
import { notFound } from "next/navigation";
import { notes } from "../../../data/site";

export function generateStaticParams() {
  return notes.map((note) => ({ slug: note.slug }));
}

export default async function NotePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const note = notes.find((item) => item.slug === slug);
  if (!note) notFound();

  return (
    <article className="article-page shell">
      <Link href="/notes" className="text-link">← All notes</Link>
      <header>
        <p className="eyebrow">{note.kind} · {note.date}</p>
        <h1>{note.title}</h1>
        <p className="article-deck">{note.excerpt}</p>
      </header>
      <div className="article-body">
        {note.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
      </div>
      <div className="article-end"><span>BITOOM / NOTES</span><span>EOF _</span></div>
    </article>
  );
}
