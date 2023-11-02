import { NavLink, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import "./Navbar.css";

const checkActive = ({ isActive }) => (isActive ? "isActive" : "notActive");

export const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const logout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userID");
    navigate("/auth");
  };

  return (
    <div className="navbar">
      <NavLink to="/" className={checkActive}>
        Home
      </NavLink>
      {!cookies.access_token ? (
        <NavLink to="/auth" className={checkActive}>
          Login/Register
        </NavLink>
      ) : (
        <>
          <NavLink to="/calendar">Calendar</NavLink>
          <NavLink to="/create-entry">Entries</NavLink>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </div>
  );
};
