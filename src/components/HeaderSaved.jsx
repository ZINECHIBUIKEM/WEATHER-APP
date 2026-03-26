import { useState } from "react";
import { Rightbar } from "./Rightbar";
import { HamburgerMenu } from "./Hamburgermenu";
import { Link } from "react-router";
import { NavLink } from "react-router";

export function HeaderSaved({toggleMode, darkmode}) {
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(!open);
  }

  function toggleTheme() {
    toggleMode(!darkmode);
  };

  const navStyle = ({ isActive }) => {
    return (
      isActive
        ?
        "group relative text-yellow-400 font-thin"
        :
        "group relative text-olive-50 font-thin hover:text-yellow-400"
    )
  }




  return (
    <>
      <nav className="fixed bg-slate-800 p-2 w-full flex flex-row items-center shadow-sm z-10 justify-between ">

        <Link to="/" className="flex flex-row shrink-0">
          <img src="/favicon.png" className="px-2 h-15 w-auto" />
          <span className="hidden md:flex flex-row items-center font-bold text-olive-50 pl-2" >
            ZineCast
          </span>
        </Link>

        <HamburgerMenu darkmode={darkmode} openMenu={openMenu} open={open} />

        {/* Menu */}
        <nav className="hidden md:flex flex-row justify-between items-center px-10 gap-[6vw]">
          <NavLink to="/" className={navStyle}>
            Home
            <span className="absolute -bottom-13 -right-4 opacity-0 px-2 py-1 rounded bg-black/80 text-white text-xs group-hover:opacity-90 transition-all duration-300 ease-in-out">
              Homepage
            </span>
          </NavLink>
          <NavLink to="/saved-page" className={navStyle}>
            Saved
            <span className="absolute -bottom-13 right-0 opacity-0 px-2 py-1 rounded bg-black/80 text-white text-xs group-hover:opacity-90 transition-all duration-300 ease-in-out">
              Saved
            </span>
          </NavLink>
          <div className="group relative">
            <img src={`/toggle-${darkmode ? "on" : "off"}-icon.svg`} className="w-8" onClick={toggleTheme} />
            {darkmode
              ?
              <span className="absolute -bottom-12 -right-10 opacity-0 px-2 py-1 whitespace-nowrap rounded bg-black/80 text-white text-xs group-hover:opacity-90 transition-all duration-300 ease-in-out">Switch to light mode
              </span>
              :
              <span className="absolute -bottom-12 -right-10 opacity-0 px-2 py-1 whitespace-nowrap rounded bg-black/80 text-white text-xs group-hover:opacity-90 transition-all duration-300 ease-in-out">Switch to dark mode
              </span>}
          </div>

        </nav>

      </nav>

      {/* RIGHT BAR IMPORT */}
      {open && <Rightbar setOpen={setOpen} toggleMode={toggleMode} darkmode={darkmode} />}
    </>



  )
};