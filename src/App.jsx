import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingWhatsApp from './components/layout/FloatingWhatsApp'
import FloatingVideoWidget from './components/layout/FloatingVideoWidget'
import InteractiveGridBackground from './components/ui/InteractiveGridBackground'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import CoursesPage from './pages/CoursesPage'
import CourseDetail from './pages/CourseDetail'
import BlogsPage from './pages/BlogsPage'
import BlogDetail from './pages/BlogDetail'
import PlacementsPage from './pages/PlacementsPage'
import AboutPage from './pages/AboutPage'
import TrainingPage from './pages/TrainingPage'
import RoadmapPage from './pages/RoadmapPage'
import ContactPage from './pages/ContactPage'
import OfflineCenterPage from './pages/OfflineCenterPage'
import { redirectLegacyHashRoute } from './constants/routes'

function AppLayout() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-gh-canvas text-gh-fg antialiased selection:bg-gh-purple/10 selection:text-gh-fg">
      <InteractiveGridBackground />
      <div className="pointer-events-none fixed inset-0 grid-bg-cyber z-0" />
      <div className="pointer-events-none fixed -left-48 top-10 h-[min(480px,40vw)] w-[min(480px,40vw)] rounded-full bg-gh-purple/3 blur-3xl z-0 lg:blur-[72px]" />
      <div className="pointer-events-none fixed -right-48 bottom-10 h-[min(480px,40vw)] w-[min(480px,40vw)] rounded-full bg-gh-blue/3 blur-3xl z-0 lg:blur-[72px]" />

      <div className="relative z-10 flex flex-col min-h-screen">
        <ScrollToTop />
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/courses/:slug" element={<CourseDetail />} />
            <Route path="/placements" element={<PlacementsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/training" element={<TrainingPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogDetail />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/offline-center" element={<OfflineCenterPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        <Footer />
        <FloatingVideoWidget />
        <FloatingWhatsApp />
      </div>
    </div>
  )
}

redirectLegacyHashRoute()

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}
