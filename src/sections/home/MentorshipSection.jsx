import { MessageCircle, Users } from 'lucide-react'
import { WHATSAPP } from '../../constants/content'
import { ROUTES } from '../../constants/routes'
import AppLink from '../../components/AppLink'

const STUDENTS_IMAGE =
  '/images/Trainer.jpg'

const MENTORS_IMAGE =
  '/images/1-on-1.jpg'

export default function MentorshipSection() {
  return (
    <section className="bg-gradient-to-b from-[#1b4332] to-[#0d2a1e] text-white py-16 sm:py-20 relative overflow-hidden">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 h-72 w-72 rounded-full bg-[#00a86b]/10 blur-3xl" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Images Grid */}
        <div className="relative order-2 grid gap-6 sm:grid-cols-2 lg:order-1">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <img
              src={STUDENTS_IMAGE}
              alt="NSR ProSkills students"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-2xl transition-all duration-300 hover:scale-[1.02]">
            <img
              src={MENTORS_IMAGE}
              alt="NSR ProSkills mentors"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            {/* 1:1 Badge */}
            <div className="absolute -bottom-3 -right-2 rounded-2xl border border-[#52b788]/40 bg-gradient-to-br from-[#2d6a4f] to-[#1b4332] px-6 py-4 shadow-2xl sm:-right-4 animate-bounce-slow">
              <p className="font-rubik text-3xl font-black text-white leading-none">1:1</p>
              <p className="text-[10px] font-extrabold uppercase tracking-widest text-[#a7f3d0] mt-1">
                Mentorship
              </p>
            </div>
          </div>
        </div>

        {/* Content Panel */}
        <div className="order-1 lg:order-2 text-left">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[#a7f3d0] mb-4">
            Guaranteed Guidance
          </span>
          <h2 className="font-rubik text-3xl font-extrabold text-white leading-tight sm:text-4xl">
            1-on-1 Mentorship Until <span className="text-[#00a86b]">You Get Placed</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
            Every student is assigned a dedicated Program Manager who tracks your progress, gives personalized feedback, helps with interviews, and stays with you until you land your job.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <AppLink
              to={ROUTES.about}
              className="btn-primary inline-flex items-center gap-2 px-7 py-3 text-sm font-bold shadow-lg shadow-[#00a86b]/20"
            >
              <Users className="h-4 w-4" />
              Meet Our Mentors
            </AppLink>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 hover:border-white/40"
            >
              <MessageCircle className="h-4 w-4 text-[#00a86b]" />
              Chat with us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
