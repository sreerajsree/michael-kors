import React from "react";
import Video from "./Video";

const Banner = () => {
  return (
    <section className="container mx-auto">
      <Video />
      <div className="text-center mt-8 mb-20 max-w-3xl mx-auto">
        <h2 className="font-semibold text-3xl md:text-6xl tracking-wider">
          WORLD-CLASS STYLE
        </h2>
        <p className="tracking-wider text-base md:text-lg mt-5">
          Photographed in London and chic in any locale, our new arrivals add a
          sleek edge to sophisticated style. Think: day-to-night looks, refined
          handbags and bold hardware.
        </p>
        <p className="tracking-widest font-bold mt-5 cursor-pointer">
          SHOP WOMEN’S NEW ARRIVALS ▸
        </p>
      </div>
    </section>
  );
};

export default Banner;
