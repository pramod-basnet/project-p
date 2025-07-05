// src/components/LoadingScreen/LoadingScreen.jsx
import React from 'react';

const LoadingScreen = () => {
  return (
    // Main container for the loading screen, centered and dark background
    <div className="loading-container">
      {/*
        NOTE: Embedding CSS directly in JSX using a <style> tag is generally
        not considered a best practice for larger React applications.
        It can make styles harder to manage, scope, and optimize.
        For production, external CSS files or CSS-in-JS libraries are preferred.
      */}
      <style>
        {`
        /* Keyframe animation for the spinner */
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        /* Main container for the loading screen */
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 100vh; /* Full viewport height */
          background-color: #1a202c; /* Equivalent to bg-gray-900 */
          color: #ff0fff; /* Equivalent to text-white */
          padding: 1rem; /* Equivalent to p-4 */
          font-family: 'Inter', sans-serif; /* Using Inter font as per instructions */
        }

        /* App Icon Placeholder (the blue rounded square) */
        .app-icon-placeholder {
          position: relative;
          width: 7rem; /* Equivalent to w-28 (112px) */
          height: 7rem; /* Equivalent to h-28 (112px) */
          margin-bottom: 1.5rem; /* Equivalent to mb-6 (24px) */
          background: linear-gradient(to bottom right, #60a5fa, #1d4ed8); /* Equivalent to from-blue-400 to-blue-700 */
          border-radius: 1rem; /* Equivalent to rounded-2xl (16px) */
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); /* Equivalent to shadow-lg */
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        /* Abstract background inside the icon */
        .app-icon-background {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          background: linear-gradient(to top right, #38bdf8, #3b82f6); /* Equivalent to from-sky-300 to-blue-500 */
          opacity: 0.7; /* Equivalent to opacity-70 */
          filter: blur(2rem); /* Equivalent to blur-xl (32px) */
        }

        /* Spinner element */
        .spinner {
          position: relative;
          width: 4rem; /* Equivalent to w-16 (64px) */
          height: 4rem; /* Equivalent to h-16 (64px) */
          border: 4px solid rgba(229, 231, 235, 0.5); /* Equivalent to border-4 border-gray-200 border-opacity-50 */
          border-top: 4px solid #ffffff; /* Equivalent to border-t-white */
          border-radius: 50%; /* Equivalent to rounded-full */
          animation: spin 1s linear infinite; /* Apply the spin animation */
        }

        /* App Title */
        .app-title {
          font-size: 2.25rem; /* Equivalent to text-3xl */
          line-height: 2.5rem; /* Equivalent to text-3xl */
          font-weight: 600; /* Equivalent to font-semibold */
          margin-bottom: 0.5rem; /* Equivalent to mb-2 (8px) */
          color: #f3f4f6; /* Equivalent to text-gray-100 */
        }

        /* Loading Message */
        .loading-message {
          font-size: 1.125rem; /* Equivalent to text-lg */
          line-height: 1.75rem; /* Equivalent to text-lg */
          color: #9ca3af; /* Equivalent to text-gray-400 */
        }

        /* Responsive adjustments for larger screens (md: breakpoint) */
        @media (min-width: 768px) {
          .app-title {
            font-size: 2.5rem; /* Equivalent to md:text-4xl */
            line-height: 1; /* Adjust line-height for md:text-4xl */
          }

          .loading-message {
            font-size: 1.25rem; /* Equivalent to md:text-xl */
            line-height: 1.75rem; /* Adjust line-height for md:text-xl */
          }
        }
        `}
      </style>

      {/* App Icon - Using a simple SVG for demonstration.
          You can replace this with an actual image import if you have one.
          For example: <img src={AppIconImage} alt="App Icon" className="loading-icon-image" />
      */}
      <div className="app-icon-placeholder">
        {/* Abstract background for the icon */}
        <div className="app-icon-background"></div>
        {/* Spinner element */}
        <div className="spinner"></div>
      </div>

      {/* App Title */}
      {/* <h1 className="app-title">
        Scrollable Places
      </h1> */}

      {/* Loading Message */}
      {/* <p className="loading-message">
        Initializing environment
      </p> */}
    </div>
  );
};

export default LoadingScreen;
