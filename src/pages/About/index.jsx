import PageHero from '../../components/PageHero'
import PageCta from '../../components/PageCta'
import AboutMoreSections from './sections/AboutMoreSections'
import AboutStory from './sections/AboutStory'
import aboutHeroImage from '../../assets/images/generated-coorg-resort-hero.png'
import ctaImage from '../../assets/images/generated-coorg-activity-trail.png'
import TestimonialsFaq from '../Home/sections/TestimonialsFaq'

function About() {
  return (
    <>
      <PageHero title="A Resort Shaped By Coorg" subtitle="A quiet estate retreat where coffee country, warm hospitality, and refined comfort come together slowly." image={aboutHeroImage} />
      <AboutStory />
      <AboutMoreSections />
      <TestimonialsFaq />
      <PageCta
        title="Stay close to the forest, without leaving comfort behind."
        text="Let our team help you plan a peaceful Coorg escape shaped around slow mornings, estate walks, and considered luxury."
        image={ctaImage}
      />
    </>
  )
}

export default About
