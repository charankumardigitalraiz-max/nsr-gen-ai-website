import { PHONE } from './content'

export const ACADEMY_EMAIL = 'nsrgenaiproskillsacademy@gmail.com'

export const ACADEMY_WHATSAPP = `https://wa.me/91${PHONE}?text=${encodeURIComponent(
  'Hi NSR Academy, I would like to get in touch.',
)}`

export const CONTACT_INQUIRY_TYPES = [
  'General inquiry',
  'Course admission',
  'Free demo session',
  'Placement support',
  'Campus visit',
]

export const ACADEMY_ADDRESS = {
  line1: 'NSR GenAI ProSkills Academy',
  line2: 'KPHB Colony, Phase 1',
  city: 'Hyderabad',
  state: 'Telangana',
  pincode: '500072',
  country: 'India',
}

export const ACADEMY_HOURS = [
  { days: 'Mon – Sat', time: '9:00 AM – 7:00 PM' },
  { days: 'Sunday', time: 'Demo & counselling by appointment' },
]

export const OFFLINE_CENTER_FEATURES = [
  {
    title: 'Mentor-led classrooms',
    desc: 'Daily in-person sessions with structured labs and doubt clearing at our KPHB campus.',
  },
  {
    title: 'Live project labs',
    desc: 'Dedicated lab hours for GenAI, Python, and data projects with peer collaboration.',
  },
  {
    title: 'Interview prep room',
    desc: 'Mock interviews, resume reviews, and HR round practice with placement mentors.',
  },
  {
    title: 'Weekend batches',
    desc: 'Flexible weekend tracks for working professionals who prefer offline learning.',
  },
]

export const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/nsr_academy?utm_source=qr&igsh=NzV6bjI4bW00eXpl',
    icon: 'instagram',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: 'facebook',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/',
    icon: 'linkedin',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: 'youtube',
  },
  {
    label: 'WhatsApp',
    href: ACADEMY_WHATSAPP,
    icon: 'whatsapp',
  },
]
