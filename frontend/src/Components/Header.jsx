import React from 'react';

const Header = ({ imageSrc, onGetStartedClick, backgroundImage, videoSource }) => {
  return (
    <header className="relative background w-full h-screen flex items-center justify-center text-center  overflow-hidden">
      
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 p-4 max-w-4xl mx-auto text-white"> {/* Text color changed to white for better contrast */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight">
          {imageSrc && (
            <img
              src={imageSrc}
              alt="Tours & Travels Logo"
              className="inline-block h-16 w-16 md:h-24 md:w-24 mr-4 align-middle rounded-lg shadow-md"
            />
          )}
          Tours & Travels In Nepal
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-6"> {/* Adjusted text color for subtitle */}
          Time For Tours & Travels
          <br />
          Let us plan your perfect Trip
        </p>
        <button
          onClick={onGetStartedClick}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
        >
          Get Started
        </button>
      </div>
    </header>
  );
};

export default Header;
