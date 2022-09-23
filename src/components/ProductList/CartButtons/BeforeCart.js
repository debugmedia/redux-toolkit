import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import "./CartButtons.css";
import { addToCart } from "../../../redux/cart";
import { CartContext } from "../../../context/cart/cartContext";

const BeforeCart = ({ product }) => {
   const { addToCart } = useContext(CartContext);

   return (
      <div className="before-cart">
         <button className="add-cart-button" onClick={() => addToCart(product)}>
            Add to cart
         </button>
      </div>
   );
};

export default BeforeCart;
