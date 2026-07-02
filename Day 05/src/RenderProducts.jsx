import { useState } from "react";
import FetchProducts from "./FetchProducts.js";
import ProductCard from "./ProductCard.jsx";

const RenderProducts = () => {
  let list = FetchProducts() || [];
  let [productList, setProductList] = useState(list);

  function deleteProd(id) {
    productList = productList.filter((p) => p.id !== id);
    setProductList(productList);
  }

  return (
    <div className="grid grid-cols-4 grid-flow-row border-amber-700 gap-5">
      {productList.map((p) => {
        return (
          <ProductCard
            key={p.id}
            id={p.id}
            imgUrl={p.image}
            title={p.title}
            price={p.price}
            desc={p.description}
            deleteProd={deleteProd}
          />
        );
      })}
    </div>
  );
};

export default RenderProducts;
