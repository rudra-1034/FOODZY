import React from "react";
import { Link } from "react-router-dom";
import banner1 from "../assets/banner-1.png";
import banner2 from "../assets/banner-2.png";
import banner3 from "../assets/banner-3.png";

export default function FeatureCards() {
  const cards = [
    { 
      title: 'Everyday Fresh & Clean with Our Products',
      image: banner1
    },
    { 
      title: 'Make your Breakfast Healthy and Easy',
      image: banner2
    },
    { 
      title: 'The best Organic Products Online',
      image: banner3
    },
  ];
  return (
    <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <div
          key={i}
          className="relative bg-gray-50 rounded-lg border h-64 overflow-hidden flex items-center justify-start"
        >
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 w-full h-full object-cover "
          />
          <div className="relative z-10 p-8 flex flex-col items-start text-left w-2/3">
            <h3 className="font-semibold mb-4 text-left text-white text-lg drop-shadow-lg">{card.title}</h3>
            <Link to="/shop">
              <button className="bg-red-500 text-white px-4 py-2 rounded shadow">Shop Now</button>
            </Link>
          </div>
          <div className="absolute inset-0 bg-black opacity-30"></div>
        </div>
      ))}
    </section>
  );
}