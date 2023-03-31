import React from 'react'
import NavbarMenu from './shared/Nav';
import Footer from './shared/Footer';
import './css/bootstrap.min.css';
import './css/style.css';

function propertyDetails() {
  return (
    <div>
    <div class="container-xxl bg-white p-0">
        
        {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={{width: "3rem" , height : "3rem"}} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> */}
        

        {/* <NavbarMenu /> */}
        

        <div  class="container-fluid header bg-white p-0">
            <h1 style = {{paddingtop:"130px" , textalign:"center"}} class="display-5 animated fadeIn mb-4">Property details</h1>
                     {/* <div  class="row g-0 align-items-center flex-column-reverse flex-md-row">
                        <div  class="col-md-6 p-5 mt-lg-5">
                             
                        </div>
                    </div>  */}
        </div>
        

        {/* <div class="container-fluid details bg-white p-0">
            <div class="single-property-detail">
                <h1>property detail</h1>

            </div>
            <div class="remarks">

            </div>
        </div>  */}
        
        
        <div class="container-xxl py-5">
            <div class="container">
                
                <div class="row g-4">
                    <div id="carouselExampleIndicators" class="col-md-9 carousel slide" data-ride="carousel">
                        <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img class="d-block w-100" src="./img/test2.jpg" alt="First slide"/>
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="./img/test1.jpg" alt="Second slide"/>
                            </div>
                            <div class="carousel-item">
                            <img class="d-block w-100" src="./img/test2.jpg" alt="Third slide"/>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                    {/* <div class="col-md-9 wow fadeInUp" data-wow-delay="0.1s" >
                        <img style = "width:100%;" id='login_img' src='./img/test1.jpg' />
                    </div>  */}
                    <div class="col-md-3">
                        <h4>Remarks</h4>
                        <div class="wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div class="row g-3">
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="name" placeholder="Name"/>
                                            <label for="name">Name</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="email" class="form-control" id="email" placeholder="Email"/>
                                            <label for="email">Email</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="number" class="form-control" id="phone_no" placeholder="Your Phone No"/>
                                            <label for="phone">Phone no</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <textarea type="text" class="form-control" id="remarks" placeholder="message"></textarea>
                                            <label for="message">Message</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="text" class="form-control" id="security_code" placeholder="Security Code"/>
                                            <label for="phone">Security Code</label>
                                        </div>
                                    </div>
                                    
                                    <div class="col-6">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Call</button>
                                    </div>
                                    <div class="col-6">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Email</button>
                                    </div>
                                    
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       

        <Footer />
       

        <a href="/" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
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

export default propertyDetails
