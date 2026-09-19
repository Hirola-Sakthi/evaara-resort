function RoomCard({ room }) {
  return (
    <article className="overflow-hidden rounded-md border border-[#B99A62]/28 bg-[#F3F0E8] shadow-xl shadow-[#102C26]/10">
      <img src={room.image} alt={room.title} className="h-64 w-full object-cover" />
      <div className="p-6">
        <h3 className="font-serif text-2xl text-[#102C26]">{room.title}</h3>
        <p className="mt-3 min-h-16 text-sm leading-6 text-[#102C26]/72">{room.text}</p>
        <p className="mt-4 text-xs font-semibold text-[#536B50]">{room.meta}</p>
        <button className="mt-6 rounded-full border border-[#B99A62]/75 px-6 py-2 text-xs font-bold uppercase tracking-[0.12em] text-[#102C26] transition hover:bg-[#B99A62] hover:text-[#071A17]">
          View Details
        </button>
      </div>
    </article>
  )
}

export default RoomCard
