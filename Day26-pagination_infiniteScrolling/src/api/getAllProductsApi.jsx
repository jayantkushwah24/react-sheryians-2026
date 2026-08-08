export function getProductData(limit, page = 1, skip) {
  const response = fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${page * skip}`,
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));

  return response;
}
export function getProductsInfiniteScrolling(limit, pageParam) {
  const response = fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`,
  )
    .then((response) => response.json())
    .catch((error) => console.error(error));

  return response;
}
