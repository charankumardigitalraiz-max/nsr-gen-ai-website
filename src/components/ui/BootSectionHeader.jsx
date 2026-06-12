/**
 * Section header — matches ExcellenceBar eyebrow / title / subtitle pattern.
 */
export default function BootSectionHeader({
  icon: Icon,
  eyebrow,
  titleBefore = '',
  highlight,
  titleAfter = '',
  description,
  align = 'center',
  theme = 'light',
  className = '',
  as = 'h2',
}) {
  const Heading = as
  const isCenter = align === 'center'
  const isDark = theme === 'dark'

  const eyebrowClass = isDark
    ? 'inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#52b788]'
    : 'inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-[#00a86b]'

  const titleClass = isDark
    ? 'mt-2 font-rubik text-xl font-extrabold text-white sm:text-2xl'
    : 'mt-2 font-rubik text-xl font-extrabold text-[#1b4332] sm:text-2xl'

  const highlightClass = isDark ? 'text-[#52b788]' : 'highlight'

  const descClass = isDark
    ? `mt-2 max-w-lg text-sm text-white/75 ${isCenter ? 'mx-auto' : ''}`
    : `mx-auto mt-2 max-w-lg text-sm text-slate-500`

  return (
    <div
      className={`${isCenter ? 'mx-auto max-w-3xl text-center' : 'max-w-xl text-left'} ${className}`}
    >
      <span className={eyebrowClass}>
        {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
        {eyebrow}
      </span>
      <Heading className={titleClass}>
        {titleBefore}
        {highlight ? <span className={highlightClass}>{highlight}</span> : null}
        {titleAfter}
      </Heading>
      {description ? <p className={descClass}>{description}</p> : null}
    </div>
  )
}
