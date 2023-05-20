import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ImgCarousel from "../shared/ImageCarousel";

function ViewPropertyType() {
  const { type } = useParams();
  console.log(type);
  const navigate = useNavigate();
  const [property, setProperty] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(`http://localhost:5000/property/${type}`);
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        console.log(data[i]);
        if (data[i].propertysubtype === type) {
          let exist = false;
          if (property) {
            property.forEach((value) => {
              if (value?._id === property[i].id) {
                exist = true;
              }
              return exist;
            });

            if (!exist) {
              property.push(property[i]);
              console.log(property);
            }
            property.push(property[i]);
            console.log(property);
          }
        }
      }
    };
    fetchData();
    console.log(property);
  }, []);

  return (
    <div>
      {property?.map((value) => (
        <div
          class="col-lg-4 col-md-6"
          className="card"
          onClick={() => {
            navigate(`/viewproperty/${value.id}`);
            console.log("div click");
          }}
        >
          <div class="property-item rounded overflow-hidden">
            <div class="position-relative overflow-hidden">
              {/* <ImgCarousel
                image={value?.images?.map((img) => {
                  console.log("http://localhost:5000/" + img);
                  return "http://localhost:5000/" + img;
                })}
              /> */}
              {/* <CardMedia
            component="img"
            // height="194"
            image={value.images?.map((img) => {
              return "http://localhost:5000/" + img;
            })}
            alt="Crime Images"
          /> */}
              {/* <a href="/">
                  <img class="img-fluid" src="img/property-4.jpg" alt="" />
                </a> */}
              <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">
                For {value?.propertypurpose}
              </div>
              <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">
                {value?.propertysubtype}
              </div>
            </div>
            <div class="p-4 pb-0">
              <h5 class="text-primary mb-3">Rs. {value?.propertyprice}</h5>
              <a class="d-block h5 mb-2" href="/">
                {value?.propertytitle}
              </a>
              <p>
                <i class="fa fa-map-marker-alt text-primary me-2"></i>
                {value?.propertylocation}
              </p>
            </div>
            <div class="d-flex border-top">
              <small class="flex-fill text-center border-end py-2">
                <i class="fa fa-ruler-combined text-primary me-2"></i>
                {value?.propertysize}
                {value?.propertysizetype}
              </small>
              <small class="flex-fill text-center border-end py-2">
                <i class="fa fa-bed text-primary me-2"></i>
                {value?.propertynoofbedroom} Bed
              </small>
              <small class="flex-fill text-center py-2">
                <i class="fa fa-bath text-primary me-2"></i>
                {value?.propertynoofbathroom} Bath
              </small>
              <small class="flex-fill text-center py-2">
                <i class="fa fa-bath text-primary me-2"></i>
                {value?.propertynoofcarparking} parking
              </small>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewPropertyType;
