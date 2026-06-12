import Hero from '../sections/hero/Hero'
import ExcellenceBar from '../sections/home/ExcellenceBar'
import HiringPartnersGrid from '../sections/home/HiringPartnersGrid'
import HomeSectionBanner from '../sections/home/HomeSectionBanner'
import Courses from '../sections/courses/Courses'
import PlacementProcess from '../sections/home/PlacementProcess'
import SuccessStories from '../sections/success-stories/SuccessStories'
import MentorshipSection from '../sections/home/MentorshipSection'
import IndustryTestimonials from '../sections/home/IndustryTestimonials'
import TrainingServices from '../sections/training-services/TrainingServices'
import FoundersSection from '../sections/home/FoundersSection'
import VideoTestimonials from '../sections/home/VideoTestimonials'
import HomeFaqSection from '../sections/home/HomeFaqSection'
import OurBlogs from '../sections/our-blogs/OurBlogs'
import HomeCtaBand from '../sections/home/HomeCtaBand'
import { HOME_SECTION_BANNERS } from '../constants/content'

/**
 * Full bootcamp homepage — 10000coders.in core sections + extended NSR blocks.
 */
export default function HomePage() {
  return (
    <div className="home-page">
      <Hero />
      <HiringPartnersGrid />
      <Courses embedded />
      {/* <HomeSectionBanner banner={HOME_SECTION_BANNERS[0]} /> */}
      <PlacementProcess />
      <SuccessStories embedded />
      <HomeSectionBanner banner={HOME_SECTION_BANNERS[1]} />
      <MentorshipSection />
      <IndustryTestimonials />
      <TrainingServices embedded />
      {/* <HomeSectionBanner banner={HOME_SECTION_BANNERS[2]} /> */}
      {/* <FoundersSection /> */}
      {/* <VideoTestimonials /> */}
      <HomeFaqSection />
      <HomeCtaBand />
    </div>
  )
}
