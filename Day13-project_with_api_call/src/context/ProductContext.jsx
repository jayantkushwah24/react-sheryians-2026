import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  async function getProductList() {
    try {
      let response = await fetch("https://fakestoreapi.com/products");
      let data = await response.json();
      setProductList(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        productList,
        setProductList,
        cartItems,
        setCartItems,
        cartOpen,
        setCartOpen,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
