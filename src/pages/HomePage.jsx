import heroLogo from '../../assets/ghost-logo-white.png'
import { ButtonLink } from '../components/ButtonLink'
import { accomplishments } from '../data/siteContent'

export function HomePage() {
  return (
    <>
      <section className="hero-grid overflow-hidden border-b border-ghost-lilac/10">
        <div className="mx-auto grid min-h-[min(46rem,calc(100svh-73px))] max-w-6xl items-end gap-12 px-5 pb-16 pt-24 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:pb-24 md:pt-32">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-ghost-lilac">UT Austin · VEX U Robotics</p>
            <h1 className="text-balance text-6xl font-semibold tracking-[-0.07em] text-ghost-mist sm:text-8xl">GHOST</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ghost-lilac/80 sm:text-xl">A student-led team pursuing better robots through open collaboration, thoughtful engineering, and relentless iteration.</p>
            <div className="mt-9 flex flex-wrap gap-3"><ButtonLink to="/about">Meet the team</ButtonLink><ButtonLink to="/join-us" variant="secondary">Join GHOST</ButtonLink></div>
          </div>
          <div className="relative mx-auto w-full max-w-sm self-center md:self-end">
            <div className="absolute -inset-12 rounded-full bg-ghost-violet/30 blur-3xl" />
            <img className="relative mx-auto w-56 drop-shadow-[0_0_56px_rgba(155,139,244,0.42)] sm:w-72" src={heroLogo} alt="GHOST logo" />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ghost-lilac">What drives us</p>
        <div>
          <h2 className="text-balance text-3xl font-medium tracking-[-0.04em] text-ghost-mist sm:text-5xl">Make, test, learn, improve. Then do it again.</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ghost-muted">GHOST is building a stronger foundation for VEX U robotics: one where people can contribute, grow their skills, and compete together.</p>
          <div className="mt-8"><ButtonLink to="/resources" variant="secondary">Explore resources</ButtonLink></div>
        </div>
      </section>

      <section className="border-y border-ghost-lilac/10 bg-ghost-night/65 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div><p className="font-mono text-xs uppercase tracking-[0.2em] text-ghost-lilac">Accomplishments</p><h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-ghost-mist sm:text-5xl">Moments worth building on.</h2></div>
            <ButtonLink to="/about" variant="secondary">Our story</ButtonLink>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {accomplishments.map((item) => <article className="group overflow-hidden rounded-xl border border-ghost-lilac/10 bg-ghost-void" key={item.title}><img className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-[1.03]" src={item.image} alt={item.alt} /><h3 className="p-5 text-lg font-medium text-ghost-mist">{item.title}</h3></article>)}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <div className="rounded-2xl border border-ghost-orchid/45 bg-ghost-violet px-7 py-12 text-ghost-mist sm:px-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-ghost-lilac">Build with us</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">The next version of GHOST starts with the people who show up.</h2>
          <div className="mt-8"><ButtonLink to="/join-us" variant="secondary">Learn how to join</ButtonLink></div>
        </div>
      </section>
    </>
  )
}
