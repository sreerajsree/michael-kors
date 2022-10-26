import React from "react";

const HandBag = () => {
  return (
    <section className="max-w-4xl mx-auto">
      <a href="">
        <img src="/handbag.jpg" alt="Handbag" className="" />
      </a>
      <div className="text-center mt-8 mb-20 max-w-3xl mx-auto">
        <h2 className="font-semibold text-3xl md:text-5xl tracking-wider">
        FREQUENT FLIER
        </h2>
        <p className="tracking-wider text-base md:text-lg mt-5">
        Whether you’re arriving via helicopter or taxi, the Hamilton satchel guarantees a glamorous arrival.
        </p>
        <p className="tracking-widest font-bold mt-5 cursor-pointer">
        SHOP HANDBAGS ▸
        </p>
      </div>
    </section>
  );
};

export default HandBag;
