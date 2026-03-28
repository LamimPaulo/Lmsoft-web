import type { FormEvent } from 'react';
import { useState } from 'react'
import styles from './Contact.module.css'
import { site } from '@/content/siteCopy'
import { useInView } from '@/hooks/useInView'

type Status = 'idle' | 'loading' | 'success' | 'error'

interface FormData {
  name: string
  email: string
  company: string
  message: string
}

interface Errors {
  name?: string
  email?: string
  message?: string
}

function validate(data: FormData): Errors {
  const errors: Errors = {}
  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Informe seu nome (mínimo 2 caracteres).'
  }
  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Informe um e-mail válido.'
  }
  if (!data.message.trim() || data.message.trim().length < 10) {
    errors.message = 'Mensagem muito curta (mínimo 10 caracteres).'
  }
  return errors
}

export function Contact() {
  const { contact } = site
  const { ref, inView } = useInView<HTMLElement>()
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState<FormData>({ name: '', email: '', company: '', message: '' })
  const [errors, setErrors] = useState<Errors>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof Errors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const errs = validate(form)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }

    setStatus('loading')

    const formspreeId = import.meta.env.VITE_FORMSPREE_ID as string | undefined

    if (!formspreeId) {
      // No endpoint configured — treat as error with guidance
      setStatus('error')
      return
    }

    try {
      const res = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || '(não informado)',
          message: form.message,
        }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      ref={ref}
      className={`${styles.contact} ${inView ? styles.visible : ''}`}
      id={contact.id}
    >
      <div className={styles.glow} aria-hidden="true" />
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.left}>
            <span className="section-badge">{contact.badge}</span>
            <h2 className="section-title">{contact.title}</h2>
            <p className="section-sub">{contact.sub}</p>

            <div className={styles.infoList} aria-label="Informações de contato">
              <div className={styles.infoItem}>
                <div className={styles.infoIcon} aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0 0 16 4H4a2 2 0 0 0-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.118z" />
                  </svg>
                </div>
                <a href="mailto:contato@lmsoft.com.br" className={styles.infoText}>
                  contato@lmsoft.com.br
                </a>
              </div>
              <div className={styles.infoItem}>
                <div className={styles.infoIcon} aria-hidden="true">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                </div>
                <span className={styles.infoText}>Santa Catarina, Brasil — remoto e presencial</span>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            {status === 'success' ? (
              <div className={styles.success} role="status" aria-live="polite">
                <div className={styles.successIcon} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </div>
                <h3 className={styles.successTitle}>{contact.successTitle}</h3>
                <p className={styles.successSub}>{contact.successSub}</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className={styles.form}
                noValidate
                aria-label="Formulário de contato"
              >
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="contact-name" className={styles.label}>
                      {contact.fields.name.label}
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder={contact.fields.name.placeholder}
                      className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                      aria-describedby={errors.name ? 'error-name' : undefined}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && (
                      <span id="error-name" className={styles.errorMsg} role="alert">{errors.name}</span>
                    )}
                  </div>
                  <div className={styles.field}>
                    <label htmlFor="contact-email" className={styles.label}>
                      {contact.fields.email.label}
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder={contact.fields.email.placeholder}
                      className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                      aria-describedby={errors.email ? 'error-email' : undefined}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && (
                      <span id="error-email" className={styles.errorMsg} role="alert">{errors.email}</span>
                    )}
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-company" className={styles.label}>
                    {contact.fields.company.label}
                  </label>
                  <input
                    id="contact-company"
                    name="company"
                    type="text"
                    autoComplete="organization"
                    value={form.company}
                    onChange={handleChange}
                    placeholder={contact.fields.company.placeholder}
                    className={styles.input}
                  />
                </div>

                <div className={styles.field}>
                  <label htmlFor="contact-message" className={styles.label}>
                    {contact.fields.message.label}
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={contact.fields.message.placeholder}
                    className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                    aria-describedby={errors.message ? 'error-message' : undefined}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <span id="error-message" className={styles.errorMsg} role="alert">{errors.message}</span>
                  )}
                </div>

                {status === 'error' && (
                  <p className={styles.formError} role="alert">{contact.errorMsg}</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={styles.submit}
                >
                  {status === 'loading' ? (
                    <>
                      <span className={styles.spinner} aria-hidden="true" />
                      {contact.submitting}
                    </>
                  ) : (
                    <>
                      {contact.submit}
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
