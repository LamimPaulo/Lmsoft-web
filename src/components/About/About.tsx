import styles from './About.module.css'
import { site } from '@/content/siteCopy'
import { useInView } from '@/hooks/useInView'

export function About() {
  const { about } = site
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className={styles.about} id={about.id}>
      <div className="container">
        <div className={styles.inner}>
          <div className={`${styles.left} ${styles.reveal} ${inView ? styles.visible : ''}`}>
            <span className="section-badge">{about.badge}</span>
            <h2 className="section-title">{about.title}</h2>
            <div className={styles.paragraphs}>
              {about.paragraphs.map((p, i) => (
                <p key={i} className={styles.para}>{p}</p>
              ))}
            </div>
            <ul className={styles.highlights} role="list">
              {about.highlights.map(h => (
                <li key={h} className={styles.highlight}>{h}</li>
              ))}
            </ul>
          </div>

          <div
            className={`${styles.right} ${styles.reveal} ${inView ? styles.visible : ''}`}
            style={{ transitionDelay: inView ? '120ms' : '0ms' }}
          >
            <div className={styles.card}>
              <div className={styles.cardGlow} aria-hidden="true" />
              <div className={styles.quoteIcon} aria-hidden="true">
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                  <path d="M0 24V14.4C0 10.4 1.06667 7.06667 3.2 4.4C5.38667 1.73333 8.42667 0.266667 12.32 0L13.44 2.72C11.04 3.2 9.09333 4.24 7.6 5.84C6.10667 7.44 5.28 9.33333 5.12 11.52H9.6V24H0ZM18.56 24V14.4C18.56 10.4 19.6267 7.06667 21.76 4.4C23.9467 1.73333 26.9867 0.266667 30.88 0L32 2.72C29.6 3.2 27.6533 4.24 26.16 5.84C24.6667 7.44 23.84 9.33333 23.68 11.52H28.16V24H18.56Z" fill="currentColor" />
                </svg>
              </div>
              <p className={styles.quote}>
                Acreditamos que bom software começa com entendimento profundo do negócio. Código é ferramenta — o objetivo é o seu crescimento.
              </p>
              <div className={styles.cardDivider} aria-hidden="true" />
              <p className={styles.quoteAuthor}>LM Soft — Princípio fundador</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
