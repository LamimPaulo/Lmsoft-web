import styles from './Services.module.css'
import { site } from '@/content/siteCopy'
import { useInView } from '@/hooks/useInView'

const ICONS: Record<string, React.ReactNode> = {
  code: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  puzzle: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v6m0 0H3m6 0h12M3 9v10a2 2 0 0 0 2 2h4m-6-6h6m0 0v6m0-6h12m0 0v6a2 2 0 0 1-2 2h-4m0 0v-6" />
    </svg>
  ),
  layers: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="12 2 2 7 12 12 22 7 12 2" />
      <polyline points="2 17 12 22 22 17" />
      <polyline points="2 12 12 17 22 12" />
    </svg>
  ),
  refresh: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  ),
}

const DELAYS = ['0ms', '80ms', '160ms', '240ms']

export function Services() {
  const { services } = site
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section
      ref={ref}
      className={styles.services}
      id={services.id}
    >
      <div className="container">
        <div className={`${styles.header} ${styles.reveal} ${inView ? styles.visible : ''}`}>
          <span className="section-badge">{services.badge}</span>
          <h2 className="section-title">{services.title}</h2>
        </div>
        <div className={styles.grid}>
          {services.items.map((item, i) => (
            <div
              key={item.title}
              className={`${styles.card} ${styles.reveal} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: inView ? DELAYS[i] : '0ms' }}
            >
              <div className={styles.icon} aria-hidden="true">
                {ICONS[item.icon]}
              </div>
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardDesc}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
