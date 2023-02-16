import "./App.css";
import { useState } from "react";
import Navbar from "./componenets/Navbar";
import Hero from "./componenets/Hero";

export default function App() {
  const [selectedItem, setSelectedItem] = useState(null);

  //dropdown funct 1 component away (1 state lift)
  const handleItemClick = (id) => {
    selectedItem === id ? setSelectedItem(null) : setSelectedItem(id);
  };

  // );

  return (
    <div className="app">
      <Navbar selectedItem={selectedItem} handleItemClick={handleItemClick} />
      <Hero selectedItem={selectedItem} />
    </div>
  );
}
// }
