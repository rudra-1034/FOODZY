import React from "react";

export default function Hero() {
  return (
    <section className="relative bg-gray-100 w-full min-h-[500px] sm:min-h-[650px] md:min-h-[750px] lg:min-h-[850px] flex items-center">
      <div className="relative w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-8 md:px-12 py-12 md:py-24">
        {/* Left Content */}
        <div className="flex flex-col justify-center items-start">
          <div className="mb-2">
            <span className="font-bold text-lg text-red-600 mr-2">100%</span>
            <span className="font-semibold text-gray-900">Organic Vegetables</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-black">
            The best way to<br />stuff your wallet.
          </h1>
          <p className="mb-8 text-gray-400 text-base sm:text-lg max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
          </p>
          
          {/* Mobile-first approach with better responsive design */}
          <form className="w-full max-w-xl mb-8">
            {/* Mobile Layout */}
            <div className="flex flex-col sm:hidden gap-3">
              <input
                className="px-4 py-3 rounded-full outline-none text-gray-700 bg-white shadow-md border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 transition-all"
                placeholder="Your email address"
                type="email"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold transition hover:bg-green-600 shadow-md"
              >
                Subscribe
              </button>
            </div>
            
            {/* Desktop Layout */}
            <div className="hidden sm:flex items-center bg-white rounded-full shadow-md p-2">
              <input
                className="flex-grow px-4 py-3 rounded-full outline-none text-gray-700 bg-transparent min-w-0"
                placeholder="Your email address"
                type="email"
              />
              <button
                type="submit"
                className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold transition hover:bg-green-600 flex-shrink-0"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
        
        {/* Right Content */}
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-wrap gap-3 justify-center">
            {["Shopping", "Recips", "Kitchen", "News", "Food"].map((tag, i) => (
              <span
                key={tag}
                className="flex items-center bg-white rounded-full px-5 py-2 text-base font-semibold text-green-500 shadow-md"
              >
                <span className="text-gray-300 text-lg mr-2">×</span>
                <span className={i === 1 ? "text-gray-800 font-bold" : ""}>{tag}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}