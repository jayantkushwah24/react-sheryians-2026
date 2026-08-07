import React, { useEffect, useMemo, useState } from "react";
import {
  useAllProduct,
  useProductsByCategory,
} from "../../hook/useProductHook";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const ProductPage = () => {
  let { data, isPending, error, search, setSearch } = useAllProduct();
  const {
    data: categoryProducts,
    categoryValue,
    setCategoryValue,
  } = useProductsByCategory();

  const displayProducts = useMemo(() => {
    if (categoryProducts && categoryValue) {
      return categoryProducts.products || [];
    }
    return data?.products || [];
  }, [data, categoryProducts, categoryValue]);

  return (
    <div>
      <Filter
        search={search}
        setSearch={setSearch}
        categoryValue={categoryValue}
        setCategoryValue={setCategoryValue}
      />

      {isPending ? (
        <h1>Product Loading...</h1>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: "1rem",
          }}
        >
          {displayProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductPage;
