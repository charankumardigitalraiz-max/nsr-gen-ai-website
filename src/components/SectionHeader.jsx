export default function SectionHeader({ tag, title, highlight, subtitle, center = true }) {
  return (
    <div className={center ? 'text-center' : ''}>
      {tag && <span className="section-tag">{tag}</span>}
      <h2 className={`section-title ${center ? 'mx-auto' : ''} mt-2 max-w-3xl`}>
        {title}
        {highlight && (
          <>
            {' '}
            <span className="highlight">{highlight}</span>
          </>
        )}
      </h2>
      {center && <div className="section-divider" />}
      {subtitle && (
        <p className={`mt-4 text-text-light ${center ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
