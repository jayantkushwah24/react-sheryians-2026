import { api } from "../../../config/api";

export const getAllProductApi = async (searchValue) => {
  try {
    let url = searchValue ? `products/search?q=${searchValue}` : `/products`;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductCategoriesApi = async () => {
  try {
    const response = await api.get("/products/categories");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const getProductsByCategory = async (categoryValue) => {
  try {
    let url = categoryValue
      ? `/products/category/${categoryValue}`
      : `/products`;
    const response = await api.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
