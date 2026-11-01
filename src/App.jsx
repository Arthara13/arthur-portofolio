import { useCallback, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import {
  ArrowUpRight, ChevronDown, Code2,
  Mail, Menu, X,
} from 'lucide-react'
import { site } from './data/site'
import { projects } from './data/projects'
import ProjectCard from './components/ProjectCard'
import ProjectModal from './components/ProjectModal'
import AcademicSection from './components/AcademicSection'
import RevealTitle from './components/RevealTitle'
import ScrollStory from './components/ScrollStory'

gsap.registerPlugin(ScrollTrigger)

const navLinks = [
  { label: 'HOME', href: '#home' },
  { label: 'PROJECTS', href: '#projects' },
  { label: 'STATISTICAL LAB', href: '#statistical-lab' },
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav-shell wrap">
        <a href="#home" className="brand" aria-label="Go to homepage">
          <span className="brand-mark">A</span>
          <span className="brand-wordmark">ARTHUR<br/><b>FIKRY SWARA</b></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navLinks.map((link, i) => <a key={link.href} href={link.href}><span>0{i + 1}</span>{link.label}</a>)}
        </nav>
        <a className="header-contact" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">LET'S TALK <ArrowUpRight size={16}/></a>
        <button type="button" className="menu-toggle" onClick={() => setIsOpen(!isOpen)} aria-label={isOpen ? 'Close menu' : 'Open menu'} aria-expanded={isOpen} aria-controls="mobile-menu">
          {isOpen ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>
      {isOpen && <nav className="mobile-nav" id="mobile-menu" aria-label="Mobile menu">
        {navLinks.map((link, i) => <a key={link.href} onClick={() => setIsOpen(false)} href={link.href}><small>0{i + 1}</small>{link.label}<ArrowUpRight size={19}/></a>)}
        <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}><small>06</small>CONTACT<ArrowUpRight size={19}/></a>
      </nav>}
    </header>
  )
}

function ProjectsSection({ onOpen }) {
  return (
    <section className="projects-section section-block" id="projects">
      <div className="wrap">
        <RevealTitle eyebrow="01 / SELECTED WORKS" title="THE PROJECT" accent="ARCHIVE." description="A selection of digital products, predictive models and practical business analysis." />
        <div className="projects-disclaimer" data-reveal><span className="disclaimer-dot" /> SIX SELECTED PROJECTS <span className="disclaimer-line" /> SELECTED PROJECTS / 2026</div>
        <div className="projects-grid">{projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={onOpen} />)}</div>
        <div className="project-tail" data-reveal><span>MORE WORK TO EXPLORE.</span><span><ChevronDown size={15}/> NEXT: STATISTICAL ANALYSIS LAB</span></div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section className="about-section section-block" id="about">
      <div className="wrap">
        <RevealTitle eyebrow="03 / BEYOND THE SCREEN" title="MORE THAN" accent="NUMBERS." />
        <div className="about-grid">
          <div className="about-art" data-reveal>
            <div className="about-art-grid" /><span className="about-art-index">AFS / PROFILE_01</span>
            <div className="about-monogram">A<span>/</span>S</div>
            <div className="about-art-label"><span>THE MINDSET</span><p>OBSERVE.<br/>ANALYZE.<br/><b>CREATE.</b></p></div>
            <div className="about-art-corner">001 — 003</div>
          </div>
          <div className="about-content" data-reveal>
            <div className="about-content-number">// WHO AM I</div>
            <h3>Curious by nature.<br/><span>Analytical by choice.</span></h3>
            <p>{site.about}</p>
            <div className="about-info-row"><div><span>EDUCATION</span><strong>Sepuluh Nopember<br/>Institute of Technology</strong></div><div><span>FIELD OF STUDY</span><strong>Business Statistics</strong></div></div>
            <a className="text-link" href="#experience">EXPLORE MY JOURNEY <ArrowUpRight size={18}/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const categories = ['ALL', 'Data & Statistics', 'Web & Tools']
  const visibleSkills = activeCategory === 'ALL' ? site.skills : site.skills.filter(skill => skill.category === activeCategory)
  return (
    <section className="skills-section section-block" id="skills">
      <div className="wrap skills-layout">
        <div className="skills-copy" data-reveal>
          <span className="section-eyebrow"><span className="blue-dash" />04 / THE TOOLKIT</span>
          <h2>MY DIGITAL<br/><em>TOOLBOX.</em></h2>
          <p>Methods and technologies from my documented projects and academic work. Explore my growing toolkit by category.</p>
          <div className="skills-tabs" aria-label="Filter technologies">{categories.map(category => <button type="button" className={activeCategory === category ? 'active' : ''} key={category} onClick={() => setActiveCategory(category)}>{category === 'ALL' ? 'ALL TOOLS' : category.toUpperCase()}</button>)}</div>
        </div>
        <div className="skills-terminal" data-reveal>
          <div className="terminal-header"><div><i/><i/><i/></div><span>arthur@portfolio ~ /skills</span><Code2 size={17}/></div>
          <div className="terminal-body"><p><span className="terminal-cyan">arthur@portfolio</span>:<span className="terminal-blue">~</span>$ list --skills</p><p className="terminal-comment">// A growing stack for better problem-solving</p><div className="terminal-tags" key={activeCategory}>{visibleSkills.map((skill, index) => <span key={skill.name} style={{ animationDelay: `${index * 50}ms` }}><small>{String(index + 1).padStart(2, '0')}</small>{skill.name}</span>)}</div><p className="terminal-prompt"><span className="terminal-cyan">arthur@portfolio</span>:<span className="terminal-blue">~</span>$ <span className="terminal-cursor" /></p></div>
          <div className="terminal-footer"><span>READY FOR THE NEXT CHALLENGE</span><span>STATUS: ACTIVE <b>●</b></span></div>
        </div>
      </div>
    </section>
  )
}

function ExperienceSection() {
  return (
    <section className="experience-section section-block" id="experience">
      <div className="wrap">
        <RevealTitle eyebrow="05 / THE JOURNEY" title="EXPERIENCE" accent="& IMPACT." description="Leadership, communication, problem-solving, and teamwork developed through university organizations." />
        <div className="experience-list">{site.experiences.map((experience, i) => <div className="experience-item" key={`${experience.role}-${experience.organization}`} data-reveal><span className="experience-count">0{i + 1}</span><div className="experience-main"><h3>{experience.role}</h3><p>{experience.description}</p></div><div className="experience-side"><span>{experience.organization}</span><b>{experience.year}</b></div><ArrowUpRight size={21} className="experience-arrow" aria-hidden="true"/></div>)}</div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="contact-glow" aria-hidden="true" />
      <div className="wrap contact-inner">
        <div className="contact-upper" data-reveal><span className="section-eyebrow"><span className="blue-dash"/>06 / THE NEXT CHAPTER</span><span>HAVE AN IDEA? LET'S CONNECT.</span></div>
        <h2 data-reveal>LET'S BUILD<br/><em>SOMETHING</em><br/>MEANINGFUL<span>.</span></h2>
        <div className="contact-actions" data-reveal><a className="contact-main-button" href={site.whatsappUrl} target="_blank" rel="noopener noreferrer">GET IN TOUCH <ArrowUpRight size={27}/></a><a className="contact-email" href={`mailto:${site.email}`}><Mail size={19}/>{site.email}</a></div>

      </div>
    </section>
  )
}

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const root = useRef(null)
  const closeProject = useCallback(() => setSelectedProject(null), [])
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const context = gsap.context(() => {
      gsap.utils.toArray('[data-reveal]').forEach((element) => {
        gsap.from(element, {
          autoAlpha: 0, y: 48, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: element, start: 'top 92%', once: true },
        })
      })
    }, root)
    return () => context.revert()
  }, [])
  return (
    <div className="app-shell" ref={root}>
      <a href="#projects" className="skip-link">Skip to projects</a>
      <Header />
      <main>
        <ScrollStory />
                <ProjectsSection onOpen={setSelectedProject} />
        <AcademicSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </div>
  )
}
