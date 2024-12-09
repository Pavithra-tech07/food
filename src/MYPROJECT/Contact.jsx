
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported
import img1 from './logo.png';



export default function Contact() {
  return (
    <div>
      
      <div className="main">
       <div className="row">
        <div className="col">
        <nav className="navbar navbar-expand-lg bg-warning position-fixed">
          <div className="container-fluid">
            <img
              src={img1}
              alt="Brand Logo"
              width="80"
              height="80"
              className="d-inline-block align-text-top mx-5"
            />
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav ms-5">
                <li className="nav-item mx-3">
                  <Link className="nav-link fs-5" to="/home">
                    Home
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link fs-5" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link fs-5" to="/menu">
                    Menu
                  </Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link fs-5" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="ms-auto d-flex align-items-center">
                {/* // { Separate icon } */}
                <button
                  className="btn  fs-5 d-flex align-items-center me-3"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasCart"
                  aria-controls="offcanvasCart"
                >
                  <i className="bi bi-cart4 fs-1"></i>
                </button>

                {/* Separate Sign In button */}
                <button
                  className="btn  btn-outline-danger fs-5"
                  type="button"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasSignIn"
                  aria-controls="offcanvasSignIn"
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </nav>
        </div>
      </div> 

      {/* Offcanvas for Cart */}
      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasCart"
        aria-labelledby="offcanvasCartLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasCartLabel">
            Your Cart
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>Your cart is empty!</p>
        </div>
      </div>

      {/* Offcanvas for Sign In */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasSignIn"
        aria-labelledby="offcanvasSignInLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasSignInLabel">
            Sign In
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <p>Welcome! Please sign in to access your account.</p>
        </div>
      </div>
   

      <div className="row">
        <div className="col">
          
        </div>
      </div>

<div className="container mt-4">
<Outlet />
</div>
</div>
</div>
);
}
  
