import { createBrowserRouter } from "react-router-dom";
import Home  from "./Pages/Home";
import About from "./Pages/About";
import Notfound from "./Pages/Notfound";
import Destination from "./Pages/Destination";
import Contact from "./Pages/Contact";

export  const routes = createBrowserRouter([
  {
    path:'/',
   element:<Home/>
  },
  {
    path:'/home',
   element:<Home/>
  },
  {
   path:'/about',
   element:<About/>
  },
  {
    path:'/destination',
    element:<Destination/>
  },
  {
  path:'/Contact',
  element:<Contact/>
  },

  {
    path:'*',
    element:<Notfound/>
  }
  
]) ;