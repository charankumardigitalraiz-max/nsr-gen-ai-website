import { ArrowUpRight, MapPin, Phone, Sparkles } from 'lucide-react'
import { NAV_LINKS, PHONE, WHATSAPP } from '../constants/content'

const PROGRAM_LINKS = [
  { label: 'Data Analyst with GenAI', href: '#/courses/data-analyst-with-genai' },
  { label: 'Data Science with GenAI', href: '#/courses/data-science-with-genai' },
  { label: 'Business Analyst with GenAI', href: '#/courses/business-analyst-with-genai' },
  { label: 'Full Stack AI / ML', href: '#/courses/full-stack-ai-ml' },
  { label: 'Full Stack Python with AI', href: '#/courses/full-stack-python-with-ai' },
]

export default function Footer() {
  const quickLinks = NAV_LINKS.filter((l) => l.href !== '#/')

  return (
    <footer className="site-footer">
      <div className="site-footer-glow" aria-hidden="true" />

      <div className="relative mx-auto max-w-[95rem] px-6 py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#/" className="footer-brand group inline-flex items-center gap-2.5">
              <span className="footer-brand-icon">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>
                <span className="footer-brand-nsr">NSR</span>
                <span className="footer-brand-name">GenAI ProSkills Academy</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Industry-aligned GenAI training with live projects, mentor support, and placement assistance for
              graduates and career switchers.
            </p>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="footer-cta mt-6 inline-flex items-center gap-2"
            >
              Enroll on WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-2">
            <p className="footer-heading">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="lg:col-span-3">
            <p className="footer-heading">Programs</p>
            <ul className="mt-4 space-y-2.5">
              {PROGRAM_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="footer-heading">Contact</p>
            <ul className="mt-4 space-y-4">
              <li className="flex gap-3">
                <span className="footer-contact-icon">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-sm leading-relaxed text-slate-400">
                  KPHB, Hyderabad
                  <br />
                  Telangana, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="footer-contact-icon">
                  <Phone className="h-4 w-4" />
                </span>
                <a href={`tel:+91${PHONE}`} className="footer-link text-sm">
                  +91 {PHONE}
                </a>
              </li>
            </ul>
            <p className="mt-5 rounded-lg border border-emerald-500/20 bg-emerald-500/10 px-3 py-2 text-[11px] font-semibold text-emerald-400">
              June batch admissions open
            </p>
          </div>
        </div>

        <div className="footer-bottom mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} NSR GenAI ProSkills Academy. All rights reserved.</p>
          <p className="text-xs font-medium text-slate-500">
            Built for learners who want{' '}
            <span className="bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
              job-ready GenAI skills
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
