import React, { useContext } from "react";
import Products from "./ListProduct";
import { AppContext } from "../containers/User";
import Points from './Points';

const Profile = ({ info, render }) => {
  const {
    user: { name, points, createDate = "" },
  } = useContext(AppContext);

  return (
    <div className="profile">
      <div className="user">
        <div className="user-info">
          <h1>{name}</h1>
          <h2><i className="fa fa-money" aria-hidden="true"></i> Coins available: {points}</h2>
          <p>Account created on: {createDate.substr(0, 10)}</p>
        </div>
        <Points />
      </div>
      <h1 className='history-title'><i className="fa fa-history" aria-hidden="true"></i> HISTORY</h1>
      <Products info={info} render={render}/>
    </div>
  );
};

export default Profile;
