import styles from './Footer.module.css'
import { site } from '@/content/siteCopy'

export function Footer() {
  const { footer } = site

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <p className={styles.logo}>{footer.logo}</p>
            <p className={styles.tagline}>{footer.tagline}</p>
          </div>

          <nav className={styles.navCol} aria-label="Links do rodapé">
            <p className={styles.colLabel}>Navegação</p>
            {footer.links.map(l => (
              <a key={l.href} href={l.href} className={styles.navLink}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className={styles.contactCol}>
            <p className={styles.colLabel}>Contato</p>
            <a href={`mailto:${footer.email}`} className={styles.email}>
              {footer.email}
            </a>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>{footer.copy}</p>
        </div>
      </div>
    </footer>
  )
}
