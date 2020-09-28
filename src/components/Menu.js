import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { data } from "../resources/numberCategories";

const Menu = ({ defaultUser, onGet }) => {
  onGet(data[defaultUser]);
  return (
    <div className="Header">
      <div className="Search">
        <h1>Electronics </h1>
      </div>
      <div className="Categorias">
        <nav>
          <ul>
            <li>
              <Link to={"/home"}>
                Most recent
              </Link>
            </li>
            <li>
              <Link to={"/politics"}>
                Lowest price
              </Link>
            </li>
            <li>
              <Link to={"/international"}>
                Highest price
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

Menu.propTypes = {
  onGet: PropTypes.func,
};

export default Menu;
