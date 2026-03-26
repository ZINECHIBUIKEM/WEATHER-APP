export function Overlay({ showOverlay, value }) {
  if (showOverlay) {
    if (value !== "") {
      return (
        <div className="text-slate-800 flex flex-row absolute -bottom-10 right-0">
          Saved!
        </div>
      )
    }
  }
};