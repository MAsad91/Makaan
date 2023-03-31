import React, {useState, useEffect} from 'react'

import {
    FaUserFriends,
    FaSellcast,
    FaBuyNLarge,
} from "react-icons/fa";

function Property_Purpose(props) {
    // console.log(props.setPropertyPurpose());
    // const [purpose, setPurpose] = useState("");
    var purpose = 'Buy'
    // useEffect(() => {
    //     // Update the document title using the browser API
    //     props.handleCallback(purpose);
    //     console.log(purpose);
    //   });
    return (
        <div class="wow fadeInUp" data-wow-delay="0.5s">
            <div class="progress">
                <div
                    class="progress-bar progress-bar-striped progress-bar-animated"
                    role="progressbar"
                    aria-valuenow="9.10"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{ width: "9.10%" }}
                ></div>
            </div>
            <div class="row g-4">
                <h6>Select the purpose of adding your property</h6>
                <button
                    class="col-3"
                    className="property_purpose"
                    style={
                        {
                            // backgroundColor:"#00B98E",
                        }
                    }
                    onClick={() => {
                        // setColorId(1);
                        // setIsActive(!isActive);
                        // setPurpose("Buy");
                        purpose = 'Buy'
                        console.log(purpose);
                        props.CallBack(purpose)
                        // console.log(props.setPropertyPurpose())
                    }}
                >
                    <FaBuyNLarge
                        size={40}
                    // style={{
                    //   background:
                    //     isActive && colorId === 1
                    //       ? "#A020F0"
                    //       : "#00B98E",
                    //   color: "white",
                    // }}
                    />
                    Buy
                </button>
                <button
                    class="col-3"
                    className="property_purpose"
                    // style={{
                    //   background:
                    //     isActive && colorId === 2 ? "#A020F0" : "#00B98E",
                    // }}
                    onClick={() => {
                        // changeColor();
                        // setColorId(2);
                        // setIsActive(!isActive);
                        // setPurpose("Sell");
                        purpose = 'Sell'
                        console.log(purpose);
                        props.CallBack(purpose)
                    }}
                >
                    <FaSellcast
                        size={40}
                    // style={{
                    //   background:
                    //     isActive && colorId === 2
                    //       ? "#A020F0"
                    //       : "#00B98E",
                    //   color: "white",
                    // }}
                    />
                    Sell
                </button>
                <button
                    class="col-3"
                    className="property_purpose"
                    // style={{
                    //   background:
                    //     isActive && colorId === 3 ? "#A020F0" : "#00B98E",
                    // }}
                    onClick={() => {
                        // setColorId(3);
                        // setIsActive(!isActive);
                        // setPurpose("Rent");
                        purpose = 'Rent'
                        console.log(purpose);
                        props.CallBack(purpose)
                    }}
                >
                    <FaUserFriends
                        size={40}
                    // style={{
                    //   background:
                    //     isActive && colorId === 3
                    //       ? "#A020F0"
                    //       : "#00B98E",
                    //   color: "white",
                    // }}
                    />
                    Rent
                </button>
                
            </div>
            
        </div>
    )
}

export default Property_Purpose
