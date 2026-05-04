'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

/* Applies mouse-tracking 3D tilt + shine to a card element */
function addCardTilt(el: HTMLElement, intensity = 10) {
  const onMove = (e: MouseEvent) => {
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const cx = rect.width / 2
    const cy = rect.height / 2
    const rotX = ((y - cy) / cy) * -intensity
    const rotY = ((x - cx) / cx) * intensity
    const xPct = (x / rect.width) * 100
    const yPct = (y / rect.height) * 100

    gsap.to(el, {
      rotateX: rotX, rotateY: rotY,
      transformPerspective: 900,
      duration: 0.45, ease: 'power2.out',
    })
    el.style.setProperty('--shine-x', `${xPct}%`)
    el.style.setProperty('--shine-y', `${yPct}%`)
  }

  const onLeave = () => {
    gsap.to(el, {
      rotateX: 0, rotateY: 0,
      duration: 0.75, ease: 'elastic.out(1, 0.4)',
    })
  }

  el.addEventListener('mousemove', onMove)
  el.addEventListener('mouseleave', onLeave)

  return () => {
    el.removeEventListener('mousemove', onMove)
    el.removeEventListener('mouseleave', onLeave)
  }
}

export default function Animations() {
  useEffect(() => {
    const cleanups: (() => void)[] = []

    const ctx = gsap.context(() => {

      // ── PAGE LOAD TIMELINE ────────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      tl.from('.ip-topnav', { y: -56, autoAlpha: 0, duration: 0.6 })
        .from('.ip-page-hero .ip-eyebrow', { y: 18, autoAlpha: 0, duration: 0.55 }, '-=0.3')
        .from('.hero-line', { y: 56, autoAlpha: 0, duration: 0.9, stagger: 0.14, ease: 'power4.out' }, '-=0.4')
        .from('.ip-page-lede', { y: 22, autoAlpha: 0, duration: 0.65 }, '-=0.55')
        .from('.ip-hero-ctas > *', { y: 18, autoAlpha: 0, duration: 0.5, stagger: 0.1 }, '-=0.45')
        .from('.ip-hero-aside', { x: 40, autoAlpha: 0, duration: 0.8 }, '-=0.85')
        .from('.ip-cat-item', { y: 22, autoAlpha: 0, duration: 0.55, stagger: 0.045 }, '-=0.4')

      // ── 3D TILT: hero aside card ───────────────────────────────────────
      const aside = document.querySelector<HTMLElement>('.ip-hero-aside')
      if (aside) cleanups.push(addCardTilt(aside, 7))

      // ── 3D TILT + SHINE: product & hero cards ─────────────────────────
      document.querySelectorAll<HTMLElement>('.ip-card').forEach(card => {
        cleanups.push(addCardTilt(card, 12))
      })
      document.querySelectorAll<HTMLElement>('.ip-hero-card').forEach(card => {
        cleanups.push(addCardTilt(card, 7))
      })

      // ── FAB ───────────────────────────────────────────────────────────
      gsap.from('.ip-fab-whats', { scale: 0, autoAlpha: 0, duration: 0.65, delay: 1.6, ease: 'back.out(2.2)' })
      gsap.to('.ip-fab-whats', {
        scale: 1.1, duration: 0.5, delay: 2.8,
        ease: 'power1.inOut', yoyo: true, repeat: -1, repeatDelay: 4,
      })

      // ── SECTION TITLES ────────────────────────────────────────────────
      gsap.utils.toArray<Element>('.ip-section-head').forEach(el => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          y: 30, autoAlpha: 0, duration: 0.7, ease: 'power2.out',
        })
      })

      // ── RAILS (per rail, independent stagger) ─────────────────────────
      gsap.utils.toArray<Element>('.ip-rail, .ip-rail-3up').forEach(rail => {
        const items = (rail as HTMLElement).querySelectorAll(':scope > .ip-rail-item')
        if (!items.length) return
        gsap.from(items, {
          scrollTrigger: { trigger: rail, start: 'top 82%', once: true },
          y: 52, autoAlpha: 0, duration: 0.65, ease: 'power2.out', stagger: 0.08,
        })
      })

      // ── TROCA — scale + split ─────────────────────────────────────────
      const trocaEl = document.querySelector<HTMLElement>('.ip-troca')
      if (trocaEl) {
        gsap.from(trocaEl, {
          scrollTrigger: { trigger: trocaEl, start: 'top 80%', once: true },
          scale: 0.95, autoAlpha: 0, duration: 0.75, ease: 'power3.out',
        })
        const [left, right] = Array.from(trocaEl.children) as HTMLElement[]
        gsap.from(left, { scrollTrigger: { trigger: trocaEl, start: 'top 78%', once: true }, x: -52, autoAlpha: 0, duration: 0.9, ease: 'power3.out' })
        if (right) gsap.from(right, { scrollTrigger: { trigger: trocaEl, start: 'top 78%', once: true }, x: 52, autoAlpha: 0, duration: 0.9, ease: 'power3.out' })
      }

      // ── FEATURE TILES ─────────────────────────────────────────────────
      gsap.from('.ip-feature-tile', {
        scrollTrigger: { trigger: '.ip-feature-row', start: 'top 85%', once: true },
        y: 36, autoAlpha: 0, duration: 0.65, ease: 'power2.out', stagger: 0.11,
      })

      // ── STORE CARDS ───────────────────────────────────────────────────
      gsap.from('#visite .ip-store-card', {
        scrollTrigger: { trigger: '#visite', start: 'top 85%', once: true },
        y: 36, autoAlpha: 0, duration: 0.75, ease: 'power2.out', stagger: 0.18,
      })

      // ── QUICK LINKS ───────────────────────────────────────────────────
      gsap.from('.ip-quick-pill', {
        scrollTrigger: { trigger: '.ip-quick', start: 'top 92%', once: true },
        y: 16, autoAlpha: 0, duration: 0.4, ease: 'power2.out', stagger: 0.045,
      })

      // ── FOOTER ────────────────────────────────────────────────────────
      gsap.from('.ip-footer', {
        scrollTrigger: { trigger: '.ip-footer', start: 'top 95%', once: true },
        y: 20, autoAlpha: 0, duration: 0.6, ease: 'power2.out',
      })

      // ── PARALLAX hero card images (desktop only) ──────────────────────
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px)', () => {
        gsap.utils.toArray<Element>('.ip-hero-art').forEach(art => {
          gsap.to(art, {
            y: -44, ease: 'none',
            scrollTrigger: {
              trigger: (art as HTMLElement).closest('.ip-hero-card'),
              start: 'top bottom', end: 'bottom top', scrub: 1.2,
            },
          })
        })
        // Hero aside parallax
        gsap.to('.ip-hero-aside', {
          y: -24, ease: 'none',
          scrollTrigger: {
            trigger: '.ip-page-hero',
            start: 'top top', end: 'bottom top', scrub: 1.5,
          },
        })
        // Category icons floating effect
        gsap.to('.ip-cat-rail', {
          y: -12, ease: 'none',
          scrollTrigger: {
            trigger: '.ip-page-hero',
            start: 'top top', end: 'bottom top', scrub: 1,
          },
        })
      })

    })

    return () => {
      cleanups.forEach(fn => fn())
      ctx.revert()
    }
  }, [])

  return null
}
