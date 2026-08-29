import Link from "next/link";
import { notes } from "../../data/site";

export default function NotesPage() {
  return (
    <section className="inner-page shell">
      <div className="page-intro">
        <p className="eyebrow">/ BITOOM NOTES</p>
        <h1>Engineering notes from the edge of the work.</h1>
        <p>Short write-ups on computer vision, multimodal AI, production ML and the engineering decisions hiding behind model metrics.</p>
      </div>
      <div className="note-list">
        {notes.map((note, index) => (
          <Link href={`/notes/${note.slug}`} className="note-list-row" key={note.slug}>
            <span>0{index + 1}</span>
            <div><p className="eyebrow">{note.kind} · {note.date}</p><h2>{note.title}</h2><p>{note.excerpt}</p></div>
            <span className="big-arrow">↗</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
