import React, { useState, useEffect } from "react";
import logo from "../Navbar/Images/logo.svg";
import cart from "../Navbar/Images/cart.svg";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Close as CloseIcon } from "@material-ui/icons";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const showLinks = () => {
    setVisible(!visible);
  };

  const showMenu = () => {
    if (window.innerWidth >= 768 && visible === true) {
      setVisible(!visible);
    }
  };

  useEffect(() => {
    showMenu();
  }, []);

  window.addEventListener("resize", showMenu);

  return (
    <>
      <div className=" navbar-container sticky top-0 z-10  w-full flex justify-between p-3 items-center bg-white/30 backdrop-blur ">
        <nav
          id="nav-left"
          className="hidden flex-1 pl-7 md:block text-sm lg:text-lg"
        >
          <ul className=" md:flex gap-7">
            <li className="cursor-pointer transition-all hover:underline">
              SHOP
            </li>
            <li className="cursor-pointer transition-all hover:underline">
              WHY BIOM
            </li>
            <li className="cursor-pointer transition-all hover:underline">
              SCENTS
            </li>
          </ul>
        </nav>

        <div id="logo-div" className=" flex-1 ">
          <img src={logo} alt="logo image" className="m-0 md:mx-auto" />
        </div>

        <div className="md:hidden" style={{ transform: "scale(1.5)" }}>
          {!visible ? (
            <MenuIcon onClick={showLinks} />
          ) : (
            <CloseIcon onClick={showLinks} />
          )}
        </div>

        <nav
          id="nav-right"
          className="hidden flex-1 pr-7 md:block text-sm lg:text-lg"
        >
          <ul className=" md:flex gap-7 justify-end">
            <li className="cursor-pointer transition-all hover:underline">
              SIGN IN
            </li>
            <li className="cursor-pointer transition-all hover:underline relative ">
              CART <img src={cart} alt="cart image" className="inline " />
              <div
                className="cart-counter absolute -top-1 -right-2 text-sm bg-teal-400 rounded-full  flex justify-center align-center border-2 border-solid border-white text-xs"
                style={{
                  width: "20px",
                  height: "20px",
                  backgroundColor: "#DDA74A",
                  color: "white",
                  position: "absolute",
                }}
              >
                0
              </div>
            </li>
          </ul>
        </nav>
      </div>

      <ul
        className={
          visible
            ? "fixed z-10 bg-teal-600  text-center text-3xl flex flex-col justify-center md:hidden"
            : "hidden"
        }
        style={{ height: "92vh", width: "100vw" }}
      >
        <li
          onClick={showLinks}
          className="pt-8 hover:scale-125 cursor-pointer transition-all hover:underline"
        >
          SHOP
        </li>
        <li
          onClick={showLinks}
          className="pt-8 hover:scale-125 cursor-pointer transition-all hover:underline"
        >
          WHY BIOM
        </li>
        <li
          onClick={showLinks}
          className="pt-8 hover:scale-125 cursor-pointer transition-all hover:underline"
        >
          SCENTS
        </li>
        <li
          onClick={showLinks}
          className="pt-8 hover:scale-125 cursor-pointer transition-all hover:underline"
        >
          SIGN IN
        </li>
        <li
          onClick={showLinks}
          className="mt-8 hover:scale-125 cursor-pointer relative w-fit h-fit mx-auto transition-all hover:underline"
        >
          CART <img src={cart} alt="cart image" className="inline " />
          <div
            className="cart-counter absolute -top-1 -right-2 text-sm bg-teal-400 rounded-full  flex justify-center align-center border-2 border-solid border-white text-xs"
            style={{
              width: "20px",
              height: "20px",
              backgroundColor: "#DDA74A",
              color: "white",
              position: "absolute",
            }}
          >
            0
          </div>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
