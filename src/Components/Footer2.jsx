import React from 'react';
import { Link } from 'react-router-dom';

const Footer2 = () => {
  return (
    <footer className="bg-[#f8f9f2] w-[100%] m-auto mt-12 p-8 rounded-2xl text-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div className="col-span-1 md:col-span-3">
          <h2 className="text-2xl font-bold text-[#2c3e50] mb-6">Explore Our Site</h2>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link to="/contact" className="text-blue-500 hover:underline">Contact Us</Link>
            <Link to="/about" className="text-blue-500 hover:underline">About Us</Link>
            <Link to="/services" className="text-blue-500 hover:underline">Services</Link>
            <Link to="/gallery" className="text-blue-500 hover:underline">Gallery</Link>
            <Link to="/blog" className="text-blue-500 hover:underline">Blog</Link>

            <Link to="/terms" className="text-blue-500 hover:underline">Terms & Conditions</Link>
          
          </div>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Your Company Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer2;
