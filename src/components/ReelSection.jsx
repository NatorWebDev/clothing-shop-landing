import ReelSectionTitle from "./ReelSectionTitle"
import Slider from "./Slider"

function ReelSection() {
  return (
    <section id="Products" className="relative flex z-0 w-screen h-screen bg-amber-500 ">
        <ReelSectionTitle />
        <Slider />
        <div className="relative z-10 clip-second h-screen w-screen bg-slate-800"></div>
    </section>
  )
}

export default ReelSection