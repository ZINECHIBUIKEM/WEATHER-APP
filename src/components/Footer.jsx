export function Footer() {
  return (
    <footer className="flex flex-col px-10 py-6 bg-slate-800 w-screen">
      <div className="flex flex-row h-15 w-full justify-center gap-[20vw] items-center">
        <img src="/openweather.png" className="w-15" />
        <img src="/zinexpression.png" className="w-5" />
        <img src="/heartsbetween.png" className="w-15" />
      </div>
      <div>
        <span className="text-white font-thin text-[10px] text-center w-screen">
          ZINEXPRESSION © 2026. All rights reserved
        </span>
      </div>

    </footer>
  )
}