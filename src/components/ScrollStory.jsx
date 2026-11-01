import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowDownRight, ArrowUpRight, Download, MessageCircle } from 'lucide-react'
import { site } from '../data/site'
import './scroll-story.css'

gsap.registerPlugin(ScrollTrigger)

/**
 * Two-screen scroll narrative. GSAP pins the stage, then scrubs a reversible
 * perspective rotation between panels. The second panel is part of the story,
 * not a video/image swap, so its text stays sharp and accessible.
 */
export default function ScrollStory() {
  const root = useRef(null)

  useEffect(() => {
    const element = root.current
    if (!element) return
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduceMotion.matches) {
      element.classList.add('story-static')
      return () => element.classList.remove('story-static')
    }

    const ctx = gsap.context(() => {
      const first = element.querySelector('.story-first')
      const second = element.querySelector('.story-second')
      const light = element.querySelector('.story-light-sweep')
      const progress = element.querySelector('.story-progress-fill')
      const hint = element.querySelector('.story-bottom-hint')
      gsap.set(first, { rotationY: 0, xPercent: 0, scale: 1, autoAlpha: 1, transformOrigin: 'left 50%' })
      gsap.set(second, { rotationY: 76, xPercent: 18, scale: .78, autoAlpha: 0, transformOrigin: 'right 50%' })
      gsap.set(light, { xPercent: -150, opacity: 0 })
      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: element,
          start: 'top top',
          end: () => `+=${Math.round(window.innerHeight * 1.75)}`,
          pin: true,
          scrub: .65,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: self => {
            if (progress) progress.style.transform = `scaleX(${self.progress})`
            if (hint) hint.textContent = self.progress > .6 ? 'CONTINUE TO PROJECTS' : 'SCROLL TO ROTATE'
          },
        },
      })
      // The first face rotates away while the second opens towards the visitor.
      tl.to('.story-first .story-bigtype', { yPercent: -16, opacity: .18, duration: .30 }, 0)
        .to('.story-first .story-photo', { xPercent: -11, rotate: -6, duration: .38 }, 0)
        .to(first, { rotationY: -76, xPercent: -20, scale: .78, autoAlpha: 0, duration: .75 }, .04)
        .to(light, { xPercent: 105, opacity: .72, duration: .36 }, .28)
        .to(light, { opacity: 0, duration: .22 }, .64)
        .to(second, { rotationY: 0, xPercent: 0, scale: 1, autoAlpha: 1, duration: .80 }, .28)
        .fromTo('.story-second .story-bigtype', { yPercent: 20, opacity: .2 }, { yPercent: 0, opacity: 1, duration: .57 }, .50)
        .fromTo('.story-second .story-photo', { xPercent: 8, rotate: 5 }, { xPercent: 0, rotate: 0, duration: .65 }, .46)
        .to({}, { duration: .20 }) // a small scroll-hold on the second panel
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={root} className="scroll-story" id="home" aria-label="Portfolio introduction and leadership story">
      <div className="story-stage">
        <article className="story-face story-first" aria-label="Introduction">
          <div className="story-grid" aria-hidden="true" />


          <div className="story-inner wrap">
            <div className="story-copy story-bigtype">
              <p className="story-eyebrow"><span className="story-tinyline"/> PERSONAL PORTFOLIO / 2026</p>
              <h1>ARTHUR<br/><em>FIKRY</em><br/>SWARA<span className="story-name-point">.</span></h1>
              <p className="story-role">BUSINESS STATISTICS <b>●</b> DATA ANALYTICS <b>●</b> TECHNOLOGY</p>
              <p className="story-intro">Turning complex information into meaningful insights, predictive solutions, and practical digital experiences.</p>
              <div className="story-actions">
                <a href="#projects" className="story-primary">EXPLORE MY WORK <ArrowUpRight size={17}/></a>
                <a href={site.cvPath} target="_blank" rel="noopener noreferrer" className="story-textbutton">VIEW CV <Download size={16}/></a>
              </div>
            </div>
            <div className="story-portrait story-photo story-portrait-front">

              <img src="/arthur-formal-cutout.png" alt="Arthur Fikry Swara in formal attire" fetchPriority="high" />
              <span className="story-photo-tag">01 — STATISTICS & TECHNOLOGY</span>
            </div>
          </div>
          <div className="story-index">01 <span>/</span> 02</div>
        </article>

        <article className="story-face story-second" id="leadership" aria-label="Leadership and impact">
          <div className="story-grid" aria-hidden="true" />
          <div className="story-leadership-scene story-photo" aria-hidden="true"><img src="/arthur-leadership-original.webp" alt="" /></div>
          <div className="story-inner wrap">
            <div className="story-copy story-bigtype story-leadership-copy">
              <p className="story-eyebrow"><span className="story-tinyline"/> 02 / THE PERSON BEHIND THE DATA</p>
              <h2>LEADERSHIP<br/><em>& IMPACT</em><span className="story-name-point">.</span></h2>
              <p className="story-role">COLLABORATION <b>●</b> COMMUNICATION <b>●</b> INITIATIVE</p>
              <p className="story-intro">Beyond statistics, I take on leadership roles, collaborate across teams, and contribute to meaningful initiatives within the campus community.</p>
              <div className="story-actions">
                <a href="#experience" className="story-primary">EXPLORE EXPERIENCE <ArrowUpRight size={17}/></a>
                <a href={site.whatsappUrl} target="_blank" rel="noopener noreferrer" className="story-textbutton">CONTACT ME <MessageCircle size={16}/></a>
              </div>
            </div>

          </div>
          <div className="story-index">02 <span>/</span> 02</div>
        </article>
        <div className="story-light-sweep" aria-hidden="true"/>
        <div className="story-bottom-indicator" aria-hidden="true">
          <span className="story-bottom-hint">SCROLL TO ROTATE</span>
          <div className="story-progress"><div className="story-progress-fill"/></div>
          <ArrowDownRight size={19}/>
        </div>
      </div>
    </section>
  )
}
