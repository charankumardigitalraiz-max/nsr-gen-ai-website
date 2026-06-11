import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Bot,
  Brain,
  Building2,
  Calendar,
  CheckCircle2,
  ChevronDown,
  Clock,
  Cloud,
  Code2,
  Database,
  FileText,
  GraduationCap,
  HelpCircle,
  Kanban,
  Layers,
  Layout,
  MapPin,
  MessageCircle,
  PieChart,
  Rocket,
  Server,
  Shield,
  ShieldCheck,
  Sparkles,
  Trophy,
  Users,
  Wrench,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getCourseBySlug, COURSE_DETAILS } from '../constants/courseDetails'
import {
  HIRING_PARTNER_BRANDS,
  PHONE,
  SUCCESSFUL_STUDENTS,
  getHiringPartnersForCourse,
} from '../constants/content'
import { ROUTES, courseDetailPath } from '../constants/routes'
import AppLink from '../components/AppLink'
import EnrollModal from '../components/ui/EnrollModal'
import PartnerCard from '../components/ui/PartnerCard'
import StudentAvatar from '../components/ui/StudentAvatar'

const courseWhatsApp = (message) =>
  `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`

const MODULE_ICON_FALLBACKS = [BookOpen, Code2, Database, BarChart3, Sparkles, Trophy]

const CURRICULUM_GRID =
  'grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3'

const CURRICULUM_CARD =
  'group flex h-full min-w-0 flex-row items-start gap-3 rounded-lg border border-slate-100 bg-white px-3.5 py-3.5 shadow-[0_1px_2px_rgb(15_23_42/0.03)] transition duration-200 hover:border-slate-300 hover:shadow-[0_1px_2px_rgb(15_23_42/0.05)] sm:px-4 sm:py-4'

const CURRICULUM_ICON =
  'flex h-9 w-9 shrink-0 items-center justify-center rounded-md border border-emerald-500/15 bg-emerald-50 text-emerald-600 transition duration-200 group-hover:border-emerald-500/25 sm:h-10 sm:w-10'

const CURRICULUM_BODY = 'flex min-w-0 flex-1 flex-col pt-0.5'

const CURRICULUM_LABEL =
  'text-[10px] font-bold uppercase tracking-[0.14em] text-emerald-600 sm:text-[11px]'

const CURRICULUM_TITLE =
  'mt-0.5 flex-1 text-[13px] font-semibold leading-snug text-slate-800 sm:text-sm'

const CURRICULUM_HEAD_ICON =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gh-blue/20 bg-gh-blue/8 text-gh-blue'

const CURRICULUM_COUNT =
  'inline-flex shrink-0 items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-bold text-slate-600'

const PLACED_SCROLL_MIN = 5

function getPartnerBrand(companyName) {
  return HIRING_PARTNER_BRANDS.find((brand) => brand.name.toLowerCase() === companyName.toLowerCase())
}

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

export default function CourseDetail() {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)
  const conceptGroups =
    course?.concepts?.[0]?.topics != null
      ? course.concepts
      : (course?.concepts || course?.skills || []).map((title) => ({ title, topics: [title] }))

  const [enrollOpen, setEnrollOpen] = useState(false)
  const [openConcepts, setOpenConcepts] = useState(() => new Set())
  const [openWhoFor, setOpenWhoFor] = useState(() => new Set([0]))

  useEffect(() => {
    setOpenConcepts(new Set(conceptGroups.map((_, i) => i)))
    setOpenWhoFor(new Set([0]))
  }, [slug, conceptGroups.length])

  if (!course) {
    return (
      <section className="bg-gh-canvas py-20">
        <div className="mx-auto max-w-lg px-6 text-center">
          <h1 className="font-rubik text-2xl font-extrabold text-slate-800">Course not found</h1>
          <AppLink to={ROUTES.courses} className="btn-hero mt-8 inline-flex gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Courses
          </AppLink>
        </div>
      </section>
    )
  }

  const related = COURSE_DETAILS.filter((c) => c.slug !== course.slug).slice(0, 3)
  const partners = getHiringPartnersForCourse(course)
  const conceptTopicCount = conceptGroups.reduce((sum, group) => sum + group.topics.length, 0)
  const placedStudents = SUCCESSFUL_STUDENTS.filter((student) => student.courseSlug === course.slug)

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
          <AppLink
            to={ROUTES.courses}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-white/75 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Courses
          </AppLink>

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
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600">About this program</p>
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





          {/* Concepts covered */}
          <div className="cd-bento min-w-0 md:col-span-12">
            <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#00a86b]/20 bg-[#f1f8f4] text-[#00a86b]">
                  <Sparkles className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-[#00a86b]">
                    What you&apos;ll learn
                  </p>
                  <h2 className="mt-1 font-rubik text-xl font-extrabold text-slate-900">Concepts covered</h2>
                  {/* <p className="mt-1 text-xs text-gh-muted sm:text-sm">
                    Core topics mapped to industry job requirements
                  </p> */}
                </div>
              </div>
              <span className={CURRICULUM_COUNT}>{conceptTopicCount} topics</span>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {conceptGroups.map((group, i) => {
                const isOpen = openConcepts.has(i)

                return (
                  <div
                    key={group.title}
                    className={`overflow-hidden rounded-lg border bg-white shadow-[0_1px_2px_rgb(15_23_42/0.04)] transition duration-200 ${
                      isOpen ? 'border-[#00a86b]/25' : 'border-slate-100 hover:border-slate-200'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenConcepts((prev) => {
                          const next = new Set(prev)
                          if (next.has(i)) next.delete(i)
                          else next.add(i)
                          return next
                        })
                      }
                      className="flex w-full items-start gap-3 px-4 py-3.5 text-left transition hover:bg-slate-50/80"
                      aria-expanded={isOpen}
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#00a86b]/15 bg-[#f1f8f4] font-mono text-[10px] font-bold text-[#00a86b]">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[13px] font-bold leading-snug text-slate-800 sm:text-sm">
                          {group.title}
                        </span>
                        {!isOpen && (
                          <span className="mt-1 block text-[11px] font-medium text-gh-muted">
                            {group.topics.length} sub-topics
                          </span>
                        )}
                      </span>
                      <ChevronDown
                        className={`mt-0.5 h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#00a86b]' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <ul className="space-y-2 border-t border-slate-100 bg-slate-50/50 px-4 py-3">
                        {group.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 sm:text-[13px]"
                          >
                            <CheckCircle2
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#00a86b]"
                              strokeWidth={2.5}
                            />
                            {topic}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )
              })}
            </div>
          </div>


          {/* Curriculum — grid */}
          {/* <div className="cd-bento min-w-0 md:col-span-12">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
              <div className="flex items-start gap-3">
                <span className={CURRICULUM_HEAD_ICON}>
                  <Layers className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-gh-blue">Curriculum</p>
                  <h2 className="mt-1 font-rubik text-xl font-extrabold text-slate-900">Learning path</h2>
                
                </div>
              </div>
              <span className={CURRICULUM_COUNT}>{course.modules.length} modules</span>
            </div>

            <div className={CURRICULUM_GRID}>
              {course.modules.map((mod, i) => {
                const Icon = getModuleIcon(mod, i)

                return (
                  <div key={mod} className={CURRICULUM_CARD}>
                    <div className={CURRICULUM_ICON}>
                      <Icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" strokeWidth={2} />
                    </div>
                    <div className={CURRICULUM_BODY}>
                      <span className={CURRICULUM_LABEL}>
                        Module {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className={CURRICULUM_TITLE}>{mod}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div> */}


          {/* Tools */}
          {/* <div className="cd-bento md:col-span-5">
            <Wrench className="h-5 w-5 text-gh-blue" />
            <h2 className="mt-2 font-rubik text-base font-extrabold text-slate-900">Tools & stack</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{course.tools.join(' · ')}</p>
          </div> */}

          {/* Outcomes */}
          {/* <div className="cd-bento md:col-span-7">
            <h2 className="font-rubik text-base font-extrabold text-slate-900">Career outcomes</h2>
            <ul className="mt-4 space-y-2.5">
              {course.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                  {o}
                </li>
              ))}
            </ul>
          </div> */}

          {/* Who for — FAQ */}
          <div className="cd-bento min-w-0 md:col-span-12">
            <div className="mb-5 flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-gh-purple/20 bg-gh-purple/8 text-gh-purple">
                <HelpCircle className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gh-purple">FAQs</p>
                <h2 className="mt-1 font-rubik text-xl font-extrabold text-slate-900">Who should join</h2>
                {/* <p className="mt-1 text-xs text-gh-muted sm:text-sm">
                  Common questions before you enroll in this program
                </p> */}
              </div>
            </div>

            <div className="overflow-hidden rounded-xl border border-slate-200 bg-white divide-y divide-slate-100">
              {course.whoFor.map((item, i) => {
                const isOpen = openWhoFor.has(i)

                return (
                  <div key={item.question}>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenWhoFor((prev) => {
                          const next = new Set(prev)
                          if (next.has(i)) next.delete(i)
                          else next.add(i)
                          return next
                        })
                      }
                      className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition hover:bg-slate-50/80 sm:px-5"
                      aria-expanded={isOpen}
                    >
                      <span className="font-rubik text-sm font-bold leading-snug text-slate-900 sm:text-[15px]">
                        {item.question}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-slate-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-gh-purple' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="border-t border-slate-100 bg-slate-50/50 px-4 pb-4 pt-3 sm:px-5 sm:pb-5">
                        <ul className="space-y-2.5">
                          {item.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2.5 text-[13px] leading-relaxed text-slate-600 sm:text-sm"
                            >
                              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gh-purple" aria-hidden />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

        </div>

        {/* Hiring partners */}
        <div className="cd-bento mt-5">
          <div className="mb-5 flex flex-wrap items-end justify-between gap-4">
            <div className="flex items-start gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#00a86b]/20 bg-[#f1f8f4] text-[#00a86b]">
                <Building2 className="h-5 w-5" />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-[#00a86b]">
                  Placement network
                </p>
                <h2 className="mt-1 font-rubik text-xl font-extrabold text-slate-900">Hiring partners</h2>
              </div>
            </div>
            <span className={CURRICULUM_COUNT}>{partners.length} partners</span>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((company) => (
              <PartnerCard key={company.name} company={company} />
            ))}
          </div>
        </div>

        {/* Placed students */}
        <section className="mt-2">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-gh-purple">
                <GraduationCap className="h-3.5 w-3.5" />
                Success stories
              </span>
              <h2 className="mt-2 font-rubik text-xl font-extrabold text-slate-900 sm:text-2xl">
                Hired from this course
              </h2>
              <p className="mt-1 max-w-xl text-sm text-gh-muted">
                Verified placement offers from {course.title} graduates
              </p>
            </div>
            {/* <AppLink
              to={ROUTES.placements}
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#00a86b] hover:text-[#1b4332]"
            >
              View all placements
              <ArrowRight className="h-4 w-4" />
            </AppLink> */}
          </div>

          {placedStudents.length > 0 ? (
            placedStudents.length >= PLACED_SCROLL_MIN ? (
              <div className="relative mx-6 overflow-hidden sm:mx-0">
                <div className="animate-ticker flex w-max items-stretch gap-3 px-6 hover:[animation-play-state:paused] sm:px-0">
                  {[...placedStudents, ...placedStudents].map((student, index) => (
                    <CourseHireCard key={`${student.name}-${index}`} student={student} variant="scroll" />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {placedStudents.map((student) => (
                  <CourseHireCard key={student.name} student={student} variant="grid" />
                ))}
              </div>
            )
          ) : (
            <div className="max-w-lg text-center sm:text-left">
              <Trophy className="mx-auto h-8 w-8 text-[#00a86b]/70 sm:mx-0" />
              <p className="mt-3 font-rubik text-sm font-bold text-slate-800">Placements coming soon</p>
              <p className="mt-1 text-sm leading-relaxed text-gh-muted">
                Success stories for this program will be added as upcoming batches complete their
                interviews.
              </p>
              <AppLink
                to={ROUTES.placements}
                className="btn-hero-outline mt-4 inline-flex items-center gap-2 px-5 py-2 text-sm"
              >
                View placements
                <ArrowRight className="h-4 w-4" />
              </AppLink>
            </div>
          )}
        </section>




        {/* Related */} 
        {/* {related.length > 0 && (
          <div className="mt-12">
            <h2 className="font-rubik text-xl font-extrabold text-slate-900">More programs</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {related.map((r) => (
                <AppLink
                  key={r.slug}
                  to={courseDetailPath(r.slug)}
                  className="cd-related group flex gap-3 bg-white p-3 transition"
                >
                  <img src={r.image} alt="" className="h-16 w-16 shrink-0 rounded-md object-cover" />
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-slate-800 group-hover:text-gh-blue">{r.title}</p>
                    <p className="mt-0.5 line-clamp-2 text-[11px] text-gh-muted">{r.shortDesc}</p>
                  </div>
                </AppLink>
              ))}
            </div>
          </div>
        )} */}
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

function CourseHireCard({ student, variant = 'grid' }) {
  const isScroll = variant === 'scroll'
  const companyBrand = getPartnerBrand(student.company)

  return (
    <article
      className={
        isScroll
          ? 'inline-flex w-[248px] shrink-0 items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-[0_2px_12px_rgb(15_23_42/0.08)] transition duration-200 hover:border-[#00a86b]/25 sm:w-[268px]'
          : 'flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-[0_2px_12px_rgb(15_23_42/0.06)] transition duration-200 hover:border-[#00a86b]/25 hover:shadow-[0_4px_16px_rgb(15_23_42/0.08)]'
      }
    >
      <StudentAvatar student={student} size={isScroll ? 'sm' : 'lg'} className="shrink-0" />

      <div className="min-w-0 flex-1">
        <div className={isScroll ? '' : 'flex items-start justify-between gap-3'}>
          <div className="min-w-0">
            <h4
              className={`truncate font-rubik font-extrabold text-slate-900 ${
                isScroll ? 'text-xs font-bold' : 'text-sm sm:text-base'
              }`}
            >
              {student.name}
            </h4>
            <p
              className={`truncate font-semibold uppercase tracking-wide text-[#00a86b] ${
                isScroll ? 'text-[10px]' : 'mt-0.5 text-xs'
              }`}
            >
              {student.role}
            </p>
          </div>
          {!isScroll && (
            <span className="shrink-0 font-rubik text-sm font-extrabold text-[#1b4332]">{student.package}</span>
          )}
        </div>

        <div className={`flex items-center justify-between gap-2 ${isScroll ? 'mt-1.5' : 'mt-3 flex-wrap'}`}>
          <span
            className={`inline-flex min-w-0 max-w-full items-center gap-1.5 rounded-md bg-[#f1f8f4] ring-1 ring-[#00a86b]/15 ${
              isScroll ? 'px-1.5 py-0.5' : 'px-2 py-1'
            }`}
          >
            {companyBrand?.logo ? (
              <img
                src={encodeURI(companyBrand.logo)}
                alt={`${student.company} logo`}
                className={`shrink-0 object-contain ${
                  isScroll ? 'h-3.5 max-w-[2.75rem]' : 'h-4 max-w-[3.5rem]'
                }`}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span
                className={`truncate font-bold text-[#A100FF] ${
                  isScroll ? 'text-[10px] font-extrabold uppercase tracking-wide' : 'text-[11px]'
                }`}
              >
                {student.company.toLowerCase()}
              </span>
            )}
            {companyBrand?.logo && !isScroll && (
              <span className="truncate text-[11px] font-bold text-[#1b4332]">{student.company}</span>
            )}
          </span>
          {isScroll && (
            <span className="shrink-0 text-[11px] font-extrabold text-[#1b4332]">{student.package}</span>
          )}
        </div>

        {/* <span
          className={`inline-flex items-center gap-0.5 font-bold uppercase tracking-wide text-emerald-600 ${
            isScroll ? 'mt-1 text-[9px]' : 'mt-2 text-[10px]'
          }`}
        >
          <ShieldCheck className={isScroll ? 'h-3 w-3' : 'h-3.5 w-3.5'} />
          Verified
        </span> */}
      </div>
    </article>
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
