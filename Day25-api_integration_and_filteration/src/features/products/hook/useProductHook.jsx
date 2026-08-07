import { useQuery } from "@tanstack/react-query";
import {
  getAllProductApi,
  getProductCategoriesApi,
  getProductsByCategory,
} from "../api/productApi";
import { useEffect, useState } from "react";

export const useAllProduct = () => {
  const [search, setSearch] = useState(null);
  const [debounceSearch, setDebounceSearch] = useState(null);
  const { data, isPending, error } = useQuery({
    queryKey: ["products", debounceSearch],
    queryFn: () => getAllProductApi(debounceSearch),
    staleTime: 2 * 1000,
  });

  useEffect(() => {
    let timeout = setTimeout(() => {
      setDebounceSearch(search.trim());
    }, 1000);

    return () => clearTimeout(timeout);
  }, [search]);

  return {
    data,
    isPending,
    error,
    search,
    setSearch,
  };
};

export const useProductsByCategory = () => {
  const [categoryValue, setCategoryValue] = useState("");

  const { data } = useQuery({
    queryKey: ["categoryFilter", categoryValue],
    queryFn: () => getProductsByCategory(categoryValue),
  });

  return {
    categoryValue,
    setCategoryValue,
    data,
  };
};

export const useAllCategories = () => {
  const { data, error, isPending } = useQuery({
    queryKey: ["AllCategories"],
    queryFn: getProductCategoriesApi,
  });

  return {
    data,
    error,
    isPending,
  };
};
