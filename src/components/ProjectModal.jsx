import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from 'lucide-react'
import ProjectArtwork from './ProjectArtwork'
import { assetUrl } from '../utils/assetUrl'

export default function ProjectModal({ project, onClose }) {
  const closeRef = useRef(null)
  const [imageIndex, setImageIndex] = useState(0)
  const gallery = project?.gallery?.length ? project.gallery : (project?.image ? [{ image: project.image, caption: project.title }] : [])

  useEffect(() => {
    if (!project) return
    setImageIndex(0)
    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') setImageIndex(i => (i - 1 + gallery.length) % gallery.length)
      if (event.key === 'ArrowRight') setImageIndex(i => (i + 1) % gallery.length)
    }
    const previouslyFocused = document.activeElement
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = prevOverflow
      window.removeEventListener('keydown', onKey)
      previouslyFocused?.focus?.()
    }
  }, [project, onClose, gallery.length])

  if (!project) return null
  const current = gallery[imageIndex]
  return (
    <div className="modal-backdrop" onMouseDown={event => { if (event.target === event.currentTarget) onClose() }}>
      <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-dialog-title">
        <div className="modal-bar">
          <span>PROJECT DETAILS / {project.id} <span className="modal-bar-divider">—</span> {project.category}</span>
          <button type="button" ref={closeRef} className="modal-close" onClick={onClose} aria-label="Close project details"><X size={19}/></button>
        </div>
        <div className="modal-art">
          {current ? <img src={assetUrl(current.image)} alt={current.caption} /> : <ProjectArtwork theme={project.theme} />}
          {gallery.length > 1 && <div className="modal-gallery-controls">
            <button type="button" onClick={() => setImageIndex(i => (i - 1 + gallery.length) % gallery.length)} aria-label="Previous image"><ChevronLeft size={21}/></button>
            <span>{String(imageIndex + 1).padStart(2, '0')} / {String(gallery.length).padStart(2, '0')}</span>
            <button type="button" onClick={() => setImageIndex(i => (i + 1) % gallery.length)} aria-label="Next image"><ChevronRight size={21}/></button>
          </div>}
        </div>
        {current && <div className="gallery-caption"><span>PROJECT VISUAL / {String(imageIndex + 1).padStart(2, '0')}</span>{current.caption}</div>}
        {gallery.length > 1 && <div className="gallery-thumbnails" aria-label="Project image gallery">
          {gallery.map((item, i) => <button key={item.image} type="button" className={i === imageIndex ? 'active' : ''} onClick={() => setImageIndex(i)} aria-label={`View image ${i + 1}: ${item.caption}`} aria-pressed={i === imageIndex}>
            <img src={assetUrl(item.image)} alt="" loading="lazy" />
            <span>{String(i + 1).padStart(2, '0')}</span>
          </button>)}
        </div>}
        <div className="modal-content">
          <span className="section-eyebrow"><span className="blue-dash" />{project.category}</span>
          <h2 id="project-dialog-title">{project.title}</h2>
          <p>{project.description}</p>
          {project.details?.length > 0 && <div className="project-facts">{project.details.map(detail => <div key={detail.label}><span>{detail.label}</span><strong>{detail.value}</strong></div>)}</div>}
          <div className="modal-tech"><span>{project.techLabel || 'TECHNOLOGIES USED'}</span><div className="tag-row">{project.technology.map(item => <span key={item}>{item}</span>)}</div></div>
          {project.url ? <a className="primary-button" href={project.url} target="_blank" rel="noopener noreferrer" aria-label={`Open live project ${project.title} in a new tab`}>{project.urlLabel || 'OPEN LIVE PROJECT'} <ArrowUpRight size={18}/></a> : <p className="modal-note">No public demo or repository is available for this project. The images above document the project work.</p>}
        </div>
      </section>
    </div>
  )
}
