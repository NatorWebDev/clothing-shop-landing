import Bounce from "react-reveal/Bounce";
import Fade from 'react-reveal/Fade'
import { useInView } from "react-intersection-observer";

function AboutUsSection() {
  const [ref, inView] = useInView();

  return (
    <section id="AboutUs" className="small_section laptop:very_small_section bg-slate-800 grid grid-rows-3 grid-cols-3 px-10 pt-10 tablet:p-0 tablet:px-5">
      <Bounce when={inView}>
        <div
          ref={ref}
          className="relative z-10 col-start-2 row-start-1 col-span-1 row-span-2 bg-amber-500 rounded-xl flex flex-col justify-center align-center px-10 py-5 text-slate-800 custom_shadow "
        >
          <h2 className="text-center text-2xl font-bold laptop:text-xl">Who We Are</h2>
          <p className="text-center font-semibold mt-10 laptop:text-sm tablet:text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
            blanditiis voluptatibus. Animi hic debitis, similique odio enim
            necessitatibus veniam quod.
          </p>
        </div>
      </Bounce>
      <Fade delay={1300}>
      <span className="h-full place-self-center w-1 bg-amber-500 col-start-2 col-span-1 row-start-1 row-span-3"></span>
      </Fade>
    </section>
  );
}

export default AboutUsSection;
