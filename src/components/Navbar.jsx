import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { FaXmark, FaBars } from "react-icons/fa6";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { link: "Home", path: "home" },
    { link: "Service", path: "service" },
    { link: "About", path: "about" },
    { link: "Product", path: "product" },
    { link: "FAQ", path: "faq" },
    { link: "Testimonial", path: "testimonial" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-50">
      <nav
        className={`transition-all duration-300 transform ${
          isScrolled ? "bg-[#9fa0a1] shadow-sm" : "bg-transparent"
        } ${showNavbar ? "translate-y-0" : "-translate-y-full"} py-4 lg:px-14 px-4`}
      >
        <div className="flex justify-between items-center">
          <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
            <img className="w-10" src={logo} alt="Logo" />
            <span className="text-[#ffffff]">RBC GROUP</span>
          </a>

          <ul className="hidden md:flex space-x-12">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="text-base text-white hover:text-orange-500 cursor-pointer"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* <div className="hidden lg:flex space-x-6 items-center">
            <a className="text-orange-500 hover:text-gray-900" href="#">
              Login
            </a>
            <button className="bg-brandPrimary text-white py-2 px-4 rounded hover:bg-neutralGrey transition">
              Sign up
            </button>
          </div> */}

          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-neutralDGrey">
              {isMenuOpen ? <FaXmark className="w-6 h-6" /> : <FaBars className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-[#9fa0a1] text-white px-4 py-6 space-y-4 fixed top-0 left-0 right-0">
            {navItems.map(({ link, path }) => (
              <Link
                to={path}
                spy={true}
                smooth={true}
                offset={-100}
                key={path}
                className="block text-base hover:text-white/70"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
            {/* <button className="w-full mt-4 py-2 bg-white text-orange-500 rounded hover:bg-neutral-100 transition">
              Sign up
            </button> */}
          </div>
        )}
      </nav>
    </header>
  );
};
