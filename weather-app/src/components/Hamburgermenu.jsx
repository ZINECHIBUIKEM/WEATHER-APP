export function HamburgerMenu({ openMenu, open }) {
  return (
    <div onClick={openMenu} className="flex flex-col shrink-0 md:hidden mr-7 justify-between items-center  h-4.5 transition-all duration-300 ease-in-out origin-center">
      <img src="../../line.png" className={`w-5 transition-all duration-300 ease-in-out origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
      <img src="../../line.png" className={`w-5 transition-all duration-300 ease-in-out origin-center ${open ? "opacity-0" : ""}`} />
      <img src="../../line.png" className={`w-5 transition-all duration-300 ease-in-out origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />
    </div>
  )
}