import { WHATSAPP } from '../constants/content'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-emerald text-cream shadow-lg shadow-emerald/30 transition hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
