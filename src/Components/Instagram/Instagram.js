import React, { useState } from "react";
import instagramLogo from "./Images/Icon ionic-logo-instagram.svg";
import firstImage from "./Images/AdobeStock_372350085_Preview@2x.png";
import secondImage from "./Images/Biom_wipe_6@2x.png";
import thirdImage from "./Images/kitchen_counter_low res@2x.png";
import fourthImage from "./Images/Green-Gold-and-Navy-Living_Kitty-and-B-by-Kat-G@2x.png";
import fifthImage from "./Images/Biom fn .23@2x.png";
import sixthImage from "./Images/AdobeStock_334130078_Preview@2x.png";
import { ArrowBack as ArrowBackIcon } from "@material-ui/icons";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";

const Instagram = () => {
  const [image, setImage] = useState(0);

  const nextImage = () => {
    {
      image < 5 ? setImage(image + 1) : setImage(0);
    }
  };

  const previousImage = () => {
    {
      image <= 0 ? setImage(5) : setImage(image - 1);
    }
  };

  return (
    <div className="instagram py-10">
      <h1
        className="text-center font-bold text-sm mb-6 text-lg sm:text-2xl md:text-3xl"
        style={{ color: "#002D33" }}
      >
        #cleanwithbiom
      </h1>

      <div className="images-container mx-auto px-3 pt-3 sm:flex sm:px-0 sm:pt-0">
        <div className="image-div-small  mx-auto sm:hidden">
          <img
            src={
              image === 0
                ? firstImage
                : "" || image === 1
                ? secondImage
                : "" || image === 2
                ? thirdImage
                : "" || image === 3
                ? fourthImage
                : "" || image === 4
                ? fifthImage
                : "" || image === 5
                ? sixthImage
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

          <div
            className="arrow-next sm:hidden"
            style={{ transform: "scale(1.5)" }}
          >
            <ArrowForwardIcon onClick={nextImage} />
          </div>
        </div>

        <div className="images-container-big-screen hidden sm:block sm:flex ">
          <div className="firstImage m-2">
            <img
              src={firstImage}
              alt="firstImage"
              className="block max-w-full max-h-full object-contain "
            />
          </div>

          <div className="secondImage my-2 translate-y-7">
            <img
              src={secondImage}
              alt="secondImage"
              className="block max-w-full max-h-full object-contain "
            />
          </div>
          <div className="thirdImage m-2 ">
            <img
              src={thirdImage}
              alt="thirdImage"
              className="block max-w-full max-h-full object-contain "
            />
          </div>
          <div className="fourthImage my-2 mr-2 translate-y-7">
            <img
              src={fourthImage}
              alt="fourthImage"
              className="block max-w-full max-h-full object-contain "
            />
          </div>
          <div className="fifthImage my-2 mr-2 ">
            <img
              src={fifthImage}
              alt="fifthImage"
              className="block max-w-full max-h-full object-contain "
            />
          </div>

          <div className="sixthImage my-2 mr-2 translate-y-7">
            <img
              src={sixthImage}
              alt="sixthImage"
              className="block max-w-full max-h-full object-contain "
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center align-center group  mt-12">
        <div
          style={{ borderRight: "none", borderColor: "#002D33" }}
          className="btn-container inline flex justify-center align-center py-1.5 px-2 border rounded-tl-md rounded-bl-md"
        >
          <button
            className="mx-auto  text-xs  font-extrabold py-1 tracking-widest"
            style={{ color: "#002D33", fontSize: "9.5px" }}
          >
            FOLLOW US ON INSTAGRAM
          </button>
        </div>

        <div
          style={{ borderColor: "#002D33" }}
          className=" inline flex  border py-1.5 px-2 rounded-tr-md rounded-br-md"
        >
          <img
            src={instagramLogo}
            alt="insta_logo"
            className="inline max-w-full max-h-full object-contain "
          />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
