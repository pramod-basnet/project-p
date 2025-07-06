// client/src/routes.jsx
import { createBrowserRouter } from "react-router-dom";

// Import your pages/components
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Contact from "./Pages/Contact.jsx";
import Destination from "./Pages/Destination.jsx";
import FQA from "./Pages/FQA.jsx";
import Services from "./Pages/Services.jsx";
import TermsAndConditions from "./Pages/TermsAndConditions.jsx";
import NotFound from "./Pages/NotFound.jsx"; // Assuming you have this
import SignIn from "./Pages/SignIn.jsx"; // Your login page
import GetStarted from "./Pages/GetStarted.jsx"; // NEW: Your new Get Started page

// You might also have components like:
// import BookingForm from "./components/BookingForm.jsx";
// import Header from "./components/Header.jsx";
// import Footer from "./components/Footer.jsx";
// import Navbar from "./components/Navbar.jsx";
// import LoadingScreen from "./components/LoadingScreen.jsx"; // If you use it as a component

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    // You might want to add errorElement: <ErrorPage /> here if you have one
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
  {
    path: "/fqa",
    element: <FQA />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/signin", // Your login route
    element: <SignIn />,
  },
  {
    path: "/get-started", // NEW: Your new route for the Get Started page
    element: <GetStarted />,
  },
  {
    path: "*", // Catch-all for 404 Not Found
    element: <NotFound />,
  },
  // Add other routes as needed
]);
