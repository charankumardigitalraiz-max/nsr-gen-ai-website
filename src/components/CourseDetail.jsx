import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  Brain,
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  Cloud,
  Code2,
  Database,
  FileText,
  GraduationCap,
  Kanban,
  Layers,
  Layout,
  MapPin,
  MessageCircle,
  PieChart,
  Rocket,
  Server,
  Shield,
  Sparkles,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react'
import { useState } from 'react'
import { getCourseBySlug, COURSE_DETAILS } from '../constants/courseDetails'
import { PHONE, getHiringPartnersForCourse } from '../constants/content'
import EnrollModal from './EnrollModal'
import PartnerLogo from './PartnerLogo'

const courseWhatsApp = (message) =>
  `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`

const MODULE_ICON_FALLBACKS = [BookOpen, Code2, Database, BarChart3, Sparkles, Trophy]

function getModuleIcon(title, index) {
  const t = title.toLowerCase()

  if (t.includes('python') || t.includes('numpy') || t.includes('pandas') || t.includes('oop')) return Code2
  if (t.includes('sql') || t.includes('database') || t.includes('orm')) return Database
  if (t.includes('excel') || t.includes('statistics') || t.includes('exploratory')) return BarChart3
  if (t.includes('power bi') || t.includes('visualization') || t.includes('dashboard')) return PieChart
  if (t.includes('genai') || t.includes('llm') || t.includes(' ai')) return Sparkles
  if (t.includes('capstone') || t.includes('project') || t.includes('portfolio')) return Trophy
  if (t.includes('machine learning') || t.includes('ml ') || t.includes('model')) return Brain
  if (t.includes('docker') || t.includes('cloud') || t.includes('deploy')) return Cloud
  if (t.includes('react') || t.includes('frontend') || t.includes('django') || t.includes('flask')) return Layout
  if (t.includes('api') || t.includes('fastapi') || t.includes('backend')) return Server
  if (t.includes('agile') || t.includes('sdlc') || t.includes('scrum')) return Kanban
  if (t.includes('requirement') || t.includes('brd') || t.includes('frd') || t.includes('documentation'))
    return FileText
  if (t.includes('interview') || t.includes('mock client')) return Users
  if (t.includes('agent') || t.includes('automation') || t.includes('scripting')) return Bot
  if (t.includes('authentication')) return Shield
  if (t.includes('fundamental') || t.includes('basics') || t.includes('from zero')) return GraduationCap

  return MODULE_ICON_FALLBACKS[index % MODULE_ICON_FALLBACKS.length]
}

export default function CourseDetail({ slug }) {
  const course = getCourseBySlug(slug)
  const [enrollOpen, setEnrollOpen] = useState(false)

  if (!course) {
    return (
      <section className="bg-gh-canvas py-20">
        <div className="mx-auto max-w-lg px-6 text-center">
          <h1 className="font-rubik text-2xl font-extrabold text-slate-800">Course not found</h1>
          <a href="#/courses" className="btn-hero mt-8 inline-flex gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </a>
        </div>
      </section>
    )
  }

  const related = COURSE_DETAILS.filter((c) => c.slug !== course.slug).slice(0, 3)
  const partners = getHiringPartnersForCourse(course)

  return (
    <div className="min-h-screen bg-gh-canvas  pb-24 lg:pb-16">
      {/* Hero — course image as background */}
      <div className="cd-hero relative overflow-hidden border-b border-slate-900/20">
        <img
          src={course.image}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="cd-hero-overlay" aria-hidden="true" />

        <div className="cd-page cd-hero-inner relative z-10">
          <a
            href="#/courses"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/75 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Courses
          </a>

          <div className="mt-6 max-w-3xl">
            <span className="cd-badge-hero">
              <Sparkles className="h-3 w-3" />
              {course.icon} GenAI Program
            </span>
            <h1 className="mt-4 font-rubik text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
              {course.title}
            </h1>
            <p className="mt-3 text-base font-medium text-sky-100 sm:text-lg">{course.tagline}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <MetaPill icon={Clock} text={course.duration} dark />
              <MetaPill icon={BookOpen} text={course.level} dark />
              <MetaPill icon={MapPin} text="KPHB, Hyderabad" dark />
              <MetaPill icon={Calendar} text="June batch" dark />
            </div>
            <span className="mt-5 inline-flex items-center rounded-full bg-emerald-500/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              Admissions Open
            </span>
          </div>
        </div>
      </div>

      {/* Bento content */}
      <div className="cd-page py-10">
        <div className="grid min-w-0 gap-4 md:grid-cols-12 md:gap-5">
          {/* About — wide */}
          <div className="cd-bento md:col-span-8">
            <p className="text-[10px] font-bold uppercase tracking-widest text-gh-purple">About this program</p>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">{course.description}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {course.skills.map((s) => (
                <span key={s} className="cd-tag">
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Enroll card */}
          <div className="cd-bento cd-bento-accent md:col-span-4 flex flex-col justify-between">
            <div>
              <Rocket className="h-6 w-6 text-gh-purple" />
              <h2 className="mt-3 font-rubik text-lg font-extrabold text-slate-900">Start your journey</h2>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Live classes, projects & placement support included.
              </p>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setEnrollOpen(true)}
                className="btn-hero flex min-h-11 items-center justify-center gap-2 px-3 text-center text-sm"
              >
                Enroll Now <ArrowRight className="h-4 w-4 shrink-0" />
              </button>
              <a
                href={courseWhatsApp(`Hi NSR Academy, I have questions about ${course.title}.`)}
                target="_blank"
                rel="noreferrer"
                className="btn-hero-outline flex min-h-11 items-center justify-center gap-2 px-3 text-center text-sm"
              >
                <MessageCircle className="h-4 w-4 shrink-0" /> WhatsApp
              </a>
            </div>
          </div>

          {/* Curriculum — grid */}
          <div className="cd-bento min-w-0 md:col-span-12">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="cd-curriculum-head-icon">
                  <Layers className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gh-blue">Curriculum</p>
                  <h2 className="mt-1 font-rubik text-xl font-extrabold text-slate-900">Learning path</h2>
                  <p className="mt-1 text-xs text-gh-muted">Step-by-step modules from basics to capstone</p>
                </div>
              </div>
              <span className="cd-curriculum-count">{course.modules.length} modules</span>
            </div>

            <div className="cd-curriculum">
              {course.modules.map((mod, i) => {
                const Icon = getModuleIcon(mod, i)

                return (
                  <div key={mod} className="cd-curriculum-card">
                    <div className="cd-curriculum-icon">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <span className="cd-curriculum-label">
                      Module {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="cd-curriculum-title">{mod}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Tools */}
          <div className="cd-bento md:col-span-5">
            <Wrench className="h-5 w-5 text-gh-blue" />
            <h2 className="mt-2 font-rubik text-base font-extrabold text-slate-900">Tools & stack</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{course.tools.join(' · ')}</p>
          </div>

          {/* Outcomes */}
          <div className="cd-bento md:col-span-7">
            <h2 className="font-rubik text-base font-extrabold text-slate-900">Career outcomes</h2>
            <ul className="mt-4 space-y-2.5">
              {course.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {o}
                </li>
              ))}
            </ul>
          </div>

          {/* Who for */}
          <div className="cd-bento md:col-span-6">
            <Briefcase className="h-5 w-5 text-gh-purple" />
            <h2 className="mt-2 font-rubik text-base font-extrabold text-slate-900">Who should join</h2>
            <ul className="mt-4 space-y-2">
              {course.whoFor.map((w) => (
                <li key={w} className="flex items-start gap-2 text-sm text-slate-600">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gh-purple" />
                  {w}
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div className="cd-bento md:col-span-6">
            <Building2 className="h-5 w-5 text-gh-blue" />
            <h2 className="mt-2 font-rubik text-base font-extrabold text-slate-900">Hiring partners</h2>
            <p className="mt-1 text-xs text-gh-muted">Graduates placed at leading MNCs</p>
            <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
              {partners.map((co) => (
                <div
                  key={co.name}
                  className="flex h-14 items-center justify-center rounded-lg border border-slate-100 bg-slate-50/80 px-2"
                  aria-label={co.name}
                >
                  <PartnerLogo company={co} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-rubik text-xl font-extrabold text-slate-900">More programs</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <a
                  key={r.slug}
                  href={`#/courses/${r.slug}`}
                  className="cd-related group flex gap-3 rounded-xl border border-slate-200/70 bg-white p-3 transition hover:border-gh-purple/30 hover:shadow-md"
                >
                  <img src={r.image} alt="" className="h-16 w-16 shrink-0 rounded-lg object-cover" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-800 group-hover:text-gh-blue">{r.title}</p>
                    <p className="mt-0.5 line-clamp-2 text-[11px] text-gh-muted">{r.shortDesc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 backdrop-blur-lg lg:hidden">
        <button
          type="button"
          onClick={() => setEnrollOpen(true)}
          className="btn-hero flex w-full justify-center gap-2"
        >
          Enroll in {course.title.split(' ').slice(0, 2).join(' ')}
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      <EnrollModal
        open={enrollOpen}
        onClose={() => setEnrollOpen(false)}
        defaultCourse={course.title}
      />
    </div>
  )
}

function MetaPill({ icon: Icon, text, dark = false }) {
  return (
    <span
      className={
        dark
          ? 'cd-meta-pill-dark'
          : 'inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700'
      }
    >
      <Icon className={`h-3.5 w-3.5 ${dark ? 'text-sky-200' : 'text-gh-purple'}`} />
      {text}
    </span>
  )
}
