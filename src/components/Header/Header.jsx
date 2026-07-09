import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/Logo.png";
import { cn } from "../../utils/cn";
import { FiShoppingBag, FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navLinks = [
    { name: "Shop", path: "/shop" },
    { name: "Order", path: "/order" },
    { name: "Inventory", path: "/inventory" },
    { name: "About", path: "/about" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-1000 transition-all duration-500",
          isScrolled
            ? "bg-[#1a1a24]/95 backdrop-blur-md shadow-lg shadow-black/20"
            : "bg-[#1a1a24]"
        )}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 md:h-22">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center gap-2 group z-1001 relative"
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="Dealora Logo"
                  className="h-10 md:h-12 w-auto transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "relative text-[#f0f8ff] no-underline text-[16px] font-medium transition-all duration-300 py-2",
                    "hover:text-orange-500",
                    isActive(link.path) && "text-orange-500"
                  )}
                >
                  {link.name}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 transform transition-transform duration-300",
                      isActive(link.path) ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                    )}
                  />
                </Link>
              ))}
            </div>

            {/* Cart Icon - Desktop */}
            <div className="hidden md:flex items-center gap-6">
              <button className="relative p-2 text-[#f0f8ff] hover:text-orange-500 transition-colors duration-300 group">
                <FiShoppingBag className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-500 text-white text-xs font-bold rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
                  3
                </span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden relative w-10 h-10 flex items-center justify-center z-1001 text-[#f0f8ff] hover:text-orange-500 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-5">
                <span
                  className={cn(
                    "absolute left-0 w-full h-0.5 bg-current rounded-full transition-all duration-300",
                    isMenuOpen ? "top-2.5 rotate-45" : "top-0"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-2.5 w-full h-0.5 bg-current rounded-full transition-all duration-300",
                    isMenuOpen ? "opacity-0" : "opacity-100"
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 w-full h-0.5 bg-current rounded-full transition-all duration-300",
                    isMenuOpen ? "top-2.5 -rotate-45" : "top-5"
                  )}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-999 transition-opacity duration-300",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden fixed top-0 right-0 h-full w-[80%] max-w-sm bg-[#1a1a24] z-1000 shadow-2xl transform transition-transform duration-500 ease-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex flex-col h-full pt-24 pb-8 px-6">
            <div className="flex-1 flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={cn(
                    "text-[#f0f8ff] text-xl font-medium py-4 px-4 rounded-xl transition-all duration-300",
                    "hover:bg-orange-500/10 hover:text-orange-500 hover:pl-6",
                    isActive(link.path) && "bg-orange-500/10 text-orange-500"
                  )}
                  style={{
                    animation: isMenuOpen ? `slideIn 0.3s ease-out ${index * 0.1}s both` : "none",
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Cart */}
            <div className="border-t border-white/10 pt-6 mt-6">
              <button className="w-full flex items-center justify-between p-4 bg-orange-500 rounded-xl text-white font-semibold hover:bg-orange-600 transition-colors">
                <span className="flex items-center gap-2">
                  <FiShoppingBag className="w-5 h-5" />
                  View Cart
                </span>
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm">3 items</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20 md:h-22" />

      {/* <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style> */}
    </>
  );
};

export default Header;