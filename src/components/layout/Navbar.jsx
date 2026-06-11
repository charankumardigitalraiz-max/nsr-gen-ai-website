import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { NAVBAR_LINKS, ROUTES, isHeroNavMode, isNavLinkActive } from '../../constants/routes'
import AppLink from '../AppLink'
import EnrollModal from '../ui/EnrollModal'
import NavLogo from '../ui/NavLogo'

export default function Navbar() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [enrollOpen, setEnrollOpen] = useState(false)

  const heroMode = isHeroNavMode(pathname, scrolled)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setScrolled(window.scrollY > 20)
  }, [pathname])

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
            <AppLink to={ROUTES.home} className="nav-brand group" onClick={() => setMenuOpen(false)}>
              <NavLogo className="h-9 w-9 shrink-0 transition duration-300 group-hover:scale-105" />
              <span className="nav-brand-text">
                <span className="nav-brand-nsr">NSR</span>
                <span className="nav-brand-name">
                  GenAI <span className="nav-brand-accent">ProSkills</span>
                </span>
              </span>
            </AppLink>

            {/* Center links — desktop */}
            <nav className="nav-center" aria-label="Main navigation">
              {NAVBAR_LINKS.map((link) => {
                const active = isNavLinkActive(pathname, link.href)
                return (
                  <AppLink
                    key={link.href}
                    to={link.href}
                    className={`nav-center-link${active ? ' nav-center-link--active' : ''}`}
                  >
                    {link.label}
                  </AppLink>
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
              {NAVBAR_LINKS.map((link, i) => {
                const active = isNavLinkActive(pathname, link.href)
                return (
                  <AppLink
                    key={link.href}
                    to={link.href}
                    className={`nav-drawer-link${active ? ' nav-drawer-link--active' : ''}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="nav-drawer-num">{String(i + 1).padStart(2, '0')}</span>
                    <span>{link.label}</span>
                  </AppLink>
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
