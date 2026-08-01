import { axiosInstance } from "../config/axiosInstance";

async function getProductData() {
  try {
    const response = await axiosInstance.get("/products");
    const products = response.data.products;
    return products;
  } catch (error) {
    console.error(error);
  }
}

export default getProductData;
