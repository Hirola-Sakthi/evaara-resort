import AboutPreview from './sections/AboutPreview'
import CinematicVideo from './sections/CinematicVideo'
import FeaturedActivities from './sections/FeaturedActivities'
import FeaturedBlog from './sections/FeaturedBlog'
import FeaturedRooms from './sections/FeaturedRooms'
import FinalCta from './sections/FinalCta'
import GalleryPreview from './sections/GalleryPreview'
import HeroSection from './sections/HeroSection'
import HomeMoreSections from './sections/HomeMoreSections'
import ResortAmenities from './sections/ResortAmenities'
import TestimonialsFaq from './sections/TestimonialsFaq'


function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <CinematicVideo />
      <FeaturedRooms />
      <ResortAmenities />
      <FeaturedActivities />
      <GalleryPreview />
      <TestimonialsFaq />
      <FeaturedBlog />
      <HomeMoreSections />
      <FinalCta />
    </>
  )
}

export default Home
