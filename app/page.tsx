import Link from "next/link";
import { SignalPanel } from "../components/SignalPanel";
import { ProjectCard } from "../components/ProjectCard";
import { caseStudies, experience, labs, notes, services, site } from "../data/site";

const capabilities = [
  "COMPUTER VISION",
  "MACHINE VISION",
  "PYTORCH",
  "MULTIMODAL AI",
  "MLOPS",
  "3D VISION",
  "EDGE AI",
  "DISTRIBUTED TRAINING",
] as const;

export default function Home() {
  return (
    <>
      <section className="hero shell">
        <div className="hero-copy">
          <div className="availability"><span /> Available for select consulting projects</div>
          <p className="kicker">APPLIED AI · COMPUTER VISION · PRODUCTION ML</p>
          <h1>Research mindset.<br /><em>Production habits.</em></h1>
          <p className="hero-lead">
            <strong>Founder-led AI engineering for complex visual problems.</strong>
            Bitoom combines disciplined experimentation with production engineering to turn ambiguous ideas, underperforming models and vision-system bottlenecks into measurable, deployable systems.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#work">View case studies <span>↘</span></a>
            <a className="button ghost" href="#contact">Discuss a project <span>↗</span></a>
          </div>
          <div className="hero-proof">
            <div><strong>5+ years</strong><span>applied vision engineering</span></div>
            <div><strong>6+ projects</strong><span>industrial CV delivery</span></div>
            <div><strong>R&D → Prod</strong><span>one accountable path</span></div>
          </div>
        </div>
        <SignalPanel />
      </section>

      <section className="ticker" aria-label="Capabilities">
        <div className="ticker-track">
          {[0, 1].map((group) => (
            <div className="ticker-group" aria-hidden={group === 1} key={group}>
              {capabilities.map((capability) => (
                <span className="ticker-item" key={`${group}-${capability}`}>
                  {capability}<i aria-hidden="true">◆</i>
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="section shell" id="services">
        <div className="section-heading split-heading">
          <div><span className="section-index">/ 01</span><p className="eyebrow">What we do</p></div>
          <h2>Technical depth, focused on the shortest credible path.</h2>
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
          <div><span className="section-index">/ 02</span><p className="eyebrow">Featured case studies</p><h2>Built around business problems and measurable outcomes.</h2></div>
          <Link className="text-link" href="/work">All work ↗</Link>
        </div>
        <div className="project-grid">
          {caseStudies.slice(0, 3).map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0} />)}
        </div>

        <div className="section-heading row-heading home-labs-heading">
          <div><p className="eyebrow">Bitoom Labs</p><h2>Open prototypes exploring what we can build next.</h2></div>
          <Link className="text-link" href="/work">Explore labs ↗</Link>
        </div>
        <div className="project-grid">
          {labs.slice(0, 3).map((project, index) => <ProjectCard key={project.slug} project={project} featured={index === 0} />)}
        </div>
      </section>

      <section className="section shell" id="experience">
        <div className="section-heading split-heading compact">
          <div><span className="section-index">/ 03</span><p className="eyebrow">Experience</p></div>
          <h2>Engineering depth across the full vision stack.</h2>
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
