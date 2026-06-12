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
    <ul className="footer-link-list space-y-1.5">
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

  return (
    <footer className="site-footer">
      <div className="site-footer-glow" aria-hidden="true" />
      <div className="site-footer-mesh" aria-hidden="true" />

      <div className="site-footer-inner relative mx-auto max-w-7xl px-6 sm:px-8">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand-col">
            <AppLink to={ROUTES.home} className="footer-brand group inline-flex items-center gap-2.5">
              <NavLogo className="h-9 w-9 shrink-0 transition duration-300 group-hover:scale-105 sm:h-10 sm:w-10" />
              <span>
                <span className="nav-brand-nsr">NSR</span>
                <span className="footer-brand-name">
                  GenAI <span className="text-[#52b788]">ProSkills</span>
                </span>
              </span>
            </AppLink>
            <p className="footer-desc mt-3 max-w-sm">
              Industry-aligned GenAI training with live projects, mentor support, and placement assistance
              for graduates and career switchers.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {FOOTER_STATS.map((stat) => (
                <div key={stat.label} className="footer-stat">
                  <span className="footer-stat-value">{stat.value}</span>
                  <span className="footer-stat-label">{stat.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <button
                type="button"
                onClick={() => setEnrollOpen(true)}
                className="footer-cta inline-flex items-center gap-2"
              >
                Enroll
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Explore */}
          <div className="footer-col">
            <p className="footer-heading">Explore</p>
            <div className="footer-col-body">
              <ExploreLinks links={FOOTER_LINKS} />
            </div>
          </div>

          {/* Programs */}
          <div className="footer-col footer-programs-col">
            <p className="footer-heading">Programs</p>
            <ul className="footer-link-list footer-col-body">
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
          <div className="footer-col footer-contact-col">
            <p className="footer-heading">Contact us</p>
            <div className="footer-col-body footer-contact-body">
              <div className="footer-contact-row">
                <span className="footer-contact-icon">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="footer-contact-label">Visit us</p>
                  <AppLink to={ROUTES.offlineCenter} className="footer-link mt-0.5 block leading-relaxed">
                    KPHB, Hyderabad
                    <br />
                    Telangana, India
                  </AppLink>
                </div>
              </div>
              <div className="footer-contact-row">
                <span className="footer-contact-icon">
                  <Phone className="h-3.5 w-3.5" />
                </span>
                <div className="min-w-0">
                  <p className="footer-contact-label">Call us</p>
                  <a href={`tel:+91${PHONE}`} className="footer-link mt-0.5 inline-block">
                    +91 {PHONE}
                  </a>
                </div>
              </div>
              <div>
                <p className="footer-contact-label">Follow us</p>
                <div className="mt-2 flex flex-wrap gap-2">
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

        <div className="footer-bottom">
          <p className="footer-bottom-copy">
            © {new Date().getFullYear()} NSR GenAI ProSkills Academy. All rights reserved.
          </p>
          <p className="footer-bottom-tagline">
            Built for learners who want{' '}
            <span className="highlight">job-ready GenAI skills</span>
          </p>
        </div>
      </div>

      <EnrollModal open={enrollOpen} onClose={() => setEnrollOpen(false)} />
    </footer>
  )
}
