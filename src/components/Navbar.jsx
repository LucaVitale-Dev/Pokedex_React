import React, { useState } from "react";
import logo from "../assets/logo.png";

function Navbar({ setSearchTerm }) {
  //value inputsearc
  const [inputSearch, setInputSearch] = useState("");

  const handleInputChange = (e) => {
    setInputSearch(e.target.value);
    // => app components
    setSearchTerm(e.target.value);
  };

  return (
    <div className="py-6 flex flex-col gap-10 items-center justify-center">
      <img className="w-[400px] md:w-[600px]" src={logo} alt="logo" />
      <input
        className="text-white p-2 rounded-xl font-bold bg-transparent border border-[#D3C580]"
        type="search"
        placeholder="Search Pokemon"
        value={inputSearch}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default Navbar;
