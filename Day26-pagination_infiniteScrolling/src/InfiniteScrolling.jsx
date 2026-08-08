import { useInfiniteQuery } from "@tanstack/react-query";
import React from "react";
import { getProductsInfiniteScrolling } from "./api/getAllProductsApi";

const InfiniteScrolling = () => {
  let limit = 12;
  const { data } = useInfiniteQuery({
    queryKey: ["product"],
    queryFn: ({ pageParam }) => getProductsInfiniteScrolling(limit, pageParam),
    initialPageParam: 0,
    getNextPageParam:()=>{}
  });
  return <div></div>;
};

export default InfiniteScrolling;
