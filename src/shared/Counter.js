import React, { useState } from "react";
import '../component/AddProperty.css';
function Counter(props) {
  const [count, setCount] = useState(0);
  return (
    <div className="detail_counter">
      <div className="detail_btn__container">
        <button
          className="btn  detail_control__btn"
          onClick={() => {
            setCount(count + 1);
            // setPropertyDetaile(setCount)
          }}
        >
          +
        </button>
        <span
          // className="detail_counter_output"
          style={{
            fontSize: "20px",
            // color: "rgb(116, 7, 7)",
            marginLeft: "3px",
            marginRight: "3px",
          }}
        >
          {count}
        </span>
        <button
          className="btn  detail_control__btn"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          -
        </button>
      </div>
      {/* {(()=>{
        props.handleCallback(count)
      })()} */}
      {/* {props.handleCallback(count)} */}
    </div>
  );
}

export default Counter;
