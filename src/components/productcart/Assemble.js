import React from "react";
import Itemcard from "./Itemcard";
import Data1 from "../productcart/Data";

const Assemble = () => {
  return (
    <>
      <section className="py-4 container">
        <div className="row justify-content-center">
          {Data1.fashion.map((item, index) => {
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

export default Assemble;
