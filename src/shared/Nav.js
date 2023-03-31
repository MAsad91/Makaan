import React from "react";
import { Link } from "react-router-dom";
import AddProperty from '../component/AddProperty';
import "./Navbar.css";
//  import Nav from 'react-bootstrap/Nav';
//  import Navbar from 'react-bootstrap/Navbar';
// import { NavDropdown } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';

function NavbarMenu() {
  return (
    <div>
        {/* <!-- Navbar Start --> */}

                                    
        <div class="container-fluid   "
        //  class="nav-bar bg-transparent"
        // style={{position:"fixed"}}
         >
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
                <a href="/" class="navbar-brand d-flex align-items-center text-center">
                    <div class="icon p-2 me-2">
                        <img class="img-fluid" src="img/icon-deal.png" alt="Icon" style={{width: "30px", height: "30px"}}/>
                    </div>
                    <h1 class="m-0 text-primary">Makaan</h1>
                </a>
                <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto">
                        <Link to="/" class="nav-item nav-link">Home</Link>
                        <Link to="/about" class="nav-item nav-link">About</Link>
                        <div class="nav-item dropdown">
                            <a href="/property" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Property</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a href="/propertylist" class="dropdown-item">Property List</a>
                                <a href="/propertytype" class="dropdown-item">Property Type</a>
                                <a href="/propertyagent" class="dropdown-item">Property Agent</a>
                            </div>
                        </div>
                        <div class="nav-item dropdown">
                            <a href="/" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu rounded-0 m-0">
                                <a href="/testimonial" class="dropdown-item">Testimonial</a>
                                <a href="/404" class="dropdown-item">404 Error</a>
                            </div>
                        </div>
                        <a href="/contact" class="nav-item nav-link">Contact</a>
                        {/* <button class="btn btn-primary px-3 ">AddProperty</button> */}
                        {/* <a href="/addproperty" class="btn btn-primary px-3 d-none d-lg-flex" onClick={()=>{<AddProperty/>}}>Add Property</a> */}

                    </div>
                    <Link to="/addproperty">
                    <button class="btn btn-primary px-3 ">AddProperty</button>

                    </Link>
                    

                    
                </div>
            </nav>
        </div>
        {/* <!-- Navbar End --> */}
    </div>

     
  );
}

export default NavbarMenu;
