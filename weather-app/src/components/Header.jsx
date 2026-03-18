import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  function openMenu() {
    setOpen(!open);
  }

  return (
    <nav className=" fixed bg-slate-800 p-1 w-screen flex flex-row justify-between items-center shadow-sm backdrop-blur-sm">

      <img src="../../favicon.png" className="h-16 w-16 ml-4" />

      <div className="flex flex-row justify-between px-4 gap-8">
        {open
          ? <img onClick={openMenu} src="../../menu-icon.svg" className="w-8 flex sm:hidden" />
          :
          <img onClick={openMenu} src="../../close-icon.svg" className=" flex sm:hidden w-8" />}

        {/* Menu */}
        <ul className="hidden sm:flex flex-row justify-between px-4 gap-16">
          <li className="text-olive-50 font-thin">
            Home
          </li>
          <li className="text-olive-50 font-thin">
            Blog
          </li>
          <li className="text-olive-50 font-thin">
            Contact
          </li>
          <li className="text-olive-50 font-thin">
            Settings
          </li>
        </ul>

      </div>
    </nav>
  )
};