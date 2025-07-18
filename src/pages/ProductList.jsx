import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import img1 from '../assets/product-1-1.png';
import img2 from '../assets/product-2-1.png';
import img3 from '../assets/product-3-1.png';
import img4 from '../assets/product-4-1.png';
import img5 from '../assets/product-5-1.png';
import img6 from '../assets/product-6-1.png';
import img7 from '../assets/product-7-1.png';
import img8 from '../assets/product-8-1.png';
import img9 from '../assets/9.png';
import img10 from '../assets/10.png';
import img11 from '../assets/11.png';
import img12 from '../assets/12.png';
import { FaBars } from 'react-icons';

const products = [
  { id: 1, name: 'Organic Lemon', category: 'Fruits', price: 56.0, oldPrice: 60.0, image: img1 },
  { id: 2, name: 'Apple Juice', category: 'Juice & Drinks', price: 75.0, oldPrice: 80.0, image: img2 },
  { id: 3, name: 'Watermelon 5kg Pack', category: 'Fruits', price: 48.0, oldPrice: 55.0, image: img3 },
  { id: 4, name: 'Pomegranate 5 kg pack', category: 'Fruits', price: 90.0, oldPrice: 100.0, image: img4 },
  { id: 5, name: 'Organic Peach Fruits', category: 'Fruits', price: 50.0, oldPrice: 60.0, image: img5 },
  { id: 6, name: 'Hazel Nut Snack', category: 'Snacks', price: 120.25, oldPrice: 123.25, image: img6 },
  { id: 7, name: 'Sweet Snacks Crunchy Nut', category: 'Snacks', price: 100.0, oldPrice: 110.0, image: img7 },
  { id: 8, name: 'Lemon Juice', category: 'Juice & Drinks', price: 80.0, oldPrice: 90.0, image: img8 },
  { id: 9, name: 'Fresh Banana', category: 'Fruits', price: 30.0, oldPrice: 35.0, image: img9 },
  { id: 10, name: 'Carrot Juice', category: 'Juice & Drinks', price: 60.0, oldPrice: 70.0, image: img10 },
  { id: 11, name: 'Almond Snack', category: 'Snacks', price: 110.0, oldPrice: 120.0, image: img11 },
  { id: 12, name: 'Fresh Apple', category: 'Fruits', price: 45.0, oldPrice: 50.0, image: img12 },
];

function ProductList() {
  return (
    <>
      <Header />

      {/* Header with Hamburger */}
      
      <div className="bg-red-500 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Shop</h1>
        <button
          className="block md:hidden"
          onClick={() => {
            const sidebar = document.getElementById('mobileSidebar');
            if (sidebar) sidebar.classList.toggle('hidden');
          }}
        >
          <FaBars className="text-white text-xl" />

        </button>
      </div>

      <div className="text-sm text-gray-600 max-w-7xl mx-auto px-4 py-2">
        Home &gt; Shop
      </div>

      {/* Mobile Sidebar */}
      <div
        id="mobileSidebar"
        className="fixed inset-0 z-50 bg-black bg-opacity-30 md:hidden hidden"
      >
        <div className="w-64 h-full bg-white p-4 overflow-y-auto">
          <button
            onClick={() => {
              const sidebar = document.getElementById('mobileSidebar');
              if (sidebar) sidebar.classList.add('hidden');
            }}
            className="mb-4 text-black font-bold"
          >
            ❌
          </button>
          <SidebarContent />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-6 grid md:grid-cols-5 gap-8">
        {/* Sidebar for Desktop */}
        <aside className="hidden md:block col-span-1 space-y-6 text-sm">
          <SidebarContent />
        </aside>

        {/* Product Grid */}
        <main className="col-span-4">
          <div className="flex justify-between items-center text-sm mb-6">
            <div><b>{products.length}</b> items found for you!</div>
            <div>
              Sort by:
              <select className="ml-2 border text-sm px-2 py-1 rounded">
                <option>Featured</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
              </select>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id}>
                <div className="border p-4 rounded hover:shadow cursor-pointer transition">
                  <div className="w-full h-60 mb-3 rounded flex items-center justify-center">
                    <img src={product.image} alt={product.name} className="h-60 object-contain" />
                  </div>
                  <div className="text-sm text-gray-400">{product.category}</div>
                  <div className="font-semibold text-sm mb-1">{product.name}</div>
                  <div className="text-red-500 font-bold text-sm">
                    ${product.price}{' '}
                    <span className="text-gray-400 line-through ml-2 text-xs">
                      ${product.oldPrice}
                    </span>
                  </div>
                  <div className="text-yellow-500 text-xs">★★★★★</div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-10 space-x-2 text-sm">
            <button className="px-3 py-1 rounded border bg-gray-100">1</button>
            <button className="px-3 py-1 rounded border">2</button>
            <button className="px-3 py-1 rounded border">3</button>
            <button className="px-3 py-1 rounded border">Next</button>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}

// Sidebar extracted for reuse
function SidebarContent() {
  return (
    <>
      <div>
        <h3 className="font-semibold mb-2">Product Category</h3>
        <ul className="space-y-1">
          <li><input type="checkbox" /> Juice & Drinks</li>
          <li><input type="checkbox" /> Dairy & Milk</li>
          <li><input type="checkbox" /> Snack & Spice</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Filter by Price</h3>
        <input type="range" min="20" max="250" className="w-full" />
        <div className="text-xs mt-1">Price: $20 - $250</div>
        <button className="mt-2 text-white bg-red-500 px-4 py-1 rounded text-sm">Filter</button>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Product Color</h3>
        <ul className="space-y-3">
          {[
            { color: 'Blue', class: 'bg-blue-400' },
            { color: 'Yellow', class: 'bg-yellow-300' },
            { color: 'Red', class: 'bg-red-400' },
          ].map(({ color, class: colorClass }) => (
            <li className="flex items-center justify-between" key={color}>
              <label className="flex items-center gap-2 text-gray-600">
                <input type="checkbox" className={`accent-${color.toLowerCase()}-400`} />
                {color}
              </label>
              <span className={`w-6 h-6 ${colorClass} rounded-md inline-block`}></span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Weight</h3>
        <ul className="space-y-1">
          <li><input type="checkbox" /> 2kg Pack</li>
          <li><input type="checkbox" /> 20kg Pack</li>
          <li><input type="checkbox" /> 30kg Pack</li>
        </ul>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Product Tags</h3>
        <div className="flex flex-wrap gap-1 text-xs">
          <span className="border px-2 py-1 rounded">Vegetables</span>
          <span className="border px-2 py-1 rounded">Juice</span>
          <span className="border px-2 py-1 rounded">Food</span>
          <span className="border px-2 py-1 rounded">Dry Fruits</span>
        </div>
      </div>
    </>
  );
}

export default ProductList;
