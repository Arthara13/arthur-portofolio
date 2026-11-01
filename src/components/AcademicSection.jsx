import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, ArrowRight, BookOpen, ChevronLeft, ChevronRight, GraduationCap, Layers3, X } from 'lucide-react'
import { academic, academicCategories } from '../data/academic'
import RevealTitle from './RevealTitle'
import { assetUrl } from '../utils/assetUrl'

function AcademicModal({ item, onClose }) {
  const closeRef = useRef(null)
  const [imageIndex, setImageIndex] = useState(0)
  useEffect(() => {
    if (!item) return
    setImageIndex(0)
    const before = document.activeElement
    const oldOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = event => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') setImageIndex(i => (i - 1 + item.images.length) % item.images.length)
      if (event.key === 'ArrowRight') setImageIndex(i => (i + 1) % item.images.length)
    }
    window.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = oldOverflow
      window.removeEventListener('keydown', onKey)
      before?.focus?.()
    }
  }, [item, onClose])
  if (!item) return null
  return (
    <div className="modal-backdrop" onMouseDown={e => { if (e.target === e.currentTarget) onClose() }}>
      <section className="academic-modal" role="dialog" aria-modal="true" aria-labelledby="academic-dialog-title">
        <div className="modal-bar">
          <span>{item.id} / ACADEMIC RESEARCH</span>
          <button ref={closeRef} className="modal-close" type="button" onClick={onClose} aria-label="Close case study"><X size={19}/></button>
        </div>
        <div className="academic-dialog-inner">
          <div className="academic-dialog-visual">
            <div className="academic-dialog-grid" />
            <div className="academic-document-preview"><img src={assetUrl(item.images[imageIndex])} alt={`Document preview ${item.title}`} /></div>
            {item.images.length > 1 && <div className="academic-image-nav">
              <button type="button" onClick={() => setImageIndex(i => (i - 1 + item.images.length) % item.images.length)} aria-label="Previous preview"><ChevronLeft size={19}/></button>
              <span>{imageIndex + 1} / {item.images.length}</span>
              <button type="button" onClick={() => setImageIndex(i => (i + 1) % item.images.length)} aria-label="Next preview"><ChevronRight size={19}/></button>
            </div>}
          </div>
          <div className="academic-dialog-content">
            <div className="academic-dialog-badges"><span>{item.team === 'Group' ? 'GROUP PROJECT' : 'INDIVIDUAL WORK'}</span><span>{item.category}</span></div>
            <h2 id="academic-dialog-title">{item.title}<span>.</span></h2>
            <p className="academic-dialog-subtitle">{item.subtitle}</p>
            <p>{item.description}</p>
            <div className="academic-dialog-fact"><small>METHOD / FOCUS</small><strong>{item.method}</strong></div>
            <div className="academic-dialog-fact"><small>ANALYSIS WORKFLOW</small><span>{item.approach}</span></div>
            <div className="academic-dialog-fact"><small>ATTRIBUTION</small><span>{item.contribution}</span></div>
            <div className="academic-dialog-methods">{item.tools.map(tool => <span key={tool}>{tool}</span>)}</div>
            <p className="academic-dialog-note"><BookOpen size={17}/> Visual excerpts are taken from submitted academic reports. Full PDFs are not published; group work attribution remains subject to confirmation.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function AcademicSection() {
  const [category, setCategory] = useState('ALL')
  const [selected, setSelected] = useState(null)
  const visible = category === 'ALL' ? academic : academic.filter(item => item.category === category)
  return (
    <section className="academic-section section-block" id="statistical-lab">
      <div className="academic-ambient" aria-hidden="true" />
      <div className="wrap academic-wrap">
        <RevealTitle eyebrow="02 / ACADEMIC RESEARCH" title="STATISTICAL" accent="LAB." description="Selected academic case studies across statistics, forecasting, computing, finance, and quality control. Related reports are combined to avoid repetition, and group projects are clearly identified." />
        <div className="academic-overview" data-reveal>
          <div><GraduationCap size={24}/><span>BUSINESS STATISTICS</span><strong>INSIGHT FIRST.</strong></div>
          <div><Layers3 size={24}/><span>CURATED CASE STUDIES</span><strong>{String(academic.length).padStart(2, '0')} SELECTED.</strong></div>
          <div><BookOpen size={24}/><span>REAL ACADEMIC WORK</span><strong>METHOD-LED.</strong></div>
        </div>
        <div className="academic-topline" data-reveal>
          <span>EXPLORE BY DISCIPLINE</span><span>ARCHIVE / 2024—2025</span>
        </div>
        <div className="academic-filters" aria-label="Filter analysis categories">
          {academicCategories.map((cat, i) => <button key={cat} type="button" onClick={() => setCategory(cat)} className={category === cat ? 'active' : ''} aria-pressed={category === cat}>
            <span>{String(i).padStart(2, '0')}</span>{cat === 'ALL' ? 'ALL STUDIES' : cat.toUpperCase()}
          </button>)}
        </div>
        <div className="academic-count" aria-live="polite">SHOWING {String(visible.length).padStart(2, '0')} / {String(academic.length).padStart(2, '0')} STUDIES</div>
        <div className="academic-grid">
          {visible.map((item, i) => <article key={item.slug} className="academic-card">
            <button type="button" className="academic-card-main" onClick={() => setSelected(item)} aria-label={`Open case study ${item.title}`}>
              <div className="academic-card-photo">
                <div className="academic-photo-grid" aria-hidden="true" />
                <div className="academic-paper"><img src={assetUrl(item.images[0])} loading="lazy" decoding="async" alt={`Report excerpt ${item.title}`} /></div>
                <div className="academic-photo-vignette" />
                <div className="academic-card-top"><span>{item.id}</span><span>{item.team === 'Group' ? 'GROUP PROJECT' : 'INDIVIDUAL WORK'}</span></div>
                <div className="academic-card-hover"><span>METHODS & TOOLS</span><div>{item.tools.map(t => <b key={t}>{t}</b>)}</div></div>
                <div className="academic-card-open"><ArrowUpRight size={23}/></div>
              </div>
              <div className="academic-card-bottom"><span>{item.category.toUpperCase()}</span><h3>{item.title}</h3><p>{item.subtitle}</p><div className="academic-card-cta">EXPLORE THE STUDY <ArrowRight size={15}/></div></div>
            </button>
          </article>)}
        </div>
        <div className="academic-footer-note" data-reveal><span>EDITORIAL NOTE / 001</span><p>Academic reports are presented as summaries. Contributions to group work are not claimed without confirmation. Full files remain private to respect collaborators and data privacy.</p></div>
      </div>
      <AcademicModal item={selected} onClose={() => setSelected(null)} />
    </section>
  )
}
