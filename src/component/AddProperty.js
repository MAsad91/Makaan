import React, { useState } from "react";
import "./AddProperty.css";
import {  Modal, Collapse } from "antd";
import axios from "axios";
import { Formik } from "formik";
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
import { landmark } from "fontawesome";
import { data } from "jquery";

const { Panel } = Collapse;

function AddProperty() {
  const onChange = (key) => {
    console.log(key);
  };

  const year = new Date().getFullYear() - 20;
  const years = Array.from(new Array(20), (val, index) => index + year);

  const [propertyPurpose, setPropertyPurpose] = useState("");
  const [propertyType, setPropertyType] = useState("");
  const [propertySubType, setPropertySubType] = useState("");
  const [propertySize, setPropertySize] = useState("");
  const [propertySizeType, setPropertySizeType] = useState("");
  const [propertyPrice, setPropertyPrice] = useState("");
  const [showPropertyPrice, setShowPropertyPrice] = useState("");
  const [propertyTitle, setPropertyTitle] = useState("");
  const [propertyDescription, setPropertyDescription] = useState("");
  const [propertyLocation, setPropertyLocation] = useState("");
  const [propertyBuiltYear, setPropertyBuiltYear] = useState("");
  const [bedroomCounter, setBedroomCounter] = useState(0);
  const [bathroomCounter, setBathroomCounter] = useState(0);
  const [carParkingCounter, setCarParkingCounter] = useState(0);
  const [propertyPrimaryDetaile, setpropertyPrimaryDetaile] = useState([]);
  const [propertySecondaryDetaile, setpropertySecondaryDetaile] = useState([]);
  const [propertyServices, setPropertyServices] = useState([]);
  const [propertyEntertainment, setPropertyEntertainment] = useState([]);
  const [propertyNearByLandmarks, setPropertyNearByLandmarks] = useState([]);
  const [detail, setDetail] = useState("");
  const [count, setCount] = useState("1");
  const [propertyImages, setPropertyImages] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  

  
  const handlePrimaryDetails = (detailsType, detailsCount) => {
    propertyPrimaryDetaile.push({
      detailType: detailsType,
      detailTypeCount: detailsCount,
    });
    console.log(propertyPrimaryDetaile);
  };
  const handleSecondaryDetails = (detailType) => {
    let exist;
    propertySecondaryDetaile.forEach(detail => {

      if(detail === detailType) {
        exist = true; 
      }
      return exist;
    });
    if(!exist) {
      propertySecondaryDetaile.push(detailType);
      console.log(propertySecondaryDetaile);
    }
    
  };
  const handleServices = (propertyService) => {
    let exist;
    propertyServices.forEach(service => {
      if(service === propertyService ) {
        exist = true;
      }
      return exist;
    })

    if(!exist) {
      propertyServices.push(propertyService)
      console.log(propertyServices);
    }
    
  };
  const handleEntertainment = (entertainmentService) => {
    let exist;
    propertyEntertainment.forEach(entertainment => {
      if(entertainment === entertainmentService) {
        exist = true;
      }
      return exist;
    })

    if(!exist) {
      propertyEntertainment.push(entertainmentService);
      console.log(propertyEntertainment);
    }
    
  }

  const handleNearByLandmarks = (nearByLandmarks) => {
    let exist;
    
  propertyNearByLandmarks.forEach(landmark => {
      if(landmark === nearByLandmarks) {
        exist = true;
        console.log(exist);
      }
      return exist;
    })
    if(!exist) {
      propertyNearByLandmarks.push(nearByLandmarks);
      console.log(propertyNearByLandmarks);
    }
    
  }

  const handleCount = (event) => {
    setCount(event.target.value);
    console.log(count);
    // propertyPrimaryDetaile.filter(type => type.detailType.includes(detail)).splice(i, 1, type.)
    let exist;
    propertyPrimaryDetaile.find((o, i) => {
      console.log(o.detailType, o.detailTypeCount, detail,count, propertyPrimaryDetaile[i]);
      if (o.detailType === detail) {
        propertyPrimaryDetaile[i] = {detailType: detail, detailTypeCount: event.target.value};
        console.log(propertyPrimaryDetaile[i]);
          exist = true;
          return true; // stop searching
      }
      return exist;
    });
    if(!exist) {
      handlePrimaryDetails(detail, event.target.value)
      exist = false;
    }
    console.log(propertyPrimaryDetaile);
  }

  const handleDelete = (chipToDelete) => () => {
    let exist;
    console.log(chipToDelete);
    propertyPrimaryDetaile.find((o, i) => {
      console.log(o.detailType, o.detailTypeCount, detail,count, propertyPrimaryDetaile[i]);
      if (o.detailType === chipToDelete) {
        propertyPrimaryDetaile.splice(i, 1);
          exist = true;
          return true; // stop searching
      }
      return exist;
    });
    propertySecondaryDetaile.forEach((detail, i) => {
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
    
    console.log(propertyPrimaryDetaile)
    console.log(propertySecondaryDetaile)
    console.log(propertyServices)
    console.log(propertyNearByLandmarks)
  };

  const uploadHandle = ({ fileList }) => {
    setPropertyImages(fileList);
    console.log(propertyImages);
  };
  return (
    <div>
      <div
        // container-xxl
        class=" py-5"
      >
        {/* <div className="header_text">
          <h1 style={{ paddingLeft: "50px", color: "white" }}>
            Upload Your Property Details
          </h1>
        </div> */}
        <div class="container">
          <div
            class="row g-7"
            className="main"
            style={{ /*marginTop: "5%",*/ marginBottom: "10%" }}
          >
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
                propertynoofbedroom: 0,
                propertynoofbathroom: 0,
                propertynoofcarparking: 0,
                // images: [],
                // propertydetails: [],
                // propertySecondaryDetaile: [{}],
                // propertyservices: [{}],
                numberoffloors: '',
                unitfloor: ''
              }}
              validate={(values) => {
                const errors = {};
                // if (!values.name) {
                //   errors.name = "Required";
                // }

                // if (!values.phoneno) {
                //   errors.phoneno = "Required";
                // } else if (!values.phoneno) {
                //   errors.phoneno = "Invalid Phone No";
                // } else if (values.phoneno) {
                //   errors.phoneno = "Valid Phone No";
                // }

                // if (!values.password) {
                //   errors.password = "Required";
                // }

                // if (!values.confirmpassword) {
                //   errors.confirmpassword = "Required";
                // } else if (!(values.confirmpassword === values.password)) {
                //   errors.confirmpassword = "invalid Password";
                // }

                return errors;
              }}
              onSubmit={async (values, actions) => {
                try {
                  console.log(values);
                  const response = await axios({
                    method: "post",
                    url: `http://localhost:5000/property`,
                    data: {
                      name: values.name,
                      phoneno: values.phoneno,
                      password: values.password,
                      propertypurpose: values.propertypurpose,
                      propertytype: values.propertytype,
                      propertysubtype: values.propertysubtype,
                      propertysize: values.propertysize,
                      propertysizetype: values.propertysizetype,
                      propertyprice: values.propertyprice,
                      propertytitle: values.propertytitle,
                      propertydescription: values.propertydescription,
                      propertylocation: values.propertylocation,
                      propertybuiltyear: values.propertybuiltyear,
                      propertynoofbedroom: values.propertynoofbedroom,
                      propertynoofbathroom: values.propertynoofbathroom,
                      propertynoofcarparking: values.propertynoofcarparking,
                      images: values.images,
                      propertyprimarydetails: propertyPrimaryDetaile,
                      propertySecondaryDetaile: propertySecondaryDetaile,
                      propertyservices: propertyServices,
                      propertyEntertainment: propertyEntertainment,
                      propertyNearByLandmarks: propertyNearByLandmarks,
                      numberoffloors: values.propertynumberoffloors,
                      unitfloor: values.unitfloor,
                    },
                    
                  });

                  console.log(response);
                  
                  if (response.status === 200) {
                    // alert("User Added Successfully!", response.data.message);
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
                  // alert(err.response.data.message, err.response.status);
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
                <form onSubmit={handleSubmit}>
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
                        <button
                          class="col-3"
                          name="propertypurpose"
                          className="property_purpose"
                          // onClick={() => {
                          //   setPropertyPurpose("Sell");
                          //   console.log(propertyPurpose);
                          // }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.propertypurpose}
                        >
                          <FaSellcast size={25} />
                          Sell
                        </button>
                        <button
                          class="col-3"
                          name="propertypurpose"
                          className="property_purpose"
                          onClick={() => {
                            setPropertyPurpose("Rent");
                            console.log(propertyPurpose);
                          }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.propertypurpose}
                        >
                          <FaUserFriends size={25} />
                          Rent
                        </button>
                      </div>
                    </div>
                    {/* );
                      } else if (next === 1) {
                        return ( */}
                    <div class="wow fadeInUp" data-wow-delay="0.5s">
                      <div
                        class="row g-5"
                        style={{ marginLeft: "0px", paddingTop: "80px" }}
                      >
                        <h6>Select the Type of Property</h6>
                        <button
                          // class="col-xs-4 col-sm-4 col-md-4 col-lg-4"
                          class="col-3"
                          className="property_type"
                          name="propertytype"
                          onClick={() => {
                            setPropertyType("residential");
                          }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.propertytype}
                        >
                          Residential
                        </button>
                        <button
                          class="col-3"
                          name="propertytype"
                          className="property_type"
                          onClick={() => {
                            setPropertyType("plot");
                          }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.propertytype}
                        >
                          Plot
                        </button>
                        <button
                          class="col-3"
                          name="propertytype"
                          className="property_type"
                          onClick={() => {
                            setPropertyType("commercial");
                          }}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.propertytype}
                        >
                          Commercial
                        </button>
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
                                // paddingBottom: "60px",
                              }}
                            >
                              {/* <h6>Select the property Subtype</h6> */}

                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("house");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaHome size={25} />
                                House
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("guest house");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaHouseUser size={25} />
                                Guest House
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("flat");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaBuilding size={25} />
                                Flat
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("hostel");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaBuilding size={25} />
                                Hostel
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("upper portion");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaHouseDamage size={25} />
                                Upper Portion
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("lower portion");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaHouseDamage size={25} />
                                Lower Portion
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("room");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaRestroom size={25} />
                                Room
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("farm house");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaHouseUser size={25} />
                                Farm House
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("penthouse");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaRegBuilding size={25} />
                                Pent House
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("hotel suites");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaHotel size={25} />
                                Hotel Suites
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("basement");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaSquarespace size={25} />
                                Basement
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("annex");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaStoreAlt size={25} />
                                Anexxe
                              </button>
                            </div>
                          </div>
                        );
                      } else if (propertyType === "plot") {
                        return (
                          <div class="wow fadeInUp" data-wow-delay="0.5s">
                            <div class="row g-4" style={{ paddingTop: "10px" }}>
                              {/* <h6>Select the property Subtype</h6> */}
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("residential plot");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaHome size={25} />
                                Residential Plot
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("commercial plot");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaHouseUser size={25} />
                                Commercial Plot
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("agricultural land");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaBuilding size={25} />
                                Agricultural Land
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("industrial land");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaBuilding size={25} />
                                Industrial Land
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("plot file");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaHouseDamage size={25} />
                                Plot File
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("farmhouse plot");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaHouseDamage size={25} />
                                Farmhouse Plot
                              </button>
                            </div>
                          </div>
                        );
                      } else if (propertyType === "commercial") {
                        return (
                          <div class="wow fadeInUp" data-wow-delay="0.5s">
                            <div class="row g-4" style={{ paddingTop: "10px" }}>
                              {/* <h6>Select the property Subtype</h6> */}
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("office");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaHome size={25} />
                                Office
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("shop");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaShopify size={25} />
                                Shop
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("warehouse");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaWarehouse size={25} />
                                Warehouse
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("factory");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaBuilding size={25} />
                                Factory
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("building");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaBuilding size={25} />
                                Building
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("gym");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaWeight size={25} />
                                Gym
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("theatre");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaTheaterMasks size={25} />
                                Theatre
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("food court");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaUtensilSpoon size={25} />
                                Food Court
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("hall");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaRegBuilding size={25} />
                                Hall
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  // setColorId(33);

                                  setPropertySubType("land");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaLandmark size={25} />
                                Land
                              </button>
                              <button
                                class="col-3"
                                name="propertysubtype"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("plaza");
                                }}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.propertysubtype}
                              >
                                <FaBusinessTime size={25} />
                                Plaza
                              </button>
                              <div style={{ height: "10px" }}></div>
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <div class="wow fadeInUp" data-wow-delay="0.5s">
                            <div class="row g-4" style={{ paddingTop: "10px" }}>
                              {/* <h6>Select the property Subtype</h6> */}
                              <button
                                class="col-3"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("house");
                                }}
                              >
                                <FaHome size={25} />
                                House
                              </button>
                              <button
                                class="col-3"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("guest house");
                                }}
                              >
                                <FaHouseUser size={25} />
                                Guest House
                              </button>
                              <button
                                class="col-3"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("flat");
                                }}
                              >
                                <FaBuilding size={25} />
                                Flat
                              </button>
                              <button
                                class="col-3"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("hostel");
                                }}
                              >
                                <FaBuilding size={25} />
                                Hostel
                              </button>
                              <button
                                class="col-3"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("upper portion");
                                }}
                              >
                                <FaHouseDamage size={25} />
                                Upper Portion
                              </button>
                              <button
                                class="col-3"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("lower portion");
                                }}
                              >
                                <FaHouseDamage size={25} />
                                Lower Portion
                              </button>
                              <button
                                class="col-3"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("room");
                                }}
                              >
                                <FaRestroom size={25} />
                                Room
                              </button>
                              <button
                                class="col-3"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("farm house");
                                }}
                              >
                                <FaHouseUser size={25} />
                                FarmHouse
                              </button>
                              <button
                                class="col-3"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("penthouse");
                                }}
                              >
                                <FaRegBuilding size={25} />
                                Penthouse
                              </button>
                              <button
                                class="col-3"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("hotel suites");
                                }}
                              >
                                <FaHotel size={25} />
                                Hotel Suites
                              </button>
                              <button
                                class="col-3"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("basement");
                                }}
                              >
                                <FaSquarespace size={25} />
                                Basement
                              </button>
                              <button
                                class="col-3"
                                className="property_subtype"
                                onClick={() => {
                                  setPropertySubType("anexxe");
                                }}
                              >
                                <FaStoreAlt size={25} />
                                Anexxe
                              </button>
                              <div style={{ height: "10px" }}></div>
                            </div>
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
                              {/* <form method="post"> */}
                              <div class="row g-3 ">
                                <div class="col-12">
                                  <div
                                    class="form-floating"
                                    style={{ display: "flex" }}
                                  >
                                    <input
                                      type="number"
                                      class="form-control"
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
                                    <label for="phone">Enter Size:</label>
                                    <select
                                      name="propertysizetype"
                                      style={{
                                        backgroundColor: "#00B98E",
                                        color: "white",
                                        borderTopRightRadius: "10px",
                                        borderBottomRightRadius: "10px",
                                        // borderRadius: "10px",
                                        borderLeft: "none",
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
                                    <label for="price">Price:</label>
                                  </div>
                                </div>
                              </div>
                              {/* </form> */}
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
                              <form method="post">
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
                                        // onChange={(e) =>
                                        //   setPropertyDescription(
                                        //     e.target.value
                                        //   )
                                        // }
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.propertydescription}
                                      ></textarea>
                                      <label for="propertydescription">
                                        Description:
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </form>
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
                              {/* <form method="post"> */}
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
                                    <label for="propertylocation">
                                      Location:
                                    </label>
                                  </div>
                                </div>
                              </div>
                              {/* </form> */}
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
                              {/* <form method="post"> */}
                              <div class="row g-3">
                                <div className="counter">
                                  <h6 style={{ paddingRight: "40px" }}>
                                    No.of Bedroom:
                                  </h6>

                                  <div className="btn__container">
                                    <button
                                      className=" btn btn-primary "
                                      name="propertynoofbedroom"
                                      style={{}}
                                      onClick={() => {
                                        setBedroomCounter(bedroomCounter + 1);
                                      }}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.propertynoofbedroom}
                                    >
                                      +
                                    </button>
                                    <span className="counter_output">
                                      {bedroomCounter}
                                    </span>
                                    <button
                                      name="propertynoofbedroom"
                                      className=" btn btn-primary py-2 btn-rounded"
                                      onClick={() => {
                                        if (bedroomCounter > 0) {
                                          setBedroomCounter(bedroomCounter - 1);
                                        }
                                      }}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.propertynoofbedroom}
                                    >
                                      -
                                    </button>
                                  </div>
                                </div>
                                <div className="counter">
                                  <h6 style={{ paddingRight: "33px" }}>
                                    No.of Bathroom:
                                  </h6>

                                  <div className="btn__container">
                                    <button
                                      name="propertynoofbathroom"
                                      className=" btn btn-primary "
                                      style={{}}
                                      onClick={() => {
                                        setBathroomCounter(bathroomCounter + 1);
                                      }}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.propertynoofbathroom}
                                    >
                                      +
                                    </button>
                                    <span className="counter_output">
                                      {bathroomCounter}
                                    </span>
                                    <button
                                      name="propertynoofbathroom"
                                      className=" btn btn-primary py-2 btn-rounded"
                                      onClick={() => {
                                        if (bathroomCounter > 0) {
                                          setBathroomCounter(
                                            bathroomCounter - 1
                                          );
                                        }
                                      }}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.propertynoofbathroom}
                                    >
                                      -
                                    </button>
                                  </div>
                                </div>
                                <div class="col-6" className="counter">
                                  <h6 style={{ paddingRight: "10px" }}>
                                    No.of Car Parkings:
                                  </h6>

                                  <div
                                    class="col-6"
                                    className="btn__container "
                                  >
                                    <button
                                      name="propertynoofcarparking"
                                      className=" btn btn-primary py-2 btn-rounded"
                                      onClick={() => {
                                        setCarParkingCounter(
                                          carParkingCounter + 1
                                        );
                                        console.log(carParkingCounter);
                                      }}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.propertynoofcarparking}
                                    >
                                      +
                                    </button>
                                    <span className="counter_output">
                                      {carParkingCounter}
                                    </span>
                                    <button
                                      name="propertynoofcarparking"
                                      className=" btn btn-primary py-2 btn-rounded "
                                      onClick={() => {
                                        if (carParkingCounter > 0) {
                                          setCarParkingCounter(
                                            carParkingCounter - 1
                                          );
                                        }
                                        console.log(carParkingCounter);
                                      }}
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.propertynoofcarparking}
                                    >
                                      -
                                    </button>
                                  </div>
                                </div>
                              </div>
                              {/* </form> */}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* );
                      } else if (next === 7) {
                        return ( */}
                    <div
                      // container-xxl
                      class="cover_image py-5"
                    >
                      <div
                      //  class="container"
                      >
                        <h6>
                          Add Images and Select thecover Image of your property
                        </h6>

                        <div class="row g-4">
                          <div class="col-md-12">
                            <div class="wow fadeInUp" data-wow-delay="0.5s">
                              <div>
                                {/* <h1>Upload and Display Image usign React Hook's</h1> */}
                                <Upload.Dragger
                                  multiple
                                  accept=".png,.jpg,.jpeg"
                                  onChange={uploadHandle}
                                  beforeUpload={() => false}
                                >
                                  Drag file here OR
                                  <br />
                                  <button class="btn btn-primary  py-2">
                                    Click Upload
                                  </button>
                                </Upload.Dragger>
                                {/* {propertyImage && (
                                  <div>
                                    <img
                                      alt="not found"
                                      width={"250px"}
                                      src={URL.createObjectURL(propertyImage)}
                                    />
                                    <br />
                                    <button
                                      onClick={() => setPropertyImage(null)}
                                    >
                                      Remove
                                    </button>
                                  </div>
                                )} */}

                                <br />
                                <br />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* </div>
                        );
                      } else if (next === 8) {
                        return ( */}
                      <div class="wow fadeInUp" data-wow-delay="0.5s">
                        <div class="row g-4" style={{ paddingTop: "30px" }}>
                          <h5>Add details about your property</h5>
                          <button
                            style={{
                              backgroundColor: "#EFFDF5",
                              border: "none",
                              textAlign: "left",
                              fontSize: "20px",
                              color: "#00B98E",
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
                              height: "500px",
                              overflowY: "scroll",
                              marginLeft: "0px",
                              paddingLeft:"0px"
                            }}
                            okText={"Add"}
                            cancelText={"Back"}
                          >
                          <div>
                          {propertyPrimaryDetaile.map((detail) => (
                                <Chip
                                  label={`${detail.detailType} ${detail.detailTypeCount}`}
                                  onDelete={handleDelete(detail.detailType)}
                                />
                              ))}
                          </div>
                            <div>
                              
                              {propertySecondaryDetaile.map((detail) => (
                                <Chip
                                  label={detail}
                                  onDelete={handleDelete(detail)}
                                />
                              ))}
                              {propertyServices.map((service) => (
                                <Chip
                                  label={service}
                                  onDelete={handleDelete(service)}
                                />
                              ))}
                              {propertyEntertainment.map((entertainmentService) => (
                                <Chip
                                  label={entertainmentService}
                                  onDelete={handleDelete(entertainmentService)}
                                />
                              ))}
                              {propertyNearByLandmarks.map((nearByLandmarks) => (
                                <Chip
                                  label={nearByLandmarks}
                                  onDelete={handleDelete(nearByLandmarks)}
                                />
                              ))}
                            </div>

                            {/* <Stack direction="row" spacing={1}>
                            <Chip label="Deletable" onDelete={handleDelete} />
                            <Chip label="Deletable" variant="outlined" onDelete={handleDelete} />
                          </Stack> */}
                            <Collapse
                              size="large"
                              /*defaultActiveKey={['1']}*/ onChange={onChange}
                              width={700}
                              style={{ marginTop: "100px", marginLeft:"0px", paddingLeft:"0px" }}
                            >
                              <Panel
                                header="Primary Details"
                                key="1"
                                className="panel"
                              >
                                <div className="counter_container">
                                  <button className="col-3 property_details">
                                    Choose Built Year
                                    <select
                                      className="propertybuiltyear"
                                      name="propertybuiltyear"
                                      onChange={handleChange}
                                      onBlur={handleBlur}
                                      value={values.propertybuiltyear}
                                    >
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
                                  <button
                                    class="col-3"
                                    name="propertydetails"
                                    className="property_details"
                                    onClick={() => {
                                      setDetail("tv lounge");
                                      // handlePrimaryDetails("tv lounge")
                                      console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaTv size={25} />
                                    TvLounge{"     "} 
                                    {/* <Counter handleCallback={handleClick} /> */}
                                    <select
                                      // style={{marginLeft:"440px"}}
                                      className="propertydetailcounter"
                                      name="propertydetailcounter"
                                      // onChange={handleChange}
                                      onChange={handleCount}
                                      onBlur={handleBlur}
                                      // value={values.propertydetailcounter}
                                    >
                                      <option value='1'>1</option>
                                      <option value='2'>2</option>
                                      <option value='3'>3</option>
                                      <option value='4'>4</option>
                                      <option value='5'>5</option>
                                      <option value='6'>6</option>
                                      <option value='7'>7</option>
                                      <option value='8'>8</option>
                                      <option value='9'>9</option>
                                      <option value='10+'>10+</option>
                                    </select>
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      setDetail("store room")
                                      // setpropertyPrimaryDetaile("store room");
                                      // setpropertyPrimaryDetaile(2);
                                      // handlePrimaryDetails("store room", 2);
                                      console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaStore size={25} />
                                    Store Room
                                    {/* <Counter /> */}
                                    <select
                                      // style={{marginLeft:"424px"}}
                                      className="propertydetailcounter"
                                      name="propertydetailcounter"
                                      onChange={handleCount}
                                      // onChange={handleChange}
                                      onBlur={handleBlur}
                                      // value={values.propertydetailcounter}
                                    >
                                      <option value='1'>1</option>
                                      <option value='2'>2</option>
                                      <option value='3'>3</option>
                                      <option value='4'>4</option>
                                      <option value='5'>5</option>
                                      <option value='6'>6</option>
                                      <option value='7'>7</option>
                                      <option value='8'>8</option>
                                      <option value='9'>9</option>
                                      <option value='10+'>10+</option>
                                    </select>
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      setDetail("laundry room")
                                      // setpropertyPrimaryDetaile("laundry room");
                                      // handlePrimaryDetails("laundry room", 2);

                                      console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaBuilding size={25} />
                                    Laundry Room
                                    {/* <Counter /> */}
                                    <select
                                      // style={{marginLeft:"404px"}}
                                      className="propertydetailcounter"
                                      name="propertydetailcounter"
                                      onChange={handleCount}
                                      onBlur={handleBlur}
                                      // value={values.propertydetailcounter}
                                    >
                                      <option value='1'>1</option>
                                      <option value='2'>2</option>
                                      <option value='3'>3</option>
                                      <option value='4'>4</option>
                                      <option value='5'>5</option>
                                      <option value='6'>6</option>
                                      <option value='7'>7</option>
                                      <option value='8'>8</option>
                                      <option value='9'>9</option>
                                      <option value='10+'>10+</option>
                                    </select>
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      setDetail("study room")
                                      // setpropertyPrimaryDetaile("study room");
                                      // handlePrimaryDetails("study room", 2);
                                      // setpropertyPrimaryDetaile.detaileTypeCount(1);

                                      console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Study Room
                                    {/* <Counter /> */}
                                    <select
                                      // style={{marginLeft:"420px"}}
                                      className="propertydetailcounter"
                                      name="propertydetailcounter"
                                      onChange={handleCount}
                                      onBlur={handleBlur}
                                      // value={values.propertydetailcounter}
                                    >
                                      <option value='1'>1</option>
                                      <option value='2'>2</option>
                                      <option value='3'>3</option>
                                      <option value='4'>4</option>
                                      <option value='5'>5</option>
                                      <option value='6'>6</option>
                                      <option value='7'>7</option>
                                      <option value='8'>8</option>
                                      <option value='9'>9</option>
                                      <option value='10+'>10+</option>
                                    </select>
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      setDetail("dining room")
                                      // handlePrimaryDetails("dining room", 2);
                                      // setpropertyPrimaryDetaile("dining room");
                                      // setpropertyPrimaryDetaile.detaileTypeCount(1);

                                      console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Dining Room
                                    {/* <Counter /> */}
                                    <select
                                      // style={{marginLeft:"415px"}}
                                      className="propertydetailcounter"
                                      name="propertydetailcounter"
                                      onChange={handleCount}
                                      onBlur={handleBlur}
                                      // value={values.propertydetailcounter}
                                    >
                                      <option value='1'>1</option>
                                      <option value='2'>2</option>
                                      <option value='3'>3</option>
                                      <option value='4'>4</option>
                                      <option value='5'>5</option>
                                      <option value='6'>6</option>
                                      <option value='7'>7</option>
                                      <option value='8'>8</option>
                                      <option value='9'>9</option>
                                      <option value='10+'>10+</option>
                                    </select>
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      setDetail("drawing room");
                                      // handlePrimaryDetails("drawing room", 2);
                                      // console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Drawing Room
                                    {/* <Counter /> */}
                                    <select
                                      // style={{marginLeft:"402px"}}
                                      className="propertydetailcounter"
                                      name="propertydetailcounter"
                                      onChange={handleCount}
                                      onBlur={handleBlur}
                                      // value={values.propertydetailcounter}
                                    >
                                      <option value='1'>1</option>
                                      <option value='2'>2</option>
                                      <option value='3'>3</option>
                                      <option value='4'>4</option>
                                      <option value='5'>5</option>
                                      <option value='6'>6</option>
                                      <option value='7'>7</option>
                                      <option value='8'>8</option>
                                      <option value='9'>9</option>
                                      <option value='10+'>10+</option>
                                    </select>
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      setDetail("powder room")
                                      // handlePrimaryDetails("powder room", 2);
                                      // setpropertyPrimaryDetaile("powder room");
                                      // setpropertyPrimaryDetaile.detaileTypeCount(1);

                                      console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Powder Room
                                    {/* <Counter /> */}
                                    <select
                                      // style={{marginLeft:"408px"}}
                                      className="propertydetailcounter"
                                      name="propertydetailcounter"
                                      onChange={handleCount}
                                      onBlur={handleBlur}
                                      // value={values.propertydetailcounter}
                                    >
                                      <option value='1'>1</option>
                                      <option value='2'>2</option>
                                      <option value='3'>3</option>
                                      <option value='4'>4</option>
                                      <option value='5'>5</option>
                                      <option value='6'>6</option>
                                      <option value='7'>7</option>
                                      <option value='8'>8</option>
                                      <option value='9'>9</option>
                                      <option value='10+'>10+</option>
                                    </select>
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      setDetail("balcony")
                                      // setpropertyPrimaryDetaile("balcony");
                                      // handlePrimaryDetails("balcony", 2);
                                      // setpropertyPrimaryDetaile.detaileTypeCount(1);

                                      // console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Balcony
                                    {/* <Counter /> */}
                                    <select
                                      // style={{marginLeft:"452px"}}
                                      className="propertydetailcounter"
                                      name="propertydetailcounter"
                                      onChange={handleCount}
                                      onBlur={handleBlur}
                                      // value={values.propertydetailcounter}
                                    >
                                      <option value='1'>1</option>
                                      <option value='2'>2</option>
                                      <option value='3'>3</option>
                                      <option value='4'>4</option>
                                      <option value='5'>5</option>
                                      <option value='6'>6</option>
                                      <option value='7'>7</option>
                                      <option value='8'>8</option>
                                      <option value='9'>9</option>
                                      <option value='10+'>10+</option>
                                    </select>
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      setDetail("dirty kitchen")
                                      // setpropertyPrimaryDetaile("dirty kitchen");
                                      // setpropertyPrimaryDetaile.detaileTypeCount(1);

                                      // console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    DirtyKitchen
                                    {/* <Counter /> */}
                                    <select
                                      // style={{marginLeft:"422px"}}
                                      className="propertydetailcounter"
                                      name="propertydetailcounter"
                                      onChange={handleCount}
                                      onBlur={handleBlur}
                                      // value={values.propertydetailcounter}
                                    >
                                      <option value='1'>1</option>
                                      <option value='2'>2</option>
                                      <option value='3'>3</option>
                                      <option value='4'>4</option>
                                      <option value='5'>5</option>
                                      <option value='6'>6</option>
                                      <option value='7'>7</option>
                                      <option value='8'>8</option>
                                      <option value='9'>9</option>
                                      <option value='10+'>10+</option>
                                    </select>
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      // setpropertyPrimaryDetaile("kitchen");
                                      setDetail("kitchen");
                                      // setpropertyPrimaryDetaile.detaileTypeCount(1);

                                      console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Kitchen
                                    {/* <Counter /> */}
                                    <select
                                      // style={{marginLeft:"456px"}}
                                      className="propertydetailcounter"
                                      name="propertydetailcounter"
                                      onChange={handleCount}
                                      onBlur={handleBlur}
                                      // onChange={((e) => setCount(e.target.value))}
                                      value={values.property}
                                      // onClick={()=> {handlePrimaryDetails(detail,  count)}}
                                    >
                                      <option value='1'>1</option>
                                      <option value='2'>2</option>
                                      <option value='3'>3</option>
                                      <option value='4'>4</option>
                                      <option value='5'>5</option>
                                      <option value='6'>6</option>
                                      <option value='7'>7</option>
                                      <option value='8'>8</option>
                                      <option value='9'>9</option>
                                      <option value='10+'>10+</option>
                                    </select>
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      // setpropertyPrimaryDetaile("swimming pool");
                                      handlePrimaryDetails("swimming pool", '1')
                                      // setpropertyPrimaryDetaile.detaileTypeCount(1);

                                      console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaSwimmingPool size={25} />
                                    swimming Pool
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      // setpropertyPrimaryDetaile("home theatre");
                                      // setpropertyPrimaryDetaile.detaileTypeCount(1);
                                      handlePrimaryDetails("home theatre", '1')
                                      console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaTheaterMasks size={25} />
                                    Home Theatre
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      // setpropertyPrimaryDetaile("lawn/garden");
                                      handlePrimaryDetails("lawn/garden", '1')
                                      // setpropertyPrimaryDetaile.detaileTypeCount(1);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Lawn/ Garden
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      // setpropertyPrimaryDetaile("elevator/lift");
                                      handlePrimaryDetails("elevator/lift", '1')
                                      // setpropertyPrimaryDetaile.detaileTypeCount(1);

                                      console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Elevator/Lift
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      handlePrimaryDetails("servent quarter", "1");
                                      // setpropertyPrimaryDetaile.detaileTypeCount(1);

                                      console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Servant Quarter
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      // setpropertyPrimaryDetaile("security staff");
                                      // setpropertyPrimaryDetaile.detaileTypeCount(1);
                                      handlePrimaryDetails("security staff", '1')
                                      console.log(propertyPrimaryDetaile);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Security Staff
                                  </button>
                                </div>
                              </Panel>
                              <Panel header="Secondry Feature" key="2">
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      // setpropertySecondaryDetaile("corner plot");
                                      handleSecondaryDetails("corner plot");

                                      // setpropertySecondaryDetaile.detailTypeCount(1);

                                      console.log(propertySecondaryDetaile);
                                    }}
                                  >
                                    <FaTv size={25} />
                                    Corner Plot
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      handleSecondaryDetails("rooftop useable");
                                      // setpropertySecondaryDetaile.detailTypeCount(1);

                                      console.log(propertySecondaryDetaile);
                                    }}
                                  >
                                    <FaStore size={25} />
                                    Rooftop Useable
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      handleSecondaryDetails("seperate entry");
                                      // setpropertySecondaryDetaile.detailTypeCount(1);

                                      console.log(propertySecondaryDetaile);
                                    }}
                                  >
                                    <FaBuilding size={25} />
                                    Seperate Entry
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      handleSecondaryDetails("central cooling");
                                      // setpropertySecondaryDetaile.detailTypeCount(1);

                                      console.log(propertySecondaryDetaile);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Central Cooling
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      handleSecondaryDetails("central heating");
                                      // setpropertySecondaryDetaile.detailTypeCount(1);

                                      console.log(propertySecondaryDetaile);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Central Heating
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      handleSecondaryDetails("accessibility");
                                      // setpropertySecondaryDetaile.detailTypeCount(1);

                                      console.log(propertySecondaryDetaile);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Accessibility
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      handleSecondaryDetails("semi furnished");

                                      console.log(propertySecondaryDetaile);
                                      // setpropertySecondaryDetaile.detailTypeCount(1);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Semi Furnished
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="property_details"
                                    onClick={() => {
                                      handleSecondaryDetails("furnished");
                                      // setpropertySecondaryDetaile.detailTypeCount(1);

                                      console.log(propertySecondaryDetaile);
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Furnished
                                  </button>

                                  <button
                                    class="col-3"
                                    className="service_available"
                                    name="nooffloors"
                                    onChange={handleChange}
                                  >
                                    Number Of Floors In the Building
                                    <select className="numberoffloors">
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
                                    className="service_available"
                                    onChange={handleChange}
                                  >
                                    Which Of The Floor Is Your Unit On
                                    <select className="numberoffloors">
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
                                    className="service_available"
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
                                    className="service_available"
                                    onClick={() => {
                                      handleServices("electricity")
                                    }}
                                  >
                                    <FaWifi size={25} />
                                    Electricity
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="service_available"
                                    onClick={() => {
                                      handleServices("gas")
                                    }}
                                  >
                                    <FaStore size={25} />
                                    Gas
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="service_available"
                                    onClick={() => {
                                      handleServices("maintenance")
                                    }}
                                  >
                                    <FaTools size={25} />
                                    Maintenance
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="service_available"
                                    onClick={() => {
                                      handleServices("sewerage")
                                    }}
                                  >
                                    <FaDumpster size={25} />
                                    Sewerage
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="service_available"
                                    onClick={() => {
                                      handleServices("security")
                                    }}
                                  >
                                    <FaHouseUser size={25} />
                                    Security
                                  </button>
                                </div>
                              </Panel>
                              <Panel header="Entertainment" key="3">
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="service_available"
                                    onClick={() => {
                                      handleEntertainment("internet connection")
                                    }}
                                  >
                                    <FaWifi size={25} />
                                    Internet Connection
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="service_available"
                                    onClick={() => {
                                      handleEntertainment("tv cable")
                                    }}
                                  >
                                    <FaTv size={25} />
                                    Tv Cable
                                  </button>
                                </div>
                              </Panel>
                              <Panel header="Nearby" key="3">
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="service_available"
                                    onClick={() => {
                                      handleNearByLandmarks("schools")
                                    }}
                                  >
                                    <FaBook size={25} />
                                    Schools
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="service_available"
                                    onClick={() => {
                                      handleNearByLandmarks("hospitals")
                                    }}
                                  >
                                    <FaHospital size={25} />
                                    Hospitals
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="service_available"
                                    onClick={() => {
                                      handleNearByLandmarks("mosque")
                                    }}
                                  >
                                    <FaMosque size={25} />
                                    Mosque
                                  </button>
                                </div>
                                <div className="counter_container">
                                  <button
                                    class="col-3"
                                    className="service_available"
                                    onClick={() => {
                                      handleNearByLandmarks("resturant")
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
                          {propertyPrimaryDetaile.map((detail) => (
                              <Chip
                                label={`${detail.detailType} ${detail.detailTypeCount}`}
                                onDelete={handleDelete(detail.detailType)}
                              />
                            ))}
                          </div>
                          <div>
                            
                            {propertySecondaryDetaile.map((detail) => (
                                <Chip
                                  label={detail}
                                  onDelete={handleDelete(detail)}
                                />
                              ))}
                              {propertyServices.map((service) => (
                                <Chip
                                  label={service}
                                  onDelete={handleDelete(service)}
                                />
                              ))}
                              {propertyEntertainment.map((entertainmentService) => (
                                <Chip
                                  label={entertainmentService}
                                  onDelete={handleDelete(entertainmentService)}
                                />
                              ))}
                              {propertyNearByLandmarks.map((nearByLandmarks) => (
                                <Chip
                                  label={nearByLandmarks}
                                  onDelete={handleDelete(nearByLandmarks)}
                                />
                              ))}
                          </div>
                        </div>
                        <div style={{ height: "60px" }}></div>
                      </div>
                      {/* );
                      } else if (next === 9) {
                        return ( */}
                      <div class="wow fadeInUp" data-wow-delay="0.5s"></div>
                      {/* );
                      } else if (next === 10) {
                        return ( */}
                      <div
                        // container-xxl
                        className="floor_unit py-5"
                      ></div>
                    </div>
                  </div>
                  <div class="col-2 py-3" className="action_buttons">
                    <button
                      class="btn btn-primary  py-2"
                      className="btn btn-primary  action_submit_buttons"
                      type="submit"
                      onClick={() => {}}
                    >
                      Submit
                    </button>
                  </div>
                </form>
              )}
              
            </Formik>
            <div
              className="show_scrollar"
              // style={{ width:"370px", height:"400px", overflowY: 'scroll'}}
            >
              <img
                style={{ width: "100%" }}
                id="login_img"
                src={"./img/test1.jpg"}
                alt=""
              />
              <h6>PKR: {propertyPrice}</h6>
              <h1>{propertyTitle}</h1>
              <p>{propertyLocation}</p>
              <h5>Description About this property</h5>
              <p>{propertyDescription}</p>
              <h5>Features</h5>
              <p> feature</p>
              <h5>Location on map</h5>
              <p>map</p>
              <h4>Property for {propertyType}</h4>
              <h5>Property Type: {propertySubType}</h5>

              <h4>Title: {propertyTitle}</h4>
              <p>Description: {propertyDescription}</p>
              <h4>Location: {propertyLocation}</h4>
              <p>Year Built {propertyBuiltYear}</p>
              <p>Number of Bedroom {bedroomCounter}</p>
              <p>Number of Bathroom {bathroomCounter}</p>
              <p>Number of Car Parking {carParkingCounter}</p>

              <p>
                {propertySize} {propertySizeType}
              </p>
              <p>
                Additional Details: {propertyPrimaryDetaile.detaileType}{" "}
                {propertyPrimaryDetaile.detaileTypeCount}
              </p>
              <p>
                Additional Feature: {propertySecondaryDetaile.detailType}{" "}
                {propertySecondaryDetaile.detailTypeCount}
              </p>
            </div>
            

            <div
              class="col-md-6 wow fadeInUp overflow-auto"
              data-wow-delay="0.1s"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProperty;
