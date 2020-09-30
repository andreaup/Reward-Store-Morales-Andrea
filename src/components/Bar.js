import React, { useState } from "react";
import { sortFactors } from "../resources/defaulValues";

const Bar = ({ setSortBy, jump }) => {
  const [active, setActive] = useState("");

  const handleSort = (id) => {
    setActive(id);
    setSortBy(id);
    jump(1);
  };

  return (
    <div className="bar">
      <p>Sort by: </p>
      {Object.entries(sortFactors).map((element) => (
        <button
          key={element[1]}
          className={active === element[1] ? "btn-active" : "btn"}
          onClick={() => handleSort(element[1])}
        >
          {element[1]}
        </button>
      ))}
    </div>
  );
};

export default Bar;
