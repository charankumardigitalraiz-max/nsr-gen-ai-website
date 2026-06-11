import { useState } from 'react'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { CONTACT_INQUIRY_TYPES } from '../../constants/contact'
import { PHONE } from '../../constants/content'

const EMPTY_FORM = { name: '', phone: '', email: '', inquiry: '', message: '' }

const inputClass =
  'h-9 w-full rounded-lg border border-[#00a86b]/20 bg-[#f1f8f4]/60 px-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#00a86b] focus:bg-white focus:ring-2 focus:ring-[#00a86b]/20'

const textareaClass =
  'min-h-[72px] w-full resize-none rounded-lg border border-[#00a86b]/20 bg-[#f1f8f4]/60 px-3 py-2 text-sm leading-snug text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#00a86b] focus:bg-white focus:ring-2 focus:ring-[#00a86b]/20'

function buildContactWhatsApp({ name, phone, email, inquiry, message }) {
  const lines = [
    'Hi NSR Academy, I would like to get in touch.',
    '',
    `Name: ${name}`,
    `Phone: ${phone}`,
    email ? `Email: ${email}` : null,
    `Inquiry: ${inquiry}`,
    `Message: ${message}`,
  ].filter(Boolean)

  return `https://wa.me/91${PHONE}?text=${encodeURIComponent(lines.join('\n'))}`
}

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY_FORM)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const set = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }))
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }))
    if (sent) setSent(false)
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Enter your name'
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g, ''))) next.phone = 'Enter a valid 10-digit number'
    if (!form.inquiry) next.inquiry = 'Select an inquiry type'
    if (!form.message.trim()) next.message = 'Write your message'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    window.open(
      buildContactWhatsApp({
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        inquiry: form.inquiry,
        message: form.message.trim(),
      }),
      '_blank',
      'noopener,noreferrer',
    )
    setSent(true)
    setForm(EMPTY_FORM)
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
        <div>
          <label htmlFor="contact-name" className="mb-1 block text-xs font-semibold text-[#1b4332]">
            Full name <span className="text-[#00a86b]">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            value={form.name}
            onChange={set('name')}
            placeholder="Your name"
            autoComplete="name"
            className={inputClass}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="contact-phone" className="mb-1 block text-xs font-semibold text-[#1b4332]">
            Phone <span className="text-[#00a86b]">*</span>
          </label>
          <input
            id="contact-phone"
            type="tel"
            value={form.phone}
            onChange={set('phone')}
            placeholder="10-digit mobile"
            autoComplete="tel"
            inputMode="numeric"
            className={inputClass}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="contact-email" className="mb-1 block text-xs font-semibold text-[#1b4332]">
            Email
          </label>
          <input
            id="contact-email"
            type="email"
            value={form.email}
            onChange={set('email')}
            placeholder="Optional"
            autoComplete="email"
            className={inputClass}
          />
        </div>

        <div>
          <label htmlFor="contact-inquiry" className="mb-1 block text-xs font-semibold text-[#1b4332]">
            Inquiry type <span className="text-[#00a86b]">*</span>
          </label>
          <select id="contact-inquiry" value={form.inquiry} onChange={set('inquiry')} className={inputClass}>
            <option value="">Choose one</option>
            {CONTACT_INQUIRY_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.inquiry && <p className="mt-1 text-xs text-red-500">{errors.inquiry}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1 block text-xs font-semibold text-[#1b4332]">
          Message <span className="text-[#00a86b]">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={3}
          value={form.message}
          onChange={set('message')}
          placeholder="Course interest, background, or questions..."
          className={textareaClass}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <div className="flex flex-col gap-2 border-t border-slate-100 pt-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="btn-hero inline-flex h-9 items-center justify-center gap-2 px-6 text-sm font-semibold"
        >
          Send message
          <ArrowRight className="h-4 w-4" />
        </button>

        {sent ? (
          <p className="flex items-center gap-2 text-xs text-[#2d6a4f]">
            <CheckCircle2 className="h-4 w-4 shrink-0 text-[#00a86b]" />
            Opens WhatsApp — tap send to complete.
          </p>
        ) : (
          <p className="text-xs text-slate-400">We reply on WhatsApp or call within 24 hours.</p>
        )}
      </div>
    </form>
  )
}
