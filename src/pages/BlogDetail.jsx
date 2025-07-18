import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import heroImg from "../assets/blog-1.png";
import bolg1 from "../assets/blog-2.png";
import bolg2 from "../assets/blog-3.png";

export default function BlogDetail() {
  return (
    <div className="text-gray-800">
      <Header />
      {/* Top Bar */}
      <div className="bg-red-500 text-white px-6 py-4">
        <h1 className="text-xl font-bold">Blog Details</h1>
      </div>
     

      {/* Main Content */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        {/* Hero Image */}
        <div className="w-full h-[621px] bg-gray-200 mb-6 rounded overflow-hidden">
          <img src={heroImg} alt="blog" className="w-full h-[621px] object-cover rounded" />
        </div>

      
        <p className="text-sm text-gray-500 mb-2">
          <span className="text-red-600 font-semibold">By Admin</span> / 07 Comments / Date – 09.09.2024
        </p>

        {/* Blog Title */}
        <h2 className="text-2xl font-bold mb-4">Health Benefits of a Raw Food</h2>

        {/* Paragraphs */}
        <p className="text-sm mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde mollitia nihil sunt reprehenderit natus...
        </p>
        <p className="text-sm mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed dolorum dolor odio...
        </p>

        {/* Row of Related Posts */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gray-100 p-4 rounded text-center">
            <div className="w-full h-60 bg-gray-300 mb-3">
              <img src={bolg1} alt="blog" className="w-full h-full object-cover rounded" />
            </div>
            <p className="text-xs text-red-600 font-semibold mb-2">Lorem ipsum dolor sit amet.</p>
          </div>
          <div className="bg-gray-100 p-4 rounded text-center">
            <div className="w-full h-60 bg-gray-300 mb-3">
              <img src={bolg2} alt="blog" className="w-full h-full object-cover rounded" />
            </div>
            <p className="text-xs text-red-600 font-semibold mb-2">Lorem ipsum dolor sit amet.</p>
          </div>
        </div>

        {/* Quote or Author */}
        <p className="text-sm mb-4 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat earum architecto...<br />
          <span className="font-semibold text-red-600">John martin</span>
        </p>

        {/* More Content */}
        <p className="text-sm mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores officia magni explicabo...
        </p>

        {/* Tags */}
        <div className="flex gap-2 flex-wrap mb-8">
          {["Cabbage", "Appetizer", "Meat Food"].map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 border rounded text-gray-600">
              {tag}
            </span>
          ))}
        </div>

        {/* Pagination (static for now) */}
        <div className="flex gap-2 items-center">
          <button className="px-2 py-1 border rounded text-xs">Previous</button>
          <button className="px-3 py-1 border bg-red-500 text-white rounded text-xs">1</button>
          <button className="px-3 py-1 border rounded text-xs">2</button>
          <button className="px-3 py-1 border rounded text-xs">3</button>
          <button className="px-2 py-1 border rounded text-xs">Next</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

