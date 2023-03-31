import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Formik } from "formik";
function LoginPage(props) {

  const navigate = useNavigate();
  const [close, setClose] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setClose(true);
  const handleShow = () => setShow(true);

  const regex = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;
  return (
    <div>
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

            console.log(response);
            if (response.status === 200) {
              alert("User Login Successfully!")
              navigate('/addproperty');
              // Modal.success({
              //   title: "User Get Successfully!",
              // });
              // navigate(`/addproperty`);
            }
          } catch (err) {
            const messsage = err.response.data.message;
            Error(messsage || "Something went wrong,Please try again!");
            console.log(err.response.data.message, err.response.status);
            alert(err.response.data.message, err.response.status)
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
          <Modal
            style={{ marginTop: "60px" }}
            show={handleShow}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>LogIn</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form
                onSubmit={handleSubmit}
                id="editmodal"
                className="w-full max-w-sm"
              >
                <div
                  className="md:flex md:items-center mb-6"
                  style={{ paddingTop: "40px" }}
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
                        {errors.phoneno && touched.phoneno && errors.phoneno}
                      </p>
                      <label for="phone_no">Your Phone No</label>
                    </div>
                  </div>
                  <div
                    class="col-12"
                    style={{ paddingTop: "20px", paddingBottom: "20px" }}
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
                        {errors.password && touched.password && errors.password}
                      </p>
                      <label for="password">Your Password</label>
                    </div>
                  </div>
                  <div class="col-12" style={{ paddingTop: "60px" }}>
                    <p style={{ textalign: "center" }}>
                      
                      Don't have an account?
                      <Link to="/signup " style={{ marginLeft: "20px" }}>
                        SignUp
                      </Link>
                      <Link to="/forgetpassword " style={{ marginLeft: "70px" }}>
                        Forget Password?
                      </Link>
                    </p>
                  </div>
                  <div
                    class="col-12"
                    style={{ paddingTop: "20px", paddingBottom: "30px" }}
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
            </Modal.Body>
            {/* <Modal.Footer>
            <div style={{padding:"40px"}}></div>
              
            </Modal.Footer> */}
          </Modal>
        )}
      </Formik>
    </div>

    /* //     <div>
//     <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal">
//   Open modal
// </button>


// <div class="modal" id="myModal">
//   <div class="modal-dialog">
//     <div class="modal-content">

//       <div class="modal-header">
//         <h4 class="modal-title">Modal Heading</h4>
//         <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
//       </div>

      
//       <div class="modal-body">
//         Modal body..
//       </div>

      
//       <div class="modal-footer">
//         <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Close</button>
//       </div>

//     </div>
//   </div>
// </div> */

    /* <div class="container-xxl bg-white p-0">
       
        {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style={{width: "3rem" , height: "3rem"}} role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div> */

    /* <NavbarMenu /> */

    /* <div  class="container-fluid header bg-white p-0">
                    <h1 style = {{paddingTop:"130px" , textAlign:"center"}} class="display-5 animated fadeIn mb-4">LogIn</h1> */
    /* <div  class="row g-0 align-items-center flex-column-reverse flex-md-row">
                                <div  class="col-md-6 p-5 mt-lg-5">
                                    
                                </div>
                            </div>  */
    /* </div> */

    /* <div class="container-xxl py-5">
            <div class="container">
                
                <div class="row g-4">
                    
                    <div class="col-md-6">
                        <div class="wow fadeInUp" data-wow-delay="0.5s">
                            <form>
                                <div class="row g-3">
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="number" class="form-control" id="phone_no" placeholder="Your Phone No"/>
                                            <label for="email">Your Phone No</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="form-floating">
                                            <input type="password" class="form-control" id="password" placeholder="Your Password"/>
                                            <label for="password">Your Password</label>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                    <Link to='/addproperty'>
                                    <button class="btn btn-primary w-100 py-3" type="submit" 
                                    // onClick={handleClick}
                                    >Login</button>
                                    </Link>
                                    </div>
                                    <div class="col-12">
                                       <p style={{textalign:"center"}}> Don't have an account?<Link to="/signup " style={{marginLeft: "20px"}}>SignUp</a> <Link to="/forgetpassword " style={{marginLeft: "70px"}}>Forget Password? </a></p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="col-md-6 wow fadeInUp" data-wow-delay="0.1s" >
                        <img style = {{width:"100%"}} id='login_img' src='./img/test1.jpg' alt='' />
                    </div>
                </div>
            </div>
        </div> */

    /* <Footer /> */

    /* <Link to="/" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a> */
    /* </div> */

    // </div>
  );
}

export default LoginPage;
