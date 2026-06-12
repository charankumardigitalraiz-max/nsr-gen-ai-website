import { PLACEMENT_PROCESS_STEPS } from '../../constants/content'

const STEP_IMAGES = [
  '/images/course.jpg', // coding/learning
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=180&h=180&q=80', // assessment/checklist
  '/images/placement.jpg', // data/database/profile
  '/images/Interview-schedule.jpg',
  '/images/offer-letter.jpg', // success/celebration
]

export default function PlacementProcess() {
  return (
    <section className="bg-gradient-to-br from-[#f1f8f4] via-[#e8f5ed] to-[#f1f8f4] py-8 sm:py-10 border-b border-slate-100 relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] rounded-full bg-[#00a86b]/4 blur-[130px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-10">
          <span className="text-xs font-black uppercase tracking-widest text-[#00a86b] bg-[#f1f8f4] border border-[#00a86b]/15 px-3 py-1 rounded-md">
            Placement Process
          </span>
          <h2 className="mt-4 font-rubik text-3xl font-extrabold text-[#1b4332] sm:text-4xl">
            Step-by-Step <span className="highlight">Career Journey</span>
          </h2>
          <p className="mt-4 text-slate-600 font-medium">
            Our structured roadmap to take you from learning concepts to landing your dream job.
          </p>
        </div>

        {/* Timeline Path Container */}
        <div className="relative min-h-[320px] lg:min-h-[360px]">

          {/* Steps Grid */}
          <div className="grid gap-12 lg:grid-cols-5 lg:gap-8 relative z-10">
            {PLACEMENT_PROCESS_STEPS.map((item, index) => {
              const imageUrl = STEP_IMAGES[index] || STEP_IMAGES[0]

              return (
                <div
                  key={item.step}
                  className="relative z-10 grid grid-rows-[1fr_auto] items-center text-left lg:text-center group"
                >

                  {/* Row 1: Top Content (Cards always at the top on Desktop) */}
                  <div className="hidden lg:flex items-end justify-center min-h-[180px] pb-6">
                    <div className="relative rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm transition-all duration-300 group-hover:border-[#00a86b]/40 group-hover:shadow-xl group-hover:shadow-emerald-500/5 max-w-[250px] text-center">
                      {/* Bottom pointer arrow */}
                      <div className="absolute top-[calc(100%-6px)] left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-r border-b border-slate-200/80 rotate-45 z-10 transition-colors duration-300 group-hover:border-b-[#00a86b]/40 group-hover:border-r-[#00a86b]/40" />
                      <span className="inline-block px-2.5 py-0.5 bg-emerald-50 text-[#00a86b] rounded-full text-[10px] font-black uppercase tracking-wider mb-2">
                        Step {item.step}
                      </span>
                      <h3 className="font-rubik text-lg font-extrabold leading-snug text-[#1b4332] group-hover:text-[#00a86b] transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-600 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Row 2: Large Circular Node (Bottom Center) */}
                  <div className="relative flex justify-start lg:justify-center items-center py-4">
                    {/* Main Node Circle */}
                    <div className="placement-step-circle relative z-10 flex h-28 w-28 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-primary bg-primary shadow-md transition-all duration-300 group-hover:border-secondary group-hover:shadow-lg group-hover:shadow-secondary/20 sm:h-32 sm:w-32 lg:h-36 lg:w-36">
                      <img
                        src={imageUrl}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />

                      {/* Numeric Corner Badge */}
                      <span className="absolute -right-0.5 -top-0.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#1b4332] font-rubik text-xs font-black text-white shadow-md sm:h-8 sm:w-8 sm:text-sm">
                        {item.step}
                      </span>
                    </div>

                    {/* Mobile/Tablet Content (shown to the right of circle) */}
                    <div className="lg:hidden ml-6 flex-1">
                      <span className="inline-block px-2 py-0.5 bg-emerald-50 text-[#00a86b] rounded-full text-[9px] font-black uppercase tracking-wider mb-1">
                        Step {item.step}
                      </span>
                      <h3 className="font-rubik text-base font-extrabold leading-snug text-[#1b4332]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-600 font-normal leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Chevron Arrow between steps */}
                  {index < PLACEMENT_PROCESS_STEPS.length - 1 && (
                    <>
                      {/* Desktop: points to the right, aligned with the circles */}
                      <div className="absolute top-[calc(100%-5.5rem)] right-[-24px] z-20 hidden -translate-y-1/2 text-[#00a86b]/40 transition-all duration-300 group-hover:scale-110 group-hover:text-[#00a86b] lg:block">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </div>

                      {/* Mobile/Tablet: points downward, aligned below the circle */}
                      <div className="absolute bottom-[-32px] left-14 -translate-x-1/2 text-[#00a86b]/40 lg:hidden">
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </>
                  )}

                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
