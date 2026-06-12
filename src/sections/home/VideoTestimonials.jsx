import { useState } from 'react'
import { Quote } from 'lucide-react'
import { VIDEO_TESTIMONIALS } from '../../constants/content'

export default function VideoTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeVideo = VIDEO_TESTIMONIALS[activeIndex]

  return (
    <section className="bg-gradient-to-b from-[#1b4332] to-[#081c15] text-white py-16 sm:py-20 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="font-rubik text-3xl font-extrabold sm:text-4xl">
            Our Students&apos; <span className="text-[#00a86b]">Experiences Speak Volumes</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#a7f3d0] font-medium">
            Hear directly from our graduates about the quality of education, support, and placement readiness they received.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left Column: Video Player */}
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-black/40 aspect-video relative">
            <video
              key={activeVideo.studentName}
              src={activeVideo.videoUrl}
              className="w-full h-full object-cover"
              controls
              autoPlay={false}
              poster={activeVideo.avatar}
            />
          </div>

          {/* Right Column: Review Details & Selectors */}
          <div className="flex flex-col justify-between h-full">
            <div className="relative p-6 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm">
              <Quote className="absolute -top-3 -left-3 h-8 w-8 text-[#00a86b]/20 rotate-180" />
              <p className="relative z-10 text-lg sm:text-xl lg:text-2xl font-medium leading-relaxed italic text-slate-100">
                &ldquo;{activeVideo.quote}&rdquo;
              </p>
              
              <div className="mt-6 border-t border-white/10 pt-4 flex flex-col">
                <span className="font-rubik text-lg sm:text-xl font-bold text-[#00a86b]">{activeVideo.studentName}</span>
                <span className="text-xs sm:text-sm font-semibold text-[#a7f3d0]">{activeVideo.role} at {activeVideo.company}</span>
              </div>
            </div>

            {/* Avatar Selection Grid */}
            <div className="mt-8">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Click to view other reviews:</h4>
              <div className="flex flex-wrap gap-4">
                {VIDEO_TESTIMONIALS.map((video, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveIndex(idx)}
                    className={`relative group rounded-full overflow-hidden transition-all duration-300 ${
                      idx === activeIndex
                        ? 'ring-4 ring-[#ff8541] scale-110 shadow-lg shadow-[#ff8541]/30'
                        : 'opacity-60 hover:opacity-100 ring-2 ring-white/10 hover:scale-105'
                    }`}
                  >
                    <img
                      src={video.avatar}
                      alt={video.studentName}
                      className="h-14 w-14 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-[10px] font-bold bg-[#ff8541] px-1.5 py-0.5 rounded text-white">{video.studentName}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
