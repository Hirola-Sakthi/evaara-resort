import PageHero from '../../components/PageHero'
import PageCta from '../../components/PageCta'
import ActivityGrid from './sections/ActivityGrid'
import activitiesHeroImage from '../../assets/images/generated-coorg-activity-trail.png'

function Activities() {
  return (
    <>
      <PageHero title="Experiences Rooted In Coorg" subtitle="Plantation trails, forest quiet, campfire evenings, and gentle adventures designed for unhurried days." image={activitiesHeroImage} />
      <ActivityGrid />
      <PageCta
        eyebrow="Curated Days"
        title="Let the hills decide the rhythm."
        text="Plan nature walks, coffee trails, and slow evenings with a team that knows how to keep the experience personal."
        image={activitiesHeroImage}
      />
    </>
  )
}

export default Activities
