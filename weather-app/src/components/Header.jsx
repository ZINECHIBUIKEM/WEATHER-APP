import { useState } from "react";
import { Rightbar } from "./Rightbar";
import { NavLink } from "react-router";

export function Header() {
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(!open);
  }

  const navStyle = ({ isActive }) => 
    isActive 
    ? 
    "text-yellow-400 font-thin" 
    :
     "text-olive-50 font-thin"
    
  

  return (
    <>
      <nav className=" fixed bg-slate-800 p-1 w-screen flex flex-row justify-between items-center shadow-sm">

        <div className="flex flex-row align-center justify-between">
          <img src="../../favicon.png" className="h-16 w-16 ml-4" />
          <span className="font-bold text-olive-50 flex flex-row items-center justify-between ml-2" >
            ZineCast
          </span>
        </div>


        <div className="flex flex-row justify-between px-4 gap-8">
          {open
            ? <img onClick={openMenu} src="../../close-icon.svg" className=" flex sm:hidden w-8" />
            : <img onClick={openMenu} src="../../menu-icon.svg" className="w-8 flex sm:hidden" />
          }

          {/* Menu */}
          <nav className="hidden sm:flex flex-row justify-between px-4 gap-16">
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
        </div>
      </nav>

      {/* RIGHT BAR IMPORT */}
      {open && <Rightbar />}
    </>



  )
};