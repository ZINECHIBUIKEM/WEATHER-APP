export function Overlay({ showOverlay, value, darkmode }) {
  if (showOverlay) {
    if (value !== "") {
      return (
        <div className={`${darkmode ? "text-white" : "text-slate-800"} flex flex-row fixed bottom-15 right-30`}>
          Saved!
        </div>
      )
    }
  }
};