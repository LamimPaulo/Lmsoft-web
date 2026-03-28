import styles from './TechGrid.module.css'
import { site } from '@/content/siteCopy'
import { useInView } from '@/hooks/useInView'

const DELAYS = ['0ms', '80ms', '160ms', '240ms']

export function TechGrid() {
  const { tech } = site
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className={styles.tech} id={tech.id}>
      <div className="container">
        <div className={`${styles.header} ${styles.reveal} ${inView ? styles.visible : ''}`}>
          <span className="section-badge">{tech.badge}</span>
          <h2 className="section-title">{tech.title}</h2>
        </div>
        <div className={styles.groups}>
          {tech.groups.map((group, i) => (
            <div
              key={group.label}
              className={`${styles.group} ${styles.reveal} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: inView ? DELAYS[i] : '0ms' }}
            >
              <p className={styles.groupLabel}>{group.label}</p>
              <div className={styles.tags}>
                {group.items.map(item => (
                  <span key={item} className={styles.tag}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
