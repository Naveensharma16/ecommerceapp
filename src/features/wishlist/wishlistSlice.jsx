import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import toast from "../../customtoast/toast";

// getting cart values from cookies
const wishlistDataFromCookies = Cookies.get("wishlist");

const initialState = {
  wishlist: wishlistDataFromCookies ? JSON.parse(wishlistDataFromCookies) : [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishList: (state, action) => {
      const alreadyexist = state.wishlist.some((item) => {
        if (item.id === action.payload.id) {
          return true;
        }
        return false;
      });
      if (!alreadyexist) {
        state.wishlist = [...state.wishlist, action.payload];
        Cookies.set("wishlist", JSON.stringify(state.wishlist), { expires: 1 });
        // TODO: create a custom toast that will give user msg
        toast("added to wishlist");
      } else {
        toast("already in wishlist");
      }
    },
    removeFromWishlist: (state, action) => {
      const filteredWishlist = state.wishlist.filter((item) => {
        return item.id !== action.payload;
      });
      state.wishlist = filteredWishlist;
      Cookies.set("wishlist", JSON.stringify(state.wishlist), { expires: 1 });
    },
    moveToCart: (state, action) => {
      const filteredWishlist = state.wishlist.filter((item) => {
        return item.id !== action.payload.id;
      });
      state.wishlist = filteredWishlist;
      Cookies.set("wishlist", JSON.stringify(state.wishlist), { expires: 1 });
    },
  },
});

const wishlistReducer = wishlistSlice.reducer;
export default wishlistReducer;
export const { addToWishList, removeFromWishlist, moveToCart } =
  wishlistSlice.actions;
