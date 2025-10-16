import React from "react";
import "./Profile.css";

function Icard(props) {
  return (
    <>
      <div className="main">
        <h1>ABES engineering college</h1>
        <div>
          <div className="img">
            {" "}
            <img
              src="https://t3.ftcdn.net/jpg/07/70/29/42/360_F_770294297_XWMJkC5hB7m0DZ9ET3h7DJsyoiCTiLBe.jpg"
              alt=""
            />
          </div>
          <div>
            <h1>Name: {props.name}</h1>
            <h2>Age :{props.age}</h2>
            <h3>Branch :{props.branch}</h3>
            <h3>College :{props.college}</h3>
            <h3>Location:{props.location}</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Icard;
