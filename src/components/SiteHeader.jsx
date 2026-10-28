import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { navigation } from '../data/siteContent'
import { BrandMark } from './BrandMark'

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const linkClass = ({ isActive }) => `rounded-full px-3 py-2 text-sm transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ghost-lilac ${isActive ? 'bg-ghost-violet/25 text-ghost-mist' : 'text-ghost-muted hover:text-ghost-mist'}`
  return (
    <header className="sticky top-0 z-50 border-b border-ghost-lilac/10 bg-ghost-void/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link to="/" aria-label="GHOST home" onClick={() => setMenuOpen(false)}><BrandMark /></Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 md:flex">{navigation.map((item) => <NavLink className={linkClass} key={item.to} to={item.to}>{item.label}</NavLink>)}</nav>
        <button type="button" className="rounded-md p-2 text-ghost-mist md:hidden" aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen((open) => !open)}><span className="sr-only">Toggle navigation</span><span aria-hidden="true" className="text-lg">{menuOpen ? '×' : '☰'}</span></button>
      </div>
      {menuOpen && <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-ghost-lilac/10 px-5 py-3 md:hidden"><div className="mx-auto grid max-w-6xl gap-1">{navigation.map((item) => <NavLink className={linkClass} key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>)}</div></nav>}
    </header>
  )
}
