import React from "react";
import { Link } from "react-router-dom";
import productImg1 from "../assets/product-1-1.png";
import productImg2 from "../assets/product-2-1.png";
import productImg3 from "../assets/product-3-1.png";
import productImg4 from "../assets/product-4-1.png";
import productImg5 from "../assets/product-5-1.png";
import productImg6 from "../assets/product-6-1.png";
import productImg7 from "../assets/product-7-1.png";
import productImg8 from "../assets/product-8-1.png";
import productImg9 from "../assets/product-9-1.png";
import productImg10 from "../assets/product-10-1.png";


const products = [
  {
    id: 1,
    label: "Hot",
    labelColor: "bg-red-500",
    category: "Snack",
    title: "Fresh organic villa farm lomon 500gm pack",
    brand: "NestFood",
    rating: 4.0,
    price: 28.85,
    oldPrice: 32.8,
    img: productImg1,
  },
  {
    id: 2,
    label: "Sale",
    labelColor: "bg-blue-400",
    category: "Hodo Foods",
    title: "Best snakes with hazel nut pack 200gm",
    brand: "Stouffer",
    rating: 3.5,
    price: 52.85,
    oldPrice: 55.8,
    img: productImg2,
  },
  {
    id: 3,
    label: "New",
    labelColor: "bg-green-500",
    category: "Snack",
    title: "Organic fresh venila farm watermelon 5kg",
    brand: "StarKist",
    rating: 4.0,
    price: 48.85,
    oldPrice: 52.8,
    img: productImg3,
  },
  {
    id: 4,
    label: "",
    labelColor: "",
    category: "Vegetables",
    title: "Fresh organic apple 1kg simla marming",
    brand: "NestFood",
    rating: 4.0,
    price: 17.85,
    oldPrice: 19.8,
    img: productImg4,
  },
  {
    id: 5,
    label: "-14%",
    labelColor: "bg-orange-400",
    category: "Pet Foods",
    title: "Blue Diamond Almonds Lightly Salted Vegetables",
    brand: "NestFood",
    rating: 4.0,
    price: 23.85,
    oldPrice: 25.8,
    img: productImg5,
  },
  {
    id: 6,
    label: "",
    labelColor: "",
    category: "Hodo Foods",
    title: "Chobani Complete Vanilla Greek Yogurt",
    brand: "NestFood",
    rating: 4.0,
    price: 54.85,
    oldPrice: 55.8,
    img: productImg6,
  },
  {
    id: 7,
    label: "",
    labelColor: "",
    category: "Meats",
    title: "Canada Dry Ginger Ale - 2 L Bottle - 200ml - 400g",
    brand: "NestFood",
    rating: 4.0,
    price: 32.85,
    oldPrice: 33.0,
    img: productImg7,
  },
  {
    id: 8,
    label: "Sale",
    labelColor: "bg-blue-400",
    category: "Snack",
    title: "Encore Seafoods Stuffed Alaskan Salmon",
    brand: "NestFood",
    rating: 4.0,
    price: 35.85,
    oldPrice: 37.8,
    img: productImg8,
  },
  {
    id: 9,
    label: "Hot",
    labelColor: "bg-red-500",
    category: "Coffes",
    title: "Gorton's Beer Battered Fish Fillets with soft paper",
    brand: "Old El Paso",
    rating: 4.0,
    price: 23.85,
    oldPrice: 25.8,
    img: productImg9,
  },
  {
    id: 10,
    label: "",
    labelColor: "",
    category: "Cream",
    title: "Haagen-Dazs Caramel Cone Ice Cream Ketchup",
    brand: "Tyson",
    rating: 2.0,
    price: 22.85,
    oldPrice: 25.8,
    img: productImg10,
  },
];

export default function PopularProducts() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Popular Products</h2>
      <div className="flex flex-wrap gap-4 mb-8">
        <button className="text-green-500 font-semibold">All</button>
        <button className="text-gray-400 font-semibold">Milk & Dairies</button>
        <button className="text-gray-400 font-semibold">Coffes & Teas</button>
        <button className="text-gray-400 font-semibold">Pet Foods</button>
        <button className="text-gray-400 font-semibold">Meats</button>
        <button className="text-gray-400 font-semibold">Vegetables</button>
        <button className="text-gray-400 font-semibold">Fruits</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" >
        {products.map((product) => (
          <div
            key={product.id}
            className="relative bg-white rounded-2xl shadow-sm border flex flex-col justify-between"
            style={{ height: 350, width: 245 }}
          >
            {/* Label */}
            {product.label && (
              <span
                className={`absolute top-4 left-4 px-4 py-1 text-xs font-semibold text-white rounded-full ${product.labelColor}`}
              >
                {product.label}
              </span>
            )}
            {/* Product Image */}
            <div className="flex justify-center items-center pt-8 pb-2">
              <img
                src={product.img}
                alt={product.title}
                className="h-28 object-contain"
              />
            </div>
            {/* Product Info */}
            <div className="flex-1 flex flex-col px-6">
              <div className="text-xs text-gray-400">{product.category}</div>
              <div className="font-semibold text-base text-gray-800 mb-1">{product.title}</div>
              <div className="text-xs text-gray-400 mb-1">
                By <span className="text-green-500">{product.brand}</span>
              </div>
              <div className="flex items-center text-xs mb-2">
                <span className="text-yellow-400 mr-1">★</span>
                <span className="text-gray-500">{product.rating.toFixed(1)}</span>
              </div>
            </div>
            {/* Price & Add Button */}
            <div className="flex items-center justify-between px-6 pb-6 mt-auto">
              <div>
                <span className="text-green-500 font-bold text-lg">${product.price.toFixed(2)}</span>
                <span className="text-gray-400 line-through ml-2">${product.oldPrice.toFixed(2)}</span>
              </div>
              <button className="bg-red-500 text-white px-5 py-2 rounded-lg font-semibold flex items-center gap-2">
                <span className="text-sm">Add</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}