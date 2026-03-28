import styles from './CTA.module.css'
import { site } from '@/content/siteCopy'
import { useInView } from '@/hooks/useInView'

export function CTA() {
  const { cta } = site
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className={styles.cta}>
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={`${styles.inner} ${styles.reveal} ${inView ? styles.visible : ''}`}>
          <h2 className={styles.title}>{cta.title}</h2>
          <p className={styles.sub}>{cta.sub}</p>
          <a href={cta.cta.href} className={styles.link}>
            <span>{cta.cta.label}</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
