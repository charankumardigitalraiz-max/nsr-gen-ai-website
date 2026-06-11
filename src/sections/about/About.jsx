import { ArrowUpRight, Heart } from 'lucide-react'
import AboutContent from './AboutContent'
import { ROUTES } from '../../constants/routes'
import AppLink from '../../components/AppLink'

export default function About({ preview = false, fullPage = false }) {
  return (
    <section
      id="about"
      className={`relative overflow-hidden ${fullPage ? 'mt-10 bg-transparent' : 'bg-gh-canvas'}`}
    >
      {!fullPage && (
        <>
          <div className="pointer-events-none absolute top-0 right-1/4 h-72 w-72 rounded-full bg-[#00a86b]/5 blur-3xl lg:blur-[72px]" />
          <div className="pointer-events-none absolute bottom-1/4 left-0 h-80 w-80 rounded-full bg-gh-purple/5 blur-3xl lg:blur-[72px]" />
        </>
      )}

      <div className={`relative z-10 ${fullPage ? '' : 'mx-auto max-w-7xl px-6'}`}>
        {!fullPage && (
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="section-tag">
              <Heart className="h-3.5 w-3.5" />
              About Us
            </span>
            <h2 className="section-title">
              NSR GenAI <span className="highlight">ProSkills Academy</span>
            </h2>
            <p className="mx-auto max-w-lg text-sm font-medium text-gh-muted">
              Hyderabad&apos;s practical GenAI training institute — classroom learning, live projects,
              and placement support under one roof.
            </p>
          </div>
        )}

        <AboutContent preview={preview} fullPage={fullPage} />

        {preview && (
          <div className="mt-10 text-center">
            <AppLink
              to={ROUTES.about}
              className="btn-hero inline-flex items-center gap-2 px-8 py-3 text-xs font-bold"
            >
              Learn more about us
              <ArrowUpRight className="h-4 w-4" />
            </AppLink>
          </div>
        )}
      </div>
    </section>
  )
}
