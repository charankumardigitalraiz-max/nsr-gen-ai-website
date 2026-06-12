import { Award } from 'lucide-react'
import BootSectionHeader from '../../components/ui/BootSectionHeader'

export default function ExcellenceBar() {
  return (
    <section className="home-section border-y border-slate-200/80 bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <BootSectionHeader
          icon={Award}
          titleBefore="Recognized for Excellence and "
          highlight="Innovation"
          description="Highlighting our commitment to excellence industry leadership"
        />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 mt-10">
          {/* Startup India Recognition Card */}
          <div className="flex items-center gap-4 px-8 py-5 bg-gradient-to-br from-[#ff8541]/5 to-[#ff8541]/10 border border-[#ff8541]/20 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
              🇮🇳
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-[#ff8541] uppercase tracking-wider">Government Recognition</p>
              <h4 className="font-rubik text-xl font-extrabold text-slate-800">#startupindia</h4>
            </div>
          </div>

          {/* DPIIT Govt of India Card */}
          <div className="flex items-center gap-4 px-8 py-5 bg-gradient-to-br from-[#e84975]/5 to-[#e84975]/10 border border-[#e84975]/20 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 w-full max-w-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white text-2xl shadow-sm">
              🏛️
            </div>
            <div className="text-left">
              <p className="text-[10px] font-bold text-[#e84975] uppercase tracking-wider">Ministry of Commerce</p>
              <h4 className="font-rubik text-base font-bold text-slate-800 leading-tight">DPIIT Govt. of India</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
