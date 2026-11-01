import { ArrowUpRight, ExternalLink, ScanLine } from 'lucide-react'
import ProjectArtwork from './ProjectArtwork'
import { assetUrl } from '../utils/assetUrl'

export default function ProjectCard({ project, index, onOpen }) {
  return (
    <article className={`project-card project-card-${index + 1}`} data-reveal>
      <button
        type="button"
        className="project-open"
        onClick={() => onOpen(project)}
        aria-label={`View details ${project.title}, ${project.category}`}
      >
        <div className="project-visual">
          {project.image ? <img src={assetUrl(project.image)} alt={`Preview ${project.title}`} loading="lazy" decoding="async" /> : <ProjectArtwork theme={project.theme} />}
          <div className="project-visual-top"><span className="project-index">// {project.id}</span><ScanLine size={19}/></div>
          <div className="project-tech-reveal">
            <span className="tech-title">{project.techLabel || 'TECHNOLOGIES USED'}</span>
            <div className="tech-pills">{project.technology.map(tech => <span key={tech}>{tech}</span>)}</div>
            <span className="hover-hint">VIEW CASE STUDY <ArrowUpRight size={14} /></span>
          </div>
        </div>
        <div className="project-bottom">
          <div><span className="project-category">{project.category}</span><h3>{project.title}</h3></div>
          <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={23} strokeWidth={1.7}/></span>
        </div>
      </button>
      {project.url && <a
        className="project-live-cta"
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open live project ${project.title} in a new tab`}
      ><span className="live-indicator"/> {project.urlLabel || 'OPEN LIVE PROJECT'} <ExternalLink size={16} aria-hidden="true"/></a>}
    </article>
  )
}
