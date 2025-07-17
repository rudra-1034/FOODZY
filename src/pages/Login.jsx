import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      {/* Top Banner */}
      <div className="bg-red-500 text-white py-2 px-4 font-medium">
        Login
      </div>

      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center py-12 px-4">
        <div className="w-full max-w-md bg-white p-8 shadow rounded">
          <div className="flex justify-center mb-6">
            {/* Logo placeholder */}
            <div className="text-xl font-bold"> FoodTrove</div>
          </div>
          <form className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email Address*</label>
              <input type="email" placeholder="Enter Your Email" className="w-full border rounded px-3 py-2 mt-1 text-sm" />
            </div>
            <div>
              <label className="text-sm font-medium">Password*</label>
              <input type="password" placeholder="Enter Your Password" className="w-full border rounded px-3 py-2 mt-1 text-sm" />
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-1" />
                Remember Me
              </label>
              <a href="#" className="text-red-500 hover:underline">Forgot Password?</a>
            </div>
            <button type="submit" className="w-full bg-red-500 text-white py-2 rounded">Login</button>
            <p className="text-center text-sm mt-2">
  Don’t have an account?{' '}
  <Link to="/register" className="text-red-500 hover:underline">Signup</Link>
</p>

          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
