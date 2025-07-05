import React from 'react';
import Navbar from '../Components/Navbar';

const Contact = () => {
  return (
    <>
      <Navbar title="" />

      {/* Contact Section */}
      <section className="bg-white py-16 px-6 w-[92%] mx-auto mt-10 rounded-xl shadow">
        <h1 className="text-4xl font-bold text-center text-blue-900 mb-6">Get In Touch</h1>
        <p className="text-center text-gray-700 mb-12 max-w-xl mx-auto">
          We'd love to hear from you! Fill out the form below or contact us using the information provided.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="bg-blue-50 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-2"><strong>Email:</strong> visitwithus12@gmail.com</p>
            <p className="text-gray-700 mb-2"><strong>Phone:</strong> +977-9841234567</p>
            <p className="text-gray-700"><strong>Address:</strong> Ghorahi , Dang, Nepal</p>
          </div>

          {/* Contact Form */}
          <form className="bg-blue-50 p-6 rounded-xl shadow-md space-y-4">
            <div>
              <label className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                placeholder="vist@gmail.com"
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-amber-950 text-white text-center p-6 mt-16">
        <p>&copy; {new Date().getFullYear()} Tourism Management System. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Contact;