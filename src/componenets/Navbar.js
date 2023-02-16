import { useState } from "react";
// import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import Stays from "..//stays.json";
import "./Navbar.css";
import { IoMdSearch } from "react-icons/io";

function Navbar({ handleItemClick, selectedItem }) {
  const [count, setCount] = useState({ adultCount: 0, childCount: 0 });
  const [isOpened, setIsOpened] = useState(false);
  const adultCount = count.adultCount;
  const childCount = count.childCount;
  const countAdd = adultCount + childCount;

  // count funct, 2 components away (2 state lift)
  const handleCount = (item, action) => {
    setCount((prevstate) => {
      return {
        ...prevstate,
        [item]: action === "up" ? count[item] + 1 : count[item] - 1
      };
    });
  };

  // //dropdown funct 1 component away (1 state lift)
  // const handleItemClick = (id) => {
  //   selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  // };

  // toggle function same state
  const ToggleSidebar = () => {
    isOpened === true ? setIsOpened(false) : setIsOpened(true);
  };

  return (
    <div className="nav-container">
      <div>
        {/* <Link to="/" className="logo"> */}
        <img src="./logo.png" alt="logo" />
        {/* </Link> */}
      </div>
      <div className="dropdown" onClick={ToggleSidebar}>
        {/* <small>Helsinki, Finland</small> */}
        <small>
          {selectedItem
            ? `${Stays.find((stay) => stay.id === selectedItem).city}, ${
                Stays.find((stay) => stay.id === selectedItem).country
              } `
            : "Helsinki, Finland"}
        </small>
        <small>{countAdd ? `${countAdd} guests` : "Add guests"}</small>
        {/* <small>{countAdd ? `${countAdd} guests` : "Add guests"} guests</small> */}
        <small className="srch-icon">
          <IoMdSearch />
        </small>
      </div>
      <Dropdown
        isOpened={isOpened}
        ToggleSidebar={ToggleSidebar}
        handleCount={handleCount}
        countAdd={countAdd}
        adultCount={adultCount}
        childCount={childCount}
        handleItemClick={handleItemClick}
        selectedItem={selectedItem}
      />
      <div
        className={`sidebar-overlay ${isOpened === true ? "active" : ""}`}
        onClick={ToggleSidebar}
      ></div>
    </div>
  );
}

export default Navbar;
