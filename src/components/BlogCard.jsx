function BlogCard({ post }) {
  return (
    <article className="rounded-sm border border-[#B99A62]/28 bg-[#F3F0E8] p-3 shadow-lg shadow-[#102C26]/10">
      <img src={post.image} alt={post.title} className="h-48 w-full rounded-sm object-cover" />
      <div className="p-4">
        <h3 className="font-serif text-xl text-[#102C26]">{post.title}</h3>
        <p className="mt-3 text-xs uppercase tracking-[0.16em] text-[#536B50]">{post.date} / 4 min read</p>
        <p className="mt-4 text-sm leading-6 text-[#102C26]/70">
          Discover hidden gems, seasonal tips, and slower ways to experience the hills.
        </p>
      </div>
    </article>
  )
}

export default BlogCard
