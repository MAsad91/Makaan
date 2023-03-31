import React from 'react'
import NavbarMenu from './shared/Nav';
import Search from './shared/Search';
import Footer from './shared/Footer';
import './css/bootstrap.min.css';
import './css/style.css';


function ErrorPage() {
  return (
    <div>
    <div class="container-xxl bg-white p-0">
        {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={{width: "3rem", height: "3rem"}} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> */}
        {/* <NavbarMenu /> */}
     
        <div class="container-fluid header bg-white p-0">
            <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                <div class="col-md-6 p-5 mt-lg-5">
                    <h1 class="display-5 animated fadeIn mb-4">404 Error</h1> 
                        <nav aria-label="breadcrumb animated fadeIn">
                        <ol class="breadcrumb text-uppercase">
                            <li class="breadcrumb-item"><a href="/">Home</a></li>
                            <li class="breadcrumb-item"><a href="/">Pages</a></li>
                            <li class="breadcrumb-item text-body active" aria-current="page">404 Error</li>
                        </ol>
                    </nav>
                </div>
                <div class="col-md-6 animated fadeIn">
                    <img class="img-fluid" src="img/header.jpg" alt=""/>
                </div>
            </div>
        </div>
        <Search />
        
        <div class="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-lg-6">
                        <i class="bi bi-exclamation-triangle display-1 text-primary"></i>
                        <h1 class="display-1">404</h1>
                        <h1 class="mb-4">Page Not Found</h1>
                        <p class="mb-4">We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
                        <a class="btn btn-primary py-3 px-5" href="/">Go Back To Home</a>
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

export default ErrorPage;
