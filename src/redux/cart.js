import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const INITIAL_STATE = {
   cartList: [],
   cartCount: 0,
   userDetail: [],
};

const cartSlice = createSlice({
   name: "cart",
   initialState: INITIAL_STATE,
   reducers: {
      updateUser: (state, action) => {
         state.userDetail.push(action.payload);
      },
      addToCart: (state, action) => {
         const itemExist = state.cartList.find((item) => item.id === action.payload.id);
         if (itemExist) {
            state.cartList.forEach((item) => {
               if (item?.id === action.payload.id) {
                  item.count = 1;
               }
            });
            return;
         }
         state.cartList.push({
            ...action.payload,
            count: 1,
         });
      },
      increment: (state, action) => {
         const productID = action.payload;
         state.cartList.forEach((item) => {
            if (item?.id === productID) {
               item.count++;
            }
         });
      },
      decrement: (state, action) => {
         const productID = action.payload;
         state.cartList.forEach((item) => {
            if (item?.id === productID) {
               item.count--;
            }
         });
      },
   },
});

export const { increment, decrement, addToCart, updateUser } = cartSlice.actions;

export default cartSlice.reducer;
