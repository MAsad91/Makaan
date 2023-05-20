import React from "react";
import { useNavigate } from "react-router-dom";
import "./css/bootstrap.min.css";
import "./css/style.css";

import NavbarMenu from "./shared/Nav";
import Search from "./shared/Search";
import Footer from "./shared/Footer";
import axios from "axios";
import { Formik } from "formik";
import { Modal } from "antd";

function Contact() {
    const navigate = useNavigate();
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
              <h1 class="display-5 animated fadeIn mb-4">Contact Us</h1>
              <nav aria-label="breadcrumb animated fadeIn">
                <ol class="breadcrumb text-uppercase">
                  <li class="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li
                    class="breadcrumb-item text-body"
                    aria-current="page"
                  >
                    Contact
                  </li>
                </ol>
              </nav>
            </div>
            <div class="col-md-6 animated fadeIn">
              <img class="img-fluid" src="img/header.jpg" alt="" />
            </div>
          </div>
        </div>

        

        <div class="container-xxl py-5">
          <div class="container">
           
            <div class="row g-4">
              <div class="col-12">
                <div class="row gy-4">
                  <div
                    class="col-md-6 col-lg-4 wow fadeIn"
                    data-wow-delay="0.1s"
                  >
                    <div class="bg-light rounded p-3">
                      <div
                        class="d-flex align-items-center bg-white rounded p-3"
                        style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                      >
                        <div
                          class="icon me-3"
                          style={{ width: "45px", height: "45px" }}
                        >
                          <i class="fa fa-map-marker-alt text-primary"></i>
                        </div>
                        <span>123 Street, New York, USA</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-4 wow fadeIn"
                    data-wow-delay="0.3s"
                  >
                    <div class="bg-light rounded p-3">
                      <div
                        class="d-flex align-items-center bg-white rounded p-3"
                        style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                      >
                        <div
                          class="icon me-3"
                          style={{ width: "45px", height: "45px;" }}
                        >
                          <i class="fa fa-envelope-open text-primary"></i>
                        </div>
                        <span>info@example.com</span>
                      </div>
                    </div>
                  </div>
                  <div
                    class="col-md-6 col-lg-4 wow fadeIn"
                    data-wow-delay="0.5s"
                  >
                    <div class="bg-light rounded p-3">
                      <div
                        class="d-flex align-items-center bg-white rounded p-3"
                        style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
                      >
                        <div
                          class="icon me-3"
                          style={{ width: "45px", height: "45px" }}
                        >
                          <i class="fa fa-phone-alt text-primary"></i>
                        </div>
                        <span>+012 345 6789</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <iframe
                  class="position-relative rounded w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                  frameborder="0"
                  style={{ minheight: "400px", border: "0" }}
                  allowfullscreen=""
                  aria-hidden="false"
                  tabindex="0"
                  title="contact"
                ></iframe>
              </div>
              <div class="col-md-6">
                <div class="wow fadeInUp" data-wow-delay="0.5s">
                  <Formik
                    initialValues={{
                      name:"",
                      email:"",
                      subject:"",
                      message:""
,                    }}
                    onSubmit={(values, actions) => {
                      

                      Modal.confirm({
                        title: "Are you sure, you want to submit ?",
                        cancelText: "No",
                        okText: "Yes",
                        okType: "primary",
                        onOk: async () => {
                          try {
                            // console.log(propertyPurpose, propertyType, propertySubType)
                            console.log(values);
                            const response = await axios({
                              method: "post",
                              url: `http://localhost:5000/remarks/`,
                              data: 
                              {
                                name: values.name,
                                email: values.email,
                                subject: values.subject,
                                message: values.message
                              },
                              
                            });

                            console.log(response);

                            if (response.status === 200) {
                              alert(
                                "Review Added Successfully!",
                                response.data.message
                              );
                              console.log(response.data);
                              navigate("/");
                              // Modal.success({
                              //   title: "User Added Successfully!",
                              // });
                              // navigate(`/addproperty`);
                            }
                          } catch (err) {
                            const message =
                              err.response.data.message || "error";
                            Error(
                              message ||
                                "Something went wrong,Please try again!"
                            );
                            console.log(
                              err.response.data.message,
                              err.response.status
                            );
                            // alert(err.response.data.message, err.response.status);
                          }
                        },
                      });
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
                    }) => (
                      <form onSubmit={handleSubmit} >
                        <div class="row g-3">
                          <div class="col-md-6">
                            <div class="form-floating">
                              <input
                                type="text"
                                class="form-control"
                                required
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                              />
                              <label for="name">Your Name</label>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="form-floating">
                              <input
                                type="email"
                                class="form-control"
                                required
                                id="email"
                                name="email"
                                placeholder="Your Email"
                                onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.email}
                              />
                              <label for="email">Your Email</label>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-floating">
                              <input
                                type="text"
                                class="form-control"
                                required
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.subject}
                              />
                              <label for="subject">Subject</label>
                            </div>
                          </div>
                          <div class="col-12">
                            <div class="form-floating">
                              <textarea
                                class="form-control"
                                required
                                
                                id="message"
                                name="message"
                                placeholder="Leave a message here"
                                style={{ height: "150px" }}
                                onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.message}
                              ></textarea>
                              <label for="message">Message</label>
                            </div>
                          </div>
                          <div class="col-12">
                            <button
                              class="btn btn-primary w-100 py-3"
                              type="submit"
                            >
                              Send Message
                            </button>
                          </div>
                        </div>
                      </form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />

        <button href="/" class="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i class="bi bi-arrow-up"></i>
        </button>
      </div>

      
    </div>
  );
}

export default Contact;
