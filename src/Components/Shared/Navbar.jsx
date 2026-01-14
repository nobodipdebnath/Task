import React, { useState } from "react";
import { Link, NavLink } from "react-router";
import logo from "../../assets/images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = (
    <>
      <li className="text-white font-medium text-sm hover:underline">
        <NavLink to="/" onClick={() => setMenuOpen(false)}>
          Home
        </NavLink>
      </li>
      <li className="text-white font-medium text-sm hover:underline">
        <NavLink to="/coach" onClick={() => setMenuOpen(false)}>
          Coach
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="flex items-center justify-between manrope md:px-15 md:py-6 py-4 px-4 lg:backdrop-blur-[2px] backdrop-blur-2xl relative">
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <div className="hidden md:block">
        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">{links}</ul>
          <div>
            <Link to="/login" className="button">
              Start Subscription
            </Link>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? (
            <FaTimes className="text-3xl text-white" />
          ) : (
            <FaBars className="text-3xl text-white" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center gap-6 py-6 md:hidden z-50">
          <ul className="flex flex-col items-center gap-6">{links}</ul>
          <Link
            to="/login"
            className="button"
            onClick={() => setMenuOpen(false)}
          >
            Start Subscription
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
