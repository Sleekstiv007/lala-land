import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen ">
      <img
        className="top-0 left-0 w-full h-screen object-cover"
        src="https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg"
        alt="/"
      />
      <div className="bg-black/30 absolute top-0 left-0 w-full h-screen" />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center text-white">
        <div className="md:left-[10%] max-width-[1100px] m-auto p-4">
          <p className="font-display font-semibold">All Inclusive</p>
          <h1 className="font-bold font-display text-3xl md:text-5xl drop-shadow-2xl">
            Private Beaches & Getaways
          </h1>
          <p className="max-w-[600px] drop-shadow-2xl py-2 text-sm">
            Welcome to Lala Land Beach & Resort If you're
            looking for a sunny escape, look no further than our beautiful beach
            destination. With crystal-clear waters, soft sandy beaches, and
            endless activities to enjoy, this is the perfect place to relax,
            unwind, and soak up the sun. Discover Our Beaches Our area boasts
            some of the most beautiful beaches in the world, each with its own
            unique character and charm. From secluded coves to bustling
            hotspots, there's something for everyone to enjoy.
          </p>
          <button className="bg-white text-black">Reserve Now</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
