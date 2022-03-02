import React from "react";
import logo from "./Images/biom logo footer.svg";
import instagram from "./Images/Icon awesome-instagram.svg";
import facebook from "./Images/Icon awesome-facebook-f.svg";
import arrow from "./Images/Icon ionic-ios-arrow-round-forward.svg";
import background from "./Images/Biom_wipe_2@2x.png";

const Footer = () => {
  return (
    <div className="footer-container mt-40  text-white bg-teal-800 relative pt-16 sm:pt-32 md:pt-48">
      <div className="footer-links flex flex-col sm:flex-row justify-center align-center mx-auto w-fit pb-6 pt-6 md:pt-0">
        <ul className="left-list order-2 mx-auto mt-5 text-center sm:order-1 sm:mt-0 sm:mx-0  flex align-center ">
          <li className="pt-2 sm:inline my-auto tracking-widest  mr-5 sm:pt-0 ">
            SHOP
          </li>
          <li className="pt-2 sm:inline my-auto tracking-widest sm:pt-0 mr-5 ">
            WHY BIOM
          </li>
          <li className="pt-2 sm:inline my-auto tracking-widest sm:pt-0 sm:mr-5 ">
            SCENTS
          </li>
        </ul>

        <div className="footer-image-div  order-1 mx-auto mt-3 sm:order-2 sm:mt-0 sm:mx-5 md:mx-10">
          <img src={logo} alt="" />
        </div>

        <ul className="right-list order-3 mx-auto text-center  flex align-center sm:mx-0">
          <li className="pt-2 sm:inline my-auto tracking-widest sm:pt-0 sm:ml-5 ">
            FAQS
          </li>
          <li className="pt-2 sm:inline my-auto tracking-widest sm:pt-0 ml-5 ">
            ACCOUNT
          </li>
          <li className="pt-2 sm:inline my-auto tracking-widest sm:pt-0 ml-5 ">
            HELP
          </li>
        </ul>
      </div>
      <div
        className="underline  w-11/12 mx-auto mt-5"
        style={{ borderColor: "#004A4C", borderWidth: "0.1px" }}
      ></div>
      <div className="footer-last w-11/12 mx-auto mt-5 py-5 sm:flex justify-between">
        <div className="footer-last-left text-center text-xs font-light  my-auto ">
          © 2021 biom. All rights reserved <span className="px-2 ">•</span>{" "}
          Privacy Policy <span className="px-2 ">•</span> Terms of Service
        </div>
        <div className="footer-last-right flex justify-center mt-5 sm:mt-0 ">
          <div
            className="insta mr-4 bg-white flex justify-center align-center p-1.5 rounded-full"
            style={{ height: "30px", width: "30px" }}
          >
            <img src={instagram} alt="" />
          </div>

          <div
            className="facebook ml-4 bg-white flex justify-center align-center p-1.5 rounded-full"
            style={{ height: "30px", width: "30px" }}
          >
            <img src={facebook} alt="" />
          </div>
        </div>
      </div>

      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundColor: "#f0f0f0",
        }}
        className="footer-upper-div bg-scroll bg-center bg-no-repeat bg-cover text-black absolute -top-36 left-1/2 transform -translate-x-1/2 w-11/12 mx-auto py-5 sm:-top-36 lg:-top-32   rounded-lg "
      >
        <div className="footer-upper-text sm:w-5/12 sm:ml-5 lg:ml-16">
          <h1 className="text-xl text-center font-bold sm:text-left sm:text-2xl lg:text-3xl ">
            Get the latest news <br /> delivered to your inbox.
          </h1>
          <p className=" mt-3 text-center text-xs sm:text-left">
            Get access to the exciting stuff — exclusive new deals, product{" "}
            <br />
            launches and more. Plus, get a 10% discount on your next order.
          </p>

          <div className="flex align-center group mt-6 justify-center sm:justify-start ">
            <div
              style={{ backgroundColor: "white" }}
              className="btn-container inline flex justify-center align-center py-1.5 px-2 w-7/12 rounded-tl-md rounded-bl-md"
            >
              <div
                className="mx-auto  text-xs  font-extrabold py-1 tracking-widest  "
                style={{ color: "#002D33", fontSize: "9.5px", marginLeft: "0" }}
              >
                <input
                  className="text-xs text-left placeholder-black w-100 "
                  type="email"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div
              style={{ backgroundColor: "#004a4c" }}
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
      </div>
    </div>
  );
};

export default Footer;
