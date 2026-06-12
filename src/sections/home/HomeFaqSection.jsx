import { HelpCircle, MessageCircle } from 'lucide-react'
import { WHATSAPP } from '../../constants/content'

const FAQ_ITEMS = [
  {
    q: 'Which program is right after B.Tech or MCA?',
    a: 'We map your background to GenAI, Data Science, or Full Stack — with a free counselling call before you enroll.',
  },
  {
    q: 'Will I get placement support after the course?',
    a: 'Yes — mock interviews, resume reviews, referral support, and active follow-ups until you accept an offer.',
  },
  {
    q: 'Who teaches the batches?',
    a: 'Industry mentors with live classroom sessions, daily labs, and 1:1 doubt clearing at our KPHB campus.',
  },
  {
    q: 'Can freshers from non-IT backgrounds join?',
    a: 'Absolutely. Our programs start from fundamentals and build up to job-ready GenAI and data skills.',
  },
]

export default function HomeFaqSection() {
  return (
    <section className="bg-slate-50 py-16 sm:py-10 border-b border-slate-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f1f8f4] border border-[#00a86b]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#1b4332] mb-4">
            <HelpCircle className="h-3.5 w-3.5 text-[#00a86b]" />
            Common Questions
          </span>
          <h2 className="font-rubik text-3xl font-extrabold text-[#1b4332] sm:text-4xl">
            Still Have <span className="highlight">Doubts?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Quick answers before you book a demo — same questions every Hyderabad bootcamp applicant asks.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
          {FAQ_ITEMS.map((item) => (
            <article
              key={item.q}
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-[#00a86b]/30 hover:shadow-md"
            >
              <h3 className="font-rubik text-lg font-extrabold leading-snug text-[#1b4332]">
                {item.q}
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-500 font-medium">
                {item.a}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-sm font-bold shadow-lg shadow-[#00a86b]/20"
          >
            <MessageCircle className="h-4 w-4" />
            Chat with admissions
          </a>
        </div>
      </div>
    </section>
  )
}
