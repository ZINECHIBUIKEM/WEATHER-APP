import { Link } from "react-router";

export function Rightbar() {
  return (
    <>
      {/* DROP DOWN MENU */}
      <nav className="fixed flex top-18 right-0 bg-slate-800/80 sm:hidden flex-col px-0 items-center backdrop-blur-[2px] gap-12 min-h-screen w-[45vw] pt-8">
        <Link to="/results-page" className="text-olive-50 font-thin">
          Home
        </Link>
        <Link to="/results-page" className="text-olive-50 font-thin">
          Blog
        </Link>
        <Link to="/results-page" className="text-olive-50 font-thin">
          Search
        </Link>
        <Link to="/results-page" className="text-olive-50 font-thin">
          Contact
        </Link>
      </nav>
    </>
  )
}