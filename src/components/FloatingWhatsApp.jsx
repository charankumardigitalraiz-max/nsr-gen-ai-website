import { WHATSAPP } from '../constants/content'
import WhatsAppIcon from './icons/WhatsAppIcon'

export default function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP}
      target="_blank"
      rel="noreferrer"
      className="wa-float group"
      aria-label="Chat on WhatsApp"
    >
      <span className="wa-float-ring" aria-hidden="true" />
      <span className="wa-float-icon">
        <WhatsAppIcon className="h-6 w-6" />
      </span>
      <span className="wa-float-label">Chat with us</span>
    </a>
  )
}
