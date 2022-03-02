import React, { useState } from "react";
import livingRoom from "../WhereAndWhen/Images/Living Room_1@2x.png";
import office from "../WhereAndWhen/Images/office@2x.png";
import kitchen from "../WhereAndWhen/Images/Kitchen Shot_3@2x.png";
import bathroom from "../WhereAndWhen/Images/bathroom_white on counter@2x.png";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";

const WhereAndWhen = () => {
  const [image, setImage] = useState(0);

  const nextImage = () => {
    {
      image < 3 ? setImage(image + 1) : setImage(0);
    }
  };

  const previousImage = () => {
    {
      image <= 0 ? setImage(3) : setImage(image - 1);
    }
  };

  return (
    <div className="whereAndWhen my-6 relative">
      <div className="images-container mx-auto px-3 pt-3 sm:flex sm:px-0 sm:pt-0">
        <div className="image-div-small sm:hidden">
          <img
            src={
              image === 0
                ? livingRoom
                : "" || image === 1
                ? office
                : "" || image === 2
                ? kitchen
                : "" || image === 3
                ? bathroom
                : ""
            }
            alt="room image"
            className="block max-w-full max-h-full object-contain mx-auto"
          />
        </div>

        <div className="arrow-container flex justify-between sm:hidden">
          <div
            className="arrow-back sm:hidden"
            style={{ transform: "scale(1.5)" }}
          >
            <ArrowBackIcon onClick={previousImage} />
          </div>

          <div className="room-name font-bold sm:hidden">
            {image === 0
              ? "living room"
              : "" || image === 1
              ? "office"
              : "" || image === 2
              ? "kitchen"
              : "" || image === 3
              ? "bathroom"
              : ""}
          </div>

          <div
            className="arrow-next sm:hidden"
            style={{ transform: "scale(1.5)" }}
          >
            <ArrowForwardIcon onClick={nextImage} />
          </div>
        </div>

        <div className="images-container-big-screen hidden sm:block sm:flex">
          <div className="living-room m-2 relative group overflow-hidden rounded-xl">
            <img
              src={livingRoom}
              alt="living room"
              className="block max-w-full max-h-full object-contain duration-300 group-hover:scale-110"
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 text-sm text-white font-semibold invisible duration-100 group-hover:visible ">
              living room
            </p>
          </div>
          <div className="office my-2 relative group overflow-hidden rounded-xl">
            <img
              src={office}
              alt="office"
              className="block max-w-full max-h-full object-contain duration-300 group-hover:scale-110"
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 text-sm text-white font-semibold invisible duration-100 group-hover:visible ">
              office
            </p>
          </div>
          <div className="kitchen m-2 relative group overflow-hidden rounded-xl">
            <img
              src={kitchen}
              alt="kitchen"
              className="block max-w-full max-h-full object-contain duration-300 group-hover:scale-110"
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 text-sm text-white font-semibold invisible duration-100 group-hover:visible ">
              kitchen
            </p>
          </div>
          <div className="bathroom my-2 mr-2 relative group overflow-hidden rounded-xl">
            <img
              src={bathroom}
              alt="bathroom"
              className="block max-w-full max-h-full object-contain duration-300 group-hover:scale-110"
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-2 text-sm text-white font-semibold invisible duration-100 group-hover:visible ">
              bathroom
            </p>
          </div>
        </div>
      </div>

      <div className="center-div absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h5 className="text-xs tracking-widest ">WHERE YOU NEED IT,</h5>
        <h1 className="text-3xl font-semibold mt-3 sm:text-4xl md:text-5xl">
          when you <br /> need it.
        </h1>
      </div>
    </div>
  );
};

export default WhereAndWhen;
