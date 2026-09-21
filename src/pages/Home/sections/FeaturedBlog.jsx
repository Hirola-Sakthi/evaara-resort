import { ArrowUpRight } from 'lucide-react'
import { motion } from 'framer-motion'

import blogPosts from '../../../data/blogPosts.json'
import { getBlogImage } from '../../../data/blogImages'

const featuredPosts = blogPosts.slice(0, 4)

function FeaturedBlog() {
  return (
    <section className="overflow-hidden bg-[#F3F0E8] px-6 py-8 text-[#102C26] md:px-10 md:py-10 lg:px-16">
      <div className="mx-auto max-w-[1280px]">
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="evaara-eyebrow mb-4">From the Journal</p>
            <h2 className="evaara-title max-w-2xl text-4xl sm:text-5xl md:text-6xl">
              Travel, nature, and Coorg stories.
            </h2>
          </div>
          <motion.a
            href={`/blog`}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.3 }}
            className="evaara-text-link group"
          >
            Read Journal
            <ArrowUpRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <motion.a
            href={`/blog/${featuredPosts[0].slug}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="group block"
          >
            <article>
              <div className="relative h-[320px] overflow-hidden rounded-[22px] sm:h-[420px] md:h-[560px]">
                <img
                  src={getBlogImage(featuredPosts[0].image)}
                  alt={featuredPosts[0].title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071A17]/60 via-transparent to-transparent" />
              </div>
              <div className="mt-6 max-w-2xl">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#536B50]">
                  {featuredPosts[0].date}
                </p>
                <h3 className="mt-3 text-3xl font-light leading-tight tracking-[-0.045em] text-[#102C26] sm:text-4xl">
                  {featuredPosts[0].title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#102C26]/58">
                  {featuredPosts[0].excerpt}
                </p>
              </div>
            </article>
          </motion.a>

          <div className="space-y-6">
            {featuredPosts.slice(1).map((post, index) => (
              <motion.a
                key={post.title}
                href={`/blog/${post.slug}`}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.78,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group grid gap-5 border-t border-[#102C26]/10 pt-6 sm:grid-cols-[180px_1fr]"
              >
                <div className="h-52 overflow-hidden rounded-[18px] sm:h-44">
                  <img
                    src={getBlogImage(post.image)}
                    alt={post.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-105"
                  />
                </div>
                <article>
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#536B50]">
                    {post.date}
                  </p>
                  <h3 className="mt-3 text-2xl font-light leading-tight tracking-[-0.04em] text-[#102C26]">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#102C26]/56">
                    {post.excerpt}
                  </p>
                  <span className="evaara-link mt-5">
                    Read More
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </span>
                </article>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedBlog
