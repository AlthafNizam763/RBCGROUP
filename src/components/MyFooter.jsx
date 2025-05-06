import React from "react";
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

export const MyFooter = () => {
  return (
    <footer className="bg-neutral-100 px-4 lg:px-14 max-w-screen-2xl mx-auto py-16 text-neutral-800">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        {/* Column 1: Brand Info with Logo */}
        <div>
          <div className="flex items-center space-x-3 mb-4">
            <img src={logo} alt="Logo" className="w-10 h-10" />
            <h2 className="text-2xl font-semibold">RBC GROUP</h2>
          </div>
          <p className="text-gray-500 leading-relaxed">
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
        </div>

        {/* Column 2: Services */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
          </ul>
        </div>

        {/* Column 3: Furniture */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-4">Furniture</h3>
          <ul className="space-y-2 text-gray-700">
            <li>Beds</li>
            <li>Chair</li>
            <li>All</li>
          </ul>
        </div>

        {/* Column 4: Follow Us */}
        <div>
          <h3 className="text-orange-500 font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">
              <BsFacebook /> Facebook
            </li>
            <li className="flex items-center gap-2">
              <BsTwitter /> Twitter
            </li>
            <li className="flex items-center gap-2">
              <BsInstagram /> Instagram
            </li>
          </ul>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center mt-16 text-gray-400 text-sm">
      <p>Copyright © {new Date().getFullYear()}</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
        <a 
         href="https://althafnizam763.github.io/xpalico/" 
         className="hover:underline" 
         target="_blank" 
         rel="noopener noreferrer"
        >
         Working Tearm
        </a>
        <a href="#" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};
