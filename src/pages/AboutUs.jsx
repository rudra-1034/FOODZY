import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUs() {
  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Breadcrumb Header */}
      <div className="bg-red-500 text-white px-6 py-4">
        <h1 className="text-xl font-bold">About Us</h1>
      </div>
     
      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-2 gap-10">
        {/* Text Content */}
        <div>    
          <h2 className="text-2xl font-bold mb-4">About The Carrot</h2>
          <p className="text-sm mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, recusandae necessitatibus quos iusto molestias!
          </p>
          <p className="text-sm mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut vitae rerum cum accusamus magni.
          </p>
          <p className="text-sm mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, maxime amet architecto est exercitationem optio!
          </p>   

          {/* Stats */}
          <div className="flex space-x-6">
            <div>
              <h3 className="text-red-500 text-2xl font-bold">0.1k</h3>
              <p className="text-xs text-gray-500">Vendors</p>
            </div>
            <div>
              <h3 className="text-red-500 text-2xl font-bold">23k</h3>
              <p className="text-xs text-gray-500">Customers</p>
            </div>
            <div>
              <h3 className="text-red-500 text-2xl font-bold">2k</h3>
              <p className="text-xs text-gray-500">Products</p>
            </div>    
          </div>
        </div>

        {/* Image */}
        <div className="w-full h-64 md:h-auto bg-gray-200 rounded shadow-sm flex items-center justify-center">
          {/* Replace src later */}
          <img src="" alt="about us" className="w-full h-full object-cover rounded" />
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
        {[
          "Product Packing",
          "24X7 Support",
          "Delivery in 5 Days",
          "Payment Secure",
        ].map((item, i) => (
          <div key={i} className="border p-4 rounded shadow-sm bg-white">
            <h4 className="font-semibold mb-2">{item}</h4>
            <p className="text-xs text-gray-500">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          </div>
        ))}
      </section>
      <Footer />
    </div>
  );
}   
