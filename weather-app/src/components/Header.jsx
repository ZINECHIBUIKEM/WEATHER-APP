import { useState } from "react";
import { Rightbar } from "./Rightbar";
import { Searchbar } from "./Searchbar";
import { HamburgerMenu } from "./Hamburgermenu";
import { NavLink } from "react-router";

export function Header() {
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(!open);
  }

  function toggleTheme() {
    console.log("toggled")
  };

  const navStyle = ({ isActive }) => {
    return (
      isActive
        ?
        "text-yellow-400 font-thin underline"
        :
        "text-olive-50 font-thin"
    )
  }




  return (
    <>
      <nav className=" fixed bg-slate-800 p-2 w-screen flex flex-row justify-between items-center shadow-sm z-10">

        <div className="flex flex-row shrink-0 h-15">
          <img src="../../favicon.png" className="ml-4" />
          <span className=" hidden font-bold text-olive-50 ml-2 md:flex flex-row items-center justify-between" >
            ZineCast
          </span>
        </div>

        <div className="flex flex-row w-full ml-5 mr-5">
          <Searchbar />
        </div>

        <HamburgerMenu openMenu={openMenu} open={open} />

        {/* Menu */}
        <nav className="hidden md:flex flex-row justify-between items-center px-4 mr-15 gap-20">
          <NavLink to="/" className={navStyle}>
            Home
          </NavLink>
          <NavLink to="/saved-page" className={navStyle}>
            Saved
          </NavLink>
          <img src="toggle-on-icon.svg" className="w-8" onClick={toggleTheme} />
        </nav>

      </nav>

      {/* RIGHT BAR IMPORT */}
      {open && <Rightbar />}
    </>



  )
};