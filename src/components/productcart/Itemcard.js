import React from "react";
import { useCart } from "react-use-cart";

function Itemcard(props) {
  const { addItem } = useCart();
  return (
    <div className="col-sm-6 col-md-4  mb-4 ">
      <div className="card  w-75 mx-auto  shadow">
        <img
          src={props.img}
          className="card-img"
          alt=""
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <div className="card-body text-center">
          <h5>{props.title}</h5>
          <p>{props.desc}</p>
          <p>N{props.price}</p>
          <button
            className="btn btn-success"
            onClick={() => addItem(props.item)}
          >
            Add to Cart
          </button>
        </div>
        <div>
          <Increment />
          <Decrement />
        </div>
      </div>
    </div>
  );
}
function Increment() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="plus-icon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
      />
    </svg>
  );
}
function Decrement() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className="plus-icon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18 12H6"
      />
    </svg>
  );
}
export default Itemcard;
