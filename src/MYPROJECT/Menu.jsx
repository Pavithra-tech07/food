import React from 'react'
import {  Outlet } from 'react-router-dom';
 import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported
 import img1 from './logo.png';
import img2 from './dosa-s.png';
import img3 from './idly-s.jpg';
import img4 from './rice-s.png';

import './Menu.css';



export default function Menu() {
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
                    <button
                      className="btn fs-5 d-flex align-items-center me-3"
                      type="button"
                      data-bs-toggle="offcanvas"
                      data-bs-target="#offcanvasCart"
                      aria-controls="offcanvasCart"
                    >
                      <i className="bi bi-cart4 fs-1"></i>
                    </button>
                    <button
                      className="btn btn-outline-danger fs-5"
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
    


    <div class="row row-cols-1 row-cols-md-3 g-4">
   <div class="col">
     <div class="card h-100">
       <img src={img2} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      </div>
      <div class="card-footer">
         <small class="text-body-secondary">Last updated 3 mins ago</small>
       </div>
     </div>
   </div>
   <div class="col">
     <div class="card h-100">
       <img src={img3} class="card-img-top" alt="..."/>
       <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      </div>
       <div class="card-footer">
         <small class="text-body-secondary">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-100">
      <img src={img4} class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      </div>
      <div class="card-footer">
        <small class="text-body-secondary">Last updated 3 mins ago</small>
       </div>
     </div>
   </div>
 </div>
             


    <div className="container mt-4">
          <Outlet />
        </div>
        </div>
      </div>
    
  )
}
