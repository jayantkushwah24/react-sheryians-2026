import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";
import { useContext } from "react";
import { ProductContext } from "./context/ProductContext.jsx";

const App = () => {
  const { cartOpen } = useContext(ProductContext);

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_35%),linear-gradient(135deg,#020617,#111827)] px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <Navbar />
      {cartOpen ? (
        <Cart />
      ) : (
        <div className="mx-auto max-w-7xl">
          <ProductCard />
        </div>
      )}
    </div>
  );
};

export default App;
