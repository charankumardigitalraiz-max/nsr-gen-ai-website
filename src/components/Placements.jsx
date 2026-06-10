import { PHONE, WHATSAPP, SUCCESSFUL_STUDENTS, HIRING_COMPANIES } from '../constants/content'
import WhatsAppIcon from './icons/WhatsAppIcon'
import { Trophy, ShieldCheck, Calendar, MapPin, Building, GraduationCap, CheckCircle } from 'lucide-react'

export default function Placements() {
  const handleMouseMove = (e, cardEl) => {
    if (!cardEl) return
    const rect = cardEl.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    cardEl.style.setProperty('--mouse-x', `${x}px`)
    cardEl.style.setProperty('--mouse-y', `${y}px`)

    const centerX = rect.width / 2
    const centerY = rect.height / 2
    const rotateX = ((y - centerY) / centerY) * -6
    const rotateY = ((x - centerX) / centerX) * 6
    cardEl.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-2px)`
  }

  const handleMouseLeave = (cardEl) => {
    if (!cardEl) return
    cardEl.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)'
  }

  return (
    <section id="placements" className="relative overflow-hidden bg-gh-canvas">
      {/* Dynamic gradients */}
      <div className="absolute top-1/3 left-0 h-[400px] w-[400px] rounded-full bg-gh-blue/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 h-[400px] w-[400px] rounded-full bg-gh-purple/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        
        {/* Hiring Partners Section */}
        <div className="mb-24">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="section-tag flex items-center gap-1.5 justify-center w-fit mx-auto">
              <Building className="h-3.5 w-3.5 text-gh-blue" />
              Our Network
            </span>
            <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight">
              Top MNCs <span className="bg-gradient-to-r from-gh-blue to-gh-purple bg-clip-text text-transparent">Hiring From Us</span>
            </h2>
            <p className="mt-4 text-base text-gh-muted max-w-lg mx-auto font-medium">
              Our graduates get selected in industry-leading technology consulting and product firms.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {HIRING_COMPANIES.map((company) => (
              <div
                key={company.name}
                className="flex items-center justify-center p-6 rounded-2xl border border-gh-border bg-gh-default/40 backdrop-blur-md hover:border-gh-blue/30 transition-all duration-300 group"
              >
                <span className="text-lg font-extrabold tracking-wide text-gh-muted group-hover:text-gh-blue transition-colors duration-300">
                  {company.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Successful Students Section */}
        <div className="mb-24">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <span className="section-tag flex items-center gap-1.5 justify-center w-fit mx-auto">
              <GraduationCap className="h-3.5 w-3.5 text-gh-purple" />
              Success Stories
            </span>
            <h2 className="text-3xl font-extrabold sm:text-5xl tracking-tight">
              Our Placed <span className="bg-gradient-to-r from-gh-blue via-gh-purple to-cyber-pink bg-clip-text text-transparent">Students</span>
            </h2>
            <p className="mt-4 text-base text-gh-muted max-w-lg mx-auto font-medium">
              Meet some of our successful academy graduates who cracked roles at leading tech companies.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SUCCESSFUL_STUDENTS.map((student) => (
              <div
                key={student.name}
                className="cyber-card group flex flex-col justify-between p-6 border-gh-border/50 hover:border-gh-blue/40"
                onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
                onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
              >
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-gh-blue/20 to-gh-purple/20 text-gh-blue border border-gh-blue/25 font-bold text-lg">
                      {student.initial}
                    </div>
                    <div>
                      <h4 className="text-base font-extrabold text-gh-fg leading-tight">
                        {student.name}
                      </h4>
                      <p className="text-xs text-gh-muted font-medium mt-0.5">
                        {student.role}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2.5">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gh-muted font-medium">Hired By:</span>
                      <strong className="text-gh-fg font-bold flex items-center gap-1">
                        <CheckCircle className="h-3.5 w-3.5 text-gh-green" />
                        {student.company}
                      </strong>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gh-muted font-medium">Salary Package:</span>
                      <strong className="text-gh-blue font-extrabold">
                        {student.package}
                      </strong>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Banner */}
        <div
          className="cyber-card border-gh-purple/30 bg-gradient-to-br from-gh-default/90 via-gh-default/50 to-gh-default/90 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl"
          onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
          onMouseLeave={(e) => handleMouseLeave(e.currentTarget)}
        >
          <div className="absolute -left-10 -top-10 w-40 h-40 bg-gh-blue/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gh-purple/10 rounded-full blur-2xl pointer-events-none" />

          <h2 className="font-outfit text-3xl font-extrabold text-gh-fg sm:text-5xl tracking-tight leading-tight max-w-2xl mx-auto">
            Ready to Accelerate Your Career?
          </h2>
          <p className="mt-4 text-base text-gh-muted max-w-lg mx-auto font-medium">
            Contact us today for batch admission details and program details.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-sm text-gh-muted font-medium">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-gh-blue" />
              <span>Next Batch: <strong className="text-gh-fg">20th June</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gh-purple" />
              <span>Location: <strong className="text-gh-fg">KPHB, Hyderabad</strong></span>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row relative z-10">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="btn-hero flex items-center gap-2 px-10 py-4"
            >
              <WhatsAppIcon />
              Register via WhatsApp
            </a>
            <a
              href={`tel:+91${PHONE}`}
              className="btn-hero-outline flex items-center gap-2 px-8 py-4"
            >
              📞 Call +91 {PHONE}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
