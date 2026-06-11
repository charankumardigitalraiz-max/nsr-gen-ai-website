import Hero from '../sections/hero/Hero'
import Courses from '../sections/courses/Courses'
import HiringPartners from '../sections/hiring-partners/HiringPartners'
import SuccessStories from '../sections/success-stories/SuccessStories'
import TrainingServices from '../sections/training-services/TrainingServices'
import About from '../sections/about/About'
import OurBlogs from '../sections/our-blogs/OurBlogs'

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="cv-section">
        <Courses />
      </div>
      <div className="cv-section">
        <HiringPartners />
      </div>
      <div className="cv-section">
        <SuccessStories />
      </div>
      <div className="cv-section">
        <TrainingServices />
      </div>
      {/* <div className="cv-section">
        <About preview />
      </div> */}
      <div className="cv-section">
        <OurBlogs />
      </div>
    </>
  )
}
