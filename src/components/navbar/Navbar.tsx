import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <Link to="/">
        Demo Dashboard
        </Link>
      </div>
      <div className="icons">
        <img src="/search.svg" alt="" className="icon" />
        <div className="user">
          <img
            src="https://images.pexels.com/photos/17397364/pexels-photo-17397364.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
            alt=""
          />
           <Link to="/users/1">
           John Doe
           </Link>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
