import React from "react";
import background from "../BiomDispenser/Images/MaskGroup12@2x.png";
import designIcon from "../BiomDispenser/Images/beautifulDesignIcon@2x.png";
import stainlessIcon from "../BiomDispenser/Images/durableStainlessIcon@2x.png";
import nonToxicIcon from "../BiomDispenser/Images/nonToxicIcon@2x.png";

const BiomDispenser = () => {
  return (
    <>
      <div
        className="biom-dispenser-container bg-scroll bg-center bg-no-repeat bg-cover "
        style={{
          height: "91vh",
          backgroundImage: `url(${background})`,
        }}
      >
        <div
          style={{ color: "#002D33" }}
          className="biom-dispenser-characteristics p-4 text-center h-full flex flex-col align-center justify-center lg:w-1/2 lg:float-right"
        >
          <h5 className="font-light text-sm tracking-wider lg:text-left sm:text-xs sm:font-normal">
            THE BIOM DISPENSER
          </h5>
          <h3 className="font-semibold text-lg mt-5 lg:text-left sm:font-semibold sm:text-3xl">
            Redefine your experience of clean.
          </h3>

          <h5 className="hidden font-normal text-sm text-left mt-5 w-fit mx-auto lg:ml-0 sm:text-xs sm:block">
            A quality engineered wipes dispenser that looks beautiful in your
            home, making <br /> better habits for your home and planet always
            within reach.
          </h5>

          <h5 className="w-4/5 font-normal text-sm text-left mt-5 w-fit mx-auto lg:ml-0 sm:text-xs sm:hidden">
            A quality engineered wipes dispenser that looks beautiful in your
            home, making better habits for your home and planet always within
            reach.
          </h5>

          <div className="characteristics-container mx-auto sm:text-left lg:ml-0 sm:mt-4">
            <div className="first-characteristic text-sm mt-6  flex w-fit ">
              <div className="first-img " style={{ width: "50px" }}>
                <img src={designIcon} alt="design icon" />
              </div>
              <p className="text-xs my-auto ml-4 sm:font-medium">
                Beautiful design, fit for your home
              </p>
            </div>
            <div className="second-characteristic text-sm flex  w-fit mt-3 sm:mt-7 ">
              <div className="second-img " style={{ width: "50px" }}>
                <img src={stainlessIcon} alt="stainless icon" />
              </div>
              <p className="text-xs my-auto ml-4 sm:font-medium">
                Durable stainless steel exterior
              </p>
            </div>
            <div className="third-characteristic text-sm flex  w-fit mt-3 sm:mt-7 ">
              <div className="third-img " style={{ width: "50px" }}>
                <img src={nonToxicIcon} alt="non toxic icon" />
              </div>
              <p className="text-xs my-auto ml-4 sm:font-medium">
                Non-toxic, BPA free
              </p>
            </div>
          </div>
          <button className="text-xs tracking-wide mt-8 sm:mt-10 mx-auto lg:ml-0 cursor-pointer bg-teal-800 text-white duration-300 hover:bg-teal-900  font-semibold tracking-widest w-fit py-3 px-8 rounded-md">
            SHOP NOW
          </button>
        </div>
      </div>
    </>
  );
};

export default BiomDispenser;
