import { useEffect, useId, useState } from 'react'
import { createPortal } from 'react-dom'
import { ArrowRight, Calendar, CheckCircle2, X } from 'lucide-react'
import { COURSE_DETAILS } from '../../constants/courseDetails'
import { PHONE } from '../../constants/content'

const EMPTY_FORM = { name: '', phone: '', email: '', course: '', message: '' }

function buildDemoWhatsApp({ name, phone, email, course, message }) {
  const lines = [
    'Hi NSR Academy, I would like to book a free GenAI demo session.',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    course ? `Course interest: ${course}` : null,
    message ? `Preferred timing / notes: ${message}` : null,
  ].filter(Boolean)

  return `https://wa.me/91${PHONE}?text=${encodeURIComponent(lines.join('\n'))}`
}

export default function DemoModal({ open, onClose }) {
  const titleId = useId()
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (!open) return undefined

    setForm(EMPTY_FORM)
    setErrors({})
    document.body.style.overflow = 'hidden'

    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [open, onClose])

  if (!open) return null

  const update = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name'
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) next.phone = 'Enter a valid 10-digit phone number'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    window.open(
      buildDemoWhatsApp({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        course: form.course,
        message: form.message.trim(),
      }),
      '_blank',
      'noopener,noreferrer',
    )
    onClose()
  }

  return createPortal(
    <div className="enroll-modal-root" role="dialog" aria-modal="true" aria-labelledby={titleId}>
      <button type="button" className="enroll-modal-backdrop" aria-label="Close demo booking form" onClick={onClose} />

      <div className="enroll-modal-panel">
        <div className="enroll-modal-header">
          <div>
            <p className="enroll-modal-eyebrow">Free session</p>
            <h2 id={titleId} className="enroll-modal-title">
              Book a demo
            </h2>
            <p className="enroll-modal-subtitle">
              Share your details — we&apos;ll schedule your GenAI demo on WhatsApp.
            </p>
          </div>
          <button type="button" className="enroll-modal-close" onClick={onClose} aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form className="enroll-modal-form" onSubmit={handleSubmit} noValidate>
          <div className="enroll-modal-grid">
            <div className="enroll-modal-field">
              <label htmlFor="demo-name">Full name *</label>
              <input
                id="demo-name"
                type="text"
                value={form.name}
                onChange={update('name')}
                placeholder="Your full name"
                autoComplete="name"
              />
              {errors.name && <p className="enroll-modal-error">{errors.name}</p>}
            </div>

            <div className="enroll-modal-field">
              <label htmlFor="demo-phone">Phone number *</label>
              <input
                id="demo-phone"
                type="tel"
                value={form.phone}
                onChange={update('phone')}
                placeholder="10-digit mobile number"
                autoComplete="tel"
                inputMode="numeric"
              />
              {errors.phone && <p className="enroll-modal-error">{errors.phone}</p>}
            </div>

            <div className="enroll-modal-field">
              <label htmlFor="demo-email">Email</label>
              <input
                id="demo-email"
                type="email"
                value={form.email}
                onChange={update('email')}
                placeholder="you@email.com (optional)"
                autoComplete="email"
              />
            </div>

            <div className="enroll-modal-field">
              <label htmlFor="demo-course">Course interest</label>
              <select id="demo-course" value={form.course} onChange={update('course')}>
                <option value="">Not sure yet</option>
                {COURSE_DETAILS.map((c) => (
                  <option key={c.slug} value={c.title}>
                    {c.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="enroll-modal-field enroll-modal-field--full">
              <label htmlFor="demo-message">Preferred timing</label>
              <textarea
                id="demo-message"
                rows={3}
                value={form.message}
                onChange={update('message')}
                placeholder="Weekday / weekend, morning or evening — optional"
              />
            </div>
          </div>

          <div className="enroll-modal-actions">
            <button type="submit" className="btn-hero enroll-modal-submit">
              Book demo
              <Calendar className="h-4 w-4" />
            </button>
            <button type="button" className="enroll-modal-cancel" onClick={onClose}>
              Cancel
            </button>
          </div>

          <p className="enroll-modal-footnote">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-500" />
            We&apos;ll confirm your demo slot on WhatsApp within one business day.
          </p>
        </form>
      </div>
    </div>,
    document.body,
  )
}
