type Project = {
  slug: string;
  type: string;
  title: string;
  summary: string;
  metric: string;
  metricLabel: string;
  tags: string[];
  github?: string;
};

export function ProjectCard({ project, featured = false }: { project: Project; featured?: boolean }) {
  return (
    <article className={`project-card ${featured ? "featured" : ""}`}>
      <div className="project-noise" />
      <div className="project-card-top">
        <span className="eyebrow">{project.type}</span>
        {project.github ? <a href={project.github} target="_blank" rel="noreferrer" className="arrow-link" aria-label={`Open ${project.title} on GitHub`}>↗</a> : <span className="arrow-link dim">↗</span>}
      </div>
      <h3>{project.title}</h3>
      <p>{project.summary}</p>
      <div className="metric"><strong>{project.metric}</strong><span>{project.metricLabel}</span></div>
      <div className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
    </article>
  );
}
