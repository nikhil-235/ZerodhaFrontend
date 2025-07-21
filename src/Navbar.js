import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [cookies, setCookie, removeCookie] = useCookies(['token']);
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check authentication status on component mount and when cookies change
  useEffect(() => {
    setIsAuthenticated(!!cookies.token);
  }, [cookies.token]);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNavbar = () => {
    if (window.innerWidth < 992) {
      setIsNavCollapsed(true);
    }
  };

  const handleLogout = async () => {
    closeNavbar();
    try {
      // Optional: Send logout request to backend to invalidate token
      // await axios.post('http://localhost:8080/logout', {}, {
      //   withCredentials: true
      // });
      
      // Remove token cookie
      removeCookie('token', { path: '/' });
      
      // Update authentication state
      setIsAuthenticated(false);
      
      // Show success message
      toast.success("Logged out successfully");
      
      // Redirect to home page
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
      toast.error("Failed to logout");
    }
  };

  return (
    <nav className="navbar navbar-expand-lg bg-light border-bottom">
      <div className="container-fluid py-lg-2">
        <Link className="navbar-brand ps-lg-5 ps-sm-2" to="/" onClick={closeNavbar}>
          <img style={{ width: "25%" }} src="media/images/logo.svg" alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ms-lg-5 ${!isNavCollapsed ? "show" : ""}`}
          id="navbarNav"
        >
          <form className="d-flex" role="search">
            <ul className="navbar-nav ms-lg-5 ps-lg-5">
              {/* Conditional render for Signup/Logout */}
              {!isAuthenticated ? (
                <li className="nav-item px-lg-2">
                  <Link 
                    className="nav-link"
                    to="/signup"
                    onClick={closeNavbar}
                  >
                    Signup
                  </Link>
                </li>
              ) : (
                <li className="nav-item px-lg-2">
                  <button
                    className="nav-link btn btn-link" // styled like a link
                    onClick={handleLogout}
                    style={{ border: 'none', background: 'none' }}
                  >
                    Logout
                  </button>
                </li>
              )}

              {/* Other nav items */}
              <li className="nav-item px-lg-2">
                <Link
                  className="nav-link"
                  to="/about"
                  onClick={closeNavbar}
                >
                  About
                </Link>
              </li>
              <li className="nav-item px-lg-2">
                <Link
                  className="nav-link"
                  to="/products"
                  onClick={closeNavbar}
                >
                  Products
                </Link>
              </li>
              <li className="nav-item px-lg-2">
                <Link
                  className="nav-link"
                  to="/pricing"
                  onClick={closeNavbar}
                >
                  Pricing
                </Link>
              </li>
              <li className="nav-item px-lg-2">
                <Link
                  className="nav-link"
                  to="/support"
                  onClick={closeNavbar}
                >
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <ToastContainer position="bottom-right" />
    </nav>
  );
}

export default Navbar;