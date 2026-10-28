import logo from '../../assets/ghost-logo-white.png'

export function BrandMark() {
  return <span className="flex items-center gap-2.5 font-semibold tracking-[0.18em] text-white"><img src={logo} alt="" className="h-8 w-8" /><span>GHOST</span></span>
}
