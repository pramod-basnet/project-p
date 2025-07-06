// src/App.jsx
import React, { useState, useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes.jsx';
import LoadingScreen from "./Components/LoadingScreen.jsx";
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // track if component is still mounted

    const initializeEnvironment = async () => {
      try {
        // Simulate initialization (e.g., fetching configs, auth, etc.)
        await new Promise((resolve) => setTimeout(resolve, 3000));
        if (isMounted) {
          console.log("Environment initialized successfully!");
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Failed to initialize environment:", err);
        if (isMounted) {
          setError("Failed to initialize environment. Please try again later.");
          setIsLoading(false);
        }
      }
    };

    initializeEnvironment();

    // Cleanup function to prevent state updates if unmounted
    return () => {
      isMounted = false;
    };
  }, []);

  if (isLoading) {
    return (
      <>
        <LoadingScreen />
        {/* Optional loading message */}
        <div className="fixed inset-x-0 bottom-10 text-center text-gray-600 font-medium select-none">
          Loading, please wait...
        </div>
      </>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen text-red-600 font-semibold p-4 text-center">
        {error}
      </div>
    );
  }

  return <RouterProvider router={routes} />;
};

export default App;
