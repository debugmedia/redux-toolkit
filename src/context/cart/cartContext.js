import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
   const [cartList, setCartList] = useState([]);

   const addToCart = (product) => {
      const currentCartList = [...cartList];
      const itemExist = currentCartList.find((item) => item.id === product?.id);
      if (itemExist) {
         currentCartList.forEach((item) => {
            if (item?.id === product.id) {
               item.count = 1;
            }
         });
         return;
      }

      setCartList([
         ...cartList,
         {
            ...product,
            count: 1,
         },
      ]);
   };

   return <CartContext.Provider value={{ cartList, addToCart }}>{children}</CartContext.Provider>;
};

export default CartProvider;
