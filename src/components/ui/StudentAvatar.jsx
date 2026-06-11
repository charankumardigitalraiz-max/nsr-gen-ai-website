const STUDENT_AVATARS = {
  'K. Sai Kiran': (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <linearGradient id="grad-k" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#818CF8" />
          <stop offset="100%" stopColor="#312E81" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#grad-k)" />
      <circle cx="50" cy="45" r="22" fill="#FEE2E2" />
      <path d="M30 45 C30 25, 70 25, 70 45 C70 40, 30 40, 30 45 Z" fill="#1E293B" />
      <rect x="38" y="42" width="10" height="5" rx="2" fill="none" stroke="#1E293B" strokeWidth="2.5" />
      <rect x="52" y="42" width="10" height="5" rx="2" fill="none" stroke="#1E293B" strokeWidth="2.5" />
      <line x1="48" y1="44" x2="52" y2="44" stroke="#1E293B" strokeWidth="2.5" />
      <path d="M22 80 C22 65, 78 65, 78 80 L78 95 L22 95 Z" fill="#E2E8F0" />
      <path d="M50 65 L40 76 L60 76 Z" fill="#475569" />
    </svg>
  ),
  'M. Shravya': (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <linearGradient id="grad-s" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#9D174D" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#grad-s)" />
      <path d="M28 45 C28 20, 72 20, 72 45 C72 65, 28 65, 28 45 Z" fill="#1E293B" />
      <circle cx="50" cy="46" r="20" fill="#FED7AA" />
      <path d="M22 80 C22 68, 78 68, 78 80 L78 95 L22 95 Z" fill="#F472B6" />
      <path d="M50 68 L42 78 L58 78 Z" fill="#FED7AA" />
    </svg>
  ),
  'P. Rahul': (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <linearGradient id="grad-r" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#34D399" />
          <stop offset="100%" stopColor="#065F46" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#grad-r)" />
      <circle cx="50" cy="45" r="22" fill="#FEE2E2" />
      <path d="M32 35 C35 25, 65 25, 68 35 C70 42, 60 38, 50 38 C40 38, 30 42, 32 35 Z" fill="#78350F" />
      <path d="M22 80 C22 65, 78 65, 78 80 L78 95 L22 95 Z" fill="#0F172A" />
      <path d="M50 65 L44 75 L56 75 Z" fill="#F8FAFC" />
      <path d="M48 75 L52 75 L54 90 L50 95 L46 90 Z" fill="#3B82F6" />
    </svg>
  ),
  'G. Harish': (
    <svg viewBox="0 0 100 100" className="h-full w-full">
      <defs>
        <linearGradient id="grad-h" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#1E3A8A" />
        </linearGradient>
      </defs>
      <circle cx="50" cy="50" r="48" fill="url(#grad-h)" />
      <circle cx="50" cy="45" r="22" fill="#FED7AA" />
      <path d="M30 40 C35 20, 65 20, 70 40 L65 35 L35 35 Z" fill="#0F172A" />
      <path d="M22 80 C22 66, 78 66, 78 80 L78 95 L22 95 Z" fill="#10B981" />
      <path d="M50 66 L43 75 L57 75 Z" fill="#FED7AA" />
    </svg>
  ),
}

export default function StudentAvatar({ student, size = 'md', className = '' }) {
  const sizeClass =
    size === 'sm' ? 'h-9 w-9 rounded-lg' : size === 'lg' ? 'h-14 w-14 rounded-2xl' : 'h-11 w-11 rounded-xl'

  return (
    <div
      className={`flex shrink-0 items-center justify-center overflow-hidden border border-slate-100 bg-slate-50 p-0.5 shadow-inner ${sizeClass} ${className}`}
    >
      {STUDENT_AVATARS[student.name] || (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-tr from-[#52b788] to-[#1b4332] text-[10px] font-bold text-white">
          {student.initial}
        </div>
      )}
    </div>
  )
}
