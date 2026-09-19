import PageHero from '../../components/PageHero'
import BlogGrid from './sections/BlogGrid'
import blogHeroImage from '../../assets/images/generated-coorg-activity-trail.png'

function Blog() {
  return (
    <>
      <PageHero title="Stories From Coffee Country" subtitle="Editorial notes on Coorg travel, estate living, seasonal escapes, and slow luxury." image={blogHeroImage} />
      <BlogGrid />
    </>
  )
}

export default Blog
