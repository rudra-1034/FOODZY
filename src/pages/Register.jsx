import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header /> 
      {/* Page title */}
      <div className="bg-red-500 text-white py-3 px-6 text-lg font-medium">Register</div>

      {/* Form container */}
      <div className="flex justify-center items-start py-10">
        <div className="bg-white border rounded-md p-8 w-full max-w-2xl shadow-sm">
          <div className="text-center mb-6">
            <h2 className="mt-2 text-xl font-bold text-gray-700">FoodTrove</h2>
          </div>
          {/* Form */}
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">First Name*</label>
              <input type="text" placeholder="Enter Your First Name" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Last Name*</label>
              <input type="text" placeholder="Enter Your Last Name" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Email*</label>
              <input type="email" placeholder="Enter Your email" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Phone Number*</label>
              <input type="tel" placeholder="Enter Your phone number" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
            </div>
            <div className="md:col-span-2">
              <label className="text-sm text-gray-600">Address*</label>
              <input type="text" placeholder="Address" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm text-gray-600">City*</label>
              <input type="text" placeholder="City" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Post Code</label>
              <input type="text" placeholder="Post Code" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Country*</label>
              <input type="text" placeholder="Country" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
            </div>
            <div>
              <label className="text-sm text-gray-600">Region/State*</label>
              <input type="text" placeholder="Region/State" className="mt-1 w-full border rounded px-3 py-2 text-sm" />
            </div>

            <div className="md:col-span-2 mt-4 flex justify-between items-center">
              <button type="submit" className="bg-red-500 text-white py-2 px-6 rounded text-sm hover:bg-red-600">
                Signup
              </button>
              <p className="text-sm text-right">
                 Have an account?{' '}
                <Link to="/login" className="text-red-500 hover:underline"> Login </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Register;

