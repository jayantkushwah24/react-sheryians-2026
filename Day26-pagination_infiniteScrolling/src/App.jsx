import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { getProductData } from "./api/getAllProductsApi";

const App = () => {
  const [page, setPage] = useState(0);
  const [skip, setSkip] = useState(12);
  const limit = 12;

  const {
    data: productsList,
    isPending,
    error,
    isPlaceholderData,
  } = useQuery({
    queryKey: ["products", page],
    queryFn: () => getProductData(limit, page, skip),
    placeholderData: keepPreviousData,
  });

  let totalPage = Math.ceil(productsList?.total / limit);
  console.log(totalPage);

  return (
    <div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          padding: "40px",
          gap: "1rem",
          backgroundColor: "#f0f2f5",
          opacity: isPlaceholderData ? 0.3 : 1,
        }}
      >
        {productsList?.products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => setPage(page - 1)}
          style={{ backgroundColor: "red", maxWidth: "5%" }}
          className="btn-primary"
          disabled={page < 1}
        >
          Prev
        </button>
        <h4>
          Page {page + 1} out of {totalPage}
        </h4>
        <button
          onClick={() => setPage(page + 1)}
          style={{ backgroundColor: "red", maxWidth: "5%" }}
          disabled={page >= totalPage - 1}
          className="btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
