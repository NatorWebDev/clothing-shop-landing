import { useInView } from "react-intersection-observer";
import { Fade } from "react-reveal";

function NavBtn({ name,link,responsive}) {
  const { ref, inView, entry } = useInView();


  return (
    
      <Fade left when={inView}>
        <a
          ref={ref}
          href={`#${link}`}
          className={`inline-block text-white text-lg font-bold ml-6 mt-6 relative hover:after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-1 after:w-0 after:bg-white hover:after:w-full after:transition-all after:duration-200 laptop:text-sm |TABLET| ${(responsive) ? 'tablet:my-7 tablet:mx-6':''}`}
        >
          {name}
        </a>
      </Fade>
   
  );
}

export default NavBtn;
