import { Link } from 'react-router-dom'

function isExternal(href) {
  return /^(https?:|mailto:|tel:|whatsapp:)/i.test(href)
}

/** Internal routes use React Router Link (no full page reload). External URLs stay as <a>. */
export default function AppLink({ to, href, children, ...props }) {
  const target = to ?? href

  if (!target || isExternal(target)) {
    return (
      <a href={target} {...props}>
        {children}
      </a>
    )
  }

  return (
    <Link to={target} {...props}>
      {children}
    </Link>
  )
}
