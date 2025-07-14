import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => {
    setIsNavCollapsed(!isNavCollapsed);
  };

  const closeNavbar = () => {
    if (window.innerWidth < 992) { // lg breakpoint (Bootstrap default)
      setIsNavCollapsed(true);
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
              <li className="nav-item px-lg-2">
                <Link 
                  className="nav-link"
                  to="/signup"
                  onClick={closeNavbar}
                >
                  Signup
                </Link>
              </li>
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
    </nav>
  );
}

export default Navbar;