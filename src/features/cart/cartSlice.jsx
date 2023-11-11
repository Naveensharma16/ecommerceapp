import { createSlice } from "@reduxjs/toolkit";
import { moveToCart } from "../wishlist/wishlistSlice";
import Cookies from "js-cookie";
import toast from "../../customtoast/toast";

// getting cart values from cookies
const cartDataFromCookies = Cookies.get("cart");

const initialState = {
  // setting cart initial value if there is any value in cookies we use that as initial value else an empty array
  cart: cartDataFromCookies ? JSON.parse(cartDataFromCookies) : [],
};

// slice for the cart
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const alreadyexist = state.cart.some((item) => {
        if (item.id === action.payload.id) {
          return true;
        }
        return false;
      });
      if (!alreadyexist) {
        state.cart = [...state.cart, action.payload];
        // adding cart state value in cookies
        Cookies.set("cart", JSON.stringify(state.cart), { expires: 1 });
        // TODO: create a custom toast that will give user msg
        toast("added to cart");
      } else {
        toast("already in cart");
      }
    },
    updateQuantity: (state, action) => {
      const filteredState = state.cart.map((item) => {
        if (item.id === action.payload.cartproductid) {
          return {
            ...item,
            quantity: action.payload.quantity,
            get total() {
              return this.quantity * this.price;
            },
          };
        }
        return item;
      });
      state.cart = filteredState;
      // updating the state
      Cookies.set("cart", JSON.stringify(state.cart), { expires: 1 });
    },
    removeItemFromCart: (state, action) => {
      const filteredState = state.cart.filter((item) => {
        return item.id !== action.payload;
      });
      state.cart = filteredState;
      // updating the state
      Cookies.set("cart", JSON.stringify(state.cart), { expires: 1 });
    },
    clearCart: (state) => {
      state.cart = [];
      // updating the state
      Cookies.set("cart", JSON.stringify(state.cart), { expires: 1 });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(moveToCart, (state, action) => {
      const alreadyexist = state.cart.some((item) => {
        if (item.id === action.payload.id) {
          return true;
        }
        return false;
      });
      if (!alreadyexist) {
        state.cart = [...state.cart, action.payload];
        // adding cart state value in cookies
        Cookies.set("cart", JSON.stringify(state.cart), { expires: 1 });
      }
    });
  },
});

const cartReducer = cartSlice.reducer;
// default export of reducer
export default cartReducer;
// named export of actions
export const { addToCart, updateQuantity, clearCart, removeItemFromCart } =
  cartSlice.actions;
