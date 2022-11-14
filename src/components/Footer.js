import React from "react";
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
            <footer className="footer">
              <a
                href="mailto:fortunechinenyem@gmail.com"
                className="footer__link"
              >
                info@ahiax.com
              </a>

              <ul className="social-list">
                <li className="social-list__item">
                  <a
                    className="social-list__link"
                    href="https://www.linkedin.com/in/fortune-chinenyem-aribido-6578b8185/"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
                <li className="social-list__item">
                  <a
                    className="social-list__link"
                    href="https://twitter.com/FortuneChineny1"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="social-list__item">
                  <a
                    className="social-list__link"
                    href="https://github.com/Fortunechinenyem"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="social-list__item">
                  <a
                    className="social-list__link"
                    href="https://www.facebook.com/fortune.c.gcfr"
                  >
                    <i className="fab fa-facebook"></i>
                  </a>
                </li>
                <li className="social-list__item">
                  <a
                    className="social-list__link"
                    href="https://api.whatsapp.com/send?phone=%2B2348067585444&text&app_absent=0"
                  >
                    <i className="fab fa-whatsapp"></i>
                  </a>
                </li>
              </ul>
            </footer>
            ​Copyright © 2022, Ahiax. All Rights Reserved.
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
