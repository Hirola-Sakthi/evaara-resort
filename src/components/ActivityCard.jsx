function ActivityCard({ activity }) {
  return (
    <article className="rounded-sm border border-[#B99A62]/28 bg-[#F3F0E8] p-3 shadow-lg shadow-[#102C26]/10">
      <img src={activity.image} alt={activity.title} className="h-44 w-full rounded-sm object-cover" />
      <div className="p-3">
        <h3 className="font-serif text-xl text-[#102C26]">{activity.title}</h3>
        <p className="mt-2 text-sm text-[#102C26]/72">{activity.text}</p>
      </div>
    </article>
  )
}

export default ActivityCard
