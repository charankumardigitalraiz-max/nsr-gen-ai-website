import { ArrowUpRight, MapPin, Phone, Sparkles } from 'lucide-react'
import { NAV_LINKS, PHONE, WHATSAPP } from '../constants/content'

const PROGRAM_LINKS = [
  { label: 'Data Analyst with GenAI', href: '#/courses/data-analyst-with-genai' },
  { label: 'Data Science with GenAI', href: '#/courses/data-science-with-genai' },
  { label: 'Business Analyst with GenAI', href: '#/courses/business-analyst-with-genai' },
  { label: 'Full Stack AI / ML', href: '#/courses/full-stack-ai-ml' },
  { label: 'Full Stack Python with AI', href: '#/courses/full-stack-python-with-ai' },
]

const FOOTER_STATS = [
  { value: '5+', label: 'Programs' },
  { value: 'Live', label: 'Projects' },
  { value: '100%', label: 'Mentor-led' },
]

export default function Footer() {
  const quickLinks = NAV_LINKS.filter((l) => l.href !== '#/')
  const programMid = Math.ceil(PROGRAM_LINKS.length / 2)

  return (
    <footer className="site-footer">
      <div className="site-footer-glow" aria-hidden="true" />
      <div className="site-footer-mesh" aria-hidden="true" />

      <div className="relative mx-auto max-w-[95rem] px-6 py-14 sm:py-16">
        <div className="footer-main grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <a href="#/" className="footer-brand inline-flex items-center gap-2.5">
              <span className="footer-brand-icon">
                <Sparkles className="h-4 w-4" />
              </span>
              <span>
                <span className="footer-brand-nsr">NSR</span>
                <span className="footer-brand-name">GenAI ProSkills Academy</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-400">
              Industry-aligned GenAI training with live projects, mentor support, and placement assistance
              for graduates and career switchers.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {FOOTER_STATS.map((stat) => (
                <div key={stat.label} className="footer-stat">
                  <span className="footer-stat-value">{stat.value}</span>
                  <span className="footer-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="footer-cta inline-flex items-center gap-2"
              >
                Enroll on WhatsApp
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <span className="footer-batch-badge">June batch open</span>
            </div>
          </div>

          {/* Explore */}
          <div className="footer-col lg:col-span-2">
            <p className="footer-heading">Explore</p>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs — 2-col link list */}
          <div className="footer-col lg:col-span-3">
            <p className="footer-heading">Programs</p>
            <div className="footer-programs-grid mt-5">
              <ul className="space-y-3">
                {PROGRAM_LINKS.slice(0, programMid).map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {PROGRAM_LINKS.slice(programMid).map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="footer-link">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <div className="footer-contact-panel">
              <p className="footer-heading">Contact us</p>
              <div className="mt-5 space-y-4">
                <div className="flex gap-3">
                  <span className="footer-contact-icon">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-slate-300">Visit us</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-400">
                      KPHB, Hyderabad
                      <br />
                      Telangana, India
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <span className="footer-contact-icon">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-slate-300">Call us</p>
                    <a href={`tel:+91${PHONE}`} className="footer-link mt-0.5 inline-block text-sm">
                      +91 {PHONE}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} NSR GenAI ProSkills Academy. All rights reserved.
          </p>
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
