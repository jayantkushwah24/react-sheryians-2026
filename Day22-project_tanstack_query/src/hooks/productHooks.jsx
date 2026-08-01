import { useQuery } from "@tanstack/react-query";
import getProductData from "../api/getProductApi";
import { useEffect, useState } from "react";

export function useGetProduct() {
  const [filteredProducts, setFilteredProducts] = useState(null);

  const { data, isPending, error } = useQuery({
    queryKey: ["product"],
    queryFn: getProductData,
    staleTime: 5 * 1000,
  });

  useEffect(() => {
    setFilteredProducts(data);
  }, [data]);

  function searchProducts(searchInput) {
    if (!data) return;

    let filtered = data.filter((p) =>
      p.title.toLowerCase().includes(searchInput.toLowerCase()),
    );
    setFilteredProducts(filtered);
  }

  function filterProdByCategory(category) {
    if (!data) return;
    if (category === "") return setFilteredProducts(data);
    let filtered = data.filter((p) => p.category === category);
    setFilteredProducts(filtered);
  }

  return {
    data,
    isPending,
    error,
    searchProducts,
    filteredProducts,
    filterProdByCategory,
  };
}
