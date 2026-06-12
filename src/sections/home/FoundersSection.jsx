import { useState } from 'react'
import { PhoneCall } from 'lucide-react'
import { FOUNDERS_INFO } from '../../constants/content'
import EnrollModal from '../../components/ui/EnrollModal'

export default function FoundersSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="bg-slate-50 py-8 sm:py-10 border-b border-slate-100 relative overflow-hidden">
      {/* Subtle background blurs */}
      <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-orange-400/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-[#00a86b]/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-rubik text-3xl font-extrabold text-[#1b4332] sm:text-4xl">
            Faces Behind Our <span className="highlight">Guiding Expertise</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 font-medium">
            Learn from leaders who have built software at the world's top tech companies and dedicated their careers to coaching.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
          {FOUNDERS_INFO.map((founder, i) => (
            <div
              key={i}
              className="flex items-center gap-5 rounded-2xl border border-slate-200/80 bg-white p-5 transition-all duration-300 hover:scale-[1.02] hover:border-[#00a86b]/40 hover:shadow-md"
            >
              {/* Profile Image (Compact circle) */}
              <img
                src={founder.avatar}
                alt={founder.name}
                className="h-20 w-20 rounded-full object-cover border-2 border-[#00a86b]/10 shrink-0 shadow-sm"
              />

              <div className="text-left min-w-0">
                <h3 className="font-rubik text-base sm:text-lg font-extrabold text-[#1b4332] leading-tight truncate">{founder.name}</h3>
                <p className="text-xs sm:text-sm font-bold text-[#00a86b] mt-0.5">{founder.role}</p>
                <p className="text-xs sm:text-sm font-semibold text-slate-500 mt-1">{founder.credentials}</p>

                {/* Companies badges */}
                <div className="flex flex-wrap gap-1 mt-3">
                  {founder.companies.map((company) => (
                    <span
                      key={company}
                      className="rounded bg-[#f1f8f4] border border-[#00a86b]/10 px-2 py-0.5 text-[10px] sm:text-xs font-bold text-[#2d6a4f]"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => setModalOpen(true)}
            className="btn-primary inline-flex items-center gap-2 px-8 py-3 text-sm font-bold shadow-lg shadow-[#00a86b]/20"
          >
            <PhoneCall className="h-4 w-4" />
            Request Callback
          </button>
        </div>
      </div>

      <EnrollModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultCourse="General Enquiry / Founders Callback"
      />
    </section>
  )
}

