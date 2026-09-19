import { Phone } from 'lucide-react'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" className="size-5 fill-current" aria-hidden="true">
      <path d="M12.04 2.25a9.55 9.55 0 0 0-8.21 14.43L2.75 21.75l5.2-1.03a9.55 9.55 0 1 0 4.09-18.47Zm0 1.7a7.85 7.85 0 1 1-3.55 14.85l-.26-.13-3.25.65.67-3.16-.16-.27A7.85 7.85 0 0 1 12.04 3.95Zm-3.1 3.78c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.43 1.03 2.6c.13.17 1.76 2.82 4.36 3.84 2.16.85 2.6.68 3.07.64.47-.04 1.52-.62 1.73-1.22.21-.6.21-1.12.15-1.22-.06-.1-.23-.17-.48-.3-.25-.13-1.52-.75-1.75-.83-.23-.08-.4-.13-.57.13-.17.25-.65.83-.8 1-.15.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.25-1.49-1.4-1.74-.15-.25-.02-.39.11-.52.12-.11.25-.29.38-.44.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.57-1.37-.78-1.88-.2-.49-.41-.42-.57-.43h-.5Z" />
    </svg>
  )
}

function FloatingContact() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 sm:bottom-7 sm:right-7">
      <a
        href="tel:+919876543210"
        aria-label="Call EVAARA Resort"
        className="floating-contact-action group bg-[#102C26] text-[#F6F1E7]"
      >
        <span className="floating-contact-label">Call</span>
        <Phone size={20} strokeWidth={1.8} />
      </a>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with EVAARA Resort on WhatsApp"
        className="floating-contact-action floating-contact-action-gold group text-[#071A17]"
      >
        <span className="floating-contact-label">WhatsApp</span>
        <WhatsAppIcon />
      </a>
    </div>
  )
}

export default FloatingContact
