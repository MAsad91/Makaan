import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import AddProperty from "../component/AddProperty";
import axios from "axios";
import { Modal, Collapse } from "antd";
import { AuthContext } from "./context/auth-context";
import { Formik } from "formik";
import "./Navbar.css";
import "../css/bootstrap.min.css";
//  import Nav from 'react-bootstrap/Nav';
//  import Navbar from 'react-bootstrap/Navbar';
// import { NavDropdown } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';

function NavbarMenu() {
  const regex = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;
  const auth = useContext(AuthContext);
  console.log(auth);

  const [close, setClose] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClose = () => setClose(true);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <Formik
      initialValues={{ phoneno: "", password: "" }}
      validate={(values) => {
        const errors = {};
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
        console.log(errors);
        return errors;
      }}
      onSubmit={async (values, { setSubmitting }) => {
        handleClose();
        try {
          console.log(values);
          const response = await axios({
            method: "post",
            url: `http://localhost:5000/auth/login`,
            data: {
              phoneno: values.phoneno,
              password: values.password,
            },
          });
          auth.login(response.data.userId, response.data.token);
          console.log(response);
          console.log(auth);
          if (response.status === 200) {
            setIsLoggedIn(true);
            alert("User Login Successfully!");
            Modal.success({
              title: "User Login Successfully!",
            });
            handleClose();
            // navigate(`/${response.data.userId}`);
          }
        } catch (err) {
          const messsage = err.response.data.message;
          Error(messsage || "Something went wrong,Please try again!");
          console.log(err.response.data.message, err.response.status);
          alert(err.response.data.message, err.response.status);
        }
        setSubmitting(false);

        // setTimeout(() => {
        //   alert(JSON.stringify(values, null, 2));
        //   setSubmitting(false);
        // }, 400);
      }}
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
        <div>
          {/* <!-- Navbar Start --> */}

          <div
            class="container-fluid  bg-transparent"
            //  class=" nav-bar "
            // style={{position:"fixed"}}
          >
            <nav class="navbar navbar-expand-lg bg-white navbar-light py-0 px-4">
              <a
                href="/"
                class="navbar-brand d-flex align-items-center text-center"
              >
                <div class="icon p-2 me-2">
                  <img
                    class="img-fluid"
                    src="img/tari.jpg"
                    alt="Icon"
                    style={{ width: "30px", height: "30px" }}
                  />
                </div>
                <h1 class="m-0 text-primary">Tari Marketing</h1>
              </a>
              <button
                type="button"
                class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#navbarCollapse"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav ms-auto">
                  <a href="/" class="nav-item nav-link">
                    Home
                  </a>
                  <a href="/about" class="nav-item nav-link">
                    About
                  </a>
                  <div class="nav-item dropdown">
                    <a
                      href="/property"
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Property
                    </a>
                    <div class="dropdown-menu rounded-0 m-0">
                      <a href="/buyaproperty" class="dropdown-item">
                        Buy
                      </a>
                      <a href="/addproperty" class="dropdown-item">
                        Sell
                      </a>
                      <a href="/rentaproperty" class="dropdown-item">
                        Rent
                      </a>
                    </div>
                  </div>
                  <div class="nav-item dropdown">
                    <a
                      href="/"
                      class="nav-link dropdown-toggle"
                      data-bs-toggle="dropdown"
                    >
                      Pages
                    </a>
                    <div class="dropdown-menu rounded-0 m-0">
                      <a href="/testimonial" class="dropdown-item">
                        Testimonial
                      </a>
                      <a href="/404" class="dropdown-item">
                        404 Error
                      </a>
                    </div>
                  </div>
                  <a href="/contact" class="nav-item nav-link">
                    Contact
                  </a>
                  {/* <button class="btn btn-primary px-3 ">AddProperty</button> */}
                  {/* <a href="/addproperty" class="btn btn-primary px-3 d-none d-lg-flex" onClick={()=>{<AddProperty/>}}>Add Property</a> */}
                </div>
                <div>
                  {!isLoggedIn ? (
                    <button
                      type="button"
                      style={{
                        backgroundColor: "transparent",
                        border: "none",
                        textAlign: "left",
                        fontSize: "20px",
                        color: "#2E307D",
                      }}
                      onClick={showModal}
                    >
                      LogIn
                    </button>
                  ) : (
                    <div class="nav-item dropdown">
                      <a
                        href="/property"
                        class="nav-link dropdown-toggle"
                        data-bs-toggle="dropdown"
                      >
                        Profile
                      </a>
                      <div class="dropdown-menu rounded-0 m-0">
                        <a href={`/myproperties/:id`} class="dropdown-item">
                          My Properties
                        </a>
                        <a href="/addproperty" class="dropdown-item">
                          SignOut
                        </a>
                      </div>
                    </div>
                  )}
                  <Modal
                    title="LogIn"
                    style={{ fontSize: "24px" }}
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={450}
                    bodyStyle={{
                      height: "500px",
                      marginTop: "50px",
                      overflowY: "scroll",
                      marginLeft: "0px",
                      paddingLeft: "0px",
                    }}
                    footer={null}
                    okText={"Ok"}
                    //   cancelText={"Cancel"}
                  >
                    <form
                      onSubmit={handleSubmit}
                      id="editmodal"
                      className="w-full max-w-sm"
                    >
                      <div
                        className="md:flex md:items-center mb-6"
                        style={{ paddingTop: "40px", width: "400px" }}
                      >
                        <div class="col-12" style={{ marginBottom: "20px" }}>
                          <div class="form-floating">
                            <input
                              type="text"
                              name="phoneno"
                              // id="phone_no"
                              class="form-control"
                              placeholder="Your Phone No"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phoneno}
                            />
                            <p style={{ color: "red" }}>
                              {errors.phoneno &&
                                touched.phoneno &&
                                errors.phoneno}
                            </p>
                            <label for="phone_no">Your Phone No</label>
                          </div>
                        </div>
                        <div
                          class="col-12"
                          style={{
                            paddingTop: "20px",
                            paddingBottom: "20px",
                          }}
                        >
                          <div class="form-floating">
                            <input
                              type="password"
                              name="password"
                              class="form-control"
                              id="password"
                              placeholder="Your Password"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.password}
                            />
                            <p style={{ color: "red" }}>
                              {errors.password &&
                                touched.password &&
                                errors.password}
                            </p>
                            <label for="password">Your Password</label>
                          </div>
                        </div>
                        <div class="col-12" style={{ paddingTop: "60px" }}>
                          <p style={{ textalign: "center" }}>
                            Don't have an account?
                            <a href="/signup " style={{ marginLeft: "20px" }}>
                              SignUp
                            </a>
                            <a
                              href="/forgetpassword "
                              style={{ marginLeft: "70px" }}
                            >
                              Forget Password?
                            </a>
                          </p>
                        </div>
                        <div
                          class="col-12"
                          style={{
                            paddingTop: "20px",
                            paddingBottom: "30px",
                          }}
                        >
                          {/* <Link to="/addproperty"> */}
                          <button
                            class="btn btn-primary w-100 py-3"
                            type="submit"
                            disabled={isSubmitting}
                            // onClick={handleClick}
                          >
                            Login
                          </button>
                          {/* </Link> */}
                        </div>
                      </div>
                    </form>
                  </Modal>
                </div>
                <Link to="/addproperty">
                  <button class="btn btn-primary px-3 ">AddProperty</button>
                </Link>
              </div>
            </nav>
          </div>
          {/* <!-- Navbar End --> */}
        </div>
      )}
    </Formik>
  );
}

export default NavbarMenu;
