import React from 'react'
import './css/bootstrap.min.css';
import './css/style.css';
import NavbarMenu from './shared/Nav';
// import Search from './components/Search';
import Footer from './shared/Footer';

function forgetpassword() {
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
                    <h1 style={{paddingtop:"130px" , textalign:"center"}} class="display-5 animated fadeIn mb-4">Forget Password</h1>
                     {/* <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
                        <div class="col-md-6 p-5 mt-lg-5">

                        </div>
                    </div>  */}
                </div>
                

                <div class="container-xxl py-5">
                    <div class="container">

                        <div class="row g-4">
                            <div class="col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                                <img style={{width:"100%"}} id='login_img' src='./img/test1.jpg' alt='' />
                            </div>
                            <div class="col-md-6">
                                <div class="wow fadeInUp" data-wow-delay="0.5s">
                                    <form>
                                        <div class="row g-3">
                                            <p>If you forget your password. Enter your phone number. We will send it to your phone number.</p>
                                            <div class="col-12">
                                                <div class="form-floating">
                                                    <input type="number" class="form-control" id="phone_no" placeholder="Your Phone No"/>
                                                        <label for="phone">Phone no</label>
                                                </div>
                                            </div>

                                            <div class="col-12">
                                                <button class="btn btn-primary w-100 py-3" type="submit">Send OTP</button>
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

            
            <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
            <script src="lib/wow/wow.min.js"></script>
            <script src="lib/easing/easing.min.js"></script>
            <script src="lib/waypoints/waypoints.min.js"></script>
            <script src="lib/owlcarousel/owl.carousel.min.js"></script>

            
            <script src="js/main.js"></script>


        </div>
    )
}

export default forgetpassword
