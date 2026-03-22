import { NavLink } from "react-router";

export function Rightbar() {

  function toggleTheme() {
    console.log("toggled")
  };


  const navStyle = ({ isActive }) => {
    return (
      isActive
        ? "text-yellow-400 font-thin"
        : "text-olive-50 font-thin"
    );
  }


  return (
    <>
      <div className="fixed bg-black/20 w-screen h-screen backdrop-blur-[0.5px] transition-opacity duration-300 md:hidden" />

      {/* DROP DOWN MENU */}
      <nav className="fixed flex top-18 right-0 bg-slate-800/80 md:hidden flex-col px-0 items-center backdrop-blur-[2px] gap-12 min-h-screen w-[45vw] pt-8 z-20">
        <NavLink to="/" className={navStyle}>
          Home
        </NavLink>
        <div className="flex w-[35vw] h-[1px] opacity-40 bg-white -m-5" />
        <NavLink to="/saved-page" className={navStyle}>
          Saved
        </NavLink>
        <div className="flex w-[35vw] h-[0.5px] opacity-40 bg-white -m-5" />
        <img src="toggle-on-icon.svg" className="w-8" onClick={toggleTheme} />
      </nav>
    </>
  )
}