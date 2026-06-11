import {
  ArrowRight,
  Building2,
  Clock,
  GraduationCap,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
} from 'lucide-react'
import { ACADEMY_ADDRESS, ACADEMY_EMAIL, ACADEMY_HOURS } from '../../constants/contact'
import { PHONE, WHATSAPP, WHATSAPP_DEMO } from '../../constants/content'
import { ROUTES } from '../../constants/routes'
import AppLink from '../../components/AppLink'
import ContactForm from './ContactForm'

const CHANNELS = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    value: `+91 ${PHONE}`,
    href: WHATSAPP,
    external: true,
    hint: 'Fastest response',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: `+91 ${PHONE}`,
    href: `tel:+91${PHONE}`,
    external: false,
    hint: 'Mon – Sat, 9 AM – 7 PM',
  },
  {
    icon: Mail,
    label: 'Email',
    value: ACADEMY_EMAIL,
    href: `mailto:${ACADEMY_EMAIL}`,
    external: false,
    hint: 'Reply within 1 day',
  },
]

const QUICK_LINKS = [
  {
    icon: Sparkles,
    label: 'Book a free demo',
    desc: 'Counselling on WhatsApp',
    href: WHATSAPP_DEMO,
    external: true,
    featured: true,
  },
  // {
  //   icon: Building2,
  //   label: 'Offline center tour',
  //   desc: 'Campus, labs & batches',
  //   to: ROUTES.offlineCenter,
  // },
  {
    icon: GraduationCap,
    label: 'Browse courses',
    desc: 'Data, Python & GenAI tracks',
    to: ROUTES.courses,
  },
]

function QuickLinkItem({ icon: Icon, label, desc, featured, children }) {
  const base =
    'group flex items-center gap-3 rounded-xl border px-3 py-2.5 transition duration-200'
  const featuredClass = featured
    ? 'border-slate-200 bg-white shadow-[0_2px_10px_rgb(15_23_42/0.06)] hover:border-slate-300 hover:shadow-[0_4px_16px_rgb(15_23_42/0.09)]'
    : 'border-transparent bg-white/70 hover:border-slate-200 hover:bg-white hover:shadow-[0_2px_10px_rgb(15_23_42/0.05)]'

  return (
    <div className={`${base} ${featuredClass}`}>
      <span
        className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition ${
          featured
            ? 'bg-[#00a86b] text-white'
            : 'bg-[#f1f8f4] text-[#00a86b] group-hover:bg-[#00a86b] group-hover:text-white'
        }`}
      >
        <Icon className="h-3.5 w-3.5" strokeWidth={2} />
      </span>
      <div className="min-w-0 flex-1">{children}</div>
      <ArrowRight
        className={`h-3.5 w-3.5 shrink-0 transition group-hover:translate-x-0.5 ${
          featured ? 'text-[#00a86b]' : 'text-slate-300 group-hover:text-[#00a86b]'
        }`}
      />
    </div>
  )
}

export default function ContactContent() {
  return (
    <>
      {/* Quick channels */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {CHANNELS.map(({ icon: Icon, label, value, href, external, hint }, i) => {
          const featured = i === 0
          return (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
              className={`group rounded-xl border bg-white p-5 text-center shadow-[0_2px_12px_rgb(15_23_42/0.06)] transition duration-300 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-[0_8px_24px_rgb(15_23_42/0.1)] ${
                featured ? 'border-slate-200' : 'border-slate-200/80'
              }`}
            >
              <span
                className={`mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full transition duration-300 ${
                  featured
                    ? 'bg-[#00a86b] text-white'
                    : 'bg-[#f1f8f4] text-[#00a86b] group-hover:bg-[#00a86b] group-hover:text-white'
                }`}
              >
                <Icon className="h-5 w-5" strokeWidth={2} />
              </span>
              <p className="mt-3 text-xs font-bold uppercase tracking-wide text-[#00a86b]">{label}</p>
              <p className="mt-1 text-sm font-bold text-[#1b4332]">{value}</p>
              <p className="mt-1 text-[11px] text-[#2d6a4f]/80">{hint}</p>
            </a>
          )
        })}
      </div>

      {/* Form + info — single card */}
      <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_8px_28px_rgb(15_23_42/0.08)]">
        <div className="grid lg:grid-cols-5">
          {/* Form */}
          <div className="border-b border-slate-100 p-6 sm:p-8 lg:col-span-3 lg:border-b-0 lg:border-r">
            <span className="section-tag w-fit">Get started</span>
            <h2 className="mt-2 font-rubik text-lg font-bold text-slate-900 sm:text-xl">
              Write to <span className="highlight">us</span>
            </h2>
            <p className="mt-1 text-sm text-[#2d6a4f]/90">
              Share your details and we&apos;ll connect you with our admissions team.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          {/* Info panel */}
          <div className="bg-[#f8faf9] p-6 sm:p-8 lg:col-span-2 lg:border-l lg:border-slate-100">
            <h3 className="font-rubik text-sm font-bold text-[#1b4332]">Campus & hours</h3>

            <div className="mt-5 space-y-5">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#00a86b]" strokeWidth={2} />
                <div>
                  <p className="text-sm font-medium text-slate-700">{ACADEMY_ADDRESS.line1}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">
                    {ACADEMY_ADDRESS.line2}
                    <br />
                    {ACADEMY_ADDRESS.city}, {ACADEMY_ADDRESS.state} {ACADEMY_ADDRESS.pincode}
                  </p>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      `${ACADEMY_ADDRESS.line2}, ${ACADEMY_ADDRESS.city}`,
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-[#00a86b] hover:text-[#1b4332]"
                  >
                    Get directions
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>

              <div className="flex gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#00a86b]" strokeWidth={2} />
                <div className="flex-1 space-y-2">
                  {ACADEMY_HOURS.map((slot) => (
                    <div
                      key={slot.days}
                      className="flex justify-between gap-3 rounded-lg border border-slate-200 bg-white px-2.5 py-1.5 text-xs shadow-[0_1px_4px_rgb(15_23_42/0.04)]"
                    >
                      <span className="font-semibold text-[#1b4332]">{slot.days}</span>
                      <span className="text-[#2d6a4f]">{slot.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#00a86b]">
                Explore next
              </p>
              <div className="mt-2.5 space-y-2">
                {QUICK_LINKS.map((item) => {
                  const inner = (
                    <>
                      <p className="text-xs font-semibold text-slate-800">{item.label}</p>
                      <p className="text-[10px] text-slate-400">{item.desc}</p>
                    </>
                  )

                  if (item.external) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className="block"
                      >
                        <QuickLinkItem {...item}>{inner}</QuickLinkItem>
                      </a>
                    )
                  }

                  return (
                    <AppLink key={item.label} to={item.to} className="block">
                      <QuickLinkItem {...item}>{inner}</QuickLinkItem>
                    </AppLink>
                  )
                })}
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
