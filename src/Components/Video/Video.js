import React from "react";
import oceanVideo from "./Clip/Surfing through the ocean waves.mp4";

const Video = () => {
  return (
    <div style={{ height: "93vh" }} className="video relative mt-8 ">
      <video
        className="h-full object-cover w-full"
        src={oceanVideo}
        autoPlay
        loop
        muted
      ></video>
      <div className="ocean-text text-white text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
        <h5 className="text-xs tracking-widest">
          CLEANING OUR OCEANS WITH EVERY WIPE
        </h5>
        <h3 className="mt-6 text-xl font-bold sm:text-3xl">
          Wipes have plastic in them. We don’t.
        </h3>
        <p className="mt-6 text-xs">
          We reinvented wipes to cut out all the bad stuff —like single-use
          plastic that hurts the <br /> environment, and toxic chemicals that
          don’t belong in our oceans (or in our homes).
        </p>
        <button className="mt-10 tracking-widest font-bold text-xs block mx-auto cursor-pointer bg-white text-teal-900 duration-300 hover:bg-teal-900 hover:text-white py-3 px-6 rounded-md">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Video;
