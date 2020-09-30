import React from "react";
import coin from "../images/coin.svg";

const SimpleProduct = ({ _id, name, cost, category, img: { url } }) => {
  return (
    <div className="card history-card">
      <img src={url} alt="product"></img>

      <div className="info">
        <p>{category}</p>
        <h3>{name}</h3>
        <div className="card-points">
          <img src={coin} alt="coin" />
          <p>{cost}</p>
        </div>
      </div>
    </div>
  );
};

export default SimpleProduct;
