import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo1.svg";

const Footer = () => {
  return (
    <>
      <div className="card text-center">
        <div className="card-body">
          <div className="footer">
            <div className="logo mb-3">
              <img src={logo} alt={Footer.png} />
            </div>
            <div>
              <ul>
                <li>
                  <i
                    class="fa fa-car"
                    aria-hidden="true"
                    title="Time to destination by car"
                  ></i>
                </li>
              </ul>
            </div>
            ​Copyright © 2022, Ahiax. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
