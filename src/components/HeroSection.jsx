import Card from "./Card";
import Hero_Foot from "../assets/Hero_Foot.jpg";
import Clothing from "../assets/clothing.jpg";
import Clothes from "../assets/clothes.jpg";
import Fade from "react-reveal/Fade";

function HeroSection() {
  return (
    <>
      <section id="HeroSection" className="w-screen h-screen bg-amber-500 relative z-0 flex items-center">
        <Fade left cascade duration={500} delay={500}>
          <div className="ml-14">
            <h1 className="relative z-30 text-white text-4xl font-bold mb-6 laptop:text-2xl">
              THE BEST PLACE FOR SHOPPING
            </h1>
            <h2 className="relative z-30 text-white text-2xl font-normal laptop:text-xl">
              The Best Clothes, The Best Prices
            </h2>

            <button className="relative z-30 text-slate-800 px-8 py-4 bg-amber-500 rounded-2xl text-xl font-bold mt-8 hover:bg-amber-400 transition-all duration-200 hover:text-cyan-600 hover:scale-105 laptop:text-sm laptop:py-4 laptop:px-6">
              Buy Now
            </button>

            <button className="relative z-30 text-gray-200 mx-8 py-4 text-lg font-normal mt-8  transition-all duration-100 hover:after:content-[''] after:w-0 after:h-1 after:absolute after:bottom-0 after:left-0 hover:after:w-full after:bg-gray-200 after:transition-all after:duration-200 hover:text-gray-400 laptop:text-sm">
              See Our Spring Collection
            </button>
          </div>
        </Fade>
          <div className="grid w-2/6 aspect-square absolute z-20 grid-cols-2 grid-rows-2 place-items-center right-40 gap-4 tablet:right-10">
            <Card urlImg={Hero_Foot} price="20" name="Nike Foots" rowSpan={2} delay={1000}/>
            <Card urlImg={Clothing} price="10" name="Clothing" delay={1500}/>
            <Card urlImg={Clothes} price="30" name="Pink Clothes" delay={2000}/>
          </div>
        <div className="w-screen h-screen absolute z-10 bg-slate-800 clip-hero"></div>
      </section>
    </>
  );
}

export default HeroSection;
