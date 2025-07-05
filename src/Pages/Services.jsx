import React from 'react';

// Placeholder for Footer2 component
const Footer2 = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

// Placeholder for Header component
const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 px-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Travel Company</h1>
        {/* You can add a logo or more navigation items here */}
        <nav>
          {/* Example: <Link to="/about" className="ml-4 hover:underline">About</Link> */}
        </nav>
      </div>
    </header>
  );
};

// Placeholder for Footer1 component
const Footer1 = () => {
  return (
    <footer className="bg-gray-700 text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-300 text-sm">
            We are a leading travel company dedicated to providing unforgettable experiences in Nepal.
            Our mission is to make travel easy and enjoyable for everyone.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-300 hover:text-white">Home</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Tours</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
            <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p className="text-gray-300 text-sm">
            123 Travel Lane, Kathmandu, Nepal<br />
            Email: info@yourtravel.com<br />
            Phone: +977 123 456789
          </p>
        </div>
      </div>
    </footer>
  );
};

// Placeholder for Navbar component
const Navbar = () => {
  const navLinks = [
    { name: 'Services', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Testimonials', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
  ];

  return (
    <nav className="w-full bg-blue-50 py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6 md:space-x-8 lg:space-x-10 flex-wrap">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-blue-700 hover:text-blue-900 text-lg font-medium py-2 px-3 rounded-md transition duration-300 ease-in-out hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Services = () => {
  return (
    <>
      <Navbar />
      <Header />
      <section className="py-16 px-6 text-center bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Our Services</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          We offer a wide range of travel services to make your journey to Nepal seamless and memorable.
          From custom tour packages to adventure activities, we've got you covered.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Custom Tour Packages</h3>
            <p className="text-gray-600">Tailored itineraries to suit your preferences and budget.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Adventure Sports</h3>
            <p className="text-gray-600">Bungee jumping, paragliding, rafting, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Cultural Tours</h3>
            <p className="text-gray-600">Explore ancient temples, monasteries, and local traditions.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Trekking Expeditions</h3>
            <p className="text-gray-600">Guided treks to Everest Base Camp, Annapurna Circuit, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Wildlife Safaris</h3>
            <p className="text-gray-600">Jungle safaris in national parks like Chitwan and Bardiya.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl font-semibold text-gray-900 mb-3">Vehicle Rentals</h3>
            <p className="text-gray-600">Comfortable and reliable transportation for your travels.</p>
          </div>
        </div>
      </section>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Services;
