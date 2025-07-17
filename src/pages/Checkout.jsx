import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import productImage1 from '../assets/1.png';
import productImage2 from '../assets/2.png';


export default function Checkout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <div className="bg-red-500 text-white px-4 py-2 font-semibold">Checkout</div>

      <main className="flex-grow max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="md:col-span-1 space-y-6">
          {/* Summary */}
          <div className="border p-4 rounded">
            <h3 className="text-lg font-semibold mb-4">Summary</h3>
            <div className="text-sm mb-2 flex justify-between">
              <span>Sub Total</span>
              <span>$80.00</span>
            </div>
            <div className="text-sm mb-2 flex justify-between">
              <span>Delivery Charges</span>
              <span>$0.00</span>
            </div>
            <hr className="my-2" />
            <div className="text-md font-bold flex justify-between">
              <span>Total Amount</span>
              <span>$80.00</span>
            </div>
          </div>


  {/* Product Preview */}
  <div className="mt-4 space-y-2">
    {[1, 2].map((item) => (
      <div key={item} className="flex gap-4 items-center">
      <img
        src={item === 1 ? productImage1 : productImage2}
        alt="Product Thumbnail"
        className="w-16 h-16 object-cover rounded bg-gray-100"
      />
      <div className="text-sm">
        <p className="font-semibold">
          {item === 1
            ? "Dates Value Pack Pouch"
            : "Smoked Honey Spiced Nuts"}
        </p>
        <p className="text-red-500 font-bold">
          $120.25 <span className="line-through text-gray-400">$125.25</span>
        </p>
      </div>
    </div>
  ))}
</div>



          {/* Delivery Method */}
          <div className="border p-4 rounded">
            <h3 className="text-md font-semibold mb-2">Delivery Method</h3>
            <label className="block text-sm">
              <input type="radio" name="delivery" className="mr-2" defaultChecked />
              Free Shipping - $0.00
            </label>
            <label className="block text-sm">
              <input type="radio" name="delivery" className="mr-2" />
              Flat Rate - $5.00
            </label>
            <textarea
              className="w-full border mt-2 p-2 text-sm rounded"
              placeholder="Add Comments About Your Order"
              rows={2}
            />
          </div>

          {/* Payment Method */}
          <div className="border p-4 rounded">
            <h3 className="text-md font-semibold mb-2">Payment Method</h3>
            <label className="block text-sm">
              <input type="radio" name="payment" className="mr-2" defaultChecked />
              Cash On Delivery
            </label>
            <label className="block text-sm">
              <input type="radio" name="payment" className="mr-2" />
              UPI
            </label>
            <label className="block text-sm">
              <input type="radio" name="payment" className="mr-2" />
              Bank Transfer
            </label>
            <div className="flex gap-2 mt-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-10 h-6 bg-gray-100 rounded" />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="md:col-span-2 space-y-6">
          {/* New Customer */}
          <div className="border p-4 rounded">
            <h3 className="text-md font-semibold mb-2">New Customer</h3>
            <div className="mb-2 text-sm">Checkout Options</div>
            <label className="block text-sm mb-1">
              <input type="radio" name="customer" className="mr-2" defaultChecked />
              Register Account
            </label>
            <label className="block text-sm mb-3">
              <input type="radio" name="customer" className="mr-2" />
              Guest Account
            </label>
            <button className="bg-red-500 text-white px-4 py-2 rounded text-sm">
              Continue
            </button>
          </div>

          {/* Returning Customer */}
          <div className="border p-4 rounded">
            <h3 className="text-md font-semibold mb-2">Returning Customer</h3>
            <div className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full border px-3 py-2 rounded text-sm"
              />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full border px-3 py-2 rounded text-sm"
              />
              <div className="flex justify-between text-sm">
                <button className="bg-red-500 text-white px-4 py-2 rounded">Login</button>
                <a href="#" className="text-red-500 underline">Forgot Password?</a>
              </div>
            </div>
          </div>

          {/* Billing Details */}
          <div className="border p-4 rounded">
            <h3 className="text-md font-semibold mb-2">Billing Details</h3>

            <div className="flex gap-4 mb-3 text-sm">
              <label>
                <input type="radio" name="billing" className="mr-1" defaultChecked />
                I want to use an existing address
              </label>
              <label>
                <input type="radio" name="billing" className="mr-1" />
                I want to use new address
              </label>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <input type="text" placeholder="First Name*" className="border p-2 rounded" />
              <input type="text" placeholder="Last Name*" className="border p-2 rounded" />
              <input type="text" placeholder="Address" className="border p-2 rounded col-span-2" />
              <input type="text" placeholder="City" className="border p-2 rounded" />
              <input type="text" placeholder="Post Code" className="border p-2 rounded" />
              <input type="text" placeholder="Country" className="border p-2 rounded" />
              <input type="text" placeholder="Region/State" className="border p-2 rounded" />
            </div>

            <button className="mt-4 bg-red-500 text-white px-6 py-2 rounded">Place Order</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}