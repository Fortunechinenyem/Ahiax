import React from "react";
import Itemcard from "../components/productcart/Itemcard";
import data from "../components/Data";

const RealEstate = () => {
  return (
    <>
      <section className="py-4 container">
        <div className="text-center section__title section__title--services">
          <h1>Real Estate</h1>
        </div>
        <div className="row justify-content-center">
          {data.realestate.map((item, index) => {
            return (
              <Itemcard
                img={item.img}
                title={item.title}
                desc={item.desc}
                price={item.price}
                item={item}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default RealEstate;
