import React from "react";
import wiping from "./Images/AdobeStock_377418446_Preview@2x.png";
import bio from "./Images/biodegradable icon@2x.png";
import plasticFree from "./Images/plastic free icon@2x.png";
import plantBased from "./Images/plant based icon@2x.png";
import wipes from "./Images/Refill Packaging_Mockup_2@2x.png";

const BiomWipes = () => {
  return (
    <div className="biomWipesContainer flex flex-col h-fit sm:py-12 sm:px-6">
      <div
        className="wipes-text flex flex-col justify-center py-8 relative lg:w-11/12 lg:mx-auto xl:w-10/12 "
        style={{ backgroundColor: "#DAE5E5" }}
      >
        <div className="text-container  w-1/2 mx-auto sm:mr-16">
          <h4 className="mt-6 text-center text-sm sm:text-left text-xs ">
            BIOM WIPES
          </h4>
          <h2 className="mt-6 text-center font-bold text-lg mx-auto sm:text-left text-2xl">
            Better for you, and the planet.
          </h2>
          <p className="mt-6 text-justify text-sm  w-full mx-auto sm:mx-0 text-left px-0 text-xs">
            The experience of clean should feel amazing. In a time when we’re
            constantly <br /> sanitizing, it can be damaging to our hands and
            skins. We decided to load our <br /> wipes with Aloe to take care of
            you, while you take care of your home.
          </p>
        </div>

        <div className="wipes-icons-container w-fit mx-auto sm:w-1/2 sm:mr-16 ">
          <div className="bio mt-6 flex pl-6   w-fit">
            <div className="bio-img" style={{ width: "50px" }}>
              <img src={bio} alt="" />
            </div>
            <p className="my-auto ml-3 text-sm sm:text-xs">
              100% biodegradable
            </p>
          </div>
          <div className="plasticFree mt-6 flex pl-6  w-fit">
            <div className="plasticFree-img " style={{ width: "50px" }}>
              <img src={plasticFree} alt="" />
            </div>
            <p className="my-auto ml-3 text-sm sm:text-xs">Plastic-free</p>
          </div>
          <div className="plantBased mt-6 flex pl-6  w-fit ">
            <div className="plantBased-img" style={{ width: "50px" }}>
              <img src={plantBased} alt="" />
            </div>
            <p className="my-auto ml-3 text-sm sm:text-xs">100% plant-based</p>
          </div>
          <div className="wipes-btn sm:pl-6">
            <button
              style={{ fontSize: "9px" }}
              className="block mx-auto absolute left-1/2 transform -translate-x-1/2 -bottom-4  cursor-pointer bg-teal-800 duration-300 hover:bg-teal-900  text-white font-bold tracking-widest  w-fit  py-3 px-6 rounded-md mt-6 sm:mx-0 "
            >
              SUBSCRIBE NOW
            </button>
          </div>
        </div>

        <div className="hidden wiping sm:block w-1/3  z-5 absolute -top-4 -left-4 ">
          <img
            src={wiping}
            alt="lady wiping"
            className="block max-w-full max-h-full object-contain"
          />
        </div>

        <div className=" hidden wipes  sm:block w-1/4 z-5 absolute -bottom-6 left-20 lg:left-36 -bottom-12 xl:w-1/5 xl:left-56 xl:-bottom-16">
          <img
            src={wipes}
            alt="wipes package"
            className="block max-w-full max-h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BiomWipes;
