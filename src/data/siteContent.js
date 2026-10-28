import excellenceAward from '../../assets/cards/worlds-excellence.webp'
import highStakesField from '../../assets/cards/high-stakes-field.webp'
import robotCloseup from '../../assets/cards/robot-closeup.webp'
import trophies from '../../assets/cards/trophies.webp'
import worldsTeam from '../../assets/cards/worlds-team.webp'

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Resources', to: '/resources' },
  { label: 'Join Us', to: '/join-us' },
  { label: 'Contact', to: '/contact' },
]

export const accomplishments = [
  { title: 'Worlds Excellence', image: excellenceAward, alt: 'GHOST team members with an excellence award at a competition' },
  { title: 'Worlds team', image: worldsTeam, alt: 'GHOST team members at a Worlds competition' },
  { title: 'Built to compete', image: robotCloseup, alt: 'Close-up view of a GHOST competition robot' },
  { title: 'Competition floor', image: highStakesField, alt: 'VEX High Stakes competition field' },
  { title: 'Team history', image: trophies, alt: 'Trophies earned by the GHOST team' },
]

export const pageDetails = {
  about: { eyebrow: 'About GHOST', title: 'A team built around learning, iteration, and competition.', description: 'GHOST is UT Austin’s VEX U robotics team. This page will become the team’s durable home for its story, values, systems, and season history.' },
  resources: { eyebrow: 'Resources', title: 'Knowledge should be easy to find and easy to share.', description: 'The resource library is being organized for future members and the broader VEX U community. Team-approved guides, documentation, and links will live here.' },
  join: { eyebrow: 'Join us', title: 'Bring your curiosity. Build the next iteration.', description: 'We are shaping this page around the team’s confirmed recruitment process and schedule. Check back here for the next official way to get involved.' },
  contact: { eyebrow: 'Contact', title: 'Let’s connect with purpose.', description: 'Official contact channels will be added after the team confirms the right inboxes and social links to publish.' },
}
