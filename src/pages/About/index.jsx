import PageHero from '../../components/PageHero'
import PageCta from '../../components/PageCta'
import AboutAmenitiesStory from './sections/AboutAmenitiesStory'
import AboutMoreSections from './sections/AboutMoreSections'
import AboutStory from './sections/AboutStory'
import aboutHeroImage from '../../assets/images/generated-coorg-resort-hero.png'
import ctaImage from '../../assets/images/generated-coorg-activity-trail.png'
import TestimonialsFaq from '../Home/sections/TestimonialsFaq'

const aboutFaqs = [
  {
    question: 'What makes EVAARA different from a regular Coorg stay?',
    answer: 'EVAARA is shaped around quiet luxury, estate views, slow mornings, and personal hospitality. The experience is designed to feel calm, private, and deeply connected to Coorg rather than busy or over-programmed.',
  },
  {
    question: 'Is the resort experience more nature-led or activity-led?',
    answer: 'The stay is nature-led first. Guests can enjoy estate walks, scenic pauses, dining, and nearby Coorg experiences, but the heart of EVAARA is stillness, comfort, and time spent close to the landscape.',
  },
  {
    question: 'Do the rooms and common spaces face nature?',
    answer: 'Yes, EVAARA is planned around views, greenery, and soft natural light. Rooms and shared spaces are composed to keep the estate and the Western Ghats present throughout the stay.',
  },
  {
    question: 'Can the team help plan a slower itinerary?',
    answer: 'Yes. Our team can suggest gentle day plans around viewpoints, estate trails, waterfall visits, coffee stops, and return-to-resort time so the trip feels restful instead of rushed.',
  },
  {
    question: 'Is EVAARA suitable for quiet celebrations or retreats?',
    answer: 'Yes, EVAARA suits intimate celebrations, family breaks, couple escapes, and small retreats where privacy, comfort, and a peaceful Coorg setting matter most.',
  },
]

function About() {
  return (
    <>
      <PageHero title="A Resort Shaped By Coorg" subtitle="A quiet estate retreat where coffee country, warm hospitality, and refined comfort come together slowly." image={aboutHeroImage} />
      <AboutStory />
      <AboutAmenitiesStory />
      <AboutMoreSections />
      <TestimonialsFaq
        eyebrow="About EVAARA"
        title="A few notes on the experience."
        text="A closer look at the mood, setting, and pace of EVAARA: how the resort is designed, what kind of stay it supports, and how our team helps you experience Coorg with more ease."
        faqs={aboutFaqs}
      />
      <PageCta
        title="Stay close to the forest, without leaving comfort behind."
        text="Let our team help you plan a peaceful Coorg escape shaped around slow mornings, estate walks, and considered luxury."
        image={ctaImage}
      />
    </>
  )
}

export default About
