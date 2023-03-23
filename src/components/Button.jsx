
import React from "react";

const handleClick = () => {
  const contactElement = document.querySelector("#contact");
  if (contactElement) {
    contactElement.scrollIntoView({ behavior: "smooth" });
  }
};


const Button = ({ styles }) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-red-gradient rounded-[10px] outline-none ${styles}`} onClick={handleClick}>
  Get Started
  </button>
);

export default Button;