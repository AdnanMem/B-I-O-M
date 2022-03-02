import React from "react";
import greenVessel from "./Images/Green_1@2x.png";
import whiteVessel from "./Images/Biom fn .20@2x.png";
import blackVessel from "./Images/Black_2@2x.png";
import arrow from "./Images/Icon ionic-ios-arrow-round-forward.svg";

const BiomVessels = () => {
  return (
    <div
      className="vessels-container flex flex-col mt-8 sm:flex-row sm:pb-16 sm:pt-16"
      style={{ height: "100%" }}
    >
      <div className="vessels-text mx-auto mt-6  sm:my-auto">
        <div className="text-container">
          <h2 className="text-center text-black font-bold sm:text-xl xl:text-2xl">
            Ready to start <br /> wiping out waste?
          </h2>
        </div>

        <div className="flex justify-center align-center group  mt-6">
          <div
            style={{ borderRight: "none", borderColor: "#002D33" }}
            className="btn-container inline flex justify-center align-center py-1.5 px-2 border rounded-tl-md rounded-bl-md"
          >
            <button
              className="mx-auto  text-xs  font-extrabold py-1 tracking-widest"
              style={{ color: "#002D33", fontSize: "9.5px" }}
            >
              CHOOSE YOUR VESSEL COLOR
            </button>
          </div>

          <div
            style={{ borderColor: "#002D33" }}
            className=" inline flex  border py-1.5 px-2 rounded-tr-md rounded-br-md"
          >
            <img
              src={arrow}
              alt="arrow"
              className="inline max-w-full max-h-full object-contain duration-500 group-hover:translate-x-1/4 "
            />
          </div>
        </div>
      </div>
      <div className="green-vessel group relative mx-auto flex justify-center align-center w-3/12 mt-6 sm:w-1/12 ">
        <div className="img-div flex justify-center align-center">
          <img
            className="block max-w-full max-h-full object-contain duration-300 group-hover:translate-x-full"
            src={greenVessel}
            alt="green vessel"
          />
        </div>

        <div className="vessel-description absolute mt-7 top-2/3 sm:top-1/2 lg:mt-12 xl:top-1/2 xl:mt-16 2xl:top-1/2  duration-700 hidden group-hover:block w-32">
          <h2 className="text-xs font-bold">Biom Dispenser</h2>
          <h4 className="text-xs font-semibold">OCEAN TEAL</h4>
        </div>
      </div>

      <div className="white-vessel group relative mx-auto flex justify-center align-center w-3/12 mt-6 sm:w-1/12 ">
        <div className="img-div flex justify-center align-center">
          <img
            className="block max-w-full max-h-full object-contain duration-300 group-hover:translate-x-full"
            src={whiteVessel}
            alt="white vessel"
          />
        </div>

        <div className="vessel-description absolute mt-7 top-2/3 sm:top-1/2 lg:mt-12 xl:top-1/2 xl:mt-16 2xl:top-1/2  duration-700 hidden group-hover:block w-32">
          <h2 className="text-xs font-bold">Biom Dispenser</h2>
          <h4 className="text-xs font-semibold">WHITE</h4>
        </div>
      </div>

      <div className="black-vessel group relative mx-auto flex justify-center align-center w-3/12 mt-6 sm:w-1/12 ">
        <div className="img-div flex justify-center align-center">
          <img
            className="block max-w-full max-h-full object-contain duration-300 group-hover:translate-x-full"
            src={blackVessel}
            alt="black vessel"
          />
        </div>

        <div className="vessel-description absolute mt-7 top-2/3 sm:top-1/2 lg:mt-12 xl:top-1/2 xl:mt-16 2xl:top-1/2  duration-700 hidden group-hover:block w-32">
          <h2 className="text-xs font-bold">Biom Dispenser</h2>
          <h4 className="text-xs font-semibold">INK BLACK</h4>
        </div>
      </div>
    </div>
  );
};

export default BiomVessels;
