import Link from "next/link";
import { SignalPanel } from "../components/SignalPanel";
import { ProjectCard } from "../components/ProjectCard";
import { experience, notes, projects, services, site } from "../data/site";

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <div className="availability"><span /> Available for select consulting projects</div>
          <p className="kicker">AI / ML ENGINEERING · COMPUTER VISION · MACHINE VISION</p>
          <h1>We build AI systems that <em>see</em> the real world.</h1>
          <p className="hero-lead">Bitoom helps teams move from a difficult visual AI problem to a system they can measure, deploy and trust — from the first experiment to production.</p>
          <div className="hero-actions">
            <a className="button primary" href="#work">Explore our work <span>↘</span></a>
            <a className="button ghost" href="#contact">Discuss a problem <span>↗</span></a>
          </div>
          <div className="hero-proof">
            <div><strong>5+ yrs</strong><span>vision engineering</span></div>
            <div><strong>6+</strong><span>industrial CV projects</span></div>
            <div><strong>R&D → Prod</strong><span>end-to-end thinking</span></div>
          </div>
        </div>
        <SignalPanel />
      </section>

      <section className="ticker" aria-label="Capabilities">
        <div>COMPUTER VISION <i>◆</i> MACHINE VISION <i>◆</i> PYTORCH <i>◆</i> MULTIMODAL AI <i>◆</i> MLOPS <i>◆</i> 3D VISION <i>◆</i> EDGE AI <i>◆</i> DISTRIBUTED TRAINING <i>◆</i></div>
      </section>

      <section className="section shell" id="services">
        <div className="section-heading split-heading">
          <div><span className="section-index">/ 01</span><p className="eyebrow">What we do</p></div>
          <h2>Technical depth without the research-project drag.</h2>
          <p>Bring a vague idea, an underperforming model or a production bottleneck. We help find the shortest credible path forward.</p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span className="service-index">{service.index}</span>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="tag-row">{service.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell" id="work">
        <div className="section-heading row-heading">
          <div><span className="section-index">/ 02</span><p className="eyebrow">Selected work</p><h2>Built around measurable outcomes.</h2></div>
          <Link className="text-link" href="/work">All projects ↗</Link>
        </div>
        <div className="project-grid">
          {projects.slice(0, 4).map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0} />)}
        </div>
      </section>

      <section className="section shell" id="experience">
        <div className="section-heading split-heading compact">
          <div><span className="section-index">/ 03</span><p className="eyebrow">Experience</p></div>
          <h2>Research mindset. Production habits.</h2>
          <p>Experience across industrial automation, high-throughput vision systems, applied ML research and 3D computer vision.</p>
        </div>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-row" key={item.company}>
              <span className="timeline-period">{item.period}</span>
              <div><h3>{item.company}</h3><p className="role">{item.role}</p></div>
              <p>{item.line}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell notes-section">
        <div className="section-heading row-heading">
          <div><span className="section-index">/ 04</span><p className="eyebrow">Bitoom / Notes</p><h2>What we're testing, learning and building.</h2></div>
          <Link className="text-link" href="/notes">Read all notes ↗</Link>
        </div>
        <div className="notes-grid">
          {notes.map((note, index) => (
            <Link className="note-card" href={`/notes/${note.slug}`} key={note.slug}>
              <div className="note-meta"><span>{note.date}</span><span>{note.kind}</span></div>
              <span className="note-number">0{index + 1}</span>
              <h3>{note.title}</h3>
              <p>{note.excerpt}</p>
              <span className="text-link">Read note ↗</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="section shell contact" id="contact">
        <div className="contact-terminal">
          <span className="section-index">/ CONTACT</span>
          <div className="contact-code">&gt; have_problem = true<br />&gt; need_ai_help = true<br /><b>&gt; next_step = &quot;talk&quot;_</b></div>
        </div>
        <div className="contact-copy">
          <p className="eyebrow">Start a conversation</p>
          <h2>Have a vision or AI problem that needs an engineer?</h2>
          <p>Tell us what you are trying to build, what is failing, or what you are not sure about yet. Early conversations do not need a polished spec.</p>
          <div className="hero-actions">
            <a className="button primary" href={site.linkedin} target="_blank" rel="noreferrer">Message Kasra on LinkedIn ↗</a>
            <a className="button ghost" href={site.github} target="_blank" rel="noreferrer">View GitHub ↗</a>
          </div>
          <small>Business email coming next: <span>{site.email}</span></small>
        </div>
      </section>
    </>
  );
}
