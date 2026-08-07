import React from "react";

const ProductCard = ({ product }) => {
  const { thumbnail, title, price, rating, category, description } = product;

  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      <div>
        <p>{category}</p>
        <img src={thumbnail} alt="thumnail" height={150} />
      </div>
      <div>
        <h1>{title}</h1>
        <h2>${price}</h2>
        <p>{description}</p>
        <h4>⭐{rating}</h4>
        <button>Add to cart</button>
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default ProductCard;
