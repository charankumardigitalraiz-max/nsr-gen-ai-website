export default function PartnerLogo({ company }) {
  const name = company.name.toLowerCase()
  let logoUrl = ''

  if (name === 'accenture') {
    logoUrl = '/brands/images.png'
  } else if (name === 'tcs') {
    logoUrl = '/brands/SWOT Analysis of Tata Consultancy Services (TCS) 2022.jfif'
  } else if (name === 'capgemini') {
    logoUrl = '/brands/Newsroom.jfif'
  } else if (name === 'wipro') {
    logoUrl = '/brands/Wipro Careers _ Reinvent Your World.jfif'
  } else if (name === 'infosys') {
    logoUrl = '/brands/Infosys BPM Is Hiring Process Executive _ Apply Now _ 2022.jfif'
  } else if (name === 'cognizant') {
    logoUrl = '/brands/cognizant-new-logo-400px.jpg'
  }

  if (logoUrl) {
    return (
      <img
        src={logoUrl}
        alt={`${company.name} logo`}
        className="block h-14 w-auto max-h-14 max-w-[10rem] object-contain object-center transition-all duration-300 opacity-95 hover:opacity-100"
        loading="lazy"
      />
    )
  }

  return (
    <span className="font-rubik text-base font-extrabold uppercase tracking-wider text-slate-500">
      {company.name}
    </span>
  )
}

