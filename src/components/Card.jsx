import Fade from 'react-reveal/Fade'

function Card({urlImg,price,name,rowSpan,delay}) {
  
  const span = {
    '1' :  'row-span-1',
    '2' : 'row-span-2'
  }

  return (
    <Fade right delay={delay} duration={500}>
    <div className={`w-full h-full rounded-md bg-white p-2 flex flex-col  z-30 ${span[rowSpan]}`}>
      <img
        src={urlImg}
        alt="article"
        className="w-full h-full mb-4 object-cover"
      />

      <h2 className="flex justify-between text-lg justify-self-en bg-gray-200 p-2 rounded-sm laptop:text-sm tablet:text-xs">
        <p className="font-bold">{name}</p>
        <p className="font-md">{price + "$"}</p>
      </h2>
    </div>
    </Fade>
  );
}

export default Card;
