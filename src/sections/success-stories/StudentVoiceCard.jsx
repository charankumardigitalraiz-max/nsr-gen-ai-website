import { Play } from 'lucide-react'

export default function StudentVoiceCard({ student, index }) {
  return (
    <article className="student-voice-card group">
      <div className="student-voice-card__media">
        <img
          src={student.image}
          alt={student.imageAlt || student.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          loading="lazy"
        />
        <div className="student-voice-card__shade" aria-hidden />
        <span className="student-voice-card__play" aria-hidden>
          <Play className="h-5 w-5 fill-white text-white" />
        </span>
      </div>
      <p className="student-voice-card__label">Student Voice {index + 1}</p>
    </article>
  )
}
