import React, { useState } from "react";

const ListFilter = ({ handleFilterChange, id, options, jump }) => {
  const [selected, setSelected] = useState("");
  options = [id, ...options];

  const handleChange = (selection) => {
    setSelected(selection);
    handleFilterChange(selection);
    jump(1);
  };

  return (
    <div className="filter">
      <select data-testid='selectOption' onChange={(e) => handleChange(e.target.value)} value={selected}>
        {options.map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListFilter;
