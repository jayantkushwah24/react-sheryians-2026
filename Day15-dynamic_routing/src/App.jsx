import ProductCard from "./components/ProductCard";
import Navbar from "./components/Navbar.jsx";
import Cart from "./components/Cart.jsx";
import { useContext } from "react";
import { Route, Routes } from "react-router";
import ProductDetail from "./components/ProductDetail.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.14),transparent_35%),linear-gradient(135deg,#020617,#111827)] px-4 py-10 text-slate-100 sm:px-6 lg:px-8">
      <Navbar />

      <Routes>
        <Route path="/" element={<ProductCard />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products/:prodId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
