import { useState } from 'react'
import styles from './FAQ.module.css'
import { site } from '@/content/siteCopy'
import { useInView } from '@/hooks/useInView'

export function FAQ() {
  const { faq } = site
  const [open, setOpen] = useState<number | null>(null)
  const { ref, inView } = useInView<HTMLElement>()

  const toggle = (i: number) => setOpen(prev => (prev === i ? null : i))

  return (
    <section
      ref={ref}
      className={`${styles.faq} ${inView ? styles.visible : ''}`}
      id={faq.id}
    >
      <div className="container">
        <div className={styles.header}>
          <span className="section-badge">{faq.badge}</span>
          <h2 className="section-title">{faq.title}</h2>
        </div>
        <div className={styles.list}>
          {faq.items.map((item, i) => {
            const isOpen = open === i
            return (
              <div key={i} className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
                <button
                  className={styles.question}
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span>{item.q}</span>
                  <span className={`${styles.icon} ${isOpen ? styles.iconOpen : ''}`} aria-hidden="true">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
                <div
                  id={`faq-answer-${i}`}
                  role="region"
                  aria-labelledby={`faq-question-${i}`}
                  className={`${styles.answerWrap} ${isOpen ? styles.answerOpen : ''}`}
                >
                  <div className={styles.answerInner}>
                    <p className={styles.answer}>{item.a}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
