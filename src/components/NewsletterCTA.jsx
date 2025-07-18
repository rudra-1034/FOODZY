import React from "react";
import rightImg from "../assets/newsletter-right.png";

export default function NewsletterCTA() {
  return (
    <section
      className="py-8 sm:py-12 md:py-20 mx-2 sm:mx-6 md:mx-14 my-6 sm:my-10"
      style={{
        background: "#D6F5E6",
        borderRadius: "24px",
        backgroundImage: "url('/newsletter-bg.svg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 flex flex-col md:flex-col lg:flex-row  items-center justify-between relative">
        {/* Left Content */}
        <div className="flex-1 z-10 w-full md:w-1/2 mb-8 md:mb-0">
          <h3
            className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold"
            style={{
              color: "#475569",
              fontWeight: 700,
              lineHeight: 1.1,
              fontFamily: "'Poppins', 'Segoe UI', Arial, sans-serif",
            }}
          >
            Stay home & get your daily
            <br />
            needs from our shop
          </h3>
          <p className="mb-6 text-base sm:text-lg gray-100">
            Start Your Daily Shopping with{" "}
            <span style={{ color: "#3BB77E", fontWeight: 500 }}>Nest Mart</span>
          </p>
          <form className="w-full max-w-md">
            {/* Capsule: Only input on mobile, input+button on desktop */}
            <div className="flex items-center bg-white rounded-full shadow px-4 sm:px-6 py-3 w-full">
              <svg
                className="w-5 h-5 text-gray-400 mr-3"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              ></svg>
              <input
                className="flex-1 bg-transparent outline-none text-gray-700 text-base"
                placeholder="Your email address"
                type="email"
              />
              {/* Button only visible in capsule on desktop */}
              <button
                type="submit"
                className="hidden sm:inline-block bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full px-6 
                sm:px-8 py-2 text-base sm:text-lg shadow ml-2 md:text-sm md:px-2.5 md:py-2.5"
                style={{
                  boxShadow: "0 4px 16px 0 rgba(255, 87, 34, 0.15)",
                }}
              >
                Subscribe
              </button>
            </div>
            {/* Button below capsule on mobile only */}
            <button
              type="submit"
              className="block sm:hidden bg-red-500 hover:bg-red-600 text-white font-semibold rounded-full px-6 py-2 text-base shadow w-full mt-3"
              style={{
                boxShadow: "0 4px 16px 0 rgba(255, 87, 34, 0.15)",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
        {/* Right Image */}
        <div className="flex-1 flex items-end justify-end relative min-h-[200px] sm:min-h-[350px] w-full md:w-1/2">
          <img
            src={rightImg}
            alt="Newsletter Visual"
            style={{
              maxWidth: 500,
              height: "auto",
              objectFit: "contain",
            }}
            className="relative md:absolute md:right-0 md:bottom-0"
          />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        ></div>
      </div>
    </section>
  );
}

<script type="module" src="/src/main.jsx"></script>

