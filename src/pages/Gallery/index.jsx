import PageHero from '../../components/PageHero'
import GalleryGrid from './sections/GalleryGrid'
import galleryHeroImage from '../../assets/images/generated-coorg-resort-hero.png'

function Gallery() {
  return (
    <>
      <PageHero title="A Visual Journal Of EVAARA" subtitle="Coffee slopes, warm interiors, quiet trails, and cinematic corners from our Coorg retreat." image={galleryHeroImage} />
      <GalleryGrid />
    </>
  )
}

export default Gallery
