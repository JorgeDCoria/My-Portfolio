import React, { useState } from "react";

const Carousel = ({ data }) => {
  const [numberImage, setNumberImage] = useState(0);
  const nextImage = () => {
    if (numberImage === data.length - 1) setNumberImage(0);
    else setNumberImage(numberImage + 1);
  };
  const prevImage = () => {
    if (numberImage === 0) setNumberImage(data.length - 1);
    else setNumberImage(numberImage - 1);
  };

  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center">
      {/* {images.map((image, i) => ( */}
      <div className="flex h-full w-full items-center justify-center rounded-lg bg-[rgba(13,44,63,0.8)] text-sm md:text-base lg:absolute lg:top-2 lg:left-8 lg:h-52 lg:w-80">
        <p className="p-2 text-center text-white">
          {data[numberImage].description}
        </p>
      </div>
      <img
        key={numberImage}
        src={data[numberImage].image}
        className="h-full w-full object-contain transition-all"
        alt=""
      />

      {/* ))} */}
      <button
        className="absolute right-0 h-full  p-2 text-3xl font-extrabold text-primary_900  opacity-60 transition-all duration-300 lg:hover:bg-[rgba(40,34,32,0.8)] lg:hover:text-white"
        onClick={nextImage}
      >
        &gt;
      </button>
      <button
        className="absolute left-0 h-full  p-2 text-3xl font-extrabold text-primary_900 opacity-80 transition-all duration-300 lg:hover:bg-[rgba(40,34,32,0.8)]  lg:hover:text-white"
        onClick={prevImage}
      >
        &lt;
      </button>
    </div>
  );
};

export default Carousel;
