import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {FaBars} from 'react-icons';
import productImg from '../assets/product-details.png';
import thumb1 from '../assets/9.png';
import thumb2 from '../assets/10.png';
import thumb3 from '../assets/thumb3.png';
import thumb4 from '../assets/thumb4.png';
import thumb5 from '../assets/thumb5.png';
import related1 from '../assets/9.png';
import related2 from '../assets/10.png';
import related3 from '../assets/11.png';
import related4 from '../assets/12.png';

const thumbs = [thumb1, thumb2, thumb3, thumb4, thumb5];

const relatedProducts = [
  { img: related1, name: 'Best snakes with hazel nut mix pack 200gm', price: '$100.00' },
  { img: related2, name: 'Sweet snakes crunchy nut mix 250gm pack', price: '$100.00' },
  { img: related3, name: 'Best snakes with hazel nut mix pack 200gm', price: '$100.00' },
  { img: related4, name: 'Sweet snakes crunchy nut mix 250gm pack', price: '$100.00' },
];

export default function ProductDetail() {
  const toggleSidebar = () => {
    const sidebar = document.getElementById('mobileSidebar');
    if (sidebar) sidebar.classList.toggle('hidden');
  };

  return (
    <div className="bg-white text-gray-800">
      <Header />

      {/* Breadcrumb with Hamburger */}
      <div className="max-w-7xl mx-auto px-4 py-4 text-sm text-gray-500 flex justify-between items-center">
        <span>Home &gt; Product</span>
        <button className="md:hidden" onClick={toggleSidebar}>
          <FaBars className="text-xl text-black" />
        </button>
      </div>

      {/* Mobile Sidebar */}
      <div id="mobileSidebar" className="fixed inset-0 z-50 bg-black bg-opacity-40 md:hidden hidden">
        <div className="w-64 h-full bg-white p-4 overflow-y-auto">
          <button
            onClick={() => {
              const sidebar = document.getElementById('mobileSidebar');
              if (sidebar) sidebar.classList.add('hidden');
            }}
            className="text-black font-bold mb-4"
          >
            ❌
            
          </button>

          <SidebarContent />
        </div>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-4 gap-8">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block md:col-span-1 space-y-6 text-sm">
          <SidebarContent />
        </aside>

        {/* Product Detail Section */}
        <main className="md:col-span-3">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="bg-white rounded-lg p-6 flex-shrink-0 w-full max-w-sm mx-auto">
              <img
                src={productImg}
                alt="Hazelnut & Chocolate"
                className="mx-auto"
                style={{ maxHeight: 340, objectFit: 'contain', display: 'block' }}
              />
              <div className="flex gap-3 mt-6 justify-center flex-wrap">
                {thumbs.map((thumb, n) => (
                  <div
                    key={n}
                    className="w-20 h-20 bg-gray-100 rounded flex items-center justify-center border cursor-pointer"
                  >
                    <img src={thumb} alt={`Thumb ${n + 1}`} className="w-16 h-16 object-contain" />
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-xl font-semibold mb-2">Seeds Of Change Organic Quinoa, Brown</h1>
              <p className="text-sm text-gray-600 mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit...
              </p>
              <div className="text-sm text-yellow-500 mb-4">★★★★★ (75 Reviews)</div>

              <ul className="text-sm space-y-1 mb-4">
                <li>
                  <b>Brand:</b> ESTA BETTERU CO
                </li>
                <li>
                  <b>Flavor:</b> Super Saver Pack
                </li>
                <li>
                  <b>Diet Type:</b> Vegetarian
                </li>
                <li>
                  <b>Weight:</b> 200 Grams
                </li>
                <li>
                  <b>Gluten Free:</b> Yes
                </li>
              </ul>

              <div className="text-red-500 font-bold text-xl mb-2">
                $120.25{' '}
                <span className="text-gray-400 line-through text-base ml-2">$130.25</span>
              </div>

              <div className="mb-2">
                <label className="mr-2 text-sm">Size/Weight:</label>
                <select className="border rounded px-2 py-1 text-sm">
                  <option>500g</option>
                  <option>1kg</option>
                  <option>10kg</option>
                </select>
              </div>

              <div className="flex items-center gap-4 mt-4">
                <input
                  type="number"
                  defaultValue="1"
                  className="w-16 border px-2 py-1 rounded text-sm"
                />
                <button className="bg-red-500 text-white px-4 py-2 rounded text-sm">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-10 border rounded p-4 text-sm">
            <div className="flex gap-4 border-b pb-2 mb-4 font-medium">
              <button>Description</button>
              <button className="text-gray-400">Information</button>
              <button className="text-gray-400">Review</button>
            </div>
            <p className="text-gray-600 mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit...
            </p>
            <h4 className="font-semibold mb-1">Packaging & Delivery</h4>
            <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
          </div>
        </main>
      </div>

      {/* Related Products */}
      <div className="max-w-7xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-4">Popular Products</h2>
        <p className="text-sm text-gray-500 mb-6">Lorem ipsum dolor sit amet consectetur...</p>
        <div className="grid md:grid-cols-4 gap-4">
          {relatedProducts.map((prod, i) => (
            <div key={i} className="border p-4 rounded">
              <div className="w-full h-32 bg-gray-100 mb-4 rounded flex items-center justify-center">
                <img src={prod.img} alt={prod.name} className="max-h-28 object-contain" />
              </div>
              <div className="text-sm font-semibold mb-1">{prod.name}</div>
              <div className="text-green-600 text-sm font-bold">{prod.price}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

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
        <input type="range" className="w-full" />
        <div className="text-xs mt-1">Price: $120 - $250</div>
        <button className="mt-2 text-white bg-red-500 px-4 py-1 rounded text-sm">Filter</button>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Product Color</h3>
        <div className="flex gap-2">
          <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
          <span className="w-4 h-4 bg-yellow-500 rounded-full"></span>
          <span className="w-4 h-4 bg-red-500 rounded-full"></span>
          <span className="w-4 h-4 bg-green-500 rounded-full"></span>
        </div>
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
