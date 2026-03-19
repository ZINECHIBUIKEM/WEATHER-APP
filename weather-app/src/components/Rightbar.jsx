import { NavLink } from "react-router";

export function Rightbar() {

  function toggleTheme() {
    console.log("toggled")
  };


  const navStyle = ({ isActive }) => {
    return (
      isActive
        ? "text-yellow-400 font-thin underline"
        : "text-olive-50 font-thin"
    );
  }


  return (
    <>
      {/* DROP DOWN MENU */}
      <nav className="fixed flex top-18 right-0 bg-slate-800/80 md:hidden flex-col px-0 items-center backdrop-blur-[2px] gap-12 min-h-screen w-[45vw] pt-8">
        <NavLink to="/" className={navStyle}>
          Home
        </NavLink>
        <NavLink to="/blog-page" className={navStyle}>
          Blog
        </NavLink>
        <NavLink to="/search-page" className={navStyle}>
          Search
        </NavLink>
        <img src="toggle-on-icon.svg" className="w-8" onClick={toggleTheme} />
      </nav>
    </>
  )
}