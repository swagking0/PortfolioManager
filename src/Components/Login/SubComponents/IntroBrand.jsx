import React from "react";

import Intro_Img from "../../../Resources/Images/Intro_Img.svg";

function IntroBrand() {
  return (
    <React.Fragment>
      <div className="loginleft__imgwrapper">
        <img src={Intro_Img} alt="intro" />
      </div>
    </React.Fragment>
  );
}

export default IntroBrand;
