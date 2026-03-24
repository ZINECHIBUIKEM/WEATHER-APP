import { useState } from "react";
import { Rightbar } from "./Rightbar";
import { Searchbar } from "./Searchbar";
import { HamburgerMenu } from "./Hamburgermenu";
import { Link } from "react-router";
import { NavLink } from "react-router";

export function Header({ onSearch, toggleMode, darkmode }) {
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
        "text-yellow-400 font-thin"
        :
        "text-olive-50 font-thin"
    )
  }




  return (
    <>
      <nav className="fixed bg-slate-800 p-2 w-full flex flex-row justify-between items-center shadow-sm z-10 ">

        <Link to="/" className="flex flex-row shrink-0 h-15">
          <img src="/favicon.png" className="px-2" />
          <span className="hidden font-bold text-olive-50 pl-2 md:flex flex-row items-center justify-between" >
            ZineCast
          </span>
        </Link>

        <div className="flex flex-row flex-1 px-4 min-w-0">
          <Searchbar onSearch={onSearch} darkmode={darkmode} />
        </div>

        <HamburgerMenu darkmode={darkmode} openMenu={openMenu} open={open} />

        {/* Menu */}
        <nav className="hidden md:flex flex-row justify-between items-center px-10 gap-[6vw]">
          <NavLink to="/" className={navStyle}>
            Home
          </NavLink>
          <NavLink to="/recents-page" className={navStyle}>
            Recents
          </NavLink>
          <img src={`/toggle-${darkmode ? "on" : "off"}-icon.svg`} className="w-8" onClick={toggleTheme} />
        </nav>

      </nav>

      {/* RIGHT BAR IMPORT */}
      {open && <Rightbar toggleMode={toggleMode} darkmode={darkmode} />}
    </>



  )
};