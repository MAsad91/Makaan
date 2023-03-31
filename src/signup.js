import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/bootstrap.min.css";
import "./css/style.css";
import Modal from "react-bootstrap/Modal";
import { Link } from "react-router-dom";
import { Formik } from "formik";
import { error } from "jquery";

const handleClose = () => true;
const handleShow = () => true;

function signup() {
  // const[error, setError] = useState("");
  const Error = "";
  // const navigate = useNavigate();
  const regex = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;
  return (
    <div /*class="container-xxl bg-white p-0"*/>
      <Formik
        initialValues={{
          name: "",
          phoneno: "",
          password: "",
          confirmpassword: "",
        }}
        validate={(values) => {
          const errors = {};
          if(!values.name) {
            errors.name = "Required";
          }

          if (!values.phoneno) {
            errors.phoneno = "Required";
          } else if (!regex.test(values.phoneno)) {
            errors.phoneno = "Invalid Phone No";
          } else if (regex.test(values.phoneno)) {
            errors.phoneno = "Valid Phone No";
          }

          if (!values.password) {
            errors.password = "Required";
          }

          if (!values.confirmpassword) {
            errors.confirmpassword = "Required";
          } else if (!(values.confirmpassword === values.password)) {
            errors.confirmpassword = "invalid Password";
          }

          return errors;
        }}
        onSubmit={async(values, actions) => {
          try {
            console.log(values);
              const response = await axios({
                method: 'post',
                url: `http://localhost:5000/auth/signup`,
                data: {
                  name:values.name,
                  phoneno:values.phoneno,
                  password:values.password,
                }
              });

              console.log(response);
              if (response.status === 200) {
                alert("User Added Successfully!", response.data.message);
                console.log(response.data);
                // Modal.success({
                //   title: "User Added Successfully!",
                // });
                // navigate(`/addproperty`);
              }
            } catch (err) {
              const messsage = err.response.data.message;
              Error(messsage || "Something went wrong,Please try again!");
              console.log(err.response.data.message, err.response.status);
              alert(err.response.data.message, err.response.status);
            }
        }}
        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
        // }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Modal
            style={{ marginTop: "60px" }}
            show={true}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>SignUp</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form
                onClick={handleSubmit}
                id="editmodal"
                className="w-full max-w-sm"
              >
                <div className="md:flex md:items-center mb-6">
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="text"
                        name="name"
                        class="form-control"
                        id="name"
                        placeholder="Your Name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                      />
                      <p style={{ color: "red" }}>
                        {errors.name && touched.name && errors.name}
                      </p>
                      {/* {errors.name && touched.name && errors.name} */}
                      <label for="name">Name</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="text"
                        class="form-control"
                        id="phoneno"
                        name="phoneno"
                        placeholder="Your Phone No"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneno}
                      />
                      <p style={{ color: "red" }}>
                        {errors.phoneno && touched.phoneno && errors.phoneno}
                      </p>
                      <label for="phone">Phone no</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                      />
                      <p style={{ color: "red" }}>
                        {errors.password && touched.password && errors.password}
                      </p>
                      <label for="password">Password</label>
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-floating">
                      <input
                        type="password"
                        class="form-control"
                        id="confirmpassword"
                        placeholder="Confirm Password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmpassword}
                      />
                      <p style={{ color: "red" }}>
                        {errors.confirmpassword &&
                          touched.confirmpassword &&
                          errors.confirmpassword}
                      </p>
                      <label for="confirmpassword">Confirm Password</label>
                    </div>
                  </div>

                  <div class="col-12">
                    <p style={{ paddingleft: "50px" }}>
                      {" "}
                      Have an account?  <Link to="/login">   LogIn</Link>
                    </p>
                  </div>
                  <div class="col-12" style={{ paddingBottom: "30px" }}>
                  {/* <Link to="/addproperty"> */}
                  <button
                    class="btn btn-primary w-100 py-3"
                    type="submit"
                    // disabled={isSubmitting}
                    // onClick={onSubmit}
                  >
                    SignUp
                  </button>
                  {/* </Link> */}
                </div>
                </div>
                
              </form>
            </Modal.Body>
            {/* <Modal.Footer>
             
            </Modal.Footer> */}
          </Modal>
        )}
      </Formik>
      {/* <Modal
                style={{ marginTop: "70px" }}
                show={true}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton={true}>
                    <Modal.Title>SignUp</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form
                        onSubmit={(e) => {
                            handleClose();
                            e.preventDefault();
                            // props.updateEmployee(props.id, name, role);
                        }}
                        id="editmodal"
                        className="w-full max-w-sm"
                    >
                        <div className="md:flex md:items-center mb-6">
                            <div class="col-12" style={{marginBottom:"20px"}}>
                                <div class="form-floating">
                                    <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" />
                                    <label for="name">Name</label>
                                </div>
                            </div>
                            <div class="col-12" style={{marginBottom:"20px"}}>
                                <div class="form-floating">
                                    <input type="number" class="form-control" id="phone_no" name="phone_no" placeholder="Your Phone No" />
                                    <label for="phone">Phone no</label>
                                </div>
                            </div>
                            <div class="col-12" style={{marginBottom:"20px"}}>
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="password" name="password" placeholder="Password" />
                                    <label for="password">Password</label>
                                </div>
                            </div>
                            <div class="col-12" style={{marginBottom:"20px"}}>
                                <div class="form-floating">
                                    <input type="password" class="form-control" id="confirmpassword" placeholder="Confirm Password" />
                                    <label for="confirmpassword">Confirm Password</label>
                                </div>
                            </div>
                            
                            <div class="col-12">
                                <p style={{ paddingleft: "50px" }}> Have an account? <a href="/login">LogIn</a></p>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <div class="col-12">
                        <Link to="/addproperty">
                        
                                <button class="btn btn-primary w-100 py-3" type="submit" onClick={() => { }}>SignUp</button>
                            
                        </Link>
                    </div>
                </Modal.Footer>
            </Modal> */}

      {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>

            <NavbarMenu /> */}

      {/* <div class="container-fluid header bg-white p-0">
                <h1 style={{ paddingTop: "130px", textAlign: "center" }} class="display-5 animated fadeIn mb-4">SignUp</h1>
            </div> */}

      {/* <div class="container-xxl py-5">
                <div class="container">

                    <div class="row g-4">
                        <div class="col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                            <img style={{ width: "100%" }} id='login_img' src='./img/test1.jpg' alt='' />
                        </div>
                        <div class="col-md-6">
                            <div class="wow fadeInUp" data-wow-delay="0.5s">
                                <form method="post">
                                    <div class="row g-3">
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="text" class="form-control" id="name" name="name" placeholder="Your Name" />
                                                <label for="name">Name</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="number" class="form-control" id="phone_no" name="phone_no" placeholder="Your Phone No" />
                                                <label for="phone">Phone no</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="password" class="form-control" id="password" name="password" placeholder="Password" />
                                                <label for="password">Password</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <div class="form-floating">
                                                <input type="password" class="form-control" id="confirmpassword" placeholder="Confirm Password" />
                                                <label for="confirmpassword">Confirm Password</label>
                                            </div>
                                        </div>
                                        <div class="col-12">
                                            <button class="btn btn-primary w-100 py-3" type="submit" onClick={() => {<AddProperty />}}>SignUp</button>
                                        </div>
                                        <div class="col-12">
                                            <p style={{ paddingleft: "50px" }}> Have an account? <a href="/login">LogIn</a></p>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                    <div class="container py-5">
                        <div class="row g-5">
                            <div class="col-lg-3 col-md-6">
                                <h5 class="text-white mb-4">Get In Touch</h5>
                                <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                                <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                                <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                                <div class="d-flex pt-2">
                                    <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-youtube"></i></a>
                                    <a class="btn btn-outline-light btn-social" href="/"><i class="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <h5 class="text-white mb-4">Quick Links</h5>
                                <a class="btn btn-link text-white-50" href="/about">About Us</a>
                                <a class="btn btn-link text-white-50" href="/contact">Contact Us</a>
                                <a class="btn btn-link text-white-50" href="/services">Our Services</a>
                                <a class="btn btn-link text-white-50" href="/policy">Privacy Policy</a>
                                <a class="btn btn-link text-white-50" href="/terms">Terms & Condition</a>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <h5 class="text-white mb-4">Photo Gallery</h5>
                                <div class="row g-2 pt-2">
                                    <div class="col-4">
                                        <img class="img-fluid rounded bg-light p-1" src="img/property-1.jpg" alt="" />
                                    </div>
                                    <div class="col-4">
                                        <img class="img-fluid rounded bg-light p-1" src="img/property-2.jpg" alt="" />
                                    </div>
                                    <div class="col-4">
                                        <img class="img-fluid rounded bg-light p-1" src="img/property-3.jpg" alt="" />
                                    </div>
                                    <div class="col-4">
                                        <img class="img-fluid rounded bg-light p-1" src="img/property-4.jpg" alt="" />
                                    </div>
                                    <div class="col-4">
                                        <img class="img-fluid rounded bg-light p-1" src="img/property-5.jpg" alt="" />
                                    </div>
                                    <div class="col-4">
                                        <img class="img-fluid rounded bg-light p-1" src="img/property-6.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6">
                                <h5 class="text-white mb-4">Newsletter</h5>
                                <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                <div class="position-relative mx-auto" style={{ maxwidth: "400px" }}>
                                    <input class="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                                    <button type="button" class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="container">
                        <div class="copyright">
                            <div class="row">
                                <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                    &copy; <a class="border-bottom" href="/">Your Site Name</a>, All Right Reserved.
                                    Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                                </div>
                                <div class="col-md-6 text-center text-md-end">
                                    <div class="footer-menu">
                                        <a href="/">Home</a>
                                        <a href="/cookies">Cookies</a>
                                        <a href="/help">Help</a>
                                        <a href="/faqs">FQAs</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="/" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>


            </div> */}
    </div>
  );
}

export default signup;
