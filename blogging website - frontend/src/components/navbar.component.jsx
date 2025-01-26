import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../imgs/fire-flame-curved.svg";
const Navbar = () => {
const[searchBoxvisibilty,setsearchBoxvisibilty]=useState(false)
  return (
    <nav className="navbar">
      <Link to="/" className="flex-none w-10">
        <img src={logo} className="flex-none w-12" alt="Logo" /> 
      </Link>
      <div className="absolute bg-white w-full left-0 top-full border-b border-grey py-4 px-[5vw] md:border-0 md:block md:relative md:insect-0 md:pd-0 md:w-auto ">
      <input 
      type="text"
      placeholder="Search"
      className="w-full md:w-auto bg-grey p-4 pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-dark-grey md:pl-12"/>
      <i class className="fi fi-rr-search absolute right-[10%] md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2 text-2xl text-dark-grey"></i>

      </div>
      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <button className="md:hidden text-2xl bg-grey w-12 h-12 rounded-full flex items-center justify-center"
        onClick={()=>setsearchBoxvisibilty(currentVal =>!currentVal)}
        >
        <i class="fi fi-rr-search text-xl"></i>
        </button>

      </div>

    </nav>
  );
};
export default Navbar;