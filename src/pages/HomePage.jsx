import heroLogo from '../../assets/logos/ghost-logo-white.png'
import { ButtonLink } from '../components/ButtonLink'
import { confirmedAchievements, robotHistory } from '../data/siteContent'

export function HomePage() {
  return (
    <div className="home-page">
      <section>
        <div className="mx-auto grid min-h-[min(46rem,calc(100svh-73px))] max-w-6xl items-end gap-12 px-5 pb-16 pt-24 sm:px-8 md:grid-cols-[1.1fr_0.9fr] md:pb-24 md:pt-32">
          <div className="relative z-10 max-w-2xl">
            <p className="mb-5 font-mono text-xs uppercase tracking-[0.22em] text-ghost-lilac">UT Austin · VEX U Robotics</p>
            <h1 className="text-balance text-6xl font-semibold tracking-[-0.07em] text-ghost-mist sm:text-8xl">GHOST</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ghost-lilac/80 sm:text-xl">An open, competitive VEX U team where members can learn and compete.</p>
            <p className="mt-4 font-mono text-sm uppercase tracking-[0.16em] text-ghost-lilac">Competing in VEX U and VEX AI</p>
            <div className="mt-9 flex flex-wrap gap-3"><ButtonLink to="/about">About GHOST</ButtonLink><ButtonLink to="/join-us" variant="secondary">Recruitment info</ButtonLink></div>
          </div>
          <div className="relative mx-auto w-full max-w-sm self-center md:self-end"><img className="relative mx-auto w-56 drop-shadow-[0_0_56px_rgba(155,139,244,0.42)] sm:w-72" src={heroLogo} alt="GHOST logo" /></div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <div className="max-w-2xl"><p className="font-mono text-xs uppercase tracking-[0.2em] text-ghost-lilac">Accomplishments</p><h2 className="mt-4 text-3xl font-medium tracking-[-0.04em] text-ghost-mist sm:text-5xl">Confirmed results.</h2><p className="mt-5 text-lg leading-8 text-ghost-muted">A selection of publicly listed GHOST awards.</p></div>
          <ol className="mt-10 grid gap-4 sm:grid-cols-2">
            {confirmedAchievements.map((achievement) => <li className="overflow-hidden rounded-xl border border-ghost-lilac/10 bg-ghost-void" key={`${achievement.year}-${achievement.title}`}>{achievement.image && <img className={`aspect-[16/9] w-full object-cover ${achievement.imageClass ?? 'object-center'}`} src={achievement.image} alt={achievement.alt} loading="lazy" decoding="async" />}<div className="p-6"><p className="font-mono text-sm text-ghost-lilac">{achievement.year}</p><h3 className="mt-8 text-xl font-medium tracking-[-0.02em] text-ghost-mist">{achievement.title}</h3>{achievement.detail && <p className="mt-3 text-sm text-ghost-muted">{achievement.detail}</p>}</div></li>)}
          </ol>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-[0.7fr_1.3fr] md:py-28">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-ghost-lilac">Meet the robots</p>
        <div><h2 className="text-balance text-3xl font-medium tracking-[-0.04em] text-ghost-mist sm:text-5xl">Robot history.</h2><div className="mt-8 divide-y divide-ghost-lilac/15 border-y border-ghost-lilac/15">{robotHistory.map((entry) => <div className="flex flex-col gap-3 py-5 sm:flex-row sm:items-baseline sm:justify-between" key={entry.season}><p className="font-mono text-sm text-ghost-lilac">{entry.season}</p><p className="text-lg text-ghost-mist">{entry.robots.join(' · ')}</p></div>)}</div></div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-20 sm:px-8 md:pb-28"><div className="rounded-2xl border border-ghost-orchid/45 bg-ghost-violet px-7 py-12 text-ghost-mist sm:px-12"><p className="font-mono text-xs uppercase tracking-[0.2em] text-ghost-lilac">Get involved</p><h2 className="mt-4 max-w-2xl text-3xl font-medium tracking-[-0.04em] sm:text-5xl">Recruitment details are being verified.</h2><p className="mt-5 max-w-xl text-lg leading-8 text-ghost-lilac">The team will publish an official path to join once current information is confirmed.</p><div className="mt-8"><ButtonLink to="/join-us" variant="secondary">Join Us</ButtonLink></div></div></section>
    </div>
  )
}
