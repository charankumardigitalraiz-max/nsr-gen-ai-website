import { useId } from 'react'

export default function NavLogo({ className = 'h-9 w-9' }) {
  const uid = useId().replace(/:/g, '')
  const bgId = `nav-logo-bg-${uid}`
  const accentId = `nav-logo-accent-${uid}`

  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={bgId} x1="4" y1="4" x2="36" y2="36" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1b4332" />
          <stop offset="1" stopColor="#00a86b" />
        </linearGradient>
        <linearGradient id={accentId} x1="26" y1="8" x2="34" y2="16" gradientUnits="userSpaceOnUse">
          <stop stopColor="#52b788" />
          <stop offset="1" stopColor="#a7f3d0" />
        </linearGradient>
      </defs>
      <rect width="40" height="40" rx="11" fill={`url(#${bgId})`} />
      <path
        d="M11 28V12h5.2l7.4 9.8V12H29v16h-5.2l-7.4-9.8V28H11z"
        fill="#fff"
        fillOpacity="0.95"
      />
      <circle cx="30" cy="11" r="3.25" fill={`url(#${accentId})`} />
      <path
        d="M28.5 11h3M30 9.5v3"
        stroke="#1b4332"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  )
}
