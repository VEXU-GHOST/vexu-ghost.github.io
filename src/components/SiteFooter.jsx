import { Link } from 'react-router-dom'
import { navigation } from '../data/siteContent'
import { BrandMark } from './BrandMark'

export function SiteFooter() {
  return <footer className="border-t border-ghost-lilac/10"><div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between"><div><BrandMark /><p className="mt-3 max-w-sm text-sm text-ghost-muted">UT Austin’s VEX U robotics team.</p></div><nav aria-label="Footer navigation" className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-ghost-muted">{navigation.map((item) => <Link className="hover:text-ghost-mist focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ghost-lilac" key={item.to} to={item.to}>{item.label}</Link>)}</nav></div></footer>
}
