import React from "react";
import backgroundImage from "../Homepage/Images/Kitchen_3@2x.png";

const Home = () => {
  return (
    <>
      <div
        className="homepage bg-scroll bg-center bg-no-repeat bg-cover text-white relative"
        style={{
          height: "92.7vh",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <div className="home-container absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm: relative">
          <div className="mx-auto  text-3xl text-center font-semibold sm:ml-16  sm:text-left   text-4xl md:text-5xl lg:text-6xl  ">
            So fresh. <br /> So green.
          </div>

          <div className=" font-light mt-5 mx-auto text-sm sm:ml-16  w-6/12 text-base  md: w-5/12 lg: xl:w-4/12 2xl:w-3/12">
            <p className="">
              {" "}
              We believe that a more eco-friendly everyday makes a happier you
              and me. We’re on a mission to put sustainability in reach with
              better-for-the-planet wipes that are easy, effective, and
              plastic-free.
            </p>
          </div>

          <button className="home-button block mx-auto cursor-pointer transition-all hover:bg-teal-800 hover:text-white text-xs text-teal-800 font-bold tracking-widest bg-white w-fit text-sm py-3 px-5 rounded-md mt-5 sm:ml-16">
            GET STARTED
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
