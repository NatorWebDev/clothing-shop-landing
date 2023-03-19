import { useInView } from "react-intersection-observer";
import Fade from "react-reveal/Fade";

function ReelSectionTitle() {
  const [ref, inView] = useInView();

  return (
    <>
      <Fade top cascade when={inView}>
        <h2
          ref={ref}
          className="flex flex-col justify-around items-center absolute font-black text-4xl text-cyan-800 h-4/5 w-60 self-center laptop:text-xl laptop:w-40 laptop:justify-center"
        >
          <span className="text-gray-900">T</span>
          <span className="text-gray-900">H</span>
          <span className="text-gray-900">E</span>
          <span className="mt-4">B</span>
          <span>E</span>
          <span>S</span>
          <span>T</span>
          <span className="mb-4">S</span>
          <span className="text-gray-900">C</span>
          <span className="text-gray-900">L</span>
          <span className="text-gray-900">O</span>
          <span className="text-gray-900">T</span>
          <span className="text-gray-900">H</span>
          <span className="text-gray-900">E</span>
          <span className="text-gray-900">S</span>
        </h2>
      </Fade>
    </>
  );
}

export default ReelSectionTitle;
