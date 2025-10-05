import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-[#1c1a16] text-white border-b border-[#333] shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        
        {/* Logo Only */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Nav Links + Search */}
        <div className="flex items-center gap-16">
          {/* Navigation Links with wide spacing */}
          <div className="flex items-center gap-16">
            <Link
              to="/"
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-white font-medium"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-orange-400 transition font-medium"
            >
              About
            </Link>
            <Link
              to="/favorites"
              className="hover:text-orange-400 transition font-medium"
            >
              Favorites
            </Link>
          </div>

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search"
            className="bg-white text-black px-3 py-1 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>
      </div>
    </nav>
  );
}