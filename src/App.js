// import './App.css';
import React, { useState, Fragment } from "react";
import { useEffect } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import axios from "axios";
import "./css/bootstrap.min.css";
import "./css/style.css";
import "./css/cards.css";
import Search from "./shared/Search";
import Footer from "./shared/Footer";
import  Carousel  from "react-bootstrap/Carousel";
import CardCarousel from "./shared/CardCarousel";
import ImgCarousel from "./shared/ImageCarousel";
const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
function App() {
  const navigate = useNavigate();
  // const { id }= useParams();
  // alert(id);
  const [searchResults, setSearchResults] = useState([]);
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
    <div class="container-xxl bg-white p-0">
      {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div> */}

      {/* Navbar */}
      {/* <NavbarMenu /> */}

      <div class="container-fluid header bg-white p-0">
        <div class="row g-0 align-items-center flex-column-reverse flex-md-row">
          <div class="col-md-6 p-5 mt-lg-5">
            <h1 class="display-5 animated fadeIn mb-4">
              Find A <span class="text-primary">Perfect Home</span> To Live With
              Your Family
            </h1>

            <a href="/" class="btn btn-primary py-3 px-5 me-3 animated fadeIn">
              Get Started
            </a>
          </div>
          <div class="col-md-6 animated fadeIn">
            <div class="owl-carousel header-carousel">
              <div class="owl-carousel-item">
                <img class="img-fluid" src="./img/carousel-1.jpg" alt="" />
              </div>
             
            </div>
          </div>
        </div>
      </div>

      <Search />
      {/* <div 
      // style={{backgroundColor:"#2E307D", padding: "40px",paddingLeft:"60px" ,borderRadius:"30px"}}
      > */}
      

      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 class="mb-3">Property Types</h1>
          </div>
          <div class="row g-4">
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <a
                class="cat-item d-block bg-light text-center rounded p-3"
                href={`/viewpropertytype/residential`}
              >
                <div class="rounded p-4">
                  <div class="icon mb-3">
                    <img
                      class="img-fluid"
                      src="./img/icon-apartment.png"
                      alt="Icon"
                    />
                  </div>
                  <h6>Residential</h6>
                  <span>123 Properties</span>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <a
                class="cat-item d-block bg-light text-center rounded p-3"
                href={`/viewpropertytype/commercial`}
              >
                <div class="rounded p-4">
                  <div class="icon mb-3">
                    <img
                      class="img-fluid"
                      src="./img/icon-villa.png"
                      alt="Icon"
                    />
                  </div>
                  <h6>Commercial</h6>
                  <span>123 Properties</span>
                </div>
              </a>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <a
                class="cat-item d-block bg-light text-center rounded p-3"
                href={`/viewpropertytype/plot`}
              >
                <div class="rounded p-4">
                  <div class="icon mb-3">
                    <img
                      class="img-fluid"
                      src="./img/icon-house.png"
                      alt="Icon"
                    />
                  </div>
                  <h6>Plot</h6>
                  <span>123 Properties</span>
                </div>
              </a>
            </div>

          </div>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="about-img position-relative overflow-hidden p-5 pe-0">
                <img class="img-fluid w-100" src="./img/about.jpg" alt="" />
              </div>
            </div>
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <h1 class="mb-4">#1 Place To Find The Perfect Property</h1>
              <p class="mb-4">
                Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                sed stet lorem sit clita duo justo magna dolore erat amet
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>Tempor erat elitr
                rebum at clita
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>Aliqu diam amet
                diam et eos
              </p>
              <p>
                <i class="fa fa-check text-primary me-3"></i>Clita duo justo
                magna dolore erat amet
              </p>
              <a class="btn btn-primary py-3 px-5 mt-3" href="/">
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>

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
            <div
              class="col-lg-6 text-start text-lg-end slideInRight"
              data-wow-delay="0.1s"
            >
              <ul class="nav nav-pills d-inline-flex justify-content-end mb-5">
                <li class="nav-item me-2">
                  <button
                    class="btn btn-outline-primary active"
                    data-bs-toggle="pill"
                    href="/featured"
                    onClick={() => {
                      setCheckProperty("property");
                    }}
                  >
                    Featured
                  </button>
                </li>
                <li class="nav-item me-2">
                  <button
                    class="btn btn-outline-primary"
                    data-bs-toggle="pill"
                    // href="/forsell"
                    onClick={() => {
                      for (let i = 0; i < property.length; i++) {
                        if (property[i].propertypurpose === "sell") {
                          let exist;
                          saleProperty.forEach((value) => {
                            if (value.id === property[i].id) {
                              exist = true;
                            }
                            return exist;
                          });

                          if (!exist) {
                            saleProperty.push(property[i]);
                            console.log(saleProperty);
                          }
                          // saleProperty.push(property[i]);
                          setCheckProperty("sale");
                        }
                      }
                    }}
                  >
                    For Sell
                  </button>
                </li>
                <li class="nav-item me-0">
                  <button
                    class="btn btn-outline-primary"
                    data-bs-toggle="pill"
                    // href="/forrent"
                    onClick={() => {
                      for (let i = 0; i < property.length; i++) {
                        if (property[i].propertypurpose === "rent") {
                          let exist;
                          rentProperty.forEach((value) => {
                            if (value.id === property[i].id) {
                              exist = true;
                            }
                            return exist;
                          });

                          if (!exist) {
                            rentProperty.push(property[i]);
                            console.log(rentProperty);
                          }
                          // rentProperty.push(property[i]);
                          setCheckProperty("rent");
                        }
                      }
                    }}
                  >
                    For Rent
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div style={{backgroundColor:"#2E307D", padding: "40px",paddingLeft:"60px" ,borderRadius:"30px"}}>
            {(() => {
              if (checkProperty === "sale") {
                return(
                  <CardCarousel property={saleProperty} />
                );
               
              } else if (checkProperty === "rent") {
                return(
                  <CardCarousel property={rentProperty} />
                  );
              } else {
                return(
                  <CardCarousel property={property} />
                  );
              }
            })()}
          </div>
        </div>
      </div>

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
                    src="./img/call-to-action.jpg"
                    alt=""
                  />
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                  <div class="mb-4">
                    <h1 class="mb-3">Contact With Our Certified Agent</h1>
                    <p>
                      Eirmod sed ipsum dolor sit rebum magna erat. Tempor lorem
                      kasd vero ipsum sit sit diam justo sed vero dolor duo.
                    </p>
                  </div>
                  <a href="/" class="btn btn-primary py-3 px-4 me-2">
                    <i class="fa fa-phone-alt me-2"></i>Make A Call
                  </a>
                  <a href="/" class="btn btn-dark py-3 px-4">
                    <i class="fa fa-calendar-alt me-2"></i>Get Appoinment
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 class="mb-3">Our Agents</h1>
           
          </div>
          <div class="row g-4">
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item rounded overflow-hidden">
              <div class="team-item rounded overflow-hidden">
              <div  class="testimonial-item bg-light rounded p-3">
              <div class="bg-white border rounded p-4">
               
                <div class="d-flex align-items-center">
                  <img
                    class="img-fluid flex-shrink-0 rounded"
                    src="./img/testimonial-3.jpg"
                    style={{ width: "45px", height: "45px" }}
                    alt="Testimonial"
                  />
                  <div class="ps-3">
                    <h6 class="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div>
              </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="team-item rounded overflow-hidden">
              <div  class="testimonial-item bg-light rounded p-3">
              <div class="bg-white border rounded p-4">
               
                <div class="d-flex align-items-center">
                  <img
                    class="img-fluid flex-shrink-0 rounded"
                    src="./img/testimonial-3.jpg"
                    style={{ width: "45px", height: "45px" }}
                    alt="Testimonial"
                  />
                  <div class="ps-3">
                    <h6 class="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="team-item rounded overflow-hidden">
              <div  class="testimonial-item bg-light rounded p-3">
              <div class="bg-white border rounded p-4">
               
                <div class="d-flex align-items-center">
                  <img
                    class="img-fluid flex-shrink-0 rounded"
                    src="./img/testimonial-3.jpg"
                    style={{ width: "45px", height: "45px" }}
                    alt="Testimonial"
                  />
                  <div class="ps-3">
                    <h6 class="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
              <div class="team-item rounded overflow-hidden">
              <div  class="testimonial-item bg-light rounded p-3">
              <div class="bg-white border rounded p-4">
               
                <div class="d-flex align-items-center">
                  <img
                    class="img-fluid flex-shrink-0 rounded"
                    src="./img/testimonial-3.jpg"
                    style={{ width: "45px", height: "45px" }}
                    alt="Testimonial"
                  />
                  <div class="ps-3">
                    <h6 class="fw-bold mb-1">Client Name</h6>
                    <small>Profession</small>
                  </div>
                </div>
              </div>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    

      <Footer />

      <a href="/" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </div>
  );
}

export default App;
