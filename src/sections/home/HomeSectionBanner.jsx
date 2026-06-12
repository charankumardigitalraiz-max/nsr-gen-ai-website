import { ArrowRight } from 'lucide-react'
import AppLink from '../../components/AppLink'

export default function HomeSectionBanner({ banner }) {
  if (!banner) return null

  const align = banner.align || 'left'
  const alignClass =
    align === 'center'
      ? 'home-section-banner--center'
      : align === 'right'
        ? 'home-section-banner--right'
        : 'home-section-banner--left'

  return (
    <section
      className={`home-section-banner ${alignClass}`}
      aria-label={banner.alt || 'Campus highlight'}
    >
      <div className="home-section-banner__media" aria-hidden>
        <img
          src={banner.src}
          alt=""
          className="home-section-banner__img"
          loading="lazy"
        />
      </div>
      <div className="home-section-banner__shade" aria-hidden />

      <div className="home-section-banner__inner">
        <div className="home-section-banner__content">
          {banner.eyebrow ? (
            <span className="home-section-banner__eyebrow">{banner.eyebrow}</span>
          ) : null}

          <h2 className="home-section-banner__title">
            {banner.titleBefore}
            {banner.highlight ? (
              <span className="home-section-banner__highlight">{banner.highlight}</span>
            ) : null}
            {banner.titleAfter}
          </h2>

          {banner.description ? (
            <p className="home-section-banner__desc">{banner.description}</p>
          ) : null}

          {banner.ctaLabel && banner.ctaHref ? (
            <AppLink to={banner.ctaHref} className="home-section-banner__cta">
              {banner.ctaLabel}
              <ArrowRight className="h-4 w-4 shrink-0" />
            </AppLink>
          ) : null}
        </div>
      </div>
    </section>
  )
}
