import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is imported
import img1 from './logo.png';
import wall from './wallpaper.avif';
import img5 from './north.webp';
import img6 from './southindian.jpeg';
import img7 from './western.avif';
import './Home.css';

export default function Home() {
  return (
    <div>
    <div className="main">
      <div className="row">
        <div className="col">
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


    <img src={wall} class="img-fluid mt-5" alt="..."/>
      

      <div className="row mt-5 mx-4">
        <h4 style={{ color: 'red' }}>Welcome to TastyTables - A Feast for Every Taste!</h4>
        <p className="para1 mx-3 mt-3 fs-5">
          At TastyTables, we believe every meal is an opportunity to create unforgettable moments.
          Our passion is bringing you a variety of delicious, wholesome, and mouthwatering recipes
          that make cooking a joy and dining a delight.
        </p>
      </div>
      <div className="row mt-5 mx-4">
        <h4 style={{ color: 'red' }}>Discover Your Flavor in Every Bite</h4>
        <p className="para1 mx-3 mt-3 fs-5">
        Unlock a world of delicious possibilities with every recipe. From bold spices to fresh ingredients, our dishes promise to bring new flavors to your table, one bite at a time
        </p>
      </div>

      <div className="row mt-5 mx-4">
        <h4 style={{ color: 'red' }}>Why Choose TastyTables?</h4>
        <p className="para1 mx-3 mt-3 fs-5">
       <span className="span" style={{color:'black'}}> Easy-to-Follow Recipes:</span> Simplified steps with ingredients you can find at any store.
        </p>
        <p className="para1 mx-3 mt-3 fs-5">
     <span className="span" style={{color:'black'}}>  Diverse Cuisine:</span>  Explore dishes from around the globe.      
       </p>
       <p className="para1 mx-3 mt-3 fs-5">
     <span className="span" style={{color:'black'}}> Healthy Choices:</span>   Balanced options that are as good for you as they are tasty      
       </p>
       <p className="para1 mx-3 mt-3 fs-5">
     <span className="span" style={{color:'black'}}>  Creative Ideas:</span>  Get inspired with new twists on classic recipes.      
       </p>
      </div>

      <div className="row mt-5 ">
  <div className="col-md-3 mx-5 fs-4">
    <img 
      src={img5}  className="img5 img-thumbnail float-start" alt="Western" 
      style={{ width: '400px', height: '300px' }} 
    />
    <p className="imgpara mt-4">Western</p>
  </div> 
  <div className="col-md-3 mx-5 fs-4">
    <img 
      src={img6}  className="img6 img-thumbnail float-start" alt="South-Indian" 
      style={{ width: '400px', height: '300px' }} 
    />
    <p className="imgpara mt-5">South-Indian</p>
  </div> 
  <div className="col-md-3 mx-5 fs-4 ">
    <img 
      src={img7}  className="img7 img-thumbnail float-start"  alt="North-Indian" 
      style={{ width: '400px', height: '300px' }} 
    />
    <p className="imgpara mt-5">North-Indian</p>
  </div> 
</div>

<hr style={{height:'3px', width:'900px',  backgroundColor: 'black',border: 'none', margin: '20px auto' }}/>
    
<div className="row mt-5 mx-4">
   <h4 style={{ color: 'red' }}>Get Started</h4>
   <p className="para1 mx-3 mt-3 fs-5">
       Ready to make every meal a masterpiece? Dive into our collection of recipes, tips, and inspiration, and turn your kitchen into a haven of flavor and fun.   </p>
  </div>

<div className="row">
  <h3 className="tasty">TastyTable</h3>
  <h5 className="join">Join our Community</h5>
</div>

<div className="row d-inline fs-1 " style={{ height: "100vh",textAlign:"center"}}>

  <i className="bi bi-google mx-3 mt-3"></i>
  <i className="bi bi-instagram mx-3 mt-3"></i>
  <i className="bi bi-youtube mx-3 mt-3"></i>
 
</div>


    <div className="container mt-4">
        <Outlet />
      </div>
    </div>
 </div>
  );
}
