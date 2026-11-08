import vexAi2025WorldChampions from '../../assets/awards/vex-ai-world-champions.jpg'
import vexAi2024ExcellenceAward from '../../assets/awards/vex-ai-2024-world-champions-excellence-award.webp'
import vexU2025DesignAward from '../../assets/awards/vex-u-2025-design-award.jpg'
import vexU2026OctoberDesignAward from '../../assets/awards/vex-u-2026-october-design-award.jpg'

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Resources', to: '/resources' },
  { label: 'Join Us', to: '/join-us' },
  { label: 'Contact', to: '/contact' },
]

export const confirmedAchievements = [
  {
    year: '2026',
    title: 'VEX U Design Award and Semifinalist',
    detail: 'October competition',
    image: vexU2026OctoberDesignAward,
    alt: 'GHOST team members with the 2026 VEX U Design Award',
    imageClass: 'object-[center_72%]',
  },
  {
    year: '2025',
    title: 'VEX AI Robotics Competition World Champion',
    detail: 'Tournament',
    image: vexAi2025WorldChampions,
    alt: 'GHOST team members at the 2025 VEX AI Robotics Competition World Championship',
  },
  {
    year: '2025',
    title: 'VEX U Robotics Texas Semifinalist & Design Award',
    image: vexU2025DesignAward,
    alt: 'GHOST team members with an award at a 2025 VEX U competition field',
    imageClass: 'object-[20%_center]',
  },
  {
    year: '2024',
    title: 'VEX AI Robotics Competition World Champion',
    detail: 'Excellence Award',
    image: vexAi2024ExcellenceAward,
    alt: 'GHOST team members with the 2024 VEX AI Robotics Competition Excellence Award',
  },
]

export const robotHistory = [
  { season: '2025–present', robots: ['Baby Jerry'] },
  { season: 'High Stakes · 2024–2025', robots: ['Omega Jerry'] },
  { season: 'Over Under · 2023–2024', robots: ['Jerry', 'George'] },
]

export const pageDetails = {
  about: {
    eyebrow: 'About GHOST',
    title: 'An open, competitive VEX U team.',
    description: 'GHOST is a VEX U robotics team at UT Austin where members can learn and compete in VEX U.',
  },
  resources: {
    eyebrow: 'Resources',
    title: 'Public onboarding resources are in development.',
    description: 'GHOST intends to make onboarding materials publicly available, but there is not yet a public resource library to share.',
  },
  join: {
    eyebrow: 'Join us',
    title: 'Recruitment details are being verified.',
    description: 'The team is confirming its current recruitment and contact information before publishing it here.',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Official contact channels are pending verification.',
    description: 'This page will be updated when the team confirms the channels it wants to publish.',
  },
}
