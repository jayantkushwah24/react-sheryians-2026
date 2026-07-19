import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router";

const ProductCard = () => {
  const { productList, setCartItems } = useContext(ProductContext);
  let navigate = useNavigate();

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 mx-auto max-w-7xl">
      {productList.map((p, index) => (
        <div
          key={p.id || index}
          className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 p-5 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.7)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:shadow-[0_30px_80px_-20px_rgba(34,211,238,0.35)]"
        >
          <span className="absolute left-4 top-4 rounded-full bg-cyan-400/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-300">
            {p.category}
          </span>

          <div className="mt-10 flex h-56 items-center justify-center rounded-2xl bg-linear-to-br from-slate-800 via-slate-900 to-slate-950 p-4">
            <img
              src={p.image}
              alt={p.title}
              onClick={() => navigate(`/products/${p.id}`)}
              className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="mt-5 flex flex-1 flex-col">
            <h2
              onClick={() => navigate(`/products/${p.id}`)}
              className="text-lg font-semibold text-white line-clamp-2"
            >
              {p.title}
            </h2>
            <p
              onClick={() => navigate(`/products/${p.id}`)}
              className="mt-3 text-sm leading-6 text-slate-400"
            >
              {p.description}
            </p>

            <div className="mt-5 flex items-center justify-between">
              <div>
                <p className="text-2xl font-bold text-cyan-300">${p.price}</p>
                <p className="mt-1 text-sm text-slate-500">
                  ⭐ {p.rating.rate} · {p.rating.count} reviews
                </p>
              </div>
              <button
                onClick={() =>
                  setCartItems((prev) => [...prev, { ...p, quantity: 1 }])
                }
                className="cursor-pointer rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
