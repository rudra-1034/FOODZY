import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaDribbble, FaInstagram, FaTwitter } from "react-icons/fa";
import logo from "../assets/logo.png"; 
import img1 from "../assets/footer-1.png";
import img2 from "../assets/footer-2.png";
import img3 from "../assets/footer-3.png";
import img4 from "../assets/footer-4.png";
import img5 from "../assets/footer-5.png";

export default function Footer() {
  return (
    <footer className="bg-[#fafafa] w-full text-gray-700 text-[16px] flex flex-col justify-between py-12 px-4 sm:px-8 md:px-20 lg:px-32">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
        
        {/* Brand & Contact */}
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Foodzy" className="w-12 h-12 rounded-full border object-cover" />
            <div>
              <span className="font-bold text-lg">Foodzy</span>
              <div className="text-xs text-gray-400 -mt-1">A Treasure of Tastes</div>
            </div>
          </div>
          <div className="mb-4 text-gray-500 text-sm leading-relaxed">
            FoodTrove is the biggest market of grocery products.<br />
            Get your daily needs from our store.
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-red-400 mt-1 flex-shrink-0" />
              <span className="text-sm">51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-red-400 flex-shrink-0" />
              <span className="text-sm">example@email.com</span>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-red-400 flex-shrink-0" />
              <span className="text-sm">+91 123 4567890</span>
            </div>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Company</h4>
          <ul className="space-y-2 text-gray-500">
            <li className="hover:text-red-400 cursor-pointer transition-colors text-sm">About Us</li>
            <li className="hover:text-red-400 cursor-pointer transition-colors text-sm">Delivery Information</li>
            <li className="hover:text-red-400 cursor-pointer transition-colors text-sm">Privacy Policy</li>
            <li className="hover:text-red-400 cursor-pointer transition-colors text-sm">Terms & Conditions</li>
            <li className="hover:text-red-400 cursor-pointer transition-colors text-sm">Contact Us</li>
            <li className="hover:text-red-400 cursor-pointer transition-colors text-sm">Support Center</li>
          </ul>
        </div>

        {/* Category */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Category</h4>
          <ul className="space-y-2 text-gray-500">
            <li className="hover:text-red-400 cursor-pointer transition-colors text-sm">Dairy & Bakery</li>
            <li className="hover:text-red-400 cursor-pointer transition-colors text-sm">Fruits & Vegetable</li>
            <li className="hover:text-red-400 cursor-pointer transition-colors text-sm">Snack & Spice</li>
            <li className="hover:text-red-400 cursor-pointer transition-colors text-sm">Juice & Drinks</li>
            <li className="hover:text-red-400 cursor-pointer transition-colors text-sm">Chicken & Meat</li>
            <li className="hover:text-red-400 cursor-pointer transition-colors text-sm">Fast Food</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-bold mb-4 text-lg">Subscribe Our Newsletter</h4>
          
          {/* Newsletter Input */}
          <div className="flex mb-4">
            <input
              className="border border-gray-300 px-3 py-2 rounded-l w-full outline-none focus:border-red-400 transition-colors text-sm"
              placeholder="Enter your email..."
            />
            <button className="bg-black text-white px-4 rounded-r flex items-center justify-center hover:bg-red-400 transition-colors">
              <svg width="18" height="18" fill="none" viewBox="0 0 24 24">
                <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Social Media Icons */}
          <div className="flex gap-2 mb-4">
            <button className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-400 hover:text-white transition-all duration-300">
              <FaFacebookF size={14} />
            </button>
            <button className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-400 hover:text-white transition-all duration-300">
              <FaTwitter size={14} />
            </button>
            <button className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-400 hover:text-white transition-all duration-300">
              <FaDribbble size={14} />
            </button>
            <button className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-red-400 hover:text-white transition-all duration-300">
              <FaInstagram size={14} />
            </button>
          </div>

          {/* Footer Images - Responsive Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 gap-2">
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={img1} alt="footer1" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={img2} alt="footer2" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={img3} alt="footer3" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={img4} alt="footer4" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src={img5} alt="footer5" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t mt-10 pt-6 text-center text-gray-500 text-sm">
        © 2025 <span className="text-red-500 font-semibold">foodzy</span>, All rights reserved.
      </div>
    </footer>
  );
}