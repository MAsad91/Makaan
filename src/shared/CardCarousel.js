import React, { useState, useEffect } from "react";
import ImgCarousel from "./ImageCarousel";
import "./carousel.css";
import "./styles.css";

const PropertyCarousel = (props) => {
  const property = props.property;
  const [currentPropertyIndex, setCurrentPropertyIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768); // Adjust the breakpoint as needed
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPropertyIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % property.length;
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [property.length]);

  const handleLeftArrowClick = () => {
    setCurrentPropertyIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + property.length) % property.length;
      return newIndex;
    });
  };

  const handleRightArrowClick = () => {
    setCurrentPropertyIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % property.length;
      return newIndex;
    });
  };

  const displayedProperties = [];
  if (isMobileView) {
    displayedProperties.push(property[currentPropertyIndex]);
  } else {
    for (let i = 0; i < 3; i++) {
      const index = (currentPropertyIndex + i) % property.length;
      displayedProperties.push(property[index]);
    }
  }

  return (
    <div className="carousel">
      {isMobileView && (
        <div className="arrow left-arrow" onClick={handleLeftArrowClick}>
          &#8249;
        </div>
      )}
      <div className="cards">
        {displayedProperties.map((value, index) => (
          <div
            key={index}
            className={`cardcontainer` }
            // ${
            //   index === currentPropertyIndex ? "active" : ""
            // }`}
          >
            {value && value.images && (
              <div className="property-item rounded overflow-hidden">
                <div className="position-relative overflow-hidden">
                  <ImgCarousel
                    image={value.images.map((img) => {
                      console.log("http://localhost:5000/" + img);
                      return "http://localhost:5000/" + img;
                    })}
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
          </div>
        ))}
      </div>
      {isMobileView && (
        <div className="arrow right-arrow" onClick={handleRightArrowClick}>
          &#8250;
        </div>
      )}
    </div>
  );
};

export default PropertyCarousel;
