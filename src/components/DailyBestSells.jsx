import React from "react";
import productImg from "../assets/product-5-1.png";
import productImg2 from "../assets/product-1-1.png";
import productImg3 from "../assets/product-6-1.png";
import productImg4 from "../assets/product-2-1.png";

import bestDealsImg from "../assets/Deal.png";

const products = [
  {
    id: 1,
    labelColor: "bg-green-500",
    title: "All Natural Italian-Style Chicken Meatballs",
    brand: "Hodo Foods",
    price: 238.85,
    oldPrice: 245.8,
    sold: 90,
    total: 120,
    img: productImg,
  },
  {
    id: 2,
    labelColor: "bg-blue-400",
    title: "Angie's Boomchickapop Sweet and wonmies",
    brand: "Hodo Foods",
    price: 238.85,
    oldPrice: 245.8,
    sold: 90,
    total: 120,
    img: productImg2,
  },
  {
    id: 3, 
    labelColor: "bg-orange-400",
    title: "Foster Farms Takeout Crispy Classic",
    brand: "Hodo Foods",
    price: 238.85,
    oldPrice: 245.8,
    sold: 90,
    total: 120,
    img: productImg3,
  },
  {
    id: 4,
    labelColor: "bg-pink-500",
    title: "Blue Diamond Almonds Lightly Salted",
    brand: "Hodo Foods",
    price: 238.85,
    oldPrice: 245.8,
    sold: 90,
    total: 120,
    img: productImg4,
  },
];

export default function DailyBestSells() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6 sm:mb-8">Daily Best Sells</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
    
        <div className="lg:col-span-1 order-1 lg:order-1">
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 lg:h-full lg:min-h-[400px]">
            <img
              src={bestDealsImg}
              alt="Bring nature into your home"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 rounded-2xl"></div>
            <div className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-center">
              <div className="text-white text-xl sm:text-2xl lg:text-3xl font-semibold mb-4 sm:mb-6 leading-tight drop-shadow-lg">
                Bring nature<br />into your<br />home
              </div>
              <button className="bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base shadow-lg transition-colors self-start">
                Shop Now →
              </button>
            </div>
          </div>
        </div>

       
        <div className="lg:col-span-4 order-2 lg:order-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-sm border hover:shadow-md transition-shadow flex flex-col h-full"
              >
                {/* Label */}
                {product.label && (
                  <span
                    className={`absolute top-3 left-3 z-10 px-3 py-1 text-xs font-semibold text-white rounded-full ${product.labelColor}`}
                  >
                    {product.label}
                  </span>
                )}

                {/* Product Image */}
                <div className="flex justify-center items-center pt-6 sm:pt-8 pb-4 px-4 relative">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="h-20 sm:h-24 lg:h-28 object-contain"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col px-4 sm:px-5">
                  <div className="text-xs text-gray-400 mb-1">{product.brand}</div>
                  <h3 className="font-semibold text-sm sm:text-base text-gray-800 mb-2 line-clamp-2 leading-tight">
                    {product.title}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center text-xs mb-2">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-gray-400">(4.5)</span>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-3">
                    <span className="text-green-500 font-bold text-lg">${product.price.toFixed(2)}</span>
                    <span className="text-gray-400 line-through ml-2 text-sm">${product.oldPrice.toFixed(2)}</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div
                      className="bg-red-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(product.sold / product.total) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-500 mb-4">
                    Sold: {product.sold}/{product.total}
                  </div>
                </div>

                {/* Add to Cart Button */}
                <div className="px-4 sm:px-5 pb-4 sm:pb-5">
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white text-sm sm:text-base py-2 sm:py-3 rounded-lg font-semibold transition-colors">
                    Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}