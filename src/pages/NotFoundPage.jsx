import { ButtonLink } from '../components/ButtonLink'

export function NotFoundPage() {
  return <section className="mx-auto flex min-h-[calc(100svh-180px)] max-w-6xl items-center px-5 py-24 sm:px-8"><div><p className="font-mono text-xs uppercase tracking-[0.22em] text-ghost-lilac">404</p><h1 className="mt-5 text-5xl font-medium tracking-[-0.05em] text-ghost-mist">This page has moved.</h1><div className="mt-8"><ButtonLink to="/">Return home</ButtonLink></div></div></section>
}
