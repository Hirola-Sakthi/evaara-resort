import { ArrowLeft, ArrowUpRight } from 'lucide-react'

import PageHero from '../../components/PageHero'
import blogPosts from '../../data/blogPosts.json'
import { getBlogImage } from '../../data/blogImages'

function ContentBlock({ block }) {
  if (block.type === 'heading') {
    return (
      <h2 className="evaara-title mt-12 text-3xl md:text-4xl">
        {block.text}
      </h2>
    )
  }

  if (block.type === 'paragraph') {
    return (
      <p className="mt-6 text-base leading-8 text-[#102C26]/68 md:text-lg md:leading-9">
        {block.text}
      </p>
    )
  }

  if (block.type === 'image') {
    return (
      <figure className="my-12 overflow-hidden rounded-[24px] bg-white shadow-xl shadow-[#102C26]/8">
        <img
          src={getBlogImage(block.image)}
          alt={block.caption || 'EVAARA Resort journal image'}
          loading="lazy"
          className="h-[360px] w-full object-cover md:h-[520px]"
        />
      </figure>
    )
  }

  if (block.type === 'list') {
    return (
      <ul className="mt-7 space-y-4 border-l border-[#B99A62]/50 pl-6">
        {block.items.map((item) => (
          <li key={item} className="text-base leading-8 text-[#102C26]/68">
            {item}
          </li>
        ))}
      </ul>
    )
  }

  if (block.type === 'quote') {
    return (
      <blockquote className="my-12 border-y border-[#102C26]/10 py-8">
        <p className="font-serif text-3xl leading-tight text-[#102C26] md:text-4xl">
          "{block.text}"
        </p>
      </blockquote>
    )
  }

  if (block.type === 'table') {
    return (
      <div className="my-12 overflow-hidden rounded-[20px] border border-[#B99A62]/24 bg-white shadow-xl shadow-[#102C26]/8">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead className="bg-[#102C26] text-[#F6F1E7]">
              <tr>
                {block.columns.map((column) => (
                  <th key={column} className="px-5 py-4 text-[10px] font-bold uppercase tracking-[0.24em]">
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row) => (
                <tr key={row.join('-')} className="border-b border-[#102C26]/10 last:border-b-0">
                  {row.map((cell) => (
                    <td key={cell} className="px-5 py-4 text-sm leading-6 text-[#102C26]/68">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  return null
}

function BlogDetail({ slug }) {
  const post = blogPosts.find((item) => item.slug === slug)

  if (!post) {
    return (
      <>
        <PageHero
          title="Story Not Found"
          subtitle="The journal story you are looking for may have moved. Return to the blog to continue exploring Coorg."
          image={getBlogImage('trail')}
        />
        <section className="bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 lg:px-16">
          <div className="mx-auto max-w-4xl">
            <a href="/blog" className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-[#102C26]">
              <ArrowLeft size={16} strokeWidth={1.5} />
              Back to Blog
            </a>
          </div>
        </section>
      </>
    )
  }

  const relatedPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3)

  return (
    <>
      <PageHero
        title={post.title}
        subtitle={post.description}
        image={getBlogImage(post.image)}
      />

      <article className="bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16">
        <div className="mx-auto max-w-4xl">
          <div data-scroll-reveal className="mb-10">
            <a href="/blog" className="evaara-link mb-8">
              <ArrowLeft size={16} strokeWidth={1.5} />
              Back to Blog
            </a>
            <p className="evaara-eyebrow">
              {post.category} / {post.date} / {post.readTime}
            </p>
            <p className="mt-6 border-l border-[#B99A62]/60 pl-6 text-xl leading-9 tracking-[-0.03em] text-[#102C26]/72 md:text-2xl md:leading-10">
              {post.excerpt}
            </p>
            <div className="mt-10">
              {post.content.map((block, index) => (
                <ContentBlock key={`${block.type}-${index}`} block={block} />
              ))}
            </div>
          </div>
        </div>
      </article>

      <section className="bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div data-scroll-reveal className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="evaara-eyebrow">Continue Reading</p>
              <h2 className="evaara-title mt-4 text-4xl md:text-5xl">
                More from the EVAARA journal.
              </h2>
            </div>
            <a href="/blog" className="evaara-link group">
              View Journal
              <ArrowUpRight size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {relatedPosts.map((item) => (
              <a
                key={item.slug}
                href={`/blog/${item.slug}`}
                data-scroll-card
                className="group overflow-hidden rounded-[22px] bg-[#FBFAF6] shadow-xl shadow-[#102C26]/8"
              >
                <div className="h-56 overflow-hidden rounded-[18px]">
                  <img
                    src={getBlogImage(item.image)}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#536B50]">
                    {item.category} / {item.date}
                  </p>
                  <h3 className="mt-3 text-2xl font-light leading-tight tracking-[-0.035em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#102C26]/58">
                    {item.excerpt}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogDetail
