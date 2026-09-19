import PageHero from '../../components/PageHero'
import PageCta from '../../components/PageCta'
import RoomGrid from './sections/RoomGrid'
import roomsHeroImage from '../../assets/images/generated-coorg-room-view.png'
import ctaImage from '../../assets/images/generated-coorg-resort-hero.png'

function Rooms() {
  return (
    <>
      <PageHero title="Rooms With A View Into Stillness" subtitle="Thoughtfully composed stays with warm textures, estate views, and the privacy of Coorg's green hills." image={roomsHeroImage} />
      <RoomGrid />
      <PageCta
        eyebrow="Reservations"
        title="Choose the room that matches your pace."
        text="Share your dates and the kind of stay you imagine. We will help pair you with the right room, view, and experience."
        image={ctaImage}
      />
    </>
  )
}

export default Rooms
