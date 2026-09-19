import { ArrowUpRight } from 'lucide-react'

import blogPosts from '../../../data/blogPosts.json'
import { getBlogImage } from '../../../data/blogImages'

function BlogGrid() {
  const [featuredPost, ...posts] = blogPosts

  return (
    <section className="bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div data-scroll-reveal className="mb-12 grid gap-7 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <p className="evaara-eyebrow mb-4">Editorial Journal</p>
            <h2 className="evaara-title text-4xl sm:text-5xl md:text-6xl">
              Read Coorg before you arrive.
            </h2>
          </div>
          <p className="evaara-copy max-w-2xl self-end text-sm md:text-[15px]">
            Notes from the hills: where to go, what to taste, when to visit, and
            how to experience Coorg with patience and care.
          </p>
        </div>

        <a href={`/blog/${featuredPost.slug}`} data-scroll-reveal className="group mb-12 grid overflow-hidden rounded-[24px] bg-white shadow-xl shadow-[#102C26]/8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="relative min-h-[380px] overflow-hidden">
            <img
              src={getBlogImage(featuredPost.image)}
              alt={featuredPost.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
            />
          </div>
          <article className="flex flex-col justify-center p-7 md:p-10">
            <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#536B50]">
              Featured / {featuredPost.category} / {featuredPost.date}
            </p>
            <h3 className="evaara-title mt-4 text-4xl md:text-5xl">
              {featuredPost.title}
            </h3>
            <p className="mt-5 text-sm leading-8 text-[#102C26]/62">
              {featuredPost.description}
            </p>
            <span className="evaara-link mt-8">
              Read Article
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </span>
          </article>
        </a>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              data-scroll-card
              href={`/blog/${post.slug}`}
              key={post.title}
              className="group block border-t border-[#102C26]/10 pt-5"
            >
              <div className="h-64 overflow-hidden rounded-[18px]">
                <img
                  src={getBlogImage(post.image)}
                  alt={post.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#536B50]">
                {post.category} / {post.date}
              </p>
              <h3 className="mt-3 text-2xl font-light leading-tight tracking-[-0.035em]">
                {post.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[#102C26]/58">
                {post.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogGrid
