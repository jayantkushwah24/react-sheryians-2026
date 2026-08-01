import React from "react";
import { useGetProduct } from "../hooks/productHooks";

const Filters = ({ searchProducts, filterProdByCategory }) => {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => searchProducts(e.target.value)}
        placeholder="search products..."
        style={{
          padding: "0.7rem 0rem",
          borderRadius: "1rem",
          margin: "1rem",
          textAlign: "center",
          border: "1px solid black",
          width: "30%",
        }}
      />
      <select
        name="category"
        defaultValue=""
        onChange={(e) => filterProdByCategory(e.target.value)}
      >
        <option value="">Select Category</option>
        <option value="groceries">Groceries</option>
        <option value="beauty">Beauty</option>
        <option value="furniture">Furniture</option>
        <option value="fragrances">Fragrances</option>
      </select>
    </div>
  );
};

export default Filters;
