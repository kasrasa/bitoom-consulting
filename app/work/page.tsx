import { ProjectCard } from "../../components/ProjectCard";
import { caseStudies, labs } from "../../data/site";

export default function WorkPage() {
  return (
    <section className="inner-page shell">
      <div className="page-intro">
        <p className="eyebrow">/ WORK</p>
        <h1>AI engineering applied to real business problems.</h1>
        <p>Selected work across industrial computer vision, machine vision, ML systems and applied AI — from early technical validation through production deployment.</p>
      </div>

      <div className="work-group">
        <div className="section-heading row-heading work-heading">
          <div>
            <p className="eyebrow">Case Studies</p>
            <h2>Production experience that shows how we solve.</h2>
          </div>
          <p className="work-heading-copy">These examples are framed around the client problem, engineering approach and measurable outcome — not just the technology used.</p>
        </div>
        <div className="project-grid all-projects">
          {caseStudies.map((project, index) => <ProjectCard project={project} key={project.slug} featured={index === 0} />)}
        </div>
      </div>

      <div className="work-group labs-group">
        <div className="section-heading row-heading work-heading">
          <div>
            <p className="eyebrow">Bitoom Labs</p>
            <h2>Open prototypes that show what we can build next.</h2>
          </div>
          <p className="work-heading-copy">Public experiments in robotics, multimodal AI, engineering automation and agentic systems — translated into capabilities that can be applied to client work.</p>
        </div>
        <div className="project-grid all-projects">
          {labs.map((project, index) => <ProjectCard project={project} key={project.slug} featured={index === 0} />)}
        </div>
      </div>

      <div className="disclosure">Selected case studies reflect work completed in previous professional engineering roles. Customer identities, proprietary system details and confidential implementation information have been intentionally omitted.</div>
    </section>
  );
}
