import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import snackImg1 from "../assets/9.png";
import snackImg2 from "../assets/10.png";
import snackImg3 from "../assets/11.png";
import snackImg4 from "../assets/12.png";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const cartItems = [
    { id: 1, name: "Organic Lemon", price: 56.0, qty: 1 },
    { id: 2, name: "Apple Juice", price: 75.0, qty: 1 },
    { id: 3, name: "Watermelon 5kg Pack", price: 48.0, qty: 1 },
    { id: 4, name: "Pomegranate 5 kg pack", price: 90.0, qty: 1 },
    { id: 5, name: "Organic Peach Fruits", price: 50.0, qty: 1 },
  ];

  
  const popularImages = [snackImg1, snackImg2, snackImg3, snackImg4];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Top Red Banner */}
      <div className="bg-red-500 text-white py-2 px-4 font-medium">
        Cart
      </div>

      <main className="flex-grow max-w-7xl mx-auto px-4 py-10">
        {/* Table */}
        <table className="w-full text-sm text-left border">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 border">Product</th>
              <th className="p-3 border">Price</th>
              <th className="p-3 border">Quantity</th>
              <th className="p-3 border">Total</th>
              <th className="p-3 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="border-b">
                <td className="p-3 border">{item.name}</td>
                <td className="p-3 border">${item.price.toFixed(2)}</td>
                <td className="p-3 border">
                  <input
                    type="number"
                    value={item.qty}
                    min="1"
                    className="w-12 border rounded text-center"
                    readOnly
                  />
                </td>
                <td className="p-3 border">
                  ${(item.price * item.qty).toFixed(2)}
                </td>
                <td className="p-4 border text-center text-gray-500 ">
                  <FaTrash />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Bottom Actions */}
        <div className="flex justify-between items-center mt-4">
          <a href="#" className="text-sm text-red-500 underline">
            Continue Shopping
          </a>
          <div className="flex justify-end mt-6">
            <Link
              to="/checkout"
              className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition"
            >
              Check Out
            </Link>
          </div>
        </div>

        {/* Popular Products Section */}
        <section className="mt-12">
          <h2 className="text-xl font-semibold text-center mb-2">
            Popular Products
          </h2>
          <p className="text-center text-sm text-gray-500 mb-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {popularImages.map((img, idx) => (
              <div key={idx} className="border rounded-lg p-4 text-center">
                <div className="h-64 bg-gray-100 rounded mb-3 flex items-center justify-center overflow-hidden">
                  <img
                    src={img}
                    alt={`Snack ${idx + 1}`}
                    className="h-full object-contain"
                  />
                </div>
                <div className="text-sm mb-1">Snacks</div>
                <div className="text-xs text-gray-400 mb-1">(4.5)</div>
                <div className="text-sm font-medium mb-1">
                  Best snacks with hazel nut mix pack 200gm
                </div>
                <div className="text-red-500 font-bold">
                  $120.25{" "}
                  <span className="text-gray-400 line-through">$123.25</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );  
  }
