import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import NavbarMenu from "./shared/Nav";
import { Grid } from "@material-ui/core";
import Search from "./shared/Search";
import Footer from "./shared/Footer";
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./shared/propertylisting.css";
import ImgCarousel from "./shared/ImageCarousel";
function PropertyList() {
  const navigate = useNavigate();

  const [property, setProperty] = useState([]);
  const [saleProperty, setSaleProperty] = useState([]);
  const [rentProperty, setRentProperty] = useState([]);
  const [checkProperty, setCheckProperty] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get("http://localhost:5000/property/");
      console.log(data);
      setProperty(data);
      console.log(property);

      console.log(saleProperty);
      console.log(rentProperty);
    };

    fetchData();
    console.log(property);
  }, []);

  return (
    <div>
      <div class="container-xxl bg-white p-0">
        <div class="container-fluid header bg-white p-0">
          <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
            <div class="col-md-6 p-5 mt-lg-5">
              <h1 class="display-5 animated fadeIn mb-4">Property List</h1>
              <nav aria-label="breadcrumb animated fadeIn">
                <ol class="breadcrumb text-uppercase">
                  <li class="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li class="breadcrumb-item">
                    <a href="/pages">Pages</a>
                  </li>
                  <li class="breadcrumb-item " aria-current="page">
                    Property List
                  </li>
                </ol>
              </nav>
            </div>
            <div class="col-md-6 animated fadeIn">
              <img class="img-fluid" src="img/header.jpg" alt="" />
            </div>
          </div>
        </div>
        {/* - Header End --> */}

        {/* - Search Start --> */}
        <Search />
        {/* - Search End --> */}

        {/* - Property List Start --> */}
        <div class="container-xxl py-5">
          <div class="container">
            <div class="row g-0 gx-5 align-items-end">
              <div class="col-lg-6">
                <div
                  class="text-start mx-auto mb-5 wow slideInLeft"
                  data-wow-delay="0.1s"
                >
                  <h1 class="mb-3">Property Listing</h1>
                </div>
              </div>

              <div className="property-list">
                {property.map((value, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    {value && value.images && (
                      <div className="property-item rounded overflow-hidden" style={{width:"300px"}}>
                        <div className="position-relative overflow-hidden">
                          <ImgCarousel
                            image={value.images.map(
                              (img) => `http://localhost:5000/${img}`
                            )}
                          />

                          <div className="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                            For {value.propertypurpose}
                          </div>
                          <div
                            style={{ marginBottom: "60px" }}
                            className="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3"
                          >
                            {value.propertysubtype}
                          </div>
                        </div>
                        <div className="p-4 pb-0">
                          <h5 className="text-primary mb-3">
                            Rs. {value.propertyprice}
                          </h5>
                          <a
                            className="d-block h5 mb-2"
                            href={`/viewproperty/${value.id}`}
                          >
                            {value.propertytitle}
                          </a>
                          <p>
                            <i className="fa fa-map-marker-alt text-primary me-2"></i>
                            {value.propertylocation}
                          </p>
                        </div>
                        <div className="d-flex border-top">
                          <small className="flex-fill text-center border-end py-2">
                            <i className="fa fa-ruler-combined text-primary me-2"></i>
                            {value.propertysize}
                            {value.propertysizetype}
                          </small>
                          <small className="flex-fill text-center border-end py-2">
                            <i className="fa fa-bed text-primary me-2"></i>
                            {value.propertynoofbedroom} Bed
                          </small>
                          <small className="flex-fill text-center py-2">
                            <i className="fa fa-bath text-primary me-2"></i>
                            {value.propertynoofbathroom} Bath
                          </small>
                          <small className="flex-fill text-center py-2">
                            <i className="fa fa-bath text-primary me-2"></i>
                            {value.propertynoofcarparking} parking
                          </small>
                        </div>
                      </div>
                    )}
                    {!value && <div className="empty-item"></div>}
                  </Grid>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* - Property List End --> */}

        {/* - Call to Action Start --> */}
        <div class="container-xxl py-5">
          <div class="container">
            <div class="bg-light rounded p-3">
              <div
                class="bg-white rounded p-4"
                style={{ border: "1px dashed rgba(0, 185, 142, .3)" }}
              >
                <div class="row g-5 align-items-center">
                  <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <img
                      class="img-fluid rounded w-100"
                      src="img/call-to-action.jpg"
                      alt=""
                    />
                  </div>
                  <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <div class="mb-4">
                      <h1 class="mb-3">Contact With Our Certified Agent</h1>
                    </div>
                    <a href="/call" class="btn btn-primary py-3 px-4 me-2">
                      <i class="fa fa-phone-alt me-2"></i>Make A Call
                    </a>
                    <a href="/appointment" class="btn btn-dark py-3 px-4">
                      <i class="fa fa-calendar-alt me-2"></i>Get Appoinment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* - Call to Action End --> */}

        {/* - Footer Start --> */}
        <Footer />
        {/* - Footer End --> */}

        {/* - Back to Top --> */}
        <a href="/" class="btn btn-lg btn-primary btn-lg-square back-to-top">
          <i class="bi bi-arrow-up"></i>
        </a>
      </div>
    </div>
  );
}

export default PropertyList;
