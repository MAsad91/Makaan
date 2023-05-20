import React, { Fragment } from "react";
import Carousel from "react-bootstrap/Carousel";
// import './styles.css';

const ImgCarousel = (props) => {
  console.log(props);
  return (
    <Fragment>
      <Carousel>
        {props?.image.map((img) => {
          return (
            <Carousel.Item>
              <img className="d-block w-100" src={img} alt="items images" style={{width: "200px", height:"250px", objectFit: "cover"}} />
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Fragment>
  );
};

export default ImgCarousel;
