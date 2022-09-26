import React from "react";
import { Link } from "react-router-dom";
import logo from "../image/logo1.svg";

import Card from "react-bootstrap/Card";

const Footer = () => {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Text>
            <footer>
              <div className="footer">
                <div className="logo mb-3">
                  <img src={logo} alt={Footer.png} />
                </div>
                <ul className="social-list">
                  <li className="social-list__item">
                    <Link to="/about" className="social-list__link">
                      FAQ
                    </Link>
                  </li>
                  <li className="social-list__item">
                    <a className="social-list__link" href="http://linkedin.com">
                      <i className="fab fa-linkedin"></i>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a className="social-list__link" href="https://twitter.com">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a
                      className="social-list__link"
                      href="https://wa.link/0gjrij"
                    >
                      <i className="fab fa-whatsapp"></i>
                    </a>
                  </li>
                  <li className="social-list__item">
                    <a
                      className="social-list__link"
                      href="https://facebook.com"
                    >
                      <i className="fab fa-facebook"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </footer>
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};
export default Footer;
