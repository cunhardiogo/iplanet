'use client'
import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function Animations() {
  useEffect(() => {
    const ctx = gsap.context(() => {

      // ── PAGE LOAD TIMELINE ────────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      // Nav desce suavemente
      tl.from('.ip-topnav', {
        y: -56, autoAlpha: 0, duration: 0.6,
      })
      // Eyebrow sobe
      .from('.ip-page-hero .ip-eyebrow', {
        y: 18, autoAlpha: 0, duration: 0.55,
      }, '-=0.3')
      // Título linha por linha com stagger — efeito muito elegante
      .from('.hero-line', {
        y: 56, autoAlpha: 0, duration: 0.9,
        stagger: 0.14,
        ease: 'power4.out',
      }, '-=0.4')
      // Lede / subtítulo
      .from('.ip-page-lede', {
        y: 22, autoAlpha: 0, duration: 0.65,
      }, '-=0.55')
      // CTAs em stagger
      .from('.ip-hero-ctas > *', {
        y: 18, autoAlpha: 0, duration: 0.5,
        stagger: 0.1,
      }, '-=0.45')
      // Card lateral desliza da direita
      .from('.ip-hero-aside', {
        x: 40, autoAlpha: 0, duration: 0.8,
        ease: 'power3.out',
      }, '-=0.85')
      // Ícones de categoria sobem em cascata
      .from('.ip-cat-item', {
        y: 22, autoAlpha: 0, duration: 0.55,
        stagger: 0.045,
      }, '-=0.4')

      // ── FAB — aparece com "pulo" depois da página carregar ─────────────
      gsap.from('.ip-fab-whats', {
        scale: 0, autoAlpha: 0, duration: 0.65, delay: 1.6,
        ease: 'back.out(2.2)',
      })
      // Pulsação contínua sutil
      gsap.to('.ip-fab-whats', {
        scale: 1.1, duration: 0.5, delay: 2.8,
        ease: 'power1.inOut', yoyo: true, repeat: -1, repeatDelay: 4,
      })

      // ── SECTION TITLES — fade + slide por scroll ──────────────────────
      gsap.utils.toArray<Element>('.ip-section-head').forEach(el => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          y: 30, autoAlpha: 0, duration: 0.7, ease: 'power2.out',
        })
      })

      // ── RAILS — cards sobem em stagger (cada rail independente) ───────
      gsap.utils.toArray<Element>('.ip-rail, .ip-rail-3up').forEach(rail => {
        const items = (rail as HTMLElement).querySelectorAll(':scope > .ip-rail-item')
        if (!items.length) return
        gsap.from(items, {
          scrollTrigger: { trigger: rail, start: 'top 82%', once: true },
          y: 52, autoAlpha: 0, duration: 0.65, ease: 'power2.out', stagger: 0.08,
        })
      })

      // ── TROCA — escala + split esquerda/direita ───────────────────────
      const trocaEl = document.querySelector<HTMLElement>('.ip-troca')
      if (trocaEl) {
        // O bloco inteiro escala levemente ao entrar
        gsap.from(trocaEl, {
          scrollTrigger: { trigger: trocaEl, start: 'top 80%', once: true },
          scale: 0.95, autoAlpha: 0, duration: 0.75, ease: 'power3.out',
        })
        const children = Array.from(trocaEl.children)
        // Texto vem da esquerda
        gsap.from(children[0], {
          scrollTrigger: { trigger: trocaEl, start: 'top 78%', once: true },
          x: -52, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
        })
        // Imagem vem da direita
        if (children[1]) {
          gsap.from(children[1], {
            scrollTrigger: { trigger: trocaEl, start: 'top 78%', once: true },
            x: 52, autoAlpha: 0, duration: 0.9, ease: 'power3.out',
          })
        }
      }

      // ── FEATURE TILES — stagger diagonal ─────────────────────────────
      gsap.from('.ip-feature-tile', {
        scrollTrigger: { trigger: '.ip-feature-row', start: 'top 85%', once: true },
        y: 36, autoAlpha: 0, duration: 0.65, ease: 'power2.out', stagger: 0.11,
      })

      // ── STORE CARDS ───────────────────────────────────────────────────
      gsap.from('#visite .ip-store-card', {
        scrollTrigger: { trigger: '#visite', start: 'top 85%', once: true },
        y: 36, autoAlpha: 0, duration: 0.75, ease: 'power2.out', stagger: 0.18,
      })

      // ── QUICK LINKS — aparecem em onda ───────────────────────────────
      gsap.from('.ip-quick-pill', {
        scrollTrigger: { trigger: '.ip-quick', start: 'top 92%', once: true },
        y: 16, autoAlpha: 0, duration: 0.4, ease: 'power2.out', stagger: 0.045,
      })

      // ── FOOTER ────────────────────────────────────────────────────────
      gsap.from('.ip-footer', {
        scrollTrigger: { trigger: '.ip-footer', start: 'top 95%', once: true },
        y: 20, autoAlpha: 0, duration: 0.6, ease: 'power2.out',
      })

      // ── PARALLAX nas imagens dos hero cards ───────────────────────────
      // Só desktop: imagens se movem mais devagar que o scroll — cria profundidade
      const mm = gsap.matchMedia()
      mm.add('(min-width: 768px)', () => {
        gsap.utils.toArray<Element>('.ip-hero-art').forEach(art => {
          gsap.to(art, {
            y: -44,
            ease: 'none',
            scrollTrigger: {
              trigger: (art as HTMLElement).closest('.ip-hero-card'),
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          })
        })

        // Hero aside: leve parallax vertical no scroll
        gsap.to('.ip-hero-aside', {
          y: -24,
          ease: 'none',
          scrollTrigger: {
            trigger: '.ip-page-hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1.5,
          },
        })
      })

    })

    return () => ctx.revert()
  }, [])

  return null
}
