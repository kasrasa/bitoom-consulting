import { ProjectCard } from "../../components/ProjectCard";
import { projects } from "../../data/site";

export default function WorkPage() {
  return (
    <section className="inner-page shell">
      <div className="page-intro">
        <p className="eyebrow">/ WORK</p>
        <h1>Systems, experiments and engineering work.</h1>
        <p>Selected work across computer vision, machine vision, multimodal AI, ML infrastructure and engineering automation.</p>
      </div>
      <div className="project-grid all-projects">
        {projects.map((project, index) => <ProjectCard project={project} key={project.slug} featured={index === 0} />)}
      </div>
      <div className="disclosure">Some industrial work is summarized at a system level to respect client and employer confidentiality.</div>
    </section>
  );
}
