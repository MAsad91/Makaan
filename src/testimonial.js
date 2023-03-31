import React from 'react'
import NavbarMenu from './shared/Nav';
import Search from './shared/Search';
import Footer from './shared/Footer';
import './css/bootstrap.min.css';
import './css/style.css';

function testimonial() {
    return (
        <div>
            <div class="container-xxl bg-white p-0">
                
                <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div class="spinner-border text-primary" style={{width: "3rem" , height: "3rem"}} role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                


                
                <NavbarMenu />
             


                <div class="container-fluid header bg-white p-0">
                    <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                        <div class="col-md-6 p-5 mt-lg-5">
                            <h1 class="display-5 animated fadeIn mb-4">Testimonial</h1>
                            <nav aria-label="breadcrumb animated fadeIn">
                                <ol class="breadcrumb text-uppercase">
                                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/pages">Pages</a></li>
                                    <li class="breadcrumb-item text-body active" aria-current="page">Testimonial</li>
                                </ol>
                            </nav>
                        </div>
                        <div class="col-md-6 animated fadeIn">
                            <img class="img-fluid" src="img/header.jpg" alt=""/>
                        </div>
                    </div>
                </div>
              
              

                <Search />
                
                

                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: "600px"}}>
                            <h1 class="mb-3">Our Clients Say!</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
                            <div class="testimonial-item bg-light rounded p-3">
                                <div class="bg-white border rounded p-4">
                                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                    <div class="d-flex align-items-center">
                                        <img class="img-fluid flex-shrink-0 rounded" src="img/testimonial-1.jpg" style={{width: "45px" , height: "45px"}} alt=''/>
                                            <div class="ps-3">
                                                <h6 class="fw-bold mb-1">Client Name</h6>
                                                <small>Profession</small>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial-item bg-light rounded p-3">
                                <div class="bg-white border rounded p-4">
                                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                    <div class="d-flex align-items-center">
                                        <img class="img-fluid flex-shrink-0 rounded" src="img/testimonial-2.jpg" style={{width: "45px" , height: "45px"}} alt=''/>
                                            <div class="ps-3">
                                                <h6 class="fw-bold mb-1">Client Name</h6>
                                                <small>Profession</small>
                                            </div>
                                    </div>
                                </div>
                            </div>
                            <div class="testimonial-item bg-light rounded p-3">
                                <div class="bg-white border rounded p-4">
                                    <p>Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd erat eos</p>
                                    <div class="d-flex align-items-center">
                                        <img class="img-fluid flex-shrink-0 rounded" src="img/testimonial-3.jpg" style={{width: "45px" , height: "45px"}} alt=''/>
                                            <div class="ps-3">
                                                <h6 class="fw-bold mb-1">Client Name</h6>
                                                <small>Profession</small>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
               

                <Footer />
            
            

                <a href="/" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
            </div>

           
            

        </div>
    )
}

export default testimonial
