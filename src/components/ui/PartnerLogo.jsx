export default function PartnerLogo({ company }) {
  if (company.logo) {
    return (
      <img
        src={encodeURI(company.logo)}
        alt={`${company.name} logo`}
        className="block h-20 w-auto max-h-20 max-w-[11rem] object-contain object-center sm:max-w-[13rem]"
        loading="lazy"
        decoding="async"
      />
    )
  }

  return (
    <span className="font-rubik text-xl font-extrabold lowercase tracking-tight text-slate-500">
      {company.name.toLowerCase()}
    </span>
  )
}
