import React from "react";

const ProductCard = ({p}) => {
  return (
    <div
      key={p.id}
      style={{
        border: "1px solid black",
        margin: "0.3rem",
        padding: "1rem",
      }}
    >
      <div>
        <img src={p.thumbnail} alt="img" height={200} />
      </div>
      <div>
        <h1>{p.title}</h1>
        <p>{p.description}</p>
        <h3>${p.price}</h3>
        <h6>⭐{p.rating}</h6>
        <button>Buy Now</button>
        <button>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
