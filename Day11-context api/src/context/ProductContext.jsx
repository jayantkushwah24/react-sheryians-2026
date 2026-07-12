import { createContext, useState } from "react";
import { getProductData } from "../components/getProductData";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [productList, setProductList] = useState(getProductData);
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

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
