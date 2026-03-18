export function Rightbar() {
  return (
    <>
      {/* DROP DOWN MENU */}
      <ul className="fixed flex top-18 right-0 bg-slate-800/80 sm:hidden flex-col px-0 items-center backdrop-blur-[2px] gap-12 min-h-screen w-50 pt-8">
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
    </>
  )
}