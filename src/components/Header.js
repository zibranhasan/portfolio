import React from "react";
import { BsFillArrowDownSquareFill } from "react-icons/bs";

//images

const Header = () => {
  return (
    <header className="py-7">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#"></a>
          {/* button */}
          <a href="Zibran_Resume (1).pdf">
            <button className="btn btn-sm flex items-center gap-1">
              <BsFillArrowDownSquareFill download="Zibran_Resume (1).pdf" />
              RESUME
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
