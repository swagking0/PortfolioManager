import React from "react";
import { NavLink } from "react-router-dom";
import { RiQuestionLine } from "react-icons/ri";

function SignedOutLinks() {
  return (
    <React.Fragment>
      <ul className="links__holderwrapper">
        <li className="links__holder">
          <NavLink to="/about" className="links__btn">
            about{" "}
            <span>
              <RiQuestionLine />
            </span>
          </NavLink>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default SignedOutLinks;
