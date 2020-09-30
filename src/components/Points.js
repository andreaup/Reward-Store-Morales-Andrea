import React, { useContext, useState, useEffect, useRef } from "react";
import coin from "../images/coin.svg";
import { AppContext } from "../containers/User";
import { pathData, fetchData, add_points_options } from "../resources/defaulValues";

const Points = () => {
  const { user, setUser } = useContext(AppContext);
  const [selected, setSelected] = useState(add_points_options[0]);
  const [message, setMessage] = useState("Add coins to your account now");
  let isMounted = useRef(true);

  const handlePost = () => {
    fetchData({ data: pathData.points, body: { amount: selected } })
      .then((res) => {
         setUser({ ...user, points: res["New coins added to your account"] });
         isMounted.current && setMessage(res.message);
      }).catch(
        isMounted.current
      )
  };

  useEffect(()=> {
    return() => {
      isMounted.current = false;
    }
  },[]);

  return (
    <div className="points-comp">
      
      <h1>Get Coins!!<i className="fa fa-money" aria-hidden="true"></i></h1>
      <div className="options">
        {add_points_options.map((element) => (
          <button
            key={element}
            className={
              selected === element ? "btn-active number" : "btn number"
            }
            onClick={() => setSelected(element)}
          >
            <img src={coin} alt="coin" />
          <p>{element}</p>
          </button>
        ))}
      </div>
      <button className="btn btn-add btn-add-points" onClick={() => handlePost()}>
        Go!
      </button>
      <h3>{message}!</h3>
    </div>
  );
};


export default Points;
