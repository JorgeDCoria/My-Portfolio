import React, { useState } from "react";

const Carousel = ({ images }) => {
  const [numberImage, setNumberImage] = useState(0);
  const nextImage = () => {
    if (numberImage === images.length - 1) setNumberImage(0);
    else setNumberImage(numberImage + 1);
  };
  const prevImage = () => {
    if (numberImage === 0) setNumberImage(images.length - 1);
    else setNumberImage(numberImage - 1);
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* {images.map((image, i) => ( */}
      <div className="absolute top-2 left-8 h-52 w-80 rounded-lg bg-[rgba(13,44,63,0.8)]">
        <p className="p-2 text-center text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quis
          sequi maxime perspiciatis quia consectetur, fugiat dolore libero,
          voluptatibus non neque minus? Iure molestiae officiis eos, ipsum
          eveniet repellat laudantium?
        </p>
      </div>
      <img
        key={numberImage}
        src={images[numberImage]}
        className="h-full w-full object-contain transition-all"
        alt=""
      />

      {/* ))} */}
      <button
        className="absolute right-0 h-full  p-2 text-3xl font-extrabold text-primary_900  opacity-60 transition-all duration-300 hover:bg-[rgba(40,34,32,0.8)] hover:text-white"
        onClick={nextImage}
      >
        &gt;
      </button>
      <button
        className="absolute left-0 h-full  p-2 text-3xl font-extrabold text-primary_900 opacity-80 transition-all duration-300 hover:bg-[rgba(40,34,32,0.8)]  hover:text-white"
        onClick={prevImage}
      >
        &lt;
      </button>
    </div>
  );
};

export default Carousel;
