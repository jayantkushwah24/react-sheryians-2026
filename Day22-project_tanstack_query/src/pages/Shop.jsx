import Filters from "../components/Filters";
import ProductCard from "../components/ProductCard";
import { useGetProduct } from "../hooks/productHooks";

const Shop = () => {
  const {
    filteredProducts,
    isPending,
    error,
    searchProducts,
    filterProdByCategory,
  } = useGetProduct();

  if (error) return <h1>{error.message}</h1>;

  return (
    <div>
      <Filters
        searchProducts={searchProducts}
        filterProdByCategory={filterProdByCategory}
      />

      {isPending ? (
        <h1>loading...</h1>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)" }}>
          {filteredProducts?.map((p) => (
            <ProductCard p={p} key={p.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
