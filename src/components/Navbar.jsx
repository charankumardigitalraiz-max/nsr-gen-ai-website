import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, Sparkles, X } from 'lucide-react'
import { NAV_LINKS } from '../constants/content'
import EnrollModal from './EnrollModal'

function isLinkActive(currentHash, href) {
  if (href === '#/') {
    return currentHash === '' || currentHash === '#/'
  }
  if (href === '#/courses') {
    return currentHash === '#/courses' || currentHash.startsWith('#/courses/')
  }
  return currentHash === href
}

export default function Navbar({ currentHash }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [enrollOpen, setEnrollOpen] = useState(false)

  const onHome = currentHash === '#/' || currentHash === ''
  const onCourseDetail =
    currentHash.startsWith('#/courses/') && currentHash.replace('#/courses/', '').length > 0
  const heroMode = (onHome || onCourseDetail) && !scrolled

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setScrolled(window.scrollY > 20)
  }, [currentHash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const capsuleClass = heroMode ? 'nav-capsule nav-capsule--hero' : 'nav-capsule nav-capsule--solid'
  const drawerClass = heroMode ? 'nav-drawer nav-drawer--hero' : 'nav-drawer nav-drawer--solid'

  return (
    <header className={`nav-shell${scrolled ? ' nav-shell--scrolled' : ''}`}>
      <div className="nav-wrap">
        <div className={capsuleClass}>
          <div className="nav-grid">
            {/* Brand */}
            <a href="#/" className="nav-brand group" onClick={() => setMenuOpen(false)}>
              <span className="nav-brand-icon">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="nav-brand-text">
                <span className="nav-brand-nsr">NSR</span>
                <span className="nav-brand-name">GenAI ProSkills</span>
              </span>
            </a>

            {/* Center links — desktop */}
            <nav className="nav-center" aria-label="Main navigation">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(currentHash, link.href)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`nav-center-link${active ? ' nav-center-link--active' : ''}`}
                  >
                    {link.label}
                  </a>
                )
              })}
            </nav>

            {/* Actions — desktop */}
            <div className="nav-actions">
              {/* <span className="nav-status">June batch open</span> */}
              <button
                type="button"
                onClick={() => setEnrollOpen(true)}
                className={`nav-enroll ${heroMode ? 'nav-enroll--hero' : 'nav-enroll--solid'}`}
              >
                Enroll
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Mobile toggle */}
            <button
              type="button"
              className="nav-toggle"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      {menuOpen && (
        <>
          <button
            type="button"
            className="nav-backdrop"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          />
          <aside className={drawerClass}>
            <div className="nav-drawer-head">
              <p className="nav-drawer-label">Menu</p>
              <button
                type="button"
                className="nav-drawer-close"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="nav-drawer-links">
              {NAV_LINKS.map((link, i) => {
                const active = isLinkActive(currentHash, link.href)
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    className={`nav-drawer-link${active ? ' nav-drawer-link--active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="nav-drawer-num">{String(i + 1).padStart(2, '0')}</span>
                    <span>{link.label}</span>
                  </a>
                )
              })}
            </nav>

            <div className="nav-drawer-foot">
              <p className="nav-drawer-note">Admissions open for June batch · KPHB, Hyderabad</p>
              <button
                type="button"
                className={`nav-enroll nav-enroll--full ${heroMode ? 'nav-enroll--hero' : 'nav-enroll--solid'}`}
                onClick={() => {
                  setMenuOpen(false)
                  setEnrollOpen(true)
                }}
              >
                Enroll Now
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </aside>
        </>
      )}
      <EnrollModal open={enrollOpen} onClose={() => setEnrollOpen(false)} />
    </header>
  )
}
