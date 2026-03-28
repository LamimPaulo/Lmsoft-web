import styles from './Process.module.css'
import { site } from '@/content/siteCopy'
import { useInView } from '@/hooks/useInView'

const DELAYS = ['0ms', '80ms', '160ms', '240ms']

export function Process() {
  const { process } = site
  const { ref, inView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className={styles.process} id={process.id}>
      <div className="container">
        <div className={`${styles.header} ${styles.reveal} ${inView ? styles.visible : ''}`}>
          <span className="section-badge">{process.badge}</span>
          <h2 className="section-title">{process.title}</h2>
        </div>
        <div className={styles.steps}>
          {process.steps.map((step, i) => (
            <div
              key={step.number}
              className={`${styles.step} ${styles.reveal} ${inView ? styles.visible : ''}`}
              style={{ transitionDelay: inView ? DELAYS[i] : '0ms' }}
            >
              <div className={styles.stepNumber} aria-hidden="true">{step.number}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
