import React, { useState } from "react";
import { Link } from "react-router-dom"; // Use Link from react-router-dom instead of <a>
import logo from "../../assets/images/Logo.svg";
import { cn } from "../../utils/cn";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinkClasses = cn(
    "text-[#f0f8ff] no-underline text-[17px] font-medium transition-colors duration-300 relative",
    "hover:text-orange-500",
    "after:content-[''] after:absolute after:w-0 after:h-[2px] after:-bottom-[5px] after:left-0 after:bg-orange-500 after:transition-all after:duration-300",
    "hover:after:w-full",
    "max-lg:text-[16px]",
    "max-md:text-[20px] max-md:after:hidden",
    "max-sm:text-[18px]"
  );

  return (
    <nav className="relative min-h-[80px] max-md:h-[70px] max-sm:h-[65px] bg-[#1a1a24] flex items-center justify-center overflow-hidden px-[140px] max-lg:px-[60px] max-md:px-[20px] max-sm:px-[15px]">
      <div className="relative grid grid-cols-2 max-md:flex max-md:justify-between gap-[80px] items-center max-w-[1400px] w-full z-[1]">
        <Link to="/">
          <img
            src={logo}
            alt="Dealora Logo"
            className="h-[50px] max-md:h-[40px] max-sm:h-[35px] w-auto z-[1001]"
          />
        </Link>
        {/* Hamburger Menu Button */}
        <button
          className="hidden max-md:flex flex-col justify-between w-[30px] h-[24px] bg-transparent border-none cursor-pointer p-0 z-[1001]"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "w-full h-[3px] bg-[#f0f8ff] rounded-[2px] transition-all duration-300",
              isMenuOpen && "rotate-45 translate-x-[8px] translate-y-[8px]"
            )}
          ></span>
          <span
            className={cn(
              "w-full h-[3px] bg-[#f0f8ff] rounded-[2px] transition-all duration-300",
              isMenuOpen && "opacity-0"
            )}
          ></span>
          <span
            className={cn(
              "w-full h-[3px] bg-[#f0f8ff] rounded-[2px] transition-all duration-300",
              isMenuOpen && "-rotate-45 translate-x-[7px] -translate-y-[7px]"
            )}
          ></span>
        </button>
        {/* Navigation Links */}
        <div
          className={cn(
            "flex items-center justify-end gap-[36px] max-lg:gap-[24px]",
            "max-md:fixed max-md:top-0 max-md:h-screen max-md:w-[70%] max-md:max-w-[300px] max-md:bg-[#1a1a24] max-md:flex-col max-md:justify-center max-md:items-center max-md:gap-[40px] max-md:transition-all max-md:duration-400 max-md:shadow-[-2px_0_10px_rgba(0,0,0,0.3)] max-md:z-[1000] max-sm:w-[80%]",
            isMenuOpen ? "max-md:right-0" : "max-md:-right-full"
          )}
        >
          <Link to="/shop" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>
            Shop
          </Link>
          <Link to="/order" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>
            Order
          </Link>
          <Link to="/inventory" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>
            Inventory
          </Link>
          <Link to="/about" className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
