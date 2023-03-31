import React from 'react'
import NavbarMenu from './shared/Nav';
import Search from './shared/Search';
import Footer from './shared/Footer';
import './css/bootstrap.min.css';
import './css/style.css';

function propertyType() {
    return (
        <div>
            <div class="container-xxl bg-white p-0">
                
                {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                    <div class="spinner-border text-primary" style={{width: "3rem" , height: "3rem"}} role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div> */}
                

                {/* <NavbarMenu /> */}
                

                <div class="container-fluid header bg-white p-0">
                    <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                        <div class="col-md-6 p-5 mt-lg-5">
                            <h1 class="display-5 animated fadeIn mb-4">Property Type</h1>
                            <nav aria-label="breadcrumb animated fadeIn">
                                <ol class="breadcrumb text-uppercase">
                                    <li class="breadcrumb-item"><a href="/">Home</a></li>
                                    <li class="breadcrumb-item"><a href="/pages">Pages</a></li>
                                    <li class="breadcrumb-item text-body active" aria-current="page">Property Type</li>
                                </ol>
                            </nav>
                        </div>
                        <div class="col-md-6 animated fadeIn">
                            <img class="img-fluid" src="img/header.jpg" alt="" />
                        </div>
                    </div>
                </div>
                

                <Search />


                <div class="container-xxl py-5">
                    <div class="container">
                        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxwidth: "600px"}}>
                            <h1 class="mb-3">Property Types</h1>
                            <p>Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
                        </div>
                        <div class="row g-4">
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <a class="cat-item d-block bg-light text-center rounded p-3" href="/apartment">
                                    <div class="rounded p-4">
                                        <div class="icon mb-3">
                                            <img class="img-fluid" src="img/icon-apartment.png" alt="Icon" />
                                        </div>
                                        <h6>Apartment</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <a class="cat-item d-block bg-light text-center rounded p-3" href="/villa">
                                    <div class="rounded p-4">
                                        <div class="icon mb-3">
                                            <img class="img-fluid" src="img/icon-villa.png" alt="Icon" />
                                        </div>
                                        <h6>Villa</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <a class="cat-item d-block bg-light text-center rounded p-3" href="/home">
                                    <div class="rounded p-4">
                                        <div class="icon mb-3">
                                            <img class="img-fluid" src="img/icon-house.png" alt="Icon" />
                                        </div>
                                        <h6>Home</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <a class="cat-item d-block bg-light text-center rounded p-3" href="/office">
                                    <div class="rounded p-4">
                                        <div class="icon mb-3">
                                            <img class="img-fluid" src="img/icon-housing.png" alt="Icon" />
                                        </div>
                                        <h6>Office</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                                <a class="cat-item d-block bg-light text-center rounded p-3" href="/building">
                                    <div class="rounded p-4">
                                        <div class="icon mb-3">
                                            <img class="img-fluid" src="img/icon-building.png" alt="Icon" />
                                        </div>
                                        <h6>Building</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                                <a class="cat-item d-block bg-light text-center rounded p-3" href="/townhouse">
                                    <div class="rounded p-4">
                                        <div class="icon mb-3">
                                            <img class="img-fluid" src="img/icon-neighborhood.png" alt="Icon" />
                                        </div>
                                        <h6>Townhouse</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                                <a class="cat-item d-block bg-light text-center rounded p-3" href="/shop">
                                    <div class="rounded p-4">
                                        <div class="icon mb-3">
                                            <img class="img-fluid" src="img/icon-condominium.png" alt="Icon" />
                                        </div>
                                        <h6>Shop</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
                            </div>
                            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                                <a class="cat-item d-block bg-light text-center rounded p-3" href="/garage">
                                    <div class="rounded p-4">
                                        <div class="icon mb-3">
                                            <img class="img-fluid" src="img/icon-luxury.png" alt="Icon" />
                                        </div>
                                        <h6>Garage</h6>
                                        <span>123 Properties</span>
                                    </div>
                                </a>
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

export default propertyType
