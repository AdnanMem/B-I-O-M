import React, { useState } from "react";
import quotes from "./Quotes";

const Testimonials = () => {
  const [value, setValue] = useState(0);
  const people = quotes;
  const { text, person, id } = people[value];
  return (
    <div
      className="testimonials pt-6 pb-3"
      style={{ backgroundColor: "#F2F2F2", height: "100%", color: "#002D33" }}
    >
      <div className="testimonials-title text-center mt-4 pt-4 text-xs tracking-widest ">
        <h4>WHAT PEOPLE ARE SAYING</h4>
      </div>

      <div
        style={{ height: "32vh" }}
        className="people-paragraph mx-auto flex align-center justify-center mt-6 sm:mt-0 w-9/12 sm:w-8/12 md:w-5/12 2xl:w-4/12"
        key={id}
      >
        <p className="text-center m-auto font-bold ">{text}</p>
      </div>
      <div
        style={{ fontSize: "11px" }}
        className="person-name text-center text-xs mt-10 sm:mt-0"
      >
        <p>{person}</p>
      </div>

      <div className="button-dots flex justify-center py-6">
        {people.map((person, index) => {
          const { id } = person;
          return (
            <div className="dot mr-3" onClick={() => setValue(id)} key={index}>
              <button
                style={{ borderColor: "#004A4C" }}
                className={`w-2 h-2 border rounded-full ${
                  index === value && "bg-teal-900"
                }`}
              ></button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
