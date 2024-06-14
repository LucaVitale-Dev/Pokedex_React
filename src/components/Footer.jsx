import React from "react";
import logo from "../assets/logoLuca.png";

function Footer() {
  return (
    <div className=" p-2 flex flex-col md:flex-row items-center justify-center gap-3">
      <img src={logo} alt="" />
      <h3 className=" font-bold text-white">
        I'm Luca Vitale, a junior web developer. <br />I developed this service
        using data provided by pokeapi.co. <br /> Visit my website at
        <span> </span>
        <a
          href="  https://www.lucavitalewebdeveloper.it"
          className=" text-[#D3C580]"
        >
          https://www.lucavitalewebdeveloper.it
        </a>
      </h3>
    </div>
  );
}

export default Footer;
