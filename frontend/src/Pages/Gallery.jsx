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
        <div></div>
        
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
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Tours', href: '#' },
    { name: 'Contact', href: '#' },
    { name: 'Services', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Blog', href: '#' },
    
    { name: 'FAQ', href: '#' },
    { name: 'Terms And Conditions', href: '#' },

   
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

const Gallery = () => {
  const images = [
    { src: 'https://placehold.co/600x400/A78BFA/ffffff?text=Nepal+1', alt: 'Nepal Landscape 1' },
    { src: 'https://placehold.co/600x400/FACC15/ffffff?text=Nepal+2', alt: 'Nepal Landscape 2' },
    { src: 'https://placehold.co/600x400/EC4899/ffffff?text=Nepal+3', alt: 'Nepal Landscape 3' },
    { src: 'https://placehold.co/600x400/60A5FA/ffffff?text=Nepal+4', alt: 'Nepal Landscape 4' },
    { src: 'https://placehold.co/600x400/34D399/ffffff?text=Nepal+5', alt: 'Nepal Landscape 5' },
    { src: 'https://placehold.co/600x400/F87171/ffffff?text=Nepal+6', alt: 'Nepal Landscape 6' },
  ];

  return (
    <>
      <Navbar />
      <Header />
      <section className="py-16 px-6 text-center bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-800 mb-6">Our Photo Gallery</h1>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          A collection of stunning photographs from our various tours and expeditions across Nepal.
          Get a glimpse of the beauty and adventure that awaits you.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/cccccc/333333?text=Image+Not+Found'; }}
              />
              <div className="p-4">
                <p className="text-lg font-semibold text-gray-800">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Gallery;
