import aboutOne from '../assets/images/about-section-img-1.webp'
import aboutTwo from '../assets/images/about-section-img-2.webp'
import aboutThree from '../assets/images/about-section-img.webp'
import resortHero from '../assets/images/generated-coorg-resort-hero.png'
import roomView from '../assets/images/generated-coorg-room-view.png'
import trail from '../assets/images/generated-coorg-activity-trail.png'
import roomBanner from '../assets/images/room-banner.webp'

export const roomImages = {
  aboutOne,
  aboutTwo,
  aboutThree,
  resortHero,
  roomView,
  trail,
  roomBanner,
}

export function getRoomImage(key) {
  return roomImages[key] || roomView
}
