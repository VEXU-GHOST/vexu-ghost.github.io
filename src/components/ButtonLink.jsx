import { Link } from 'react-router-dom'

export function ButtonLink({ children, to, variant = 'primary' }) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ghost-lilac'
  const variants = { primary: 'bg-ghost-lilac text-ghost-void hover:bg-ghost-mist', secondary: 'border border-ghost-lilac/35 text-ghost-mist hover:border-ghost-lilac hover:bg-ghost-lilac/10' }
  return <Link className={`${base} ${variants[variant]}`} to={to}>{children}</Link>
}
