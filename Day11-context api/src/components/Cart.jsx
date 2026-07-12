import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const Cart = () => {
  const { cartItems } = useContext(ProductContext);
  const total = cartItems.reduce(
    (acc, curr) => acc + Number(curr.price || 0),
    0,
  );

  return (
    <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.7)] backdrop-blur-xl">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Your Cart</h2>
        <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-sm font-medium text-cyan-300">
          {cartItems.length} item{cartItems.length === 1 ? "" : "s"}
        </span>
      </div>

      {cartItems.length === 0 ? (
        <div className="mt-8 rounded-2xl border border-dashed border-slate-700 py-12 text-center">
          <h1 className="text-xl font-medium text-slate-300">Cart is empty</h1>
        </div>
      ) : (
        <div className="mt-6 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-800/60 p-4 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 w-20 rounded-xl object-contain"
                />
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">${item.price}</p>
                </div>
              </div>
              <div className="rounded-full bg-slate-700/80 px-3 py-1 text-sm text-slate-300">
                Quantity: 1
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-6 rounded-2xl bg-slate-800/70 p-4 text-right text-lg font-semibold text-cyan-300">
        Total: ${total.toFixed(2)}
      </div>
    </div>
  );
};

export default Cart;
