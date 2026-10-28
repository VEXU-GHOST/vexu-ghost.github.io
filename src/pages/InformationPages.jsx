import { ButtonLink } from '../components/ButtonLink'
import { pageDetails } from '../data/siteContent'

function InformationPage({ detail, next }) {
  return <section className="mx-auto flex min-h-[calc(100svh-180px)] max-w-6xl items-center px-5 py-24 sm:px-8"><div className="max-w-3xl"><p className="font-mono text-xs uppercase tracking-[0.22em] text-ghost-lilac">{detail.eyebrow}</p><h1 className="mt-5 text-balance text-4xl font-medium tracking-[-0.05em] text-ghost-mist sm:text-6xl">{detail.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-ghost-muted">{detail.description}</p><div className="mt-10"><ButtonLink to={next.to}>{next.label}</ButtonLink></div></div></section>
}

export function AboutPage() { return <InformationPage detail={pageDetails.about} next={{ to: '/resources', label: 'Explore resources' }} /> }
export function ResourcesPage() { return <InformationPage detail={pageDetails.resources} next={{ to: '/join-us', label: 'Join GHOST' }} /> }
export function JoinUsPage() { return <InformationPage detail={pageDetails.join} next={{ to: '/contact', label: 'Contact the team' }} /> }
export function ContactPage() { return <InformationPage detail={pageDetails.contact} next={{ to: '/about', label: 'Learn about GHOST' }} /> }
