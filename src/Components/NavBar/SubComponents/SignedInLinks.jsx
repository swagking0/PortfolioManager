import React from "react";
import { NavLink } from "react-router-dom";
import { RiLogoutCircleRLine, RiDashboardFill } from "react-icons/ri";

function SignedInLinks({ handleLogOut }) {
  return (
    <React.Fragment>
      <ul className="links__holderwrapper">
        <li className="links__holder">
          <NavLink to="/" className="links__btn">
            dashboard{" "}
            <span>
              <RiDashboardFill />
            </span>
          </NavLink>
        </li>
        <li className="links__holder">
          <div className="links__btn" onClick={handleLogOut}>
            logout{" "}
            <span>
              <RiLogoutCircleRLine />
            </span>
          </div>
        </li>
      </ul>
    </React.Fragment>
  );
}

export default SignedInLinks;
