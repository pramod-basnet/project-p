import React, { useEffect } from 'react';

// Inject custom animation directly in the document (no need for separate CSS file)
const injectSpinnerAnimation = () => {
  const style = document.createElement('style');
  style.innerHTML = `
@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animate-gradient-spin {
  animation: spin 1s linear infinite;
  }
  
      @keyframes spinReverse {
  from { transform: rotate(0deg); }
  to { transform: rotate(-360deg); }
}

.custom-spin {
  animation: spinReverse 1s linear infinite;
}

  `;
  document.head.appendChild(style);
};
import react from 'react';


const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="relative w-28 h-28">
        {/* Outer ring */}
        <div
          className="absolute top-0 left-0 w-28 h-28 rounded-full border-4 border-transparent border-t-green-500 animate-spin"
          style={{ animationDelay: "0ms" }}
        ></div>
        {/* Second ring */}
        <div
          className="absolute top-4 left-4 w-20 h-20 rounded-full border-4 border-transparent border-t-yellow-400 animate-spin"
          style={{ animationDelay: "150ms" }}
        ></div>
        {/* Third ring */}
        <div
          className="absolute top-8 left-8 w-12 h-12 rounded-full border-4 border-transparent border-t-pink-700 animate-spin"
          style={{ animationDelay: "300ms" }}
        ></div>
        {/* Inner ring */}
        <div
          className="absolute top-12 left-12 w-4 h-6 rounded-full border-4 border-transparent border-t-purple-900 animate-spin"
          style={{ animationDelay: "450ms" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;
