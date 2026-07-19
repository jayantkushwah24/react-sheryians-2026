import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { ProductContext } from "../context/ProductContext";

const ProductDetail = () => {
  let [productDetails, setProductDetail] = useState({});
  let { setCartItems } = useContext(ProductContext);
  let { prodId } = useParams();

  const {
    id,
    category,
    image,
    title,
    description,
    rating = {},
    price,
  } = productDetails;

  async function fetchProdDetails() {
    let response = await fetch(`https://fakestoreapi.com/products/${prodId}`);
    let data = await response.json();
    setProductDetail(data);
    console.log(data);
  }

  useEffect(() => {
    fetchProdDetails();
  }, [prodId]);

  return (
    <div className="mx-auto max-w-7xl">
      <div
        key={id}
        className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 p-5 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.7)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_30px_80px_-20px_rgba(34,211,238,0.35)]"
      >
        <span className="absolute left-4 top-4 rounded-full bg-cyan-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
          {category}
        </span>

        <div className="mt-10 flex h-56 items-center justify-center rounded-2xl bg-linear-to-br from-slate-800 via-slate-900 to-slate-950 p-4">
          <img
            src={image}
            alt={title}
            onClick={() => navigate(`/products/${id}`)}
            className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        <div className="mt-5 flex flex-1 flex-col">
          <h2
            onClick={() => navigate(`/products/${id}`)}
            className="text-lg font-semibold text-white line-clamp-2"
          >
            {title}
          </h2>
          <p
            onClick={() => navigate(`/products/${id}`)}
            className="mt-3 text-sm leading-6 text-slate-400"
          >
            {description}
          </p>

          <div className="mt-5 flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-cyan-300">${price}</p>
              <p className="mt-1 text-sm text-slate-500">
                ⭐ {rating.rate} · {rating.count} reviews
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() =>
                setCartItems((prev) => [
                  ...prev,
                  { ...productDetails, quantity: 1 },
                ])
              }
              className="w-fit cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Add to cart
            </button>
            <button className="w-fit m-5 cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
