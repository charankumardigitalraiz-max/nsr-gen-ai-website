import { useState } from 'react'
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  Brain,
  Briefcase,
  Building2,
  Code2,
  Info,
  Layers,
  Map,
  MapPin,
  Newspaper,
  Phone,
  PhoneCall,
  Sparkles,
  Trophy,
  Wrench,
} from 'lucide-react'
import { SOCIAL_LINKS } from '../../constants/contact'
import { COURSES, PHONE, WHATSAPP } from '../../constants/content'
import { FOOTER_LINKS, ROUTES, courseDetailPath } from '../../constants/routes'
import AppLink from '../AppLink'
import EnrollModal from '../ui/EnrollModal'
import NavLogo from '../ui/NavLogo'
import SocialIcon from '../SocialIcon'

const EXPLORE_META = {
  [ROUTES.courses]: { Icon: BookOpen, tone: 'blue' },
  [ROUTES.placements]: { Icon: Trophy, tone: 'purple' },
  [ROUTES.about]: { Icon: Info, tone: 'blue' },
  [ROUTES.training]: { Icon: Wrench, tone: 'green' },
  [ROUTES.blogs]: { Icon: Newspaper, tone: 'pink' },
  [ROUTES.roadmap]: { Icon: Map, tone: 'violet' },
  [ROUTES.offlineCenter]: { Icon: Building2, tone: 'green' },
  [ROUTES.contact]: { Icon: PhoneCall, tone: 'blue' },
}

function getSocialHref(link) {
  if (link.icon === 'whatsapp') return WHATSAPP
  return link.href
}

const PROGRAM_META = {
  'data-analyst-with-genai': { Icon: BarChart3, tone: 'blue' },
  'data-science-with-genai': { Icon: Brain, tone: 'purple' },
  'business-analyst-with-genai': { Icon: Briefcase, tone: 'green' },
  'full-stack-ai-ml': { Icon: Layers, tone: 'violet' },
  'full-stack-python-with-ai': { Icon: Code2, tone: 'pink' },
}
const FOOTER_STATS = [
  { value: '5+', label: 'Programs' },
  { value: 'Live', label: 'Projects' },
  { value: '100%', label: 'Mentor-led' },
]

function ExploreLinks({ links }) {
  return (
    <ul className="space-y-2">
      {links.map((link) => {
        const meta = EXPLORE_META[link.href] ?? { Icon: Sparkles, tone: 'blue' }
        const { Icon, tone } = meta
        return (
          <li key={link.href}>
            <AppLink to={link.href} className="footer-explore-link">
              <span className={`footer-program-icon footer-program-icon--${tone}`}>
                <Icon className="h-3.5 w-3.5" />
              </span>
              <span className="footer-program-label min-w-0">{link.label}</span>
            </AppLink>
          </li>
        )
      })}
    </ul>
  )
}

export default function Footer() {
  const [enrollOpen, setEnrollOpen] = useState(false)
  const exploreMid = Math.ceil(FOOTER_LINKS.length / 2)
  const exploreCol1 = FOOTER_LINKS.slice(0, exploreMid)
  const exploreCol2 = FOOTER_LINKS.slice(exploreMid)

  return (
    <footer className="site-footer">
      <div className="site-footer-glow" aria-hidden="true" />
      <div className="site-footer-mesh" aria-hidden="true" />

      <div className="relative mx-auto max-w-[95rem] pt-10 pt-5 px-6">
        <div className="footer-main grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <AppLink to={ROUTES.home} className="footer-brand group inline-flex items-center gap-2.5">
              <NavLogo className="h-10 w-10 shrink-0 transition duration-300 group-hover:scale-105" />
              <span>
                <span className="nav-brand-nsr">NSR</span>
                <span className="footer-brand-name">
                  GenAI <span className="text-[#52b788]">ProSkills</span>
                </span>
              </span>
            </AppLink>
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
              <button
                type="button"
                onClick={() => setEnrollOpen(true)}
                className="footer-cta inline-flex items-center gap-2"
              >
                Enroll
                <ArrowUpRight className="h-4 w-4" />
              </button>
              {/* <span className="footer-batch-badge">June batch open</span> */}
            </div>
          </div>

          {/* Explore — two columns */}
          <div className="footer-col lg:col-span-3">
            <p className="footer-heading">Explore</p>
            <div className="mt-5 grid grid-cols-2 gap-x-5 gap-y-0">
              <ExploreLinks links={exploreCol1} />
              <ExploreLinks links={exploreCol2} />
            </div>
          </div>

          {/* Programs */}
          <div className="footer-col lg:col-span-2">
            <p className="footer-heading">Programs</p>
            <ul className="mt-5 space-y-2">
              {COURSES.map((course) => {
                const meta = PROGRAM_META[course.slug] ?? { Icon: Sparkles, tone: 'blue' }
                const { Icon, tone } = meta
                return (
                  <li key={course.slug}>
                    <AppLink to={courseDetailPath(course.slug)} className="footer-explore-link">
                      <span className={`footer-program-icon footer-program-icon--${tone}`}>
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="footer-program-label min-w-0">{course.title}</span>
                    </AppLink>
                  </li>
                )
              })}
            </ul>
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
                    <AppLink to={ROUTES.offlineCenter} className="footer-link mt-0.5 block text-sm leading-relaxed">
                      KPHB, Hyderabad
                      <br />
                      Telangana, India
                    </AppLink>
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
                <div>
                  <p className="text-xs font-semibold text-slate-300">Follow us</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {SOCIAL_LINKS.map((link) => (
                        <a
                          key={link.label}
                          href={getSocialHref(link)}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={link.label}
                          className="footer-social-icon"
                        >
                          <SocialIcon name={link.icon} />
                        </a>
                      ))}
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
            <span className="highlight">job-ready GenAI skills</span>
          </p>
        </div>
      </div>

      <EnrollModal open={enrollOpen} onClose={() => setEnrollOpen(false)} />
    </footer>
  )
}
