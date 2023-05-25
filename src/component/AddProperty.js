import React, { useState, useContext, useEffect } from "react";
import { FaBed, FaBath, FaCar, FaMapMarkerAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import "./AddProperty.css";
import { Modal, Collapse, Switch } from "antd";
import axios from "axios";
import { Formik, isEmptyArray } from "formik";
import NumberToWord from "../shared/NumberToWord";
import { AuthContext } from "../shared/context/auth-context";

import Chip from "@material-ui/core/Chip";

import {
  FaHome,
  FaHouseUser,
  FaUserFriends,
  FaWarehouse,
  FaRegBuilding,
  FaBuilding,
  FaStore,
  FaTv,
  FaSwimmingPool,
  FaTheaterMasks,
  FaWater,
  FaHouseDamage,
  FaRestroom,
  FaSquarespace,
  FaStoreAlt,
  FaShopify,
  FaWeight,
  FaUtensilSpoon,
  FaLandmark,
  FaBusinessTime,
  FaWifi,
  FaTools,
  FaDumpster,
  FaBook,
  FaHospital,
  FaMosque,
  FaHotel,
  FaSellcast,
} from "react-icons/fa";
import { Upload } from "antd";

const { Panel } = Collapse;

function AddProperty() {
  const auth = useContext(AuthContext);

  const regex = /^((\+92)?(0092)?(92)?(0)?)(3)([0-9]{9})$/gm;
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${year}-${month}-${day}`;
  const randomNumber = Math.floor(Math.random() * new Date().getTime());
  const onChange = (key) => {
    console.log(key);
  };
  const navigate = useNavigate();
  const byear = new Date().getFullYear() - 20;
  const years = Array.from(new Array(20), (val, index) => index + byear);

  const [propertyPurpose, setPropertyPurpose] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertySubType, setPropertySubType] = useState("");
  const [propertyPrimaryDetaile, setPropertyPrimaryDetaile] = useState([]);
  const [propertySecondaryDetaile, setPropertySecondaryDetaile] = useState([]);
  const [propertyServices, setPropertyServices] = useState([]);
  const [propertyEntertainment, setPropertyEntertainment] = useState([]);
  const [propertyNearByLandmarks, setPropertyNearByLandmarks] = useState([]);
  const [detail, setDetail] = useState("");
  const [count, setCount] = useState("1");
  const [selectedOption, setSelectedOption] = useState("");
  const [propertyImages, setPropertyImages] = useState([]);
  const [checkProperty, setCheckProperty] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [close, setClose] = useState(false);
  const [show, setShow] = useState(false);
  const [defaultImage, setDefaultImage] = useState(null);
  let purpose;
  const handleClose = () => setClose(true);
  const handleShow = () => setShow(true);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOkLoginModal = () => {
    setIsLoginModalOpen(false);
  };
  const handleCancelLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  const handlePrimaryDetails = (detailsType, detailsCount) => {
    if (detailsCount) {
      const existingDetail = propertyPrimaryDetaile.find(
        (detail) => detail.detailType === detailsType
      );

      if (existingDetail) {
        existingDetail.detailTypeCount = detailsCount;
        setPropertyPrimaryDetaile([...propertyPrimaryDetaile]);
      } else {
        const newDetail = {
          detailType: detailsType,
          detailTypeCount: detailsCount,
        };
        setPropertyPrimaryDetaile((prevDetails) => [...prevDetails, newDetail]);
      }
    } else {
      setPropertyPrimaryDetaile((prevDetails) =>
        prevDetails.filter((d) => d.detailType !== detailsType)
      );
      setSelectedOption((prevDetail) =>
        prevDetail.filter((d) => d !== detailsType)
      );
    }
  };

  const handlePrimaryWithoutCountDetails = (detailType, detailTypeCount) => {
    const existingDetail = propertyPrimaryDetaile.find(
      (detail) => detail.detailType === detailType
    );

    if (existingDetail) {
      setPropertyPrimaryDetaile((prevDetails) =>
        prevDetails.filter((detail) => detail.detailType !== detailType)
      );
    } else {
      const newDetail = {
        detailType: detailType,
        detailTypeCount: detailTypeCount,
      };
      setPropertyPrimaryDetaile((prevDetails) => [...prevDetails, newDetail]);
    }
  };

  const handleSecondaryDetails = (detailtype) => {
    if (propertySecondaryDetaile.includes(detailtype)) {
      setPropertySecondaryDetaile((prevDetails) =>
        prevDetails.filter((f) => f !== detailtype)
      );
    } else {
      setPropertySecondaryDetaile((prevDetails) => [
        ...prevDetails,
        detailtype,
      ]);
    }
  };

  useEffect(() => {
    console.log(propertySecondaryDetaile);
  }, [propertySecondaryDetaile]);

  const handleServices = (propertyService) => {
    if (propertyServices.includes(propertyService)) {
      setPropertyServices((prevService) =>
        prevService.filter((f) => f !== propertyService)
      );
    } else {
      setPropertyServices((prevService) => [...prevService, propertyService]);
    }
  };
  useEffect(() => {
    console.log(propertyServices);
  }, [propertyServices]);

  const handleEntertainment = (entertainmentService) => {
    if (propertyEntertainment.includes(entertainmentService)) {
      setPropertyEntertainment((prevDetails) =>
        prevDetails.filter((f) => f !== entertainmentService)
      );
    } else {
      setPropertyEntertainment((prevDetails) => [
        ...prevDetails,
        entertainmentService,
      ]);
    }
  };
  useEffect(() => {
    console.log(propertyEntertainment);
  }, [propertyEntertainment]);

  const handleNearByLandmarks = (nearByLandmarks) => {
    if (propertyNearByLandmarks.includes(nearByLandmarks)) {
      setPropertyNearByLandmarks((prevDetails) =>
        prevDetails.filter((f) => f !== nearByLandmarks)
      );
    } else {
      setPropertyNearByLandmarks((prevDetails) => [
        ...prevDetails,
        nearByLandmarks,
      ]);
    }
  };
  useEffect(() => {
    console.log(propertyNearByLandmarks);
  }, [propertyNearByLandmarks]);

  const handleCount = (event) => {
    setCount(event.target.value);

    if (event.target.value) {
      setSelectedOption((prevDetails) => [...prevDetails, detail]);
      handlePrimaryDetails(detail, event.target.value);
    } else {
      setSelectedOption((prevDetails) => [...prevDetails, ""]);
      handlePrimaryDetails(detail, event.target.value);
    }
  };

  const handleDelete = (chipToDelete) => () => {
    let exist;
    console.log(chipToDelete);
    setPropertyPrimaryDetaile((prevChips) =>
      prevChips.filter((c) => c.detailType !== chipToDelete)
    );

    propertySecondaryDetaile.forEach((detail, i) => {
      setPropertySecondaryDetaile((prevChips) =>
        prevChips.filter((c) => c.detailType !== chipToDelete)
      );

      if (detail === chipToDelete) {
        propertySecondaryDetaile.splice(i, 1);
        exist = true;
        return true; // stop searching
      }
      return exist;
    });
    propertyServices.forEach((service, i) => {
      if (service === chipToDelete) {
        propertyServices.splice(i, 1);
        exist = true;
        return true; // stop searching
      }
      return exist;
    });
    propertyEntertainment.forEach((entertainment, i) => {
      // console.log(detail, propertyEntertainment[i]);
      if (entertainment === chipToDelete) {
        propertyEntertainment.splice(i, 1);
        exist = true;
        return true; // stop searching
      }
      return exist;
    });
    propertyNearByLandmarks.forEach((landmark, i) => {
      if (landmark === chipToDelete) {
        propertyNearByLandmarks.splice(i, 1);
        exist = true;
        window.location.reload();
        return true; // stop searching
      }
      return exist;
    });

    console.log(propertyPrimaryDetaile);
    console.log(propertySecondaryDetaile);
    console.log(propertyServices);
    console.log(propertyNearByLandmarks);
  };
  const uploadHandle = ({ fileList }) => {
    if (fileList.length === 0) {
      // If no file is uploaded, set the default image
      fileList.push({ url: "./img/test1.jpg" });
      console.log(fileList);
    }
    setPropertyImages(fileList);
    setCheckProperty(true);
  };

  // const uploadHandle = ({ fileList }) => {
  //   console.log(fileList);
  //   setPropertyImages(fileList);
  //   console.log(propertyImages);
  //   if (fileList.length > 0) {
  //     setCheckProperty(true);
  //     console.log(checkProperty, "2");
  //   }
  // };

  const handleBeforeUpload = ({ fileList }) => {
    if (fileList.length === 0) {
      // If no file is selected, set the default image
      setDefaultImage("./img/test1.jpg");
      setPropertyImages([{ url: "./img/test1.jpg" }]);
      console.log(propertyImages);
      return false; // Prevent file upload
    }
    // Continue with the file upload
    return true;
  };
  return (
    <div>
      <div class=" py-5">
        <div class="container">
          <div class="row g-7" className="main" style={{ marginBottom: "10%" }}>
            <Formik
              initialValues={{
                propertypurpose: "",
                propertytype: "",
                propertysubtype: "",
                propertysize: 0,
                propertysizetype: "",
                propertyprice: 0,
                propertytitle: "",
                propertydescription: "",
                propertylocation: "",
                propertybuiltyear: "",
                permalink: "",
                propertynoofbedroom: 0,
                propertynoofbathroom: 0,
                propertynoofcarparking: 0,
                images: [],
                propertyPrimaryDetaile: [],
                propertySecondaryDetaile: [],
                propertyServices: [],
                propertyEntertainment: [],
                propertyNearByLandmarks: [],
                numberoffloors: "",
                unitfloor: "",
                name: "",
                phonenumber: "",
                featured: false,
                verified: false,
                userId: auth?.userId,
                propertyaddeddate: formattedDate,
              }}
              validate={(values) => {
                const errors = {};
                if (!values.propertypurpose) {
                  errors.propertypurpose = "Property Purpose Required";
                }

                if (!values.propertytype) {
                  errors.propertytype = "Property Type Required";
                }
                if (!values.propertysubtype) {
                  errors.propertysubtype = "Required";
                }
                if (!values.propertysize) {
                  errors.propertysize = "Property Size Required";
                }
                if (values.propertysizetype === "") {
                  errors.propertysizetype = "Size Type Required";
                }
                if (!values.propertyprice) {
                  errors.propertyprice = "Property Price Required";
                }
                if (!values.propertytitle) {
                  errors.propertytitle = "Property Title Required";
                }
                if (!values.propertydescription) {
                  errors.propertydescription = "Property Description Required";
                }
                if (!values.propertylocation) {
                  errors.propertylocation = "Property Location Required";
                }
                if (!values.phonenumber) {
                  errors.phonenumber = "Required";
                } else if (!regex.test(values.phonenumber)) {
                  errors.phonenumber = "Invalid Phone No";
                }
                if (!values.name) {
                  errors.name = "Required";
                }

                return errors;
              }}
              onSubmit={(values, actions) => {
                console.log(values);
                const permalinkstring =
                  values.propertytitle.replace(/\s+/g, "-") + randomNumber;
                // sessionStorage.setItem(permalinkstring, JSON.stringify(values));
                const formData = new FormData();
                formData.append("propertypurpose", values.propertypurpose);
                formData.append("propertytype", values.propertytype);
                formData.append("propertysubtype", values.propertysubtype);
                formData.append("propertysize", values.propertysize);
                formData.append("propertysizetype", values.propertysizetype);
                formData.append("propertyprice", values.propertyprice);
                formData.append("propertytitle", values.propertytitle);
                formData.append(
                  "propertydescription",
                  values.propertydescription
                );
                formData.append("propertylocation", values.propertylocation);
                formData.append("propertybuiltyear", values.propertybuiltyear);
                formData.append(
                  "permalink",
                  (values.permalink = permalinkstring)
                );

                formData.append(
                  "propertynoofbedroom",
                  values.propertynoofbedroom
                );
                formData.append(
                  "propertynoofbathroom",
                  values.propertynoofbathroom
                );
                formData.append(
                  "propertynoofcarparking",
                  values.propertynoofcarparking
                );
                propertyPrimaryDetaile.map((detail) => {
                  formData.append(
                    "propertyPrimaryDetaile",
                    JSON.stringify(detail)
                  );
                });
                propertySecondaryDetaile.map((detail) => {
                  formData.append(
                    "propertySecondaryDetaile",
                    (values.propertySecondaryDetaile = detail)
                  );
                });

                propertyServices.map((servise) => {
                  formData.append(
                    "propertyServices",
                    (values.propertyServices = servise)
                  );
                });

                propertyEntertainment.map((entertainment) => {
                  formData.append(
                    "propertyEntertainment",
                    (values.propertyEntertainment = entertainment)
                  );
                });

                propertyNearByLandmarks.map((nearby) => {
                  formData.append(
                    "propertyNearByLandmarks",
                    (values.propertyNearByLandmarks = nearby)
                  );
                });

                formData.append("numberoffloors", values.numberoffloors);
                formData.append("unitfloor", values.unitfloor);
                formData.append("name", values.name);
                formData.append("phonenumber", values.phonenumber);
                formData.append("featured", (values.featured = false));
                formData.append("userId", values?.userId);
                formData.append("propertyaddeddate", values?.propertyaddeddate = formattedDate);
                propertyImages.map((image) => {
                  formData.append("images", image.originFileObj);
                });
                console.log(formData);
                console.log(isLoggedIn);

                if (isLoggedIn === false) {
                  setIsLoginModalOpen(true);
                  // Modal.info({
                  //   width: "500px",
                  //   title: "You are Not Logged Plz LogIn First",
                  //   // footer: null,
                  //   // content: (
                  //   //   <div>
                  //   //     <Formik
                  //   //       initialValues={{ phoneno: "", password: "" }}
                  //   //       validate={(values) => {
                  //   //         const errors = {};
                  //   //         if (!values.phoneno) {
                  //   //           errors.phoneno = "Required";
                  //   //         } else if (!regex.test(values.phoneno)) {
                  //   //           errors.phoneno = "Invalid Phone No";
                  //   //         } else if (regex.test(values.phoneno)) {
                  //   //           errors.phoneno = "Valid Phone No";
                  //   //         }

                  //   //         if (!values.password) {
                  //   //           errors.password = "Required";
                  //   //         }
                  //   //         console.log(errors);
                  //   //         return errors;
                  //   //       }}
                  //   //       onSubmit={async (values, { setSubmitting }) => {
                  //   //         handleClose();
                  //   //         try {
                  //   //           console.log(values);
                  //   //           const response = await axios({
                  //   //             method: "post",
                  //   //             url: `http://localhost:5000/auth/login`,
                  //   //             data: {
                  //   //               phoneno: values.phoneno,
                  //   //               password: values.password,
                  //   //             },
                  //   //           });
                  //   //           auth.login(
                  //   //             response.data.userId,
                  //   //             response.data.token
                  //   //           );
                  //   //           console.log(response);
                  //   //           console.log(auth);
                  //   //           if (response.status === 200) {
                  //   //             setIsLoggedIn(true);
                  //   //             alert("User Login Successfully!");
                  //   //             Modal.success({
                  //   //               title: "User Login Successfully!",
                  //   //             });
                  //   //             handleClose();
                  //   //             // navigate(`/${response.data.userId}`);
                  //   //           }
                  //   //         } catch (err) {
                  //   //           const messsage = err.response.data.message;
                  //   //           Error(
                  //   //             messsage ||
                  //   //               "Something went wrong,Please try again!"
                  //   //           );
                  //   //           console.log(
                  //   //             err.response.data.message,
                  //   //             err.response.status
                  //   //           );
                  //   //           alert(
                  //   //             err.response.data.message,
                  //   //             err.response.status
                  //   //           );
                  //   //         }
                  //   //         setSubmitting(false);

                  //   //         // setTimeout(() => {
                  //   //         //   alert(JSON.stringify(values, null, 2));
                  //   //         //   setSubmitting(false);
                  //   //         // }, 400);
                  //   //       }}
                  //   //     >
                  //   //       {({
                  //   //         values,
                  //   //         errors,
                  //   //         touched,
                  //   //         handleChange,
                  //   //         handleBlur,
                  //   //         handleSubmit,
                  //   //         isSubmitting,
                  //   //         /* and other goodies */
                  //   //       }) => (
                  //   //         <form
                  //   //           onSubmit={handleSubmit}
                  //   //           id="editmodal"
                  //   //           className="w-full max-w-sm"
                  //   //         >
                  //   //           <div
                  //   //             className="md:flex md:items-center mb-6"
                  //   //             style={{ paddingTop: "40px", width: "400px" }}
                  //   //           >
                  //   //             <div
                  //   //               class="col-12"
                  //   //               style={{ marginBottom: "20px" }}
                  //   //             >
                  //   //               <div class="form-floating">
                  //   //                 <input
                  //   //                   type="text"
                  //   //                   name="phoneno"
                  //   //                   // id="phone_no"
                  //   //                   class="form-control"
                  //   //                   placeholder="Your Phone No"
                  //   //                   onChange={handleChange}
                  //   //                   onBlur={handleBlur}
                  //   //                   value={values.phoneno}
                  //   //                 />
                  //   //                 <p style={{ color: "red" }}>
                  //   //                   {errors.phoneno &&
                  //   //                     touched.phoneno &&
                  //   //                     errors.phoneno}
                  //   //                 </p>
                  //   //                 <label for="phone_no">Your Phone No</label>
                  //   //               </div>
                  //   //             </div>
                  //   //             <div
                  //   //               class="col-12"
                  //   //               style={{
                  //   //                 paddingTop: "20px",
                  //   //                 paddingBottom: "20px",
                  //   //               }}
                  //   //             >
                  //   //               <div class="form-floating">
                  //   //                 <input
                  //   //                   type="password"
                  //   //                   name="password"
                  //   //                   class="form-control"
                  //   //                   id="password"
                  //   //                   placeholder="Your Password"
                  //   //                   onChange={handleChange}
                  //   //                   onBlur={handleBlur}
                  //   //                   value={values.password}
                  //   //                 />
                  //   //                 <p style={{ color: "red" }}>
                  //   //                   {errors.password &&
                  //   //                     touched.password &&
                  //   //                     errors.password}
                  //   //                 </p>
                  //   //                 <label for="password">Your Password</label>
                  //   //               </div>
                  //   //             </div>
                  //   //             <div
                  //   //               class="col-12"
                  //   //               style={{ paddingTop: "60px" }}
                  //   //             >
                  //   //               <p style={{ textalign: "center" }}>
                  //   //                 Don't have an account?
                  //   //                 <a
                  //   //                   href="/signup "
                  //   //                   style={{ marginLeft: "20px" }}
                  //   //                 >
                  //   //                   SignUp
                  //   //                 </a>
                  //   //                 <a
                  //   //                   href="/forgetpassword "
                  //   //                   style={{ marginLeft: "70px" }}
                  //   //                 >
                  //   //                   Forget Password?
                  //   //                 </a>
                  //   //               </p>
                  //   //             </div>
                  //   //             <div
                  //   //               class="col-12"
                  //   //               style={{
                  //   //                 paddingTop: "20px",
                  //   //                 paddingBottom: "30px",
                  //   //               }}
                  //   //             >
                  //   //               {/* <Link to="/addproperty"> */}
                  //   //               <button
                  //   //                 class="btn btn-primary w-100 py-3"
                  //   //                 type="submit"
                  //   //                 disabled={isSubmitting}
                  //   //                 // onClick={handleClick}
                  //   //               >
                  //   //                 Login
                  //   //               </button>
                  //   //               {/* </Link> */}
                  //   //             </div>
                  //   //           </div>
                  //   //         </form>
                  //   //       )}
                  //   //     </Formik>
                  //   //   </div>
                  //   // ),
                  //   // centered: true,
                  //   // maskClosable: true,
                  //   cancelText: "No",
                  //   okText: "LogIn",
                  //   okType: "primary",
                  //   closeIcon: <CustomCloseIcon />,
                  //   onOk: async () => {()=>{showModal}},
                  // });
                } else if (isLoggedIn === true) {
                  return Modal.confirm({
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
                          url: `http://localhost:5000/property/addproperty`,
                          data: formData,
                          // {
                          //   propertypurpose: values.propertypurpose,
                          //   propertytype: values.propertytype,
                          //   propertysubtype: values.propertysubtype,
                          //   propertysize: values.propertysize,
                          //   propertysizetype: values.propertysizetype,
                          //   propertyprice: values.propertyprice,
                          //   propertytitle: values.propertytitle,
                          //   propertydescription: values.propertydescription,
                          //   propertylocation: values.propertylocation,
                          //   propertybuiltyear: values.propertybuiltyear,
                          //   propertynoofbedroom: values.propertynoofbedroom,
                          //   propertynoofbathroom: values.propertynoofbathroom,
                          //   propertynoofcarparking: values.propertynoofcarparking,
                          //   images: values.images = propertyImages,
                          //   propertyPrimaryDetaile: values.propertyPrimaryDetaile = propertyPrimaryDetaile,
                          //   propertySecondaryDetaile: values.propertySecondaryDetaile = propertySecondaryDetaile,
                          //   propertyServices: values.propertyServices = propertyServices,
                          //   propertyEntertainment: values.propertyEntertainment = propertyEntertainment,
                          //   propertyNearByLandmarks: values.propertyNearByLandmarks = propertyNearByLandmarks,
                          //   numberoffloors: values.numberoffloors,
                          //   unitfloor: values.unitfloor,
                          // },
                          headers: {
                            "Content-Type": "multipart/form-data",
                          },
                        });

                        console.log(response);

                        if (response.status === 200) {
                          alert(
                            "Property Added Successfully!",
                            response.data.message
                          );
                          console.log(response.data);
                          navigate(`/`);
                          // Modal.success({
                          //   title: "User Added Successfully!",
                          // });
                          // navigate(`/addproperty`);
                        }
                      } catch (err) {
                        const message = err.response.data.message || "error";
                        Error(
                          message || "Something went wrong,Please try again!"
                        );
                        console.log(
                          err.response.data.message,
                          err.response.status
                        );
                        // alert(err.response.data.message, err.response.status);
                      }
                    },
                  });
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
              }) => (
                <div>
                  <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div
                      // classname="col-12"
                      className="add_property"
                      // style={{ borderRight: "1px solid", width: "60%" }}
                    >
                      <h3 style={{ paddingBottom: "10px" }}>Add Property</h3>

                      {/* {(() => {
                      if (next === 0) {
                        return ( */}
                      <div class="wow fadeInUp" data-wow-delay="0.5s">
                        <div class="row g-4">
                          <h6 style={{ paddingTop: "10px" }}>
                            Select the purpose of adding your property
                          </h6>
                          {/* <input type='button' value={values.name}/> */}

                          <button
                            name="propertypurpose"
                            className={
                              values.propertypurpose == "sale"
                                ? "property_purpose1 col-3"
                                : "property_purpose col-3"
                            }
                            // className="property_purpose"
                            type="button"
                            // onClick={() => {
                            //   setPropertyPurpose("Sell");
                            //   console.log(propertyPurpose);
                            // }}
                            // onChange={(e) => {setPropertyPurpose(e)}}
                            onClick={() => {
                              purpose = "sell";
                              setPropertyPurpose("sale");
                              console.log(propertyPurpose);
                              console.log(values);
                            }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={(values.propertypurpose = propertyPurpose)}
                          >
                            <FaSellcast size={25} />
                            Sell
                          </button>
                          <button
                            name="propertypurpose"
                            className={
                              values.propertypurpose == "rent"
                                ? "property_purpose1 "
                                : "property_purpose "
                            }
                            type="button"
                            // onChange={() => setPropertyPurpose('rent')}
                            onClick={() => {
                              console.log(values);
                              purpose = "rent";
                              setPropertyPurpose("rent");
                              console.log(propertyPurpose);
                              console.log(values);
                            }}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={(values.propertypurpose = propertyPurpose)}
                          >
                            <FaUserFriends size={25} />
                            Rent
                          </button>
                        </div>
                        <p style={{ color: "red" }}>
                          {errors.propertypurpose &&
                            touched.propertypurpose &&
                            errors.propertypurpose}
                        </p>
                      </div>
                      {/* );
                      } else if (next === 1) {
                        return ( */}
                      <div class="wow fadeInUp" data-wow-delay="0.5s">
                        <h6 style={{ paddingTop: "80px" }}>
                          Select the Type of Property
                        </h6>
                        <div
                          class="row g-5"
                          style={{ paddingTop: "20px", paddingLeft: "40px" }}
                        >
                          <button
                            // class="col-xs-4 col-sm-4 col-md-4 col-lg-4"
                            class="col-3"
                            className={
                              values.propertytype === "residential"
                                ? "property_type1"
                                : "property_type"
                            }
                            // className="property_type"
                            name="propertytType"
                            type="button"
                            onClick={() => {
                              // propertyType = 'residential'
                              setPropertyType("residential");
                            }}
                            onChange={(e) => {
                              // setPropertyType('residential')
                              // console.log(propertyType);
                            }}
                            onBlur={handleBlur}
                            value={(values.propertytype = propertyType)}
                          >
                            Residential
                          </button>
                          <button
                            class="col-3"
                            name="propertytype"
                            className={
                              values.propertytype === "plot"
                                ? "property_type1"
                                : "property_type"
                            }
                            // className="property_type"
                            type="button"
                            onClick={() => {
                              // propertyType = 'plot'
                              setPropertyType("plot");
                            }}
                            onChange={(e) => {
                              // setPropertyType('residential')
                            }}
                            onBlur={handleBlur}
                            value={(values.propertytype = propertyType)}
                          >
                            Plot
                          </button>
                          <button
                            class="col-3"
                            name="propertytype"
                            className={
                              values.propertytype === "commercial"
                                ? "property_type1"
                                : "property_type"
                            }
                            // className="property_type"
                            type="button"
                            onClick={() => {
                              // propertyType = 'commercial'
                              setPropertyType("commercial");
                            }}
                            onChange={(e) => {
                              // setPropertyType('residential')
                            }}
                            onBlur={handleBlur}
                            value={(values.propertytype = propertyType)}
                          >
                            Commercial
                          </button>
                          <p style={{ color: "red" }}>
                            {errors.propertytype &&
                              touched.propertytype &&
                              errors.propertytype}
                          </p>
                        </div>
                      </div>
                      {/* );
                      } else if (next === 2) { */}
                      {(() => {
                        if (propertyType === "residential") {
                          return (
                            <div class="wow fadeInUp" data-wow-delay="0.5s">
                              <div
                                class="row g-4"
                                style={{
                                  paddingTop: "10px",
                                }}
                              >
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "house"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("house");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaHome size={25} />
                                  House
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "guest house"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("guest house");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaHouseUser size={25} />
                                  Guest House
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "flat"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("flat");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaBuilding size={25} />
                                  Flat
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "hostel"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("hostel");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaBuilding size={25} />
                                  Hostel
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "upper portion"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("upper portion");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaHouseDamage size={25} />
                                  Upper Portion
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "lower portion"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("lower portion");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaHouseDamage size={25} />
                                  Lower Portion
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "room"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("room");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaRestroom size={25} />
                                  Room
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "farm house"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("farm house");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaHouseUser size={25} />
                                  Farm House
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "penthouse"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("penthouse");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaRegBuilding size={25} />
                                  Pent House
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "hotel suites"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("hotel suites");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaHotel size={25} />
                                  Hotel Suites
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "basement"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("basement");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaSquarespace size={25} />
                                  Basement
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "annex"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("annex");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaStoreAlt size={25} />
                                  Anexxe
                                </button>
                              </div>
                              <p style={{ color: "red" }}>
                                {errors.propertysubtype &&
                                  touched.propertysubtype &&
                                  errors.propertysubtype}
                              </p>
                            </div>
                          );
                        } else if (propertyType === "plot") {
                          return (
                            <div class="wow fadeInUp" data-wow-delay="0.5s">
                              <div
                                class="row g-4"
                                style={{ paddingTop: "10px" }}
                              >
                                {/* <h6>Select the property Subtype</h6> */}
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype ===
                                    "residential plot"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("residential plot");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaHome size={25} />
                                  Residential Plot
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "commercial plot"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("commercial plot");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaHouseUser size={25} />
                                  Commercial Plot
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype ===
                                    "agricultural land"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("agricultural land");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaBuilding size={25} />
                                  Agricultural Land
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "industrial land"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("industrial land");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaBuilding size={25} />
                                  Industrial Land
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "plot file"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("plot file");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaHouseDamage size={25} />
                                  Plot File
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "farmhouse plot"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("farmhouse plot");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaHouseDamage size={25} />
                                  Farmhouse Plot
                                </button>
                              </div>
                              <p style={{ color: "red" }}>
                                {errors.propertysubtype &&
                                  touched.propertysubtype &&
                                  errors.propertysubtype}
                              </p>
                            </div>
                          );
                        } else if (propertyType === "commercial") {
                          return (
                            <div class="wow fadeInUp" data-wow-delay="0.5s">
                              <div
                                class="row g-4"
                                style={{ paddingTop: "10px" }}
                              >
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "office"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("office");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaHome size={25} />
                                  Office
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "shop"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("shop");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaShopify size={25} />
                                  Shop
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "warehouse"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("warehouse");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaWarehouse size={25} />
                                  Warehouse
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "factory"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("factory");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaBuilding size={25} />
                                  Factory
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "building"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("building");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaBuilding size={25} />
                                  Building
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "gym"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("gym");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaWeight size={25} />
                                  Gym
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "theatre"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("theatre");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaTheaterMasks size={25} />
                                  Theatre
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "food court"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("food court");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaUtensilSpoon size={25} />
                                  Food Court
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "hall"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("hall");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaRegBuilding size={25} />
                                  Hall
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "land"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("land");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaLandmark size={25} />
                                  Land
                                </button>
                                <button
                                  class="col-3"
                                  name="propertysubtype"
                                  className={
                                    values.propertysubtype === "plaza"
                                      ? "property_subtype1"
                                      : "property_subtype"
                                  }
                                  type="button"
                                  onClick={() => {
                                    setPropertySubType("plaza");
                                  }}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  value={
                                    (values.propertysubtype = propertySubType)
                                  }
                                >
                                  <FaBusinessTime size={25} />
                                  Plaza
                                </button>

                                <div style={{ height: "10px" }}></div>
                              </div>
                              <p style={{ color: "red" }}>
                                {errors.propertysubtype &&
                                  touched.propertysubtype &&
                                  errors.propertysubtype}
                              </p>
                            </div>
                          );
                        }
                      })()}

                      {/*  } else if (next === 3) {
                        return ( */}
                      <div
                        //  class="container-xxl "
                        className="size_price py-5"
                      >
                        <div
                          // class="container"
                          style={{ paddingTop: "10px" }}
                        >
                          <h6>Add the size and price of your property</h6>
                          <br></br>
                          <div class="row g-4">
                            <div class="col-md-12">
                              <div class="wow fadeInUp" data-wow-delay="0.5s">
                                <div class="row g-3 ">
                                  <div class="col-12">
                                    <div
                                      class="form-floating"
                                      style={{ display: "flex" }}
                                    >
                                      <input
                                        type="number"
                                        class="form-control"
                                        required
                                        id="propertysize"
                                        name="propertysize"
                                        placeholder="Enter Size"
                                        // onChange={(e) =>
                                        //   setPropertySize(e.target.value)
                                        // }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.propertysize}
                                      />

                                      <label for="propertysize">
                                        Enter Size:
                                      </label>
                                      <select
                                        name="propertysizetype"
                                        style={{
                                          color: "#2E307D",
                                          borderTopRightRadius: "5px",
                                          borderBottomRightRadius: "5px",
                                          // borderRadius: "10px",
                                          border: "1px solid #CED4DA",
                                          // paddingRight:"50px"
                                        }}
                                        placeholder="Choose size type."
                                        // onChange={(e) =>
                                        //   setPropertySizeType(
                                        //     e.target.value
                                        //   )
                                        // }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.propertysizetype}
                                      >
                                        <option value="">Select</option>
                                        <option value="Marla">Marla</option>
                                        <option value="feet">Feet</option>
                                        <option value="yard">Yard</option>
                                        <option value="meter">Meter</option>
                                        <option value="kanal">Kanal</option>
                                      </select>
                                    </div>
                                    <p style={{ color: "red" }}>
                                      {(errors.propertysize &&
                                        touched.propertysize &&
                                        errors.propertysize) ||
                                        (errors.propertysizetype &&
                                          touched.propertysizetype &&
                                          errors.propertysizetype)}
                                    </p>
                                  </div>
                                  <div class="col-12">
                                    <div class="form-floating">
                                      <input
                                        type="number"
                                        class="form-control"
                                        id="propertyprice"
                                        name="propertyprice"
                                        placeholder="Price"
                                        // onChange={
                                        //   (e) =>
                                        //     setPropertyPrice(
                                        //       e.target.value
                                        //     )
                                        //   // inWords(propertyPrice)
                                        // }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.propertyprice}
                                      />
                                      <p style={{ color: "red" }}>
                                        {errors.propertyprice &&
                                          touched.propertyprice &&
                                          errors.propertyprice}
                                      </p>
                                      <label for="price">Price:</label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* );
                      } else if (next === 4) {
                        return ( */}
                      <div
                        // container-xxl

                        class="title_description py-5"
                      >
                        <div
                        // class="container"
                        >
                          <h6>Add title and description of your property</h6>

                          <div class="row g-4">
                            <div class="col-md-12">
                              <div class="wow fadeInUp" data-wow-delay="0.5s">
                                <div class="row g-3">
                                  <div class="col-12">
                                    <div class="form-floating">
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="propertytitle"
                                        name="propertytitle"
                                        placeholder="Title"
                                        // onChange={(e) =>
                                        //   setPropertyTitle(e.target.value)
                                        // }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.propertytitle}
                                      />
                                      <p style={{ color: "red" }}>
                                        {errors.propertytitle &&
                                          touched.propertytitle &&
                                          errors.propertytitle}
                                      </p>
                                      <label for="propertytitle">Title:</label>
                                    </div>
                                  </div>
                                  <div class="col-12">
                                    <div class="form-floating">
                                      <textarea
                                        type="text"
                                        rows="7"
                                        class="form-control"
                                        id="propertydescription"
                                        name="propertydescription"
                                        placeholder="Description"
                                        style={{ height: "200px" }}
                                        // onChange={(e) =>
                                        //   setPropertyDescription(
                                        //     e.target.value
                                        //   )
                                        // }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.propertydescription}
                                      ></textarea>
                                      <p style={{ color: "red" }}>
                                        {errors.propertydescription &&
                                          touched.propertydescription &&
                                          errors.propertydescription}
                                      </p>
                                      <label for="propertydescription">
                                        Description:
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* );
                      } else if (next === 5) {
                        return ( */}
                      <div
                        // container-xxl
                        class="location py-5"
                      >
                        <div
                        // class="container"
                        >
                          <h6>Add the location of your property</h6>

                          <div class="row g-4">
                            <div class="col-md-12">
                              <div class="wow fadeInUp" data-wow-delay="0.5s">
                                <div class="row g-3">
                                  <div class="col-12">
                                    <div class="form-floating">
                                      <input
                                        type="text"
                                        class="form-control"
                                        id="propertylocation"
                                        name="propertylocation"
                                        placeholder="Location"
                                        // onChange={(e) =>
                                        //   setPropertyLocation(
                                        //     e.target.value
                                        //   )
                                        // }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.propertylocation}
                                      />
                                      <p style={{ color: "red" }}>
                                        {errors.propertylocation &&
                                          touched.propertylocation &&
                                          errors.propertylocation}
                                      </p>
                                      <label for="propertylocation">
                                        Location:
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* );
                      } else if (next === 6) {
                        return ( */}
                      <div
                        // container-xxl
                        class="year_built py-5"
                      >
                        <div
                        //  class="container"
                        >
                          <div class="row g-4">
                            <div class="col-md-12">
                              <div class="wow fadeInUp" data-wow-delay="0.5s">
                                <div class="row g-3">
                                  <button
                                    class="col-3"
                                    name="propertynoofcarparking"
                                    className="numberofbedroom"
                                    type="button"
                                    onClick={() => {}}
                                  >
                                    <b>No.of Bedrooms</b>
                                    <select
                                      className="numberofbedroomcounter"
                                      name="propertynoofbedroom"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.propertynoofbedroom}
                                    >
                                      <option value="0">0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10+">10+</option>
                                    </select>
                                  </button>
                                  <button
                                    class="col-3"
                                    name="propertynoofcarparking"
                                    className="numberofbedroom"
                                    type="button"
                                    onClick={() => {}}
                                  >
                                    <b>No.of Bathrooms</b>
                                    <select
                                      className="numberofbedroomcounter"
                                      name="propertynoofbathroom"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.propertynoofbathroom}
                                    >
                                      <option value="0">0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10+">10+</option>
                                    </select>
                                  </button>
                                  <button
                                    class="col-3"
                                    name="propertynoofcarparking"
                                    className="numberofbedroom"
                                    type="button"
                                    onClick={() => {}}
                                  >
                                    <b>No.of Car Parking</b>
                                    <select
                                      className="numberofbedroomcounter"
                                      name="propertynoofcarparking"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.propertynoofcarparking}
                                    >
                                      <option value="0">0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                      <option value="6">6</option>
                                      <option value="7">7</option>
                                      <option value="8">8</option>
                                      <option value="9">9</option>
                                      <option value="10+">10+</option>
                                    </select>
                                  </button>

                                  <div className="counter"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="cover_image py-5">
                        <div>
                          <h6>
                            Add Images and Select thecover Image of your
                            property
                          </h6>

                          <div class="row g-4">
                            <div class="col-md-12">
                              <div class="wow fadeInUp" data-wow-delay="0.5s">
                                <div>
                                  <Upload.Dragger
                                    multiple
                                    accept=".png,.jpg,.jpeg"
                                    onChange={uploadHandle}
                                    beforeUpload={handleBeforeUpload}
                                  >
                                    {defaultImage ? (
                                      <img
                                        src={defaultImage}
                                        alt="Default"
                                        style={{
                                          width: "100%",
                                          height: "100%",
                                        }}
                                      />
                                    ) : (
                                      <>
                                        {/* <p className="ant-upload-drag-icon">
                                        <InboxOutlined />
                                      </p> */}
                                        <p className="ant-upload-text">
                                          Drag file here OR
                                          <br />
                                          <button
                                            className="btn btn-primary py-2"
                                            type="button"
                                          >
                                            Click Upload
                                          </button>
                                        </p>
                                      </>
                                    )}
                                  </Upload.Dragger>

                                  <br />
                                  <br />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="wow fadeInUp" data-wow-delay="0.5s">
                          <div class="row g-4" style={{ paddingTop: "30px" }}>
                            <h5>Add details about your property</h5>
                            <button
                              type="button"
                              style={{
                                backgroundColor: "#EFFDF5",
                                border: "none",
                                textAlign: "left",
                                fontSize: "20px",
                                color: "#2E307D",
                              }}
                              onClick={showModal}
                            >
                              + Add Details
                            </button>
                            <Modal
                              title="Property Details"
                              open={isModalOpen}
                              onOk={handleOk}
                              onCancel={handleCancel}
                              width={750}
                              bodyStyle={{
                                height: "650px",
                                overflowY: "scroll",
                                marginLeft: "0px",
                                paddingLeft: "0px",
                              }}
                              okText={"Add"}
                              cancelText={"Back"}
                              footer={null}
                            >
                              <div>
                                {propertyPrimaryDetaile.length > 0 &&
                                  propertyPrimaryDetaile?.map((detail) => (
                                    <Chip
                                      label={`${detail.detailType} ${detail.detailTypeCount}`}
                                      style={{
                                        backgroundColor: "#2E307D",
                                        color: "#ffffff",
                                        padding: "20px",
                                        marginRight: "10px",
                                        marginBottom: "10px",
                                        borderRadius: "10px",
                                      }}
                                      onDelete={handleDelete(detail.detailType)}
                                    />
                                  ))}
                                {propertySecondaryDetaile.length > 0 &&
                                  propertySecondaryDetaile?.map((detail) => (
                                    <Chip
                                      label={detail}
                                      style={{
                                        backgroundColor: "#2E307D",
                                        color: "#ffffff",
                                        padding: "20px",
                                        marginRight: "10px",
                                        marginBottom: "10px",
                                        borderRadius: "10px",
                                      }}
                                      onDelete={handleDelete(detail)}
                                    />
                                  ))}
                                {propertyServices.length > 0 &&
                                  propertyServices?.map((service) => (
                                    <Chip
                                      label={service}
                                      style={{
                                        backgroundColor: "#2E307D",
                                        color: "#ffffff",
                                        padding: "20px",
                                        marginRight: "10px",
                                        marginBottom: "10px",
                                        borderRadius: "10px",
                                      }}
                                      onDelete={handleDelete(service)}
                                    />
                                  ))}
                                {propertyEntertainment.length > 0 &&
                                  propertyEntertainment?.map(
                                    (entertainmentService) => (
                                      <Chip
                                        label={entertainmentService}
                                        style={{
                                          backgroundColor: "#2E307D",
                                          color: "#ffffff",
                                          padding: "20px",
                                          marginRight: "10px",
                                          marginBottom: "10px",
                                          borderRadius: "10px",
                                        }}
                                        onDelete={handleDelete(
                                          entertainmentService
                                        )}
                                      />
                                    )
                                  )}
                                {propertyNearByLandmarks.length > 0 &&
                                  propertyNearByLandmarks?.map(
                                    (nearByLandmarks) => (
                                      <Chip
                                        label={nearByLandmarks}
                                        style={{
                                          backgroundColor: "#2E307D",
                                          color: "#ffffff",
                                          padding: "20px",
                                          marginRight: "10px",
                                          marginBottom: "10px",
                                          borderRadius: "10px",
                                        }}
                                        onDelete={handleDelete(nearByLandmarks)}
                                      />
                                    )
                                  )}
                              </div>

                              <Collapse
                                size="large"
                                /*defaultActiveKey={['1']}*/ onChange={onChange}
                                width={700}
                                style={{
                                  marginTop: "100px",
                                  marginLeft: "0px",
                                  paddingLeft: "0px",
                                }}
                              >
                                <Panel
                                  header="Primary Details"
                                  key="1"
                                  className="panel"
                                >
                                  <div className="counter_container">
                                    <button
                                      className={
                                        values.propertybuiltyear == ""
                                          ? "property_details"
                                          : "property_details1"
                                      }
                                      type="button"
                                    >
                                      Choose Built Year
                                      <select
                                        className="propertybuiltyear"
                                        name="propertybuiltyear"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.propertybuiltyear}
                                      >
                                        <option value="">Select</option>
                                        {(() => {
                                          return years.map((year, index) => {
                                            return (
                                              <option
                                                key={`year${index}`}
                                                value={year}
                                              >
                                                {year}
                                              </option>
                                            );
                                          });
                                        })()}
                                      </select>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      name="propertydetails"
                                      className={
                                        selectedOption?.includes("tv lounge")
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      // className={
                                      //   selectedOption === "tv lounge"
                                      //     ? "property_details1"
                                      //     : "property_details"
                                      // }
                                      type="button"
                                      onClick={() => {
                                        setDetail("tv lounge");

                                        console.log(propertyPrimaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaTv size={25} />
                                        TvLounge
                                      </p>

                                      <select
                                        className="propertydetailcounter"
                                        name="propertydetailcounter"
                                        onChange={handleCount}
                                        onBlur={handleBlur}
                                        value={values.propertydetailcounter}
                                      >
                                        <option selected value="">
                                          choose
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10+">10+</option>
                                      </select>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        selectedOption?.includes("store room")
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      // className={
                                      //   selectedOption === "store room"
                                      //     ? "property_details1"
                                      //     : "property_details"
                                      // }
                                      type="button"
                                      onClick={() => {
                                        setDetail("store room");
                                        // setpropertyPrimaryDetaile("store room");
                                        // setpropertyPrimaryDetaile(2);
                                        // handlePrimaryDetails("store room", 2);
                                        console.log(propertyPrimaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaStore size={25} />
                                        Store Room
                                      </p>

                                      <select
                                        // style={{marginLeft:"424px"}}
                                        className="propertydetailcounter"
                                        name="propertydetailcounter"
                                        onChange={handleCount}
                                        // onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.propertydetailcounter}
                                      >
                                        <option selected value="">
                                          choose
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10+">10+</option>
                                      </select>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        selectedOption?.includes("laundry room")
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      type="button"
                                      onClick={() => {
                                        setDetail("laundry room");
                                        // setpropertyPrimaryDetaile("laundry room");
                                        // handlePrimaryDetails("laundry room", 2);

                                        console.log(propertyPrimaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaBuilding size={25} />
                                        Laundry Room
                                      </p>
                                      {/* <Counter /> */}
                                      <select
                                        // style={{marginLeft:"404px"}}
                                        className="propertydetailcounter"
                                        name="propertydetailcounter"
                                        onChange={handleCount}
                                        onBlur={handleBlur}
                                        value={values.propertydetailcounter}
                                      >
                                        <option selected value="">
                                          choose
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10+">10+</option>
                                      </select>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        selectedOption?.includes("study room")
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      type="button"
                                      onClick={() => {
                                        setDetail("study room");
                                        // setpropertyPrimaryDetaile("study room");
                                        // handlePrimaryDetails("study room", 2);
                                        // setpropertyPrimaryDetaile.detaileTypeCount(1);

                                        console.log(propertyPrimaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaHouseUser size={25} />
                                        Study Room
                                      </p>
                                      {/* <Counter /> */}
                                      <select
                                        // style={{marginLeft:"420px"}}
                                        className="propertydetailcounter"
                                        name="propertydetailcounter"
                                        onChange={handleCount}
                                        onBlur={handleBlur}
                                        value={values.propertydetailcounter}
                                      >
                                        <option selected value="">
                                          choose
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10+">10+</option>
                                      </select>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        selectedOption?.includes("dining room")
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      type="button"
                                      onClick={() => {
                                        setDetail("dining room");
                                        // handlePrimaryDetails("dining room", 2);
                                        // setpropertyPrimaryDetaile("dining room");
                                        // setpropertyPrimaryDetaile.detaileTypeCount(1);

                                        console.log(propertyPrimaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaHouseUser size={25} />
                                        Dining Room
                                      </p>
                                      {/* <Counter /> */}
                                      <select
                                        // style={{marginLeft:"415px"}}
                                        className="propertydetailcounter"
                                        name="propertydetailcounter"
                                        onChange={handleCount}
                                        onBlur={handleBlur}
                                        value={values.propertydetailcounter}
                                      >
                                        <option selected value="">
                                          choose
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10+">10+</option>
                                      </select>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        selectedOption?.includes("drawing room")
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      type="button"
                                      onClick={() => {
                                        setDetail("drawing room");
                                        // handlePrimaryDetails("drawing room", 2);
                                        // console.log(propertyPrimaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaHouseUser size={25} />
                                        Drawing Room
                                      </p>
                                      {/* <Counter /> */}
                                      <select
                                        // style={{marginLeft:"402px"}}
                                        className="propertydetailcounter"
                                        name="propertydetailcounter"
                                        onChange={handleCount}
                                        onBlur={handleBlur}
                                        value={values.propertydetailcounter}
                                      >
                                        <option selected value="">
                                          choose
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10+">10+</option>
                                      </select>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        selectedOption?.includes("powder room")
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      type="button"
                                      onClick={() => {
                                        setDetail("powder room");
                                        // handlePrimaryDetails("powder room", 2);
                                        // setpropertyPrimaryDetaile("powder room");
                                        // setpropertyPrimaryDetaile.detaileTypeCount(1);

                                        console.log(propertyPrimaryDetaile);
                                      }}
                                    >
                                      <p>
                                        {" "}
                                        <FaHouseUser size={25} />
                                        Powder Room
                                      </p>
                                      {/* <Counter /> */}
                                      <select
                                        // style={{marginLeft:"408px"}}
                                        className="propertydetailcounter"
                                        name="propertydetailcounter"
                                        onChange={handleCount}
                                        onBlur={handleBlur}
                                        value={values.propertydetailcounter}
                                      >
                                        <option selected value="">
                                          choose
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10+">10+</option>
                                      </select>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        selectedOption?.includes("balcony")
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      type="button"
                                      onClick={() => {
                                        setDetail("balcony");
                                        // setpropertyPrimaryDetaile("balcony");
                                        // handlePrimaryDetails("balcony", 2);
                                        // setpropertyPrimaryDetaile.detaileTypeCount(1);

                                        // console.log(propertyPrimaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaHouseUser size={25} />
                                        Balcony
                                      </p>
                                      {/* <Counter /> */}
                                      <select
                                        // style={{marginLeft:"452px"}}
                                        className="propertydetailcounter"
                                        name="propertydetailcounter"
                                        onChange={handleCount}
                                        onBlur={handleBlur}
                                        value={values.propertydetailcounter}
                                      >
                                        <option selected value="">
                                          choose
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10+">10+</option>
                                      </select>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        selectedOption?.includes(
                                          "dirty kitchen"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      type="button"
                                      onClick={() => {
                                        setDetail("dirty kitchen");
                                      }}
                                    >
                                      <p>
                                        <FaHouseUser size={25} />
                                        DirtyKitchen
                                      </p>

                                      <select
                                        className="propertydetailcounter"
                                        name="propertydetailcounter"
                                        onChange={handleCount}
                                        onBlur={handleBlur}
                                        value={values.propertydetailcounter}
                                      >
                                        <option selected value="">
                                          choose
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10+">10+</option>
                                      </select>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        selectedOption?.includes("kitchen")
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      // className={
                                      //   selectedOption === "kitchen"
                                      //     ? "property_details1"
                                      //     : "property_details"
                                      // }
                                      type="button"
                                      onClick={() => {
                                        // setpropertyPrimaryDetaile("kitchen");
                                        setDetail("kitchen");
                                        // setpropertyPrimaryDetaile.detaileTypeCount(1);

                                        console.log(propertyPrimaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaHouseUser size={25} />
                                        Kitchen
                                      </p>
                                      {/* <Counter /> */}
                                      <select
                                        // style={{marginLeft:"456px"}}
                                        className="propertydetailcounter"
                                        name="propertydetailcounter"
                                        onChange={handleCount}
                                        onBlur={handleBlur}
                                        // onChange={((e) => setCount(e.target.value))}
                                        value={values.propertydetailcounter}
                                        // onClick={()=> {handlePrimaryDetails(detail,  count)}}
                                      >
                                        <option selected value="">
                                          choose
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10+">10+</option>
                                      </select>
                                    </button>
                                  </div>
                                </Panel>
                                <Panel header="Secondry Feature" key="2">
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertySecondaryDetaile?.includes(
                                          "swimming pool"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      // className="property_details"
                                      type="button"
                                      onClick={() => {
                                        // setpropertySecondaryDetaile("corner plot");
                                        handleSecondaryDetails("swimming pool");

                                        // setpropertySecondaryDetaile.detailTypeCount(1);

                                        console.log(propertySecondaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaSwimmingPool size={25} />
                                        Swimming Pool
                                      </p>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertySecondaryDetaile?.includes(
                                          "home theatre"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      // className="property_details"
                                      type="button"
                                      onClick={() => {
                                        // setpropertySecondaryDetaile("corner plot");
                                        handleSecondaryDetails("home theatre");

                                        // setpropertySecondaryDetaile.detailTypeCount(1);

                                        console.log(propertySecondaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaTheaterMasks size={25} />
                                        Home Theatre
                                      </p>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertySecondaryDetaile?.includes(
                                          "lawn/garden"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      // className="property_details"
                                      type="button"
                                      onClick={() => {
                                        // setpropertySecondaryDetaile("corner plot");
                                        handleSecondaryDetails("lawn/garden");

                                        // setpropertySecondaryDetaile.detailTypeCount(1);

                                        console.log(propertySecondaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaWarehouse size={25} />
                                        Lawn / Garden
                                      </p>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertySecondaryDetaile?.includes(
                                          "elevator/lift"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      // className="property_details"
                                      type="button"
                                      onClick={() => {
                                        // setpropertySecondaryDetaile("corner plot");
                                        handleSecondaryDetails("elevator/lift");

                                        // setpropertySecondaryDetaile.detailTypeCount(1);

                                        console.log(propertySecondaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaDumpster size={25} />
                                        Elevator / Lift
                                      </p>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertySecondaryDetaile?.includes(
                                          "servent quarter"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      // className="property_details"
                                      type="button"
                                      onClick={() => {
                                        // setpropertySecondaryDetaile("corner plot");
                                        handleSecondaryDetails(
                                          "servent quarter"
                                        );

                                        // setpropertySecondaryDetaile.detailTypeCount(1);

                                        console.log(propertySecondaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaWarehouse size={25} />
                                        Servent Quarter
                                      </p>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertySecondaryDetaile?.includes(
                                          "security staff"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      // className="property_details"
                                      type="button"
                                      onClick={() => {
                                        // setpropertySecondaryDetaile("corner plot");
                                        handleSecondaryDetails(
                                          "security staff"
                                        );

                                        // setpropertySecondaryDetaile.detailTypeCount(1);

                                        console.log(propertySecondaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaWarehouse size={25} />
                                        Security Staff
                                      </p>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertySecondaryDetaile?.includes(
                                          "corner plot"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      // className="property_details"
                                      type="button"
                                      onClick={() => {
                                        // setpropertySecondaryDetaile("corner plot");
                                        handleSecondaryDetails("corner plot");

                                        // setpropertySecondaryDetaile.detailTypeCount(1);

                                        console.log(propertySecondaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaTv size={25} />
                                        Corner Plot
                                      </p>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertySecondaryDetaile?.includes(
                                          "rooftop useable"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      // className="property_details"
                                      type="button"
                                      onClick={() => {
                                        handleSecondaryDetails(
                                          "rooftop useable"
                                        );
                                        // setpropertySecondaryDetaile.detailTypeCount(1);

                                        console.log(propertySecondaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaStore size={25} />
                                        Rooftop Useable
                                      </p>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertySecondaryDetaile?.includes(
                                          "seperate entry"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      // className="property_details"
                                      type="button"
                                      onClick={() => {
                                        handleSecondaryDetails(
                                          "seperate entry"
                                        );
                                        // setpropertySecondaryDetaile.detailTypeCount(1);

                                        console.log(propertySecondaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaBuilding size={25} />
                                        Seperate Entry
                                      </p>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertySecondaryDetaile?.includes(
                                          "central cooling"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleSecondaryDetails(
                                          "central cooling"
                                        );
                                        // setpropertySecondaryDetaile.detailTypeCount(1);

                                        console.log(propertySecondaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaHouseUser size={25} />
                                        Central Cooling
                                      </p>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertySecondaryDetaile?.includes(
                                          "central heating"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleSecondaryDetails(
                                          "central heating"
                                        );
                                        // setpropertySecondaryDetaile.detailTypeCount(1);

                                        console.log(propertySecondaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaHouseUser size={25} />
                                        Central Heating
                                      </p>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertySecondaryDetaile?.includes(
                                          "accessibility"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleSecondaryDetails("accessibility");
                                        // setpropertySecondaryDetaile.detailTypeCount(1);

                                        console.log(propertySecondaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaHouseUser size={25} />
                                        Accessibility
                                      </p>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertySecondaryDetaile?.includes(
                                          "semi furnished"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleSecondaryDetails(
                                          "semi furnished"
                                        );

                                        console.log(propertySecondaryDetaile);
                                        // setpropertySecondaryDetaile.detailTypeCount(1);
                                      }}
                                    >
                                      <p>
                                        <FaHouseUser size={25} />
                                        Semi Furnished
                                      </p>
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertySecondaryDetaile?.includes(
                                          "furnished"
                                        )
                                          ? "property_details1"
                                          : "property_details"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleSecondaryDetails("furnished");
                                        // setpropertySecondaryDetaile.detailTypeCount(1);

                                        console.log(propertySecondaryDetaile);
                                      }}
                                    >
                                      <p>
                                        <FaHouseUser size={25} />
                                        Furnished
                                      </p>
                                    </button>

                                    <button
                                      class="col-3"
                                      name="numberoffloors"
                                      className={
                                        values.numberoffloors == ""
                                          ? "property_details"
                                          : "property_details1"
                                      }

                                      // className="service_available"

                                      // onChange={handleChange}
                                    >
                                      Number Of Floors In the Building
                                      <select
                                        className="propertydetailcounter"
                                        name="numberoffloors"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.numberoffloors}
                                      >
                                        <option selected value="">
                                          choose
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                      </select>
                                    </button>
                                    <button
                                      class="col-3"
                                      name="unitfloor"
                                      className={
                                        values.unitfloor == ""
                                          ? "property_details"
                                          : "property_details1"
                                      }

                                      // className="service_available"
                                      // onChange={handleChange}
                                    >
                                      Which Of The Floor Is Your Unit On
                                      <select
                                        className="propertydetailcounter"
                                        name="unitfloor"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.unitfloor}
                                      >
                                        <option selected value="">
                                          choose
                                        </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                      </select>
                                    </button>
                                  </div>
                                </Panel>
                                <Panel header="Services" key="3">
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertyServices?.includes("water")
                                          ? "service_available1"
                                          : "service_available"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleServices("water");
                                      }}
                                    >
                                      <FaWater size={25} />
                                      Water
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertyServices?.includes(
                                          "electricity"
                                        )
                                          ? "service_available1"
                                          : "service_available"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleServices("electricity");
                                      }}
                                    >
                                      <FaWifi size={25} />
                                      Electricity
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertyServices?.includes("gas")
                                          ? "service_available1"
                                          : "service_available"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleServices("gas");
                                      }}
                                    >
                                      <FaStore size={25} />
                                      Gas
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertyServices?.includes(
                                          "maintenance"
                                        )
                                          ? "service_available1"
                                          : "service_available"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleServices("maintenance");
                                      }}
                                    >
                                      <FaTools size={25} />
                                      Maintenance
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertyServices?.includes("sewerage")
                                          ? "service_available1"
                                          : "service_available"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleServices("sewerage");
                                      }}
                                    >
                                      <FaDumpster size={25} />
                                      Sewerage
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertyServices?.includes("security")
                                          ? "service_available1"
                                          : "service_available"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleServices("security");
                                      }}
                                    >
                                      <FaHouseUser size={25} />
                                      Security
                                    </button>
                                  </div>
                                </Panel>
                                <Panel header="Entertainment" key="4">
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertyEntertainment?.includes(
                                          "internet connection"
                                        )
                                          ? "service_available1"
                                          : "service_available"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleEntertainment(
                                          "internet connection"
                                        );
                                      }}
                                    >
                                      <FaWifi size={25} />
                                      Internet Connection
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertyEntertainment?.includes(
                                          "tv cable"
                                        )
                                          ? "service_available1"
                                          : "service_available"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleEntertainment("tv cable");
                                      }}
                                    >
                                      <FaTv size={25} />
                                      Tv Cable
                                    </button>
                                  </div>
                                </Panel>
                                <Panel header="Nearby" key="5">
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertyNearByLandmarks?.includes(
                                          "schools"
                                        )
                                          ? "service_available1"
                                          : "service_available"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleNearByLandmarks("schools");
                                      }}
                                    >
                                      <FaBook size={25} />
                                      Schools
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertyNearByLandmarks?.includes(
                                          "hospitals"
                                        )
                                          ? "service_available1"
                                          : "service_available"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleNearByLandmarks("hospitals");
                                      }}
                                    >
                                      <FaHospital size={25} />
                                      Hospitals
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertyNearByLandmarks?.includes(
                                          "mosque"
                                        )
                                          ? "service_available1"
                                          : "service_available"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleNearByLandmarks("mosque");
                                      }}
                                    >
                                      <FaMosque size={25} />
                                      Mosque
                                    </button>
                                  </div>
                                  <div className="counter_container">
                                    <button
                                      class="col-3"
                                      className={
                                        propertyNearByLandmarks?.includes(
                                          "resturant"
                                        )
                                          ? "service_available1"
                                          : "service_available"
                                      }
                                      type="button"
                                      onClick={() => {
                                        handleNearByLandmarks("resturant");
                                      }}
                                    >
                                      <FaRestroom size={25} />
                                      Resturant
                                    </button>
                                  </div>
                                </Panel>
                              </Collapse>
                            </Modal>
                            <div>
                              {propertyPrimaryDetaile.length > 0 &&
                                propertyPrimaryDetaile?.map((detail) => (
                                  <Chip
                                    label={`${detail.detailTypeCount} ${detail.detailType} `}
                                    style={{
                                      backgroundColor: "#2E307D",
                                      color: "#ffffff",
                                      padding: "20px",
                                      marginRight: "10px",
                                      marginBottom: "10px",
                                      borderRadius: "10px",
                                    }}
                                    onDelete={handleDelete(detail.detailType)}
                                  />
                                ))}
                              {propertySecondaryDetaile.length > 0 &&
                                propertySecondaryDetaile?.map((detail) => (
                                  <Chip
                                    label={detail}
                                    style={{
                                      backgroundColor: "#2E307D",
                                      color: "#ffffff",
                                      padding: "20px",
                                      marginRight: "10px",
                                      marginBottom: "10px",
                                      borderRadius: "10px",
                                    }}
                                    onDelete={handleDelete(detail)}
                                  />
                                ))}
                              {propertyServices.length > 0 &&
                                propertyServices?.map((service) => (
                                  <Chip
                                    label={service}
                                    style={{
                                      backgroundColor: "#2E307D",
                                      color: "#ffffff",
                                      padding: "20px",
                                      marginRight: "10px",
                                      marginBottom: "10px",
                                      borderRadius: "10px",
                                    }}
                                    onDelete={handleDelete(service)}
                                  />
                                ))}
                              {propertyEntertainment.length > 0 &&
                                propertyEntertainment?.map(
                                  (entertainmentService) => (
                                    <Chip
                                      label={entertainmentService}
                                      style={{
                                        backgroundColor: "#2E307D",
                                        color: "#ffffff",
                                        padding: "20px",
                                        marginRight: "10px",
                                        marginBottom: "10px",
                                        borderRadius: "10px",
                                      }}
                                      onDelete={handleDelete(
                                        entertainmentService
                                      )}
                                    />
                                  )
                                )}
                              {propertyNearByLandmarks.length > 0 &&
                                propertyNearByLandmarks?.map(
                                  (nearByLandmarks) => (
                                    <Chip
                                      label={nearByLandmarks}
                                      style={{
                                        backgroundColor: "#2E307D",
                                        color: "#ffffff",
                                        padding: "20px",
                                        marginRight: "10px",
                                        marginBottom: "10px",
                                        borderRadius: "10px",
                                      }}
                                      onDelete={handleDelete(nearByLandmarks)}
                                    />
                                  )
                                )}
                            </div>
                          </div>
                        </div>
                        <div class="col-12">
                          <h6>What is your name?</h6>
                          <div class="form-floating">
                            <input
                              type="text"
                              name="name"
                              // id="phone_no"
                              class="form-control"
                              placeholder="Your Name"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.name}
                            />
                            <p style={{ color: "red" }}>
                              {errors.name && touched.name && errors.name}
                            </p>
                            <label for="name">Your Name</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <h6>How to Contact you</h6>
                          <div class="form-floating">
                            <input
                              type="text"
                              name="phonenumber"
                              // id="phone_no"
                              class="form-control"
                              placeholder="Your Phone No"
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.phonenumber}
                            />
                            <p style={{ color: "red" }}>
                              {errors.phonenumber &&
                                touched.phonenumber &&
                                errors.phonenumber}
                            </p>
                            <label for="phone_no">Your phoneno</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-2 py-3" className="action_buttons">
                      <button
                        className="btn btn-primary py-2  action_submit_buttons"
                        type="submit"
                        onClick={() => {}}
                      >
                        Submit
                      </button>
                      <button
                        className="btn btn-primary py-2  action_submit_buttons"
                        // type="submit"
                        onClick={async () => {
                          // const response = await axios.delete(`http://localhost:5000/logout`);
                          // if(response.status === 200){
                          //   Modal.success({
                          //     title: "User Report Deleted Successfully!",
                          //   });
                          //   let currentPath = window.location.pathname;
                          //       navigate(`${currentPath}/replace`);
                          //       setTimeout(() => {
                          //         navigate(currentPath);
                          //       }, 0);
                          // }
                          axios
                            .post(`http://localhost:5000/auth/logout`)
                            .then((res) => {
                              console.log("response", res);
                              // navigate('/userlist');
                            })
                            .catch((error) => {
                              console.log("error block called", error);
                            });
                        }}
                      >
                        Logout
                      </button>
                    </div>
                  </form>
                  <div className="property-details-container">
                    <div className="property-image-container">
                      <img
                        style={{ width: "100%" }}
                        id="login_img"
                        src={"./img/test1.jpg"}
                        alt=""
                      />
                      {/* <Carousel>
                        {showPropertyImages?.map((value) => (
                          <Carousel.Item>
                            <img
                              className="d-block w-100"
                              src={URL.createObjectURL(value)}
                              alt="Uploaded Images"
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel> */}
                    </div>
                    <div className="property-details">
                      <h1 className="property-title">{values.propertytitle}</h1>

                      <div
                        style={{
                          display: "flex",
                          fontSize: "1.2rem",
                          marginBottom: "1rem",
                        }}
                      >
                        <p>PKR:</p>
                        <p>
                          <NumberToWord amount={values.propertyprice} />
                        </p>
                      </div>

                      <div className="property-location-container">
                        <FaMapMarkerAlt className="location-icon" />
                        <p className="property-location">
                          {values.propertylocation}
                        </p>
                      </div>
                      <h5>Description About this property</h5>
                      <p className="property-description">
                        {values.propertydescription}
                      </p>
                      <h5>Details</h5>
                      <ul className="property-features">
                        <li>
                          <FaBed className="feature-icon" />{" "}
                          {values.propertynoofbedroom} Bedrooms
                        </li>
                        <li>
                          <FaBath className="feature-icon" />{" "}
                          {values.propertynoofbathroom} Bathrooms
                        </li>
                        <li>
                          <FaCar className="feature-icon" />{" "}
                          {values.propertynoofcarparking} Car Parking
                        </li>
                      </ul>
                      <h5>Features</h5>
                      <div className="property-map-container">
                        <h5>Primary</h5>
                        {propertyPrimaryDetaile.map((detail) => {
                          <div>
                            <p style={{ backgroundColor: "red" }}>
                              {detail.detailTypeCount}X {detail.detailType}
                            </p>
                          </div>;
                        })}
                        {propertySecondaryDetaile?.map((detail) => {
                          <div>
                            <p style={{ backgroundColor: "green" }}>
                              {detail.detailTypeCount}X {detail.detailType}
                            </p>
                          </div>;
                        })}
                        {/* Add your map component here */}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Formik>
            <button
              className="btn btn-primary py-2  action_submit_buttons"
              // type="submit"
              onClick={async () => {
                // const response = await axios.delete(`http://localhost:5000/logout`);
                // if(response.status === 200){
                //   Modal.success({
                //     title: "User Report Deleted Successfully!",
                //   });
                //   let currentPath = window.location.pathname;
                //       navigate(`${currentPath}/replace`);
                //       setTimeout(() => {
                //         navigate(currentPath);
                //       }, 0);
                // }
                axios
                  .post(`http://localhost:5000/auth/logout`)
                  .then((res) => {
                    console.log("response", res);
                    // navigate('/userlist');
                  })
                  .catch((error) => {
                    console.log("error block called", error);
                  });
              }}
            >
              Logout
            </button>
            <div
              class="col-md-6 wow fadeInUp overflow-auto"
              data-wow-delay="0.1s"
            ></div>
          </div>
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
                <Modal
                  title="Login"
                  open={isLoginModalOpen}
                  onOk={handleOkLoginModal}
                  onCancel={handleCancelLoginModal}
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
                  {/* <Collapse
                    size="large"
                    defaultActiveKey={['1']}
                    onChange={onChange}
                    width={400}
                    style={{
                      marginTop: "50px",
                      marginLeft: "0px",
                      paddingLeft: "0px",
                    }}
                  > */}
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
                            value={values.phonenumber}
                          />
                          <p style={{ color: "red" }}>
                            {errors.phonenumber &&
                              touched.phonenumber &&
                              errors.phonenumber}
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
                  {/* </Collapse> */}
                </Modal>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
