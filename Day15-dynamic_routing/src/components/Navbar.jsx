import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto mb-8 flex max-w-5xl justify-center gap-4 rounded-full border border-white/10 bg-slate-900/70 p-2 shadow-[0_20px_60px_-20px_rgba(15,23,42,0.7)] backdrop-blur-xl sm:gap-6">
      <button
        onClick={() => navigate("/")}
        className="rounded-full px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-cyan-400/15 hover:text-cyan-300"
      >
        Home
      </button>
      <button
        onClick={() => navigate("/cart")}
        className="rounded-full px-6 py-3 text-sm font-semibold text-slate-200 transition hover:bg-cyan-400/15 hover:text-cyan-300"
      >
        Cart
      </button>
    </div>
  );
};

export default Navbar;
