import PageHero from '../../components/PageHero'
import ContactPanel from './sections/ContactPanel'
import contactHeroImage from '../../assets/images/generated-coorg-resort-hero.png'

function Contact() {
  return (
    <>
      <PageHero title="Begin Your Coorg Escape" subtitle="Tell us how you would like to stay, and our team will help shape the right EVAARA experience." image={contactHeroImage} />
      <ContactPanel />
    </>
  )
}

export default Contact
