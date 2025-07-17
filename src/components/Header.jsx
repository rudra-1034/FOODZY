import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaHeart, FaShoppingCart, FaPhone, FaBars, FaChevronDown, FaSearch, FaTimes } from 'react-icons/fa';
import logo from "../assets/logo.png";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <header className="w-full shadow-sm border-b bg-white">
      {/* Top Row */}
      <div className="w-full bg-white border-b shadow-sm">
        <div className="w-full md:max-w-screen-2xl md:mx-auto flex items-center justify-between px-2 sm:px-4 md:px-10 py-2">
          {/* Center: Navigation Links (centered on desktop) */}
          <div className="flex-1 flex justify-center">
            <nav className="hidden md:flex items-center space-x-6 font-medium text-sm">
              <Link to="/" className="hover:text-red-500">Home</Link>
              <Link to="/category" className="hover:text-red-500 flex items-center">Category <FaChevronDown className="ml-1 text-xs" /></Link>
              <Link to="/product" className="hover:text-red-500 flex items-center">Products <FaChevronDown className="ml-1 text-xs" /></Link>
              <Link to="/pages" className="hover:text-red-500 flex items-center">Pages <FaChevronDown className="ml-1 text-xs" /></Link>
              <Link to="/blog/1" className="hover:text-red-500 flex items-center">Blog <FaChevronDown className="ml-1 text-xs" /></Link>
              <Link to="/elements" className="hover:text-red-500 flex items-center">Elements <FaChevronDown className="ml-1 text-xs" /></Link>
            </nav>
          </div>
          {/* Right: Contact (hidden on mobile) */}
          <div className="hidden md:flex items-center text-sm text-gray-700">
            <FaPhone className="mr-2" />
            +123 (456) (7890)
          </div>
        </div>
      </div>
      <div className="w-full bg-white">
        <div className="w-full md:max-w-screen-2xl md:mx-auto flex flex-col md:flex-row items-center justify-between px-2 sm:px-4 md:px-10 py-2 gap-4">
          {/* Left: Logo and Hamburger */}
          <div className="flex items-center space-x-3 w-full md:w-auto md:pr-8">
            {/* Hamburger for mobile - now here, next to logo and name */}
            <button
              className="text-xl p-2 rounded border hover:bg-gray-100 md:hidden mr-2"
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open menu"
            >
              <FaBars />
            </button>
            <img src={logo} alt="Foodzy" className="w-12 h-12" />
            <div>
              <div className="font-bold text-xl">Foodzy</div>
              <div className="text-xs text-gray-500 -mt-1">A Treasure of Tastes</div>
            </div>
          </div>

          {/* Middle: Search bar */}
          <div className="flex flex-grow md:max-w-2xl border rounded overflow-hidden text-sm w-full bg-white md:mx-8">
            <input
              type="text"
              placeholder="Search For Items..."
              className="px-3 py-2 flex-grow outline-none bg-white min-w-0"
            />
            <select className="border-l px-2 text-gray-600 bg-white min-w-[110px]">
              <option>All Categories</option>
            </select>
            <button className="px-3" style={{ backgroundColor: "#F53E32" }}>
              <FaSearch className="text-white" />
            </button>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center space-x-6 text-sm text-black w-full md:w-auto md:pl-8 justify-center md:justify-end">
            <Link to="/login" className="flex items-center space-x-1 hover:text-red-500">
              <FaUser />
              <span className="hidden sm:inline">Account</span>
            </Link>
            <Link to="/wishlist" className="flex items-center space-x-1 hover:text-red-500">
              <FaHeart />
              <span className="hidden sm:inline">Wishlist</span>
            </Link>
            <Link to="/cart" className="flex items-center space-x-1 hover:text-red-500">
              <FaShoppingCart />
              <span className="hidden sm:inline">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex">
          <div className="bg-white w-64 h-full p-6 flex flex-col">
            <button
              className="self-end mb-6 text-2xl"
              onClick={() => setMobileNavOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
            <nav className="flex flex-col space-y-4 font-medium text-base">
              <Link to="/" className="hover:text-red-500" onClick={() => setMobileNavOpen(false)}>Home</Link>
              <Link to="/category" className="hover:text-red-500 flex items-center" onClick={() => setMobileNavOpen(false)}>Category <FaChevronDown className="ml-1 text-xs" /></Link>
              <Link to="/product" className="hover:text-red-500 flex items-center" onClick={() => setMobileNavOpen(false)}>Products <FaChevronDown className="ml-1 text-xs" /></Link>
              <Link to="/pages" className="hover:text-red-500 flex items-center" onClick={() => setMobileNavOpen(false)}>Faq <FaChevronDown className="ml-1 text-xs" /></Link>
              <Link to="/blog/1" className="hover:text-red-500 flex items-center" onClick={() => setMobileNavOpen(false)}>Blog <FaChevronDown className="ml-1 text-xs" /></Link>
              <Link to="/elements" className="hover:text-red-500 flex items-center" onClick={() => setMobileNavOpen(false)}>Elements <FaChevronDown className="ml-1 text-xs" /></Link>
            </nav>
            <div className="mt-8 flex items-center text-sm text-gray-700">
              <FaPhone className="mr-2" />
              +123 (456) (7890)
            </div>
          </div>
          <div className="flex-1" onClick={() => setMobileNavOpen(false)} />
        </div>
      )}
    </header>
  );
}
