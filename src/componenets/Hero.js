import Img from "./Img";
import { useEffect, useState } from "react";
import "./Hero.css";
import Stays from "../stays.json";

function Hero({ selectedItem }) {
  const [stays, setStays] = useState(Stays);

  const _getSelectedStay = () => {
    return Stays.find((stay) => stay.id === selectedItem);
  };

  const getStays = () => {
    console.log("sseleteditem", selectedItem);
    // useEffect(() => {
    if (selectedItem) {
      let selectedStay = _getSelectedStay();
      // console.log("in the selected Stay ", selectedStay);
      let updatedStays = Stays.filter(
        (stay) =>
          stay.city === selectedStay.city &&
          stay.country === selectedStay.country
      );
      setStays(updatedStays);
    } else {
      setStays(Stays);
    }
  };

  useEffect(() => {
    getStays();
  }, [selectedItem]);

  return (
    <div className="hero-container">
      <div className="hero-header">
        <h2>Stays in Finland</h2>
        <small>12+ stays</small>
      </div>
      {/* <div className="img"> */}
      <Img Stays={stays} />
      {/* </div> */}
    </div>
  );
}

export default Hero;
