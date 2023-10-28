import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <Link to="/">HOME</Link>
      <Link to="/calander">CALENDAR</Link>
      <Link to="/contact">CONTACT</Link>
    </div>
  );
};