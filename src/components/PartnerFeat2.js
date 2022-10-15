import React from "react";
import logo1 from "../image/partner1.PNG";
import logo2 from "../image/partner2.PNG";
import logo3 from "../image/partner3.PNG";
import logo4 from "../image/partner4.PNG";
import logo5 from "../image/partner5.PNG";
import logo6 from "../image/partner6.PNG";

const PartnerFeat2 = () => {
  return (
    <article>
      <div className="text-center text-black">
        <h2 className="mb-5">How it works</h2>
        <div className="container row g-5 mx-auto">
          <div className="d-flex ">
            <div className="">
              <div>
                <img src={logo1} alt={PartnerFeat2.PNG} />

                <p>
                  In our world, it starts with a brand that creates an
                  innovative solution that helps people live a little better.
                </p>
              </div>
              <div>
                <img src={logo3} alt={PartnerFeat2.PNG} />
                <p>
                  Ahiax strategises, activates, and manages the perfect
                  Marketing Campaigns for the Brand's offer depending on the
                  product category, customer demographics and the globall
                  markets available. We'd leverage our sales ecosystem and
                  skilled performance marketing.
                </p>
              </div>
              <div>
                <img src={logo5} alt={PartnerFeat2.PNG} />
                <p>
                  Unlike traditional Marketing agencies, with Partner Marketing,
                  brands only pay for results. Marketing Partners earn a
                  commission for every sale or lead they generate
                </p>
              </div>
            </div>
            <div className="d-flex inbetween">
              <div>
                <ul>
                  <li>1</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>2</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>3</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>4</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>5</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>6</li>
                </ul>
              </div>
            </div>
            <div className="dflex ">
              <div>
                <img src={logo2} alt={PartnerFeat2.PNG} />
                <p>
                  The Brand works with ElanX to transform their product into a
                  high performance offer that achieves their desired result
                  (sales, leads and more) with zero risk.
                </p>
              </div>
              <div>
                <img src={logo4} alt={PartnerFeat2.PNG} />
                <p>
                  The Brand selects from one of our partner marketing packages,
                  to test the Brand's offer across available online channels,
                  audiences, countries and ElanX sales ecosystem– with the goal
                  of sending the Brand high quality customers.
                </p>
              </div>
              <div>
                <img src={logo6} alt={PartnerFeat2.PNG} />
                <p>
                  Your Brand, and ElanX work together to ensure a win-win-win
                  relationship that results in profitable, long-term, and
                  sustainable sales success for everyone involved.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 mb-3">
          <button className="btn btn-success">Get Started</button>
        </div>
      </div>
    </article>
  );
};
export default PartnerFeat2;
