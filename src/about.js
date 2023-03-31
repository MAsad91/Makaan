import React from 'react'
import './css/bootstrap.min.css';
import './css/style.css';

import NavbarMenu from './shared/Nav';
import Search from './shared/Search';
import Footer from './shared/Footer';

function about() {
    return (
        <div>

            <div  class="container-xxl bg-white p-0">
                
                {/* <div id="spinner"  class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div  class="spinner-border text-primary" style={{width: "3rem" , height: "3rem"}} role="status">
                        <span  class="sr-only">Loading...</span>
                    </div>
                </div> */}
               
                {/* <NavbarMenu /> */}
              
                <div  class="container-fluid header bg-white p-0">
                    <div  class="row g-0 align-items-center flex-column-reverse flex-md-row">
                        <div  class="col-md-6 p-5 mt-lg-5">
                            <h1  class="display-5 animated fadeIn mb-4">About Us</h1>
                            <nav aria-label="breadcrumb animated fadeIn">
                                <ol  class="breadcrumb text-uppercase">
                                    <li  class="breadcrumb-item"><a href="/">Home</a></li>
                                    <li  class="breadcrumb-item"><a href="/pages">Pages</a></li>
                                    <li  class="breadcrumb-item text-body active" aria-current="page">About</li>
                                </ol>
                            </nav>
                        </div>
                        <div  class="col-md-6 animated fadeIn">
                            <img  class="img-fluid" src="img/header.jpg" alt="" />
                        </div>
                    </div>
                </div>
               
                <Search />
               
                <div  class="container-xxl py-5">
                    <div  class="container">
                        <div  class="row g-5 align-items-center">
                            <div  class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                <div  class="about-img position-relative overflow-hidden p-5 pe-0">
                                    <img  class="img-fluid w-100" src="img/about.jpg" alt=''/ >
                                </div>
                            </div>
                            <div  class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                <h1  class="mb-4">#1 Place To Find The Perfect Property</h1>
                                <p  class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <p><i  class="fa fa-check text-primary me-3"></i>Tempor erat elitr rebum at clita</p>
                                <p><i  class="fa fa-check text-primary me-3"></i>Aliqu diam amet diam et eos</p>
                                <p><i  class="fa fa-check text-primary me-3"></i>Clita duo justo magna dolore erat amet</p>
                                <a  class="btn btn-primary py-3 px-5 mt-3" href="/readmore">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div  class="container-xxl py-5">
                    <div  class="container">
                        <div  class="bg-light rounded p-3">
                            <div  class="bg-white rounded p-4" style={{border: "1px dashed rgba(0, 185, 142, .3)"}}>
                                <div  class="row g-5 align-items-center">
                                    <div  class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                                        <img  class="img-fluid rounded w-100" src="img/call-to-action.jpg" alt="" />
                                    </div>
                                    <div  class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                                        <div  class="mb-4">
                                            <h1  class="mb-3">Contact With Our Certified Agent</h1>
                                            <p>Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem kasd vero ipsum sit sit diam justo sed vero dolor duo.</p>
                                        </div>
                                        <a href="/call"  class="btn btn-primary py-3 px-4 me-2"><i  class="fa fa-phone-alt me-2"></i>Make A Call</a>
                                        <a href="/getapp"  class="btn btn-dark py-3 px-4"><i  class="fa fa-calendar-alt me-2"></i>Get Appoinment</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div  class="container-xxl py-5">
                    <div  class="container">
                        <div  class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px"}}>
                            <h1  class="mb-3">Property Agents</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div  class="row g-4">
                            <div  class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div  class="team-item rounded overflow-hidden">
                                    <div  class="position-relative">
                                        <img  class="img-fluid" src="img/team-1.jpg" alt="" />
                                            <div  class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                                <a  class="btn btn-square mx-1" href="/"><i  class="fab fa-facebook-f"></i></a>
                                                <a  class="btn btn-square mx-1" href="/"><i  class="fab fa-twitter"></i></a>
                                                <a  class="btn btn-square mx-1" href="/"><i  class="fab fa-instagram"></i></a>
                                            </div>
                                    </div>
                                    <div  class="text-center p-4 mt-3">
                                        <h5  class="fw-bold mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div  class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div  class="team-item rounded overflow-hidden">
                                    <div  class="position-relative">
                                        <img  class="img-fluid" src="img/team-2.jpg" alt="" />
                                            <div  class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                                <a  class="btn btn-square mx-1" href="/"><i  class="fab fa-facebook-f"></i></a>
                                                <a  class="btn btn-square mx-1" href="/"><i  class="fab fa-twitter"></i></a>
                                                <a  class="btn btn-square mx-1" href="/"><i  class="fab fa-instagram"></i></a>
                                            </div>
                                    </div>
                                    <div  class="text-center p-4 mt-3">
                                        <h5  class="fw-bold mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div  class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div  class="team-item rounded overflow-hidden">
                                    <div  class="position-relative">
                                        <img  class="img-fluid" src="img/team-3.jpg" alt="" />
                                            <div  class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                                <a  class="btn btn-square mx-1" href="/"><i  class="fab fa-facebook-f"></i></a>
                                                <a  class="btn btn-square mx-1" href="/"><i  class="fab fa-twitter"></i></a>
                                                <a  class="btn btn-square mx-1" href="/"><i  class="fab fa-instagram"></i></a>
                                            </div>
                                    </div>
                                    <div  class="text-center p-4 mt-3">
                                        <h5  class="fw-bold mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                            <div  class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
                                <div  class="team-item rounded overflow-hidden">
                                    <div  class="position-relative">
                                        <img  class="img-fluid" src="img/team-4.jpg" alt="" />
                                            <div  class="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                                                <a  class="btn btn-square mx-1" href="/"><i  class="fab fa-facebook-f"></i></a>
                                                <a  class="btn btn-square mx-1" href="/"><i  class="fab fa-twitter"></i></a>
                                                <a  class="btn btn-square mx-1" href="/"><i  class="fab fa-instagram"></i></a>
                                            </div>
                                    </div>
                                    <div  class="text-center p-4 mt-3">
                                        <h5  class="fw-bold mb-0">Full Name</h5>
                                        <small>Designation</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <Footer />
               
                <a href="/"  class="btn btn-lg btn-primary btn-lg-square back-to-top"><i  class="bi bi-arrow-up"></i></a>
            </div>

            
            {/* <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src="lib/wow/wow.min.js"></script>
            <script src="lib/easing/easing.min.js"></script>
            <script src="lib/waypoints/waypoints.min.js"></script>
            <script src="lib/owlcarousel/owl.carousel.min.js"></script>

            <script src="js/main.js"></script> */}

        </div>
    )
}

export default about
