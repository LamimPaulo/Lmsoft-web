import styles from './Hero.module.css'
import { site } from '@/content/siteCopy'

export function Hero() {
  const { hero, stats } = site

  return (
    <section className={styles.hero} id="hero" aria-label="Introdução">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.orb1} aria-hidden="true" />
      <div className={styles.orb2} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.badge}>
          <span className={styles.dot} aria-hidden="true" />
          {hero.badge}
        </div>

        <h1 className={styles.headline}>
          {hero.headline[0]}
          <br />
          <span className={styles.gradText}>{hero.headline[1]}</span>
        </h1>

        <p className={styles.sub}>{hero.sub}</p>

        <div className={styles.actions}>
          <a href={hero.cta.href} className={styles.btnPrimary}>
            {hero.cta.label}
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href={hero.ctaSecondary.href} className={styles.btnSecondary}>
            {hero.ctaSecondary.label}
          </a>
        </div>

        <div className={styles.statsRow} role="list" aria-label="Números da LM Soft">
          {stats.map(s => (
            <div key={s.label} className={styles.stat} role="listitem">
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
