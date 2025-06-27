import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex items-center h-[75px] pl-[50px] pr-[50px] bg-[#b3282d] max-md:pr-[20px] max-md:pl-[20px]">
      <div className="max-width flex justify-around items-center max-md:justify-between">
        <img
          className="w-[70px] h-[70px] object-cover"
          src="/img/header/acme-logo.png"
          alt="Acme Logo"
        />
        <nav
          className={`z-50 absolute top-[75px] left-0 w-full md:static max-md:block md:w-full max-md:transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 transition-y-0 pointer-events-auto max-md:bg-[#b3282d]"
              : "opacity-0 -translate-y-2 pointer-events-none md:opacity-100 md:translate-y-0 md:pointer-events-auto"
          }`}
        >
          <ul className="w-full flex justify-end gap-[20px] max-md:flex-col max-md:gap-[15px] max-md:items-center max-md:p-[15px]">
            <li className="font-[Montserrat] text-[1.8rem] text-[#fff] duration-300 ease-in-out hover:text-[#fdb927]">
              <Link to="/">Home</Link>
            </li>
            <li className="font-[Montserrat] text-[1.8rem] text-[#fff] duration-300 ease-in-out hover:text-[#fdb927]">
              <Link to="/About">About</Link>
            </li>
            <li className="font-[Montserrat] text-[1.8rem] text-[#fff] duration-300 ease-in-out hover:text-[#fdb927]">
              <Link to="/Models">Models</Link>
            </li>
            <li className="font-[Montserrat] text-[1.8rem] text-[#fff] duration-300 ease-in-out hover:text-[#fdb927]">
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-6 h-6 flex flex-col justify-center items-center relative z-50"
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute w-6 h-[2px] bg-[#fff] transition-all duration-300 ease-in-out ${
              menuOpen ? "rotate-45 top-1/2" : "-translate-y-2"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-[#fff] transition-all duration-300 ease-in-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`absolute w-6 h-[2px] bg-[#fff] transition-all duration-300 ease-in-out ${
              menuOpen ? "-rotate-45 top-1/2" : "translate-y-2"
            }`}
          />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
