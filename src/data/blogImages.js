import foodImage from '../assets/images/about-section-img-2.webp'
import resortImage from '../assets/images/generated-coorg-resort-hero.png'
import roomImage from '../assets/images/generated-coorg-room-view.png'
import trailImage from '../assets/images/generated-coorg-activity-trail.png'

export const blogImages = {
  food: foodImage,
  resort: resortImage,
  room: roomImage,
  trail: trailImage,
}

export function getBlogImage(key) {
  return blogImages[key] || trailImage
}
