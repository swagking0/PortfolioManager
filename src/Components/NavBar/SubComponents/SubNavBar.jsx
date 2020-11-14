import React from "react";
import { NavLink } from "react-router-dom";

import { RiLogoutCircleRLine } from "react-icons/ri";

import { SignedInLinks } from "./SignedInLinks";
import { SignedOutLinks } from "./SignedOutLinks";

function SubNavBar({ showSideBar, handleSideBar, handleLogOut, uid }) {
  return (
    <div
      className={
        showSideBar ? "subnavbar__container active" : "subnavbar__container"
      }
    >
      <div className="subnavbar__wrapper">
        {uid
          ? SignedInLinks.map((item, index) => {
              return (
                <div key={index}>
                  <div className="subnavbar__itemsholder">
                    <NavLink
                      to={item.path}
                      className={item.cName}
                      activeClassName={item.acName}
                      onClick={handleSideBar}
                    >
                      {item.title}
                      <span>{item.icon}</span>
                    </NavLink>
                  </div>
                  <div className="subnavbar__itemsholder">
                    <div className="subnavbar__itembtn" onClick={handleLogOut}>
                      logout{" "}
                      <span>
                        <RiLogoutCircleRLine />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          : SignedOutLinks.map((item, index) => {
              return (
                <div className="subnavbar__itemsholder" key={index}>
                  <NavLink
                    to={item.path}
                    className={item.cName}
                    activeClassName={item.acName}
                    onClick={handleSideBar}
                  >
                    {item.title}
                    <span>{item.icon}</span>
                  </NavLink>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default SubNavBar;
