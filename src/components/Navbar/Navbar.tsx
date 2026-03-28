import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'
import { site } from '@/content/siteCopy'
import { useActiveSection } from '@/hooks/useActiveSection'

const SECTION_IDS = ['servicos', 'tecnologias', 'processo', 'faq', 'sobre', 'contato']

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeSection = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#hero" className={styles.logo} aria-label="LM Soft — Início">
          {site.nav.logo}
        </a>

        <nav
          id="main-nav"
          className={`${styles.nav} ${open ? styles.open : ''}`}
          aria-label="Navegação principal"
        >
          {site.nav.links.map(l => {
            const id = l.href.replace('#', '')
            const isActive = activeSection === id
            return (
              <a
                key={l.href}
                href={l.href}
                className={`${styles.link} ${isActive ? styles.active : ''}`}
                onClick={() => setOpen(false)}
                aria-current={isActive ? 'true' : undefined}
              >
                {l.label}
              </a>
            )
          })}
          <a href={site.nav.cta.href} className={styles.cta} onClick={() => setOpen(false)}>
            {site.nav.cta.label}
          </a>
        </nav>

        <button
          className={styles.hamburger}
          onClick={() => setOpen(v => !v)}
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="main-nav"
        >
          <span className={open ? styles.barOpen1 : ''} />
          <span className={open ? styles.barOpen2 : ''} />
          <span className={open ? styles.barOpen3 : ''} />
        </button>
      </div>
    </header>
  )
}
