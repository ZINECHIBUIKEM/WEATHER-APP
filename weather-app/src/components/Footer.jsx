export function Footer() {
  return (
    <footer className="flex flex-col p-10 bg-slate-800 w-screen">
      <div className="flex flex-row h-15 w-full justify-center gap-5 items-center">
        <img src="../../public/openweather.png" className="w-15" />
        <img src="../../public/zinexpression.png" className="w-5" />
        <img src="../../public/heartsbetween.png" className="w-15" />
      </div>
      <div>
        <span className="text-white font-thin text-[12px] text-sm text-center w-screen">
          ZINEXPRESSION © 2026. All rights reserved
        </span>
      </div>

    </footer>
  )
}