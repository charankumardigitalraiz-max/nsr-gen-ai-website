import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DoubtsSection from './components/DoubtsSection'
import Courses from './components/Courses'
import CourseDetail from './components/CourseDetail'
import Roadmap from './components/Roadmap'
import Placements from './components/Placements'
import About from './components/About'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import InteractiveGridBackground from './components/InteractiveGridBackground'
import HiringPartners from './components/HiringPartners'
import SuccessStories from './components/SuccessStories'
import TrainingServices from './components/TrainingServices'
import OurBlogs from './components/OurBlogs'

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#/')
  const onHome = currentHash === '#/' || currentHash === ''

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash || '#/')
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const courseDetailSlug = currentHash.startsWith('#/courses/')
    ? currentHash.replace('#/courses/', '').split('?')[0]
    : null
  const isCourseDetail = Boolean(courseDetailSlug)

  // Page Routing Switch
  const renderActivePage = () => {
    if (courseDetailSlug) {
      return <CourseDetail slug={courseDetailSlug} />
    }

    switch (currentHash) {
      case '#/courses':
        return <Courses />
      case '#/roadmap':
        return <Roadmap />
      case '#/placements':
        return <Placements />
      case '#/about':
        return <About />
      case '#/training':
        return <TrainingServices />
      case '#/blogs':
        return <OurBlogs />
      case '#/':
      default:
        return (
          <>
            <Hero />
            <Courses />
            <HiringPartners />
            <Roadmap />
            <SuccessStories />
            <TrainingServices />
            <OurBlogs />
            {/* <DoubtsSection /> */}
          </>
        )
    }
  }

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gh-canvas text-gh-fg antialiased selection:bg-gh-purple/10 selection:text-gh-fg">
      {/* Premium Cyber Light Minimalist Ambient Grid & Mesh Blurs */}
      <InteractiveGridBackground />
      <div className="pointer-events-none fixed inset-0 grid-bg-cyber z-0" />
      <div className="pointer-events-none fixed -left-48 top-10 h-[600px] w-[600px] rounded-full bg-gh-purple/3 blur-[130px] z-0 animate-float" />
      <div className="pointer-events-none fixed -right-48 bottom-10 h-[600px] w-[600px] rounded-full bg-gh-blue/3 blur-[130px] z-0 animate-float" style={{ animationDelay: '-3s' }} />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Global Navigation Navbar */}
        <Navbar currentHash={currentHash} />

        {/* Active subpage content container */}
        <main
          className={`flex-grow ${onHome || isCourseDetail ? '' : 'pt-[5.25rem] sm:pt-[6rem]'}`}
        >
          {renderActivePage()}
        </main>

        {/* Global Footer & Sticky Actions */}
        <Footer />
        <FloatingWhatsApp />
      </div>
    </div>
  )
}

export default App
