import { Link } from "react-router-dom";
const Navbar = (props) => {
  return (
    <>
      <div className="container mt-10  ">
        <div className="container   ">
          <nav className="flex justify-around items-center text-center bg-amber-950 rounded w-[92%] m-auto text-white p-3">
            <div className="text-4xl cursor-pointer text-white">
              {props.title}
            </div>

            <ul className="flex gap-20 text-xl cursor-pointer">
              <Link to="/home">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
              <Link to="/services">
                <li>Services</li>
              </Link>
              <Link to="/gallery">
                <li><Gallary></Gallary></li>
              </Link>
              <Link to="/blog">
                <li> Blog</li>
              </Link>
              <Link to="/terms&conditions">
                <li>Terms & Conditions </li>
              </Link>
              </ul>

            
          </nav>
        </div>
      </div>
     
    </>
  );
};

export default Navbar;