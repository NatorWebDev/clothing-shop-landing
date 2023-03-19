import SliderCard from "./SliderCard";
import Clothes2 from '../assets/Clothes2.jpg';
import Corbata from '../assets/Corbata.jpg'
import Suits from '../assets/Suits.jpg'
import Clothing from '../assets/clothing.jpg'
import Hero_Foot from '../assets/Hero_Foot.jpg'

function Slider() {
  return (
    <div className="grid w-3/4 h-full absolute z-30 right-0 grid-cols-1 grid-rows-4 p-1_10 ">
      <h2 className="text-4xl font-light place-self-center justify-self-center text-gray-200 laptop:text-2xl">
        Just For You
      </h2>

      <div
        className="relative row-span-3 w-full h-full flex justify-start items-center overflow-hidden">
        <SliderCard delay="1s" text='shoes' price='20' imgSrc={Hero_Foot}/>
        <SliderCard delay="2s" text='Clothing' price='69' imgSrc={Clothes2}/>
        <SliderCard delay="3s" text='Tie' price='5' imgSrc={Corbata}/>
        <SliderCard delay="4s" text='Men Suits' price='50' imgSrc={Suits}/>
        <SliderCard delay="5s" text='Clothing' price='90' imgSrc={Clothing}/>
      </div>
    </div>
  );
}

export default Slider;
