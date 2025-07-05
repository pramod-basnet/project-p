    // src/App.jsx
    import React, { useState, useEffect } from 'react';
    import { RouterProvider } from 'react-router-dom';
    import { routes } from './routes.jsx'; // Assuming your routes are defined here

    // Import the LoadingScreen component
    import LoadingScreen from './Components/LoadingScreen.jsx';

    const App = () => {
      // State to manage the loading status
      const [isLoading, setIsLoading] = useState(true);

      // useEffect hook to simulate initial environment setup or data fetching
      useEffect(() => {
        const initializeEnvironment = async () => {
          try {
            // Simulate a network request or heavy initialization task
            // For demonstration, we'll wait for 3 seconds.
            await new Promise(resolve => setTimeout(resolve, 3000));
            console.log("Environment initialized successfully!");
          } catch (error) {
            console.error("Failed to initialize environment:", error);
            // Handle initialization errors, e.g., show an error message
          } finally {
            // Once all initial tasks are done, set isLoading to false
            setIsLoading(false);
          }
        };

        initializeEnvironment();
      }, []); // The empty dependency array ensures this runs only once on component mount

      // Conditionally render the LoadingScreen or the main application (RouterProvider)
      if (isLoading) {
        return <LoadingScreen />; // <--- This line is critical for it to show
      }

      // If not loading, render the main application content via RouterProvider
      return (
        <RouterProvider router={routes} />
      );
    };

    export default App;
    