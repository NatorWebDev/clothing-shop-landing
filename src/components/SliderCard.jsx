function SliderCard({ delay, text, price,imgSrc }) {
  const animationDelay = {
    "1s": "animate-[slide_15s_linear_infinite_0s]",
    "2s": "animate-[slide_15s_linear_infinite_3s]",
    "3s": "animate-[slide_15s_linear_infinite_6s]",
    "4s": "animate-[slide_15s_linear_infinite_9s]",
    "5s": "animate-[slide_15s_linear_infinite_12s]",
  };

  return (
    <div
      className={`absolute w-60 h-80 bg-blue-400 inline-flex flex-col p-2 -translate-x-full opacity-0 animate-slide transition-all card_reflection ${animationDelay[delay]} `}
    >
      <div
        className="w-full h-full absolute top-0 left-0"
        onMouseEnter={(e) => {
          for (let element of e.target.parentNode.parentNode.children) {
            element.style.animationPlayState = "paused";
          }
          e.target.parentNode.style.width = "20rem";
          e.target.parentNode.style.height = "25rem";
        }}
        onMouseLeave={(e) => {
          for (let element of e.target.parentNode.parentNode.children) {
            element.style.animationPlayState = "running";
          }
          e.target.parentNode.style.width = "15rem";
          e.target.parentNode.style.height = "20rem";
        }}
      ></div>
      <img
        className="w-full h-4/5 object-cover"
        src={imgSrc}
        alt=""
        onMouseEnter={(e) => {
          e.stopPropagation();
        }}
      />
      <div className="flex justify-between items-center flex-1 text-lg p-2 mt-3 mb-1 bg-gray-200">
        <h3
          className="font-bold"
          onMouseEnter={(e) => {
            e.stopPropagation();
          }}
        >
          {text}
        </h3>
        <p
          className="font-bold"
          onMouseEnter={(e) => {
            e.stopPropagation();
          }}
        >
          {price}$
        </p>
      </div>
    </div>
  );
}

export default SliderCard;
