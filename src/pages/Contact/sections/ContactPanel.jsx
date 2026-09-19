import {
  ArrowRight,
  CalendarDays,
  Clock,
  Leaf,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  User,
  Users,
} from 'lucide-react'

import resortImage from '../../../assets/images/generated-coorg-resort-hero.png'

const contactItems = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'EVAARA Resort, Coffee Estate Road, Coorg, Karnataka, India',
    note: 'Set within the quiet green edges of Coorg.',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@evaararesort.com',
    note: 'For reservations, events, and stay planning.',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 98765 43210',
    note: 'Available for booking assistance.',
  },
  {
    icon: Clock,
    label: 'Reservation Hours',
    value: '9:00 AM - 8:00 PM',
    note: 'Our team will respond as early as possible.',
  },
]

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <path d="M7.5 2.75h9A4.75 4.75 0 0 1 21.25 7.5v9a4.75 4.75 0 0 1-4.75 4.75h-9A4.75 4.75 0 0 1 2.75 16.5v-9A4.75 4.75 0 0 1 7.5 2.75Zm0 1.5A3.25 3.25 0 0 0 4.25 7.5v9a3.25 3.25 0 0 0 3.25 3.25h9a3.25 3.25 0 0 0 3.25-3.25v-9a3.25 3.25 0 0 0-3.25-3.25h-9Zm4.5 3.5a4.25 4.25 0 1 1 0 8.5 4.25 4.25 0 0 1 0-8.5Zm0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5Zm4.65-2.45a1.05 1.05 0 1 1 0 2.1 1.05 1.05 0 0 1 0-2.1Z" />
    ),
  },
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <path d="M14.1 8.2V6.65c0-.74.37-1.1 1.18-1.1h1.37V2.9a18.26 18.26 0 0 0-2.26-.15c-2.24 0-3.77 1.36-3.77 3.86V8.2H8.08v2.96h2.54v7.59h3.48v-7.59h2.72l.43-2.96H14.1Z" />
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <path d="M21.35 7.15a3.01 3.01 0 0 0-.55-1.38 2.28 2.28 0 0 0-1.43-.78C17.37 4.7 12 4.7 12 4.7s-5.37 0-7.37.29a2.28 2.28 0 0 0-1.43.78 3.01 3.01 0 0 0-.55 1.38A31.3 31.3 0 0 0 2.36 12a31.3 31.3 0 0 0 .29 4.85 3.01 3.01 0 0 0 .55 1.38 2.28 2.28 0 0 0 1.43.78c2 .29 7.37.29 7.37.29s5.37 0 7.37-.29a2.28 2.28 0 0 0 1.43-.78 3.01 3.01 0 0 0 .55-1.38 31.3 31.3 0 0 0 .29-4.85 31.3 31.3 0 0 0-.29-4.85ZM10.08 15.15v-6.3L15.62 12l-5.54 3.15-5.54 3.15Z" />
    ),
  },
  {
    label: 'X',
    href: 'https://x.com',
    icon: (
      <path d="M14.2 10.28 21.15 2.5h-1.65l-6.04 6.75L8.64 2.5H3.08l7.29 10.18-7.29 8.16h1.65l6.38-7.14 5.1 7.14h5.56l-7.57-10.56Zm-2.26 2.53-.74-1.02-5.88-7.98h2.53l4.74 6.43.74 1.02 6.18 8.39h-2.53l-5.04-6.84Z" />
    ),
  },
]

function ContactPanel() {
  return (
    <section className="relative overflow-hidden bg-[#F3F0E8] px-6 py-20 text-[#102C26] md:px-10 md:py-24 lg:px-16">
      <div className="pointer-events-none absolute -right-20 top-10 hidden h-64 w-64 rounded-full border border-[#B99A62]/15 lg:block" />

      <div className="pointer-events-none absolute -left-20 bottom-32 hidden h-72 w-72 rounded-full border border-[#536B50]/10 lg:block" />

      <div
        data-scroll-reveal
        className="relative mx-auto mb-9 max-w-7xl"
      >
        <p className="evaara-eyebrow mb-4">
          Contact EVAARA
        </p>

        <div className="grid gap-7 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <h2 className="evaara-title max-w-3xl text-5xl md:text-6xl">
            Let us shape your
            <span className="block italic">stay.</span>
          </h2>

          <div className="grid gap-8 border-l border-[#B99A62]/40 pl-0 lg:pl-10">
            <p className="max-w-2xl text-base leading-8 text-[#102C26]/70">
              Planning a quiet escape to Coorg? Share your details,
              preferences, or questions and our team will help shape a stay
              that feels personal, calm, and beautifully curated for you.
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto grid max-w-7xl items-stretch gap-7 lg:grid-cols-[0.9fr_1.1fr]">

        <div
          data-scroll-reveal
          className="relative order-1 flex h-full flex-col overflow-hidden rounded-[24px] border border-[#B99A62]/24 bg-[#FBFAF6] shadow-2xl shadow-[#102C26]/10"
        >
          <div className="relative min-h-[220px] overflow-hidden">
            <img
              src={resortImage}
              alt="EVAARA Resort reservations desk view in Coorg"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#071A17]/82 via-[#071A17]/42 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 text-[#F6F1E7] md:p-7">
              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.42em] text-[#D9C6A5]">
                Get In Touch
              </p>

              <h3 className="max-w-sm font-serif text-3xl leading-tight tracking-[-0.02em]">
                Reach the reservations desk.
              </h3>

              <p className="mt-3 max-w-sm text-[10px] font-bold uppercase leading-5 tracking-[0.22em] text-[#F6F1E7]/82">
                We're here to help you plan your perfect stay.
              </p>
            </div>
          </div>

          <div className="relative flex-1 px-6 md:px-7">
            {contactItems.map((item) => {
              const Icon = item.icon

              return (
                <div
                  key={item.label}
                  className="group grid grid-cols-[46px_1fr_36px] items-center gap-4 border-b border-[#102C26]/10 py-4"
                >
                  <div className="grid size-11 place-items-center rounded-full bg-[#D9C6A5]/38 text-[#536B50] transition duration-300 group-hover:bg-[#B99A62] group-hover:text-[#071A17]">
                    <Icon size={19} strokeWidth={1.65} />
                  </div>

                  <div>
                    <p className="text-[9px] font-bold uppercase tracking-[0.28em] text-[#536B50]">
                      {item.label}
                    </p>

                    <p className="mt-1.5 text-sm font-semibold leading-6 text-[#102C26]">
                      {item.value}
                    </p>

                    <p className="mt-0.5 text-xs leading-5 text-[#102C26]/52">
                      {item.note}
                    </p>
                  </div>

                  <span className="grid size-9 place-items-center rounded-full bg-[#F3F0E8] text-[#102C26]/72 transition duration-300 group-hover:bg-[#B99A62] group-hover:text-[#071A17]">
                    <ArrowRight size={15} strokeWidth={1.6} />
                  </span>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col gap-4 px-6 py-5 md:flex-row md:items-center md:px-7">
            <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-[#102C26]">
              Follow Us
            </p>

            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noreferrer"
                  className="grid size-9 place-items-center rounded-full bg-[#D9C6A5]/32 text-[#536B50] transition hover:-translate-y-1 hover:bg-[#B99A62] hover:text-[#071A17]"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="size-4 fill-current"
                    aria-hidden="true"
                  >
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <form
          data-scroll-reveal
          className="relative order-2 flex h-full flex-col overflow-hidden rounded-[24px] border border-[#B99A62]/24 bg-[#FBFAF6] p-6 shadow-2xl shadow-[#102C26]/10 md:p-7 lg:p-8"
        >
          <div className="absolute -right-24 -top-24 size-72 rounded-full bg-[#D9C6A5]/32 blur-3xl" />

          <div className="relative flex h-full flex-col">

            <div className="grid gap-6 border-b border-[#102C26]/10 pb-6 lg:grid-cols-[1fr_0.36fr] lg:items-center">
              <div>
                <p className="evaara-eyebrow mb-3">
                  Send Us A Message
                </p>

                <h3 className="evaara-title text-3xl md:text-4xl">
                  We'd love to hear from you.
                </h3>
              </div>

              <div className="hidden border-l border-[#102C26]/12 pl-7 text-center lg:block">
                <Leaf
                  size={25}
                  strokeWidth={1.5}
                  className="mx-auto text-[#536B50]"
                />

                <p className="mt-4 text-[9px] font-bold uppercase leading-5 tracking-[0.3em] text-[#102C26]/70">
                  Your Experience Matters To Us
                </p>
              </div>
            </div>

            <div className="mt-6 grid flex-1 content-start gap-5">

              <div className="grid gap-5 md:grid-cols-2">

                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#102C26]">
                    Name *
                  </span>

                  <div className="mt-2 flex h-12 items-center gap-3 rounded-[8px] border border-[#B99A62]/28 bg-[#F3F0E8]/42 px-4 transition focus-within:border-[#B99A62]">
                    <User
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#102C26]/62"
                    />

                    <input
                      type="text"
                      aria-label="Name"
                      placeholder="Your full name"
                      required
                      className="h-full w-full bg-transparent text-sm text-[#102C26] outline-none placeholder:text-[#102C26]/38"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#102C26]">
                    Email *
                  </span>

                  <div className="mt-2 flex h-12 items-center gap-3 rounded-[8px] border border-[#B99A62]/28 bg-[#F3F0E8]/42 px-4 transition focus-within:border-[#B99A62]">
                    <Mail
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#102C26]/62"
                    />

                    <input
                      type="email"
                      aria-label="Email"
                      placeholder="you@example.com"
                      required
                      className="h-full w-full bg-transparent text-sm text-[#102C26] outline-none placeholder:text-[#102C26]/38"
                    />
                  </div>
                </label>

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#102C26]">
                    Phone *
                  </span>

                  <div className="mt-2 flex h-12 items-center gap-3 rounded-[8px] border border-[#B99A62]/28 bg-[#F3F0E8]/42 px-4 transition focus-within:border-[#B99A62]">
                    <Phone
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#102C26]/62"
                    />

                    <input
                      type="tel"
                      aria-label="Phone"
                      placeholder="+91 98765 43210"
                      required
                      className="h-full w-full bg-transparent text-sm text-[#102C26] outline-none placeholder:text-[#102C26]/38"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#102C26]">
                    Check In
                  </span>

                  <div className="mt-2 flex h-12 items-center gap-3 rounded-[8px] border border-[#B99A62]/28 bg-[#F3F0E8]/42 px-4 transition focus-within:border-[#B99A62]">
                    <CalendarDays
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#102C26]/62"
                    />

                    <input
                      type="date"
                      aria-label="Check In"
                      className="h-full w-full cursor-pointer bg-transparent text-sm text-[#102C26] outline-none"
                    />
                  </div>
                </label>

              </div>

              <div className="grid gap-5 md:grid-cols-2">

                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#102C26]">
                    Check Out
                  </span>

                  <div className="mt-2 flex h-12 items-center gap-3 rounded-[8px] border border-[#B99A62]/28 bg-[#F3F0E8]/42 px-4 transition focus-within:border-[#B99A62]">
                    <CalendarDays
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#102C26]/62"
                    />

                    <input
                      type="date"
                      aria-label="Check Out"
                      className="h-full w-full cursor-pointer bg-transparent text-sm text-[#102C26] outline-none"
                    />
                  </div>
                </label>

                <label className="block">
                  <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#102C26]">
                    Guests
                  </span>

                  <div className="mt-2 flex h-12 items-center gap-3 rounded-[8px] border border-[#B99A62]/28 bg-[#F3F0E8]/42 px-4 transition focus-within:border-[#B99A62]">
                    <Users
                      size={18}
                      strokeWidth={1.5}
                      className="text-[#102C26]/62"
                    />

                    <select
                      aria-label="Guests"
                      defaultValue=""
                      className="h-full w-full cursor-pointer bg-transparent text-sm text-[#102C26] outline-none"
                    >
                      <option value="" disabled>
                        Select guests
                      </option>

                      <option value="1">
                        1 Guest
                      </option>

                      <option value="2">
                        2 Guests
                      </option>

                      <option value="3">
                        3 Guests
                      </option>

                      <option value="4">
                        4 Guests
                      </option>

                      <option value="5">
                        5 Guests
                      </option>

                      <option value="6">
                        6 Guests
                      </option>

                      <option value="7">
                        7 Guests
                      </option>

                      <option value="8">
                        8 Guests
                      </option>

                      <option value="9">
                        9 Guests
                      </option>

                      <option value="10">
                        10 Guests
                      </option>
                    </select>
                  </div>
                </label>

              </div>

              <label className="block">
                <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-[#102C26]">
                  Message *
                </span>

                <textarea
                  aria-label="Message"
                  rows="4"
                  required
                  placeholder="Tell us about your interests, special requests or any questions..."
                  className="mt-2 min-h-[112px] w-full resize-none rounded-[8px] border border-[#B99A62]/28 bg-[#F3F0E8]/42 px-4 py-4 text-sm text-[#102C26] outline-none transition placeholder:text-[#102C26]/38 focus:border-[#B99A62]"
                />
              </label>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">

                <button
                  type="submit"
                  className="inline-flex w-fit items-center gap-7 rounded-full bg-[#B99A62] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-[#B99A62]/24 transition hover:bg-[#A8874E]"
                >
                  Send Message

                  <ArrowRight
                    size={17}
                    strokeWidth={1.7}
                  />
                </button>

                <div className="hidden h-10 w-px bg-[#102C26]/12 sm:block" />

                <div className="flex items-center gap-3 text-sm leading-6 text-[#102C26]/54">
                  <ShieldCheck
                    size={19}
                    strokeWidth={1.5}
                    className="text-[#536B50]"
                  />

                  <span>
                    Your information is safe and secure with us.
                  </span>
                </div>

              </div>
            </div>
          </div>
        </form>
      </div>

      <div
        data-scroll-reveal
        className="mx-auto mt-14 grid max-w-7xl gap-6 border-y border-[#102C26]/10 py-8 md:grid-cols-3"
      >
        {[
          ['Nearest Town', 'Madikeri region, Coorg'],
          ['Best For', 'Couples, families, slow retreats'],
          ['Experience Style', 'Nature, comfort, coffee estate living'],
        ].map(([label, value]) => (
          <div key={label}>
            <p className="text-[10px] font-bold uppercase tracking-[0.28em] text-[#536B50]">
              {label}
            </p>

            <p className="mt-2 text-lg font-light tracking-[-0.03em] text-[#102C26]">
              {value}
            </p>
          </div>
        ))}
      </div>

      <div
        data-scroll-reveal
        className="mx-auto mt-14 max-w-7xl overflow-hidden rounded-[28px] border border-[#B99A62]/25 bg-[#FBFAF6] shadow-2xl shadow-[#102C26]/10"
      >
        <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">

          <div className="p-7 text-[#102C26] md:p-9">
            <p className="evaara-eyebrow">
              Find Us
            </p>

            <h3 className="evaara-title mt-4 text-4xl">
              In the quiet green of Coorg.
            </h3>

            <p className="evaara-copy mt-5 text-sm">
              Use the map to locate the Coorg region. Exact arrival guidance
              can be shared by our reservations team once your stay is
              confirmed.
            </p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Coorg%20Karnataka"
              target="_blank"
              rel="noreferrer"
              className="evaara-button mt-7"
            >
              Open in Maps
            </a>
          </div>

          <div className="min-h-[420px]">
            <iframe
              title="EVAARA Resort location map"
              src="https://www.google.com/maps?q=Coorg%20Karnataka&output=embed"
              className="h-full min-h-[420px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default ContactPanel