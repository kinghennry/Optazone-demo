/* eslint-disable react/prop-types */
/* eslint-disable import/no-named-as-default */
import { Logo } from "../images";
import { NavLink, Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container">
      {/* <div className="space-sty py-4">
        <Link to="/">
          <img src={Logo} alt="logo" />
        </Link>
        <div className="header-links opacity-80 font-medium text-sm flex gap-8">
          <Link to="/contact" className="bg-green rounded-md py-2 px-4">
            Contact Us
          </Link>
        </div>
      </div> */}
      <nav className="space-sty">
        <Link to="/">
          <img src={Logo} alt="logo" className="w-[120px]" />
        </Link>

        <div className="header-links opacity-80 font-medium text-sm flex gap-8">
          <Link to="/" className="hidden md:inline md:bg-transparent md:py-2">
            Home
          </Link>

          <Link to="/contact" className="bg-green rounded-md py-2 px-4">
            Contact Us
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
