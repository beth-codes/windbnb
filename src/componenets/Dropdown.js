import { useState } from "react";
import Stays from "..//stays.json";
import { IoMdSearch } from "react-icons/io";
import { VscClose } from "react-icons/vsc";
import { MdLocationOn } from "react-icons/md";
import "./Dropdown.css";
import Counter from "./Counter";

function Dropdown(props) {
  const {
    isOpened,
    ToggleSidebar,
    countAdd,
    adultCount,
    childCount,
    handleCount,
    handleItemClick,
    selectedItem
  } = props;

  // count state lifted to navbar, for global(navbar) funct to gain access
  // selected dropdown function lifted to navbar funct, funct name (handleitemclick) is changed and still works

  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const [countOpen, setCountOpen] = useState(false);
  const toggleCount = () => setCountOpen(!countOpen);

  const getUnique = (arr, comp) => {
    // store the comparison  values in array
    const unique = arr
      .map((e) => e[comp])
      // store the indexes of the unique objects
      .map((e, i, final) => final.indexOf(e) === i && i)
      // eliminate the false indexes & return unique objects
      .filter((e) => arr[e])
      .map((e) => arr[e]);
    return unique;
  };
  const uniqueCity = getUnique(Stays, "city");
  return (
    <div className={`dropdown-container ${isOpened === true ? "active" : ""}`}>
      <div className="cancel-cont">
        <p>Edit your search</p>
        <VscClose onClick={ToggleSidebar} />
      </div>
      <div className="dropdown-menu">
        <div className="dropdown-header" onClick={toggling}>
          {selectedItem
            ? `${Stays.find((stay) => stay.id === selectedItem).city}, ${
                Stays.find((stay) => stay.id === selectedItem).country
              } `
            : "Add location"}
        </div>

        <div className={`dropdown-body  ${isOpen && "open"}`}>
          {uniqueCity.map((stay) => (
            <div
              className="dropdown-item"
              key={stay.id}
              onClick={(e) => handleItemClick(e.target.id)}
              id={stay.id}
            >
              <span
                className={`dropdown-item-dot ${
                  stay.id === selectedItem && "selected"
                }`}
              >
                •{" "}
              </span>
              <MdLocationOn className="location-icon" />
              {stay.city}, {stay.country}
            </div>
          ))}
        </div>

        <label>LOCATION</label>
      </div>

      {/* <small>Add guests</small> */}
      <div className="guest-cont">
        <div className="input" onClick={toggleCount}>
          {countAdd ? `${countAdd} guests` : "Add guests"}
        </div>
        <label>GUEST</label>
        {/* <div className={`dropdown-body ${isOpen && "open"}`}> */}
        <Counter
          handleCount={handleCount}
          adultCount={adultCount}
          childCount={childCount}
          countOpen={countOpen}
          setCountOpen={setCountOpen}
          toggleCount={toggleCount}
          handleItemClick={handleItemClick}
        />
        {/* </div> */}
      </div>

      {/* <small>search</small> */}
      <div className="search-cont">
        <button className="srch-btn" type="search" onClick={ToggleSidebar}>
          <IoMdSearch />
          <span>search</span>
        </button>
      </div>
    </div>
  );
}

export default Dropdown;
