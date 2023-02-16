// import { useState } from "react";
import { CiSquareMinus } from "react-icons/ci";
import { CiSquarePlus } from "react-icons/ci";
import "./Counter.css";
import "./Dropdown.css";

function Counter(props) {
  const { handleCount, adultCount, childCount, countOpen } = props;

  // count state lifted to dropdown.js, for function to work maintain same name (handleCount)
  return (
    <div className={`counter-container ${countOpen && "open"}`}>
      <div className="adult-cont">
        <p>Adults</p>
        <small>Ages 13 or above</small> <br />
        <div className="count-cont">
          <button
            className="minus"
            onClick={() => handleCount("adultCount", "down")}
            disabled={adultCount <= 0}
          >
            <CiSquareMinus />
          </button>
          <span className="count">{adultCount}</span>{" "}
          <button
            className="plus"
            onClick={() => handleCount("adultCount", "up")}
          >
            <CiSquarePlus />
          </button>
        </div>
      </div>
      <div className="children-cont">
        <p>Children</p>
        <small>Ages 2-12</small>
        <br />
        <div className="count-cont">
          <button
            className="minus"
            disabled={childCount <= 0}
            onClick={() => handleCount("childCount", "down")}
          >
            <CiSquareMinus />
          </button>
          <span className="count">{childCount}</span>{" "}
          <button
            className="plus"
            onClick={() => handleCount("childCount", "up")}
          >
            <CiSquarePlus />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
