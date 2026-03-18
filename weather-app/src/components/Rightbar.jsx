import { NavLink } from "react-router";

export function Rightbar() {

  const navStyle = ({ isActive }) => {
    return (
      isActive
        ? "text-yellow-400 font-thin"
        : "text-olive-50 font-thin"
    );
  }


  return (
    <>
      {/* DROP DOWN MENU */}
      <nav className="fixed flex top-18 right-0 bg-slate-800/80 sm:hidden flex-col px-0 items-center backdrop-blur-[2px] gap-12 min-h-screen w-[45vw] pt-8">
        <NavLink to="/" className={navStyle}>
          Home
        </NavLink>
        <NavLink to="/blog-page" className={navStyle}>
          Blog
        </NavLink>
        <NavLink to="/search-page" className={navStyle}>
          Search
        </NavLink>
        <NavLink to="/contact-page" className={navStyle}>
          Contact
        </NavLink>
      </nav>
    </>
  )
}