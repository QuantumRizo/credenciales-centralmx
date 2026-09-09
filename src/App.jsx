import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'
import InfinityMark from './InfinityMark'
import SceneTrace from './SceneTrace'

const sections = [['intro', 'Inicio'], ['positioning', 'Posicionamiento'], ['team', 'Equipo'], ['solutions', 'Media Solutions'], ['experience', 'Brand Experience'], ['partners', 'Partners'], ['work', 'Casos'], ['centralsimi', 'CentralSimi'], ['why', '¿Por qué Central?'], ['contact', 'Gracias']]
// Legacy asset filenames do not match their artwork; labels identify the actual brands.
const partners = [['dunas.svg', 'Farmacias Similares'], ['senosiain.png', 'Sika'], ['sansui.png', 'Sansui'], ['dongfeng.png', 'Senosiain'], ['waldos-logo.png', "Waldo's"], ['heraldo.png', 'Dongfeng'], ['sika.png', 'El Heraldo'], ['waldos.png', 'd-uñas']]
const teamGroups = [
  { label: 'CEO', people: [['team-patricia.jpg', 'Fanny García']] },
  { label: 'STRATEGY & DATA ANALYTICS', people: [['team-sebastian.jpg', 'Jose Miranda'], ['team-jorge.jpg', 'Félix Rizo'], ['team-maricela.jpg', 'Sebastián Morales'], ['team-eugenio.png', 'Jorge Rodríguez']] },
  { label: 'INNOVATIVE MEDIA SOLUTIONS', people: [['team-carolina.jpg', 'Patricia Martínez'], ['team-jose.jpeg', 'Juan Pablo Millán'], ['team-fanny.jpg', 'Maricela García']] },
  { label: 'DIGITAL & CREATIVE MEDIA', people: [['team-felix.jpg', 'Carolina Anaya'], ['team-carolina-extra.jpg', 'Eugenio Lamadrid']] },
]

function App() {
  const [active, setActive] = useState('intro')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const lenis = new Lenis({ lerp: 0.08, smoothWheel: true })
    let frame
    const raf = (time) => { lenis.raf(time); frame = requestAnimationFrame(raf) }
    frame = requestAnimationFrame(raf)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.find((entry) => entry.isIntersecting)
      if (visible) {
        setActive(visible.target.id)
        visible.target.classList.add('is-revealed')
      }
    }, { rootMargin: '-38% 0px -48% 0px' })
    document.querySelectorAll('[data-section]').forEach((section) => observer.observe(section))
    const context = gsap.context(() => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      gsap.utils.toArray('.scene').forEach((scene) => {
        if (scene.id === 'intro') return
        gsap.fromTo(scene.querySelectorAll('.section-number, h1, h2, .statement-intro, .statement-detail, .intro-copy, .team-facts, .team-portraits, .solution-list, .partner-field, .case-rail, .simi-media, .why-grid, .contact-content'),
          { y: 34, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: scene, start: 'top 72%', once: true } })
      })
      gsap.to('.orbit-one', { yPercent: 8, rotate: -20, ease: 'none', scrollTrigger: { trigger: '#intro', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.orbit-two', { yPercent: -12, rotate: -32, ease: 'none', scrollTrigger: { trigger: '#intro', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.technical-grid', { yPercent: 10, ease: 'none', scrollTrigger: { trigger: '#intro', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.utils.toArray('.positioning-copy').forEach((copy) => {
        gsap.fromTo(copy.querySelectorAll('.word'), { opacity: 0.3 }, { opacity: 1, stagger: 0.12, ease: 'none', scrollTrigger: { trigger: copy, start: 'top 85%', end: 'bottom 50%', scrub: 0.5 } })
      })
      gsap.utils.toArray('.scene-trace').forEach((trace) => {
        gsap.fromTo(trace.querySelectorAll('path'), { strokeDashoffset: 1 }, { strokeDashoffset: 0, stagger: 0.16, ease: 'none', scrollTrigger: { trigger: trace.closest('.scene'), start: 'top 90%', end: 'bottom 65%', scrub: 0.8 } })
      })
      gsap.utils.toArray('.team-group, .solution-list article, .why-grid p').forEach((block) => {
        gsap.fromTo(block, { '--rule-progress': 0 }, { '--rule-progress': 1, duration: 1.1, ease: 'power2.inOut', scrollTrigger: { trigger: block, start: 'top 87%', toggleActions: 'play none none reverse' } })
      })
      gsap.utils.toArray('.scene h2, .solution-list h3').forEach((title) => {
        gsap.fromTo(title, { clipPath: 'inset(-15% -5% 115% -5%)' }, { clipPath: 'inset(-15% -5% -15% -5%)', duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: title, start: 'top 88%', toggleActions: 'play none none reverse' } })
      })
      gsap.fromTo('.team-portraits figure', { y: 55, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.07, duration: 0.65, ease: 'power3.out', scrollTrigger: { trigger: '#team', start: 'top 62%', once: true } })
    })
    return () => { observer.disconnect(); context.revert(); lenis.destroy(); cancelAnimationFrame(frame) }
  }, [])

  const goTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return <div className="credentials-shell">
    <header className="site-header">
      <button className="brand-lockup" onClick={() => goTo('intro')} aria-label="Ir al inicio"><img src="/Logo_CN_2025_Negro.webp" alt="Central MX" /><span>Credenciales 2026</span></button>
      <a href="mailto:hola@centraldenegociosmx.com">hola@centraldenegociosmx.com</a>
      <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>Índice</button>
    </header>
    <nav className={`section-rail ${menuOpen ? 'is-open' : ''}`} aria-label="Secciones">
      {sections.map(([id, label], index) => <button className={active === id ? 'active' : ''} onClick={() => goTo(id)} key={id}><span>{String(index + 1).padStart(2, '0')}</span>{label}</button>)}
    </nav>
    <main>
      <section id="intro" data-section className="scene intro-scene is-revealed">
        <div className="technical-grid" /><div className="infinity-orbit orbit-one" /><div className="infinity-orbit orbit-two" />
        <div className="intro-content"><InfinityMark /><h1>CENTRAL MX<br />CREDENCIALES<br />2026</h1><p className="intro-copy">MEDIA &amp; BUSINESS STRATEGY · MEDIA BUYING · DATA ANALYTICS · BRAND EXPERIENCE</p><button className="scroll-cue" onClick={() => goTo('positioning')}>↓</button></div><p className="side-year">2026</p>
      </section>
      <section id="positioning" data-section className="scene statement-scene"><SceneTrace /><p className="section-number">01 — OUR POSITIONING</p><div className="statement-wrap"><p className="statement-intro positioning-copy">{"Somos la agencia boutique para marcas que necesitan".split(" ").map((word, index) => <span className="word" key={index}>{word} </span>)}</p><h2>{'ATENCIÓN'}<br />SENIOR.</h2><p className="statement-detail positioning-copy">{"Criterio de negocio, capacidad de ejecución, gobernanza y negociación de alto valor, sin la burocracia de una red global.".split(" ").map((word, index) => <span className="word" key={index}>{word} </span>)}</p></div><div className="word-stream">AGENCIA BOUTIQUE · RAPIDEZ · CERCANÍA · EXPERIENCIA · NEGOCIACIÓN · FLEXIBILIDAD · PARTNERSHIP</div></section>
      <section id="team" data-section className="scene team-scene"><SceneTrace /><p className="section-number">02 — YOUR TEAM</p><div className="team-heading"><h2>YOUR<br />TEAM.</h2><p>Un equipo multidisciplinario de más de 20 especialistas que integra décadas de experiencia con talento joven, creativo y data-driven para resolver retos reales de negocio.</p></div><div className="team-facts"><div><strong>+35</strong><span>años de experiencia<br />en medios</span></div><div><strong>+8</strong><span>años construyendo<br />soluciones</span></div><div><strong>+20</strong><span>especialistas<br />multidisciplinarios</span></div></div><div className="team-groups">{teamGroups.map((group) => <section className="team-group" key={group.label}><h3>{group.label}</h3><div className="team-portraits">{group.people.map(([file, name]) => <figure className={name === 'Juan Pablo Millán' ? 'portrait-juan' : ''} key={name}><span className="portrait-image"><img src={`/credenciales/${file}`} alt={name} /></span><figcaption>{name}</figcaption></figure>)}</div></section>)}</div></section>
      <section id="solutions" data-section className="scene solutions-scene"><SceneTrace /><p className="section-number">03 — BUSINESS-DRIVEN MEDIA SOLUTIONS</p><div className="solutions-layout"><div className="solutions-showcase"><h2>BUSINESS-DRIVEN<br />MEDIA<br />SOLUTIONS.</h2><figure className="solutions-deck-image"><img src="/credenciales/media-solutions-analytics.jpg" alt="Análisis de datos y medios" /></figure></div><div className="solution-list"><article><span>01</span><img src="/credenciales/icon-media-strategy.png" alt="" aria-hidden="true" /><h3>MEDIA & BUSINESS STRATEGY</h3><p>TACTICAL DEVELOPMENT · BUSINESS CONSULTING · ANALYSIS · 360 CAMPAIGNS · DATA-DRIVEN STRATEGIES</p></article><article><span>02</span><img src="/credenciales/icon-media-buying.png" alt="" aria-hidden="true" /><h3>MEDIA BUYING</h3><p>ON: PROGRAMMATIC, SEARCH, SOCIAL ADS, SEM / SEO, LEAD GENERATION. OFF: OOH; TV, RADIO, PRINT. NEGOTIATIONS</p></article><article><span>03</span><img src="/credenciales/icon-campaign-reporting.png" alt="" aria-hidden="true" /><h3>CAMPAIGN REPORTING</h3><p>MEASUREMENT & KPIs · POST-BUY ANALYSIS · VISUALIZATION DASHBOARDS · CAMPAIGN OPTIMIZATION</p></article><article><span>04</span><img src="/credenciales/icon-data-analytics.png" alt="" aria-hidden="true" /><h3>DATA ANALYTICS</h3><p>BRAND TRACKING & BRAND LIFT · WEB ANALYTICS · DATA VISUALIZATION · MARKET & ADVERTISING RESEARCH · MARKETING MIX MODELING</p></article></div></div></section>
      <section id="experience" data-section className="scene experience-scene"><SceneTrace /><p className="section-number">04 — BRAND EXPERIENCE</p><h2>BRAND<br />EXPERIENCE.</h2><div className="solution-list"><article><span>01</span><h3>CREATIVE STRATEGY & PRODUCTION</h3><p>Creative & communication strategy · Design · Post production · Shootings · Audio Branding</p></article><article><span>02</span><h3>SOCIAL MEDIA</h3><p>Creative & design · Content creation · Community magement · Social listening</p></article><article><span>03</span><h3>PUBLIC RELATIONS</h3><p>Cevent magement & planning · Talent management · Media relations & profile development · Communication guidelines · High_impact activations · Influencer marketing</p></article><article><span>04</span><h3>SPONSORSHIPS & PARTNERSHIPS</h3><p>Coordination & mediation · Strategic consulting · Impact Analysis · Negotiation & Closing · Spomsorship management · Proposals & implementation · Special activation · Implementation</p></article></div><div className="brand-gallery"><img src="/credenciales/brand-creative.png" alt="Creative Strategy & Production" /><img src="/credenciales/brand-social.jpg" alt="Social Media" /><img src="/credenciales/brand-pr.png" alt="Public Relations" /><img src="/credenciales/brand-partnerships.png" alt="Sponsorships & Partnerships" /></div></section>
      <section id="partners" data-section className="scene partners-scene"><SceneTrace /><p className="section-number">05 — OUR PARTNERS</p><div className="partners-title"><h2>OUR<br />PARTNERS.</h2></div><div className="partner-field">{partners.map(([file, name]) => <div className="partner-mark" data-logo={file} key={name}><img src={`/credenciales/${file}`} alt={name} /></div>)}</div></section>
      <section id="work" data-section className="scene work-scene"><SceneTrace /><p className="section-number">06 — CASOS DE ÉXITO</p><div className="work-title"><h2>CASOS DE<br />ÉXITO.</h2></div><div className="case-rail"><article className="case"><img src="/credenciales/monterrey-stage.jpg" alt="Activación Host City Supporter Monterrey" /><div><span>01 · CENTRAL SIMI</span><h3>HOST CITY<br />SUPPORTER<br />MONTERREY</h3><p>−80% costo de negociación</p></div></article><article className="case"><img src="/credenciales/sika-america-bienvenido.png" alt="Bienvenido: Club América y Sika" /><div><span>02 · SIKA</span><h3>PATROCINIO<br />CLUB AMÉRICA</h3><p>+12M de media value</p></div></article><article className="case"><img src="/credenciales/waldos-campaign.png" alt="Campaña Waldo's" /><div><span>03 · WALDO'S</span><h3>ALWAYS ON<br />& RETAIL</h3><p>+5% brand purchase</p></div></article></div></section>
      <section id="centralsimi" data-section className="scene simi-scene"><SceneTrace /><p className="section-number">07 — CENTRAL SIMI</p><div className="simi-copy"><p className="eyebrow">AGENCIA ÚNICA · FARMACIAS SIMILARES</p><h2>CENTRAL<br />SIMI.</h2><p>Agencia especializada y exclusiva del ecosistema Farmacias Similares, enfocada en la planeación estratégica y compra de medios publicitarios offline con integración digital, innovación comercial y expansión de activos de marca.</p></div><div className="simi-media"><img src="/credenciales/centralsimi-campaign.png" alt="Campaña CentralSimi" /><div className="simi-stat"><strong>+15</strong><span>campañas<br />anuales</span><strong>+100</strong><span>socios<br />comerciales</span><strong>100%</strong><span>cobertura<br />nacional</span></div></div></section>
      <section id="why" data-section className="scene why-scene"><SceneTrace /><p className="section-number">08 — ¿POR QUÉ CENTRAL?</p><h2>{'¿POR QUÉ'}<br />CENTRAL?</h2><div className="why-grid"><p>+10 categorías de especialización</p><p>Client-centric: flexibilidad y agilidad</p><p>Estrategias 100% a medida y enfocadas</p><p>Equipo híbrido – experiencia + juventud</p><p>Ecosistema de socios estratégicos</p><p>Business intelligence</p><p>Tecnología propia</p><p>Data analytics, reporting, automatización y optimización de inversión</p></div></section>
      <section id="contact" data-section className="scene contact-scene"><SceneTrace /><div className="contact-orbit" /><p className="section-number">09 — GRACIAS</p><div className="contact-content"><img src="/Logo_CN_2025_Negro.webp" alt="Central MX" /><h2>GRACIAS</h2><a href="mailto:hola@centraldenegociosmx.com">hola@centraldenegociosmx.com</a><p>Lope de Vega 132, Piso 2<br />Polanco V Sección, CDMX</p></div><p className="confidential">La información contenida en esta presentación es confidencial y propiedad de Central MX.</p></section>
    </main>
  </div>
}

export default App
