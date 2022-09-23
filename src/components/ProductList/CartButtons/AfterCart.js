import React from "react";
import { decrement, increment } from "../../../redux/cart";
import { useDispatch, useSelector } from "react-redux";
import "./CartButtons.css";

const AfterCart = ({ cartCount, productID }) => {
   const disptach = useDispatch();

   return (
      <div className="after-cart">
         <button className="cart-counter-button" onClick={() => disptach(decrement(productID))}>
            -
         </button>
         <div className="cart-count">{cartCount}</div>
         <button className="cart-counter-button" onClick={() => disptach(increment(productID))}>
            +
         </button>
      </div>
   );
};

export default AfterCart;
