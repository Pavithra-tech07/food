import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported
import img1 from './logo.png';

import './Menu.css';

export default function Menu() {
  return (
    <div className="main">
      <div className="row">
        <nav className="navbar navbar-expand-lg bg-warning position-fixed w-100 z-3">
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
                {/* Separate icon */}
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

       <h1>pavithramnsjbc</h1>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore officia fuga quis necessitatibus, totam iusto ipsa laborum debitis natus ducimus fugit, exercitationem alias quidem molestiae. Qui voluptatem consequuntur molestias!</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore officia fuga quis necessitatibus, totam iusto ipsa laborum debitis natus ducimus fugit, exercitationem alias quidem molestiae. Qui voluptatem consequuntur molestias!</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore officia fuga quis necessitatibus, totam iusto ipsa laborum debitis natus ducimus fugit, exercitationem alias quidem molestiae. Qui voluptatem consequuntur molestias!</p>
       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam labore officia fuga quis necessitatibus, totam iusto ipsa laborum debitis natus ducimus fugit, exercitationem alias quidem molestiae. Qui voluptatem consequuntur molestias!</p>

      <div className="container mt-4">
        <Outlet />
      </div>
    </div>
  );
}
