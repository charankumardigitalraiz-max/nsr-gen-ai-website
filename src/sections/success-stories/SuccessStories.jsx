import { SUCCESSFUL_STUDENTS } from '../../constants/content'
import StudentPlacementCard from './StudentPlacementCard'

export default function SuccessStories({ embedded = false }) {
  const sectionClass = embedded 
    ? 'boot-section boot-section--white py-16 sm:py-20 overflow-hidden' 
    : 'relative overflow-hidden bg-gh-canvas py-16 sm:py-20'
  
  const doubledStudents = [...SUCCESSFUL_STUDENTS, ...SUCCESSFUL_STUDENTS, ...SUCCESSFUL_STUDENTS]

  return (
    <section className={sectionClass}>
      <div className="relative z-10 mx-auto max-w-7xl px-6 mb-10">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-rubik text-3xl font-extrabold text-[#1b4332] sm:text-4xl">
            Building software careers, <span className="highlight">one success story at a time</span>
          </h2>
          <p className="mt-4 text-slate-600 font-medium">
            Hear from our graduates who successfully transitioned into high-paying tech roles.
          </p>
        </div>
      </div>

      {/* Auto-scrolling Ticker Track */}
      <div className="relative w-full overflow-hidden py-4
        before:pointer-events-none before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-16 before:bg-gradient-to-r before:from-white before:to-transparent sm:before:w-32
        after:pointer-events-none after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-16 after:bg-gradient-to-l after:from-white after:to-transparent sm:after:w-32"
      >
        <div className="animate-ticker flex w-max items-stretch gap-6 px-4 hover:[animation-play-state:paused]">
          {doubledStudents.map((student, idx) => (
            <div key={`${student.name}-${idx}`} className="w-[220px] sm:w-[260px] shrink-0 flex">
              <StudentPlacementCard student={student} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

