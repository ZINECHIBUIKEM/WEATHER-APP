export function HamburgerMenu({ openMenu, open, darkmode }) {
  return (
    <div onClick={openMenu} className="group relative flex flex-col shrink-0 md:hidden mr-7 justify-between items-center h-4.5 transition-all duration-300 ease-in-out origin-center">
      <img src="../../line.png" className={`w-5 transition-all duration-300 ease-in-out origin-center ${open ? "rotate-45 translate-y-2" : ""}`} />
      <img src="../../line.png" className={`w-5 transition-all duration-300 ease-in-out origin-center ${open ? "opacity-0" : ""}`} />
      <img src="../../line.png" className={`w-5 transition-all duration-300 ease-in-out origin-center ${open ? "-rotate-45 -translate-y-2" : ""}`} />

      {darkmode ?
        <span className="absolute -bottom-14 opacity-0 px-2 py-1 rounded bg-slate-800 text-white text-xs group-hover:opacity-100 bg-slate-800/80 transition-all duration-300 ease-in-out">
          Menu
        </span>
        :
        <span className="absolute -bottom-14 opacity-0 px-2 py-1 rounded bg-black/80 text-white text-xs group-hover:opacity-90 transition-all duration-300 ease-in-out">
          Menu
        </span>

      }

    </div>

  )
}