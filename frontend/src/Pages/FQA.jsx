import React, { useState } from 'react';

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

const FAQ = () => {
  const faqItems = [
    {
      question: 'How do I book a tour?',
      answer: 'You can book a tour directly through our website by selecting your desired package and filling out the booking form. Alternatively, you can contact our customer service team via phone or email for assistance.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. Specific payment options may vary depending on the tour package.'
    },
    {
      question: 'Is travel insurance included in the package?',
      answer: 'Travel insurance is generally not included in our standard packages. We highly recommend purchasing comprehensive travel insurance to cover unexpected events such as trip cancellations, medical emergencies, or lost luggage.'
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Our cancellation policy varies depending on the tour package and the timing of the cancellation. Please refer to the specific terms and conditions of your booked tour or contact us for detailed information.'
    },
    {
      question: 'Do you offer custom tour packages?',
      answer: 'Yes, we specialize in creating custom tour packages tailored to your specific interests, budget, and schedule. Please contact us with your requirements, and our team will design a personalized itinerary for you.'
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      <Header />
      <section className="py-16 px-6 bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-800 mb-10 text-center">Frequently Asked Questions</h1>
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md mb-4 overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-6 text-left font-semibold text-xl text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                {item.question}
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 text-gray-700">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default FAQ;
