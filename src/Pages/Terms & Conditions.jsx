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

const TermsAndConditions = () => {
  return (
    <>
      <Navbar />
      <Header />
      <section className="py-16 px-6 bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-800 mb-10 text-center">Terms & Conditions</h1>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md text-gray-800 leading-relaxed">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">
            By accessing or using our services, you agree to be bound by these Terms and Conditions. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.
          </p>

          <h2 className="text-2xl font-semibold mb-4">2. Booking and Payments</h2>
          <p className="mb-4">
            All bookings are subject to availability. A deposit may be required to confirm your booking, with the full balance due by a specified date. Payment methods accepted will be outlined during the booking process.
          </p>

          <h2 className="text-2xl font-semibold mb-4">3. Cancellation Policy</h2>
          <p className="mb-4">
            Cancellation policies vary depending on the specific tour package and service. Details of the cancellation policy applicable to your booking will be provided at the time of booking. Refunds, if applicable, will be processed according to these policies.
          </p>

          <h2 className="text-2xl font-semibold mb-4">4. Travel Insurance</h2>
          <p className="mb-4">
            We strongly recommend that all travelers purchase comprehensive travel insurance at the time of booking. This insurance should cover cancellation, medical expenses, personal accident, personal liability, and loss of luggage and personal effects.
          </p>

          <h2 className="text-2xl font-semibold mb-4">5. Changes to Itinerary</h2>
          <p className="mb-4">
            While we strive to adhere to published itineraries, unforeseen circumstances (e.g., weather conditions, political instability) may necessitate changes. We reserve the right to make such changes as necessary for the safety and comfort of our travelers.
          </p>

          <h2 className="text-2xl font-semibold mb-4">6. Limitation of Liability</h2>
          <p className="mb-4">
            Our company acts only as an agent for the various independent suppliers that provide tour services. We are not responsible for any loss, damage, injury, or death that may occur due to the acts or omissions of these suppliers or due to unforeseen circumstances.
          </p>

          <h2 className="text-2xl font-semibold mb-4">7. Governing Law</h2>
          <p className="mb-4">
            These Terms and Conditions shall be governed by and construed in accordance with the laws of Nepal. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Nepal.
          </p>
        </div>
      </section>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default TermsAndConditions;
