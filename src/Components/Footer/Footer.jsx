import React from "react";
import "../../Styles/Components/footer.css";
import { FaReact } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer__container">
      <div className="footer__wrapper">
        <h3>
          creafted with love{" "}
          <span role="img" aria-labelledby="footer__wrapper">
            ❤️
          </span>{" "}
          in react <FaReact />
        </h3>
        <h3>
          Copyright &#169; 2020 All rights reserved | &#169;{" "}
          <a
            href="https://www.linkedin.com/in/mohith-bhargav-sunkara-930796119/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="footer__heroprofile">Sunkara.</span>
          </a>
        </h3>
      </div>
    </div>
  );
}

export default Footer;
