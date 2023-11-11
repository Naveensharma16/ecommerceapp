import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  moveToCart,
  removeFromWishlist,
} from "../../features/wishlist/wishlistSlice";

import "./wishlist.scss";

import remove from "../../assets/cross.png";
import emptywishlist from "../../assets/emptywishlist.png";

import Breadcrumb from "../../components/Breadcrumb";

export default function Wishlist() {
  const wishlistdata = useSelector((state) => state.wishlistReducer.wishlist);

  const dispatch = useDispatch();

  // function to remove item from wishlist
  const handleremoveFromWishlist = (itemid) => {
    dispatch(removeFromWishlist(itemid));
  };
  // function to move item to cart
  const handlemoveToCart = (itemid) => {
    dispatch(moveToCart(itemid));
  };

  if (wishlistdata.length !== 0) {
    // content to show when ther is item in wishlist
    return (
      <>
        <Breadcrumb title={"Wishlist"} />
        <div className="container flex-layout container-margin">
          {wishlistdata.map((item) => {
            return (
              <div key={item.id} className="single-product-card">
                <div className="item-background">
                  <img src={item.image} />
                  <h3>{item.name}</h3>
                  <h4>price ${item.price}</h4>
                  <button onClick={() => handlemoveToCart(item)}>
                    add to cart
                  </button>
                  <img
                    src={remove}
                    alt=""
                    onClick={() => handleremoveFromWishlist(item.id)}
                    className="remove-item"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  } else {
    //
    return (
      <div className="empty-cart">
        <img src={emptywishlist} alt="" />
        <h2>Your Wishlist is empty</h2>
        <Link to={"/products"}>Go to products</Link>
      </div>
    );
  }
}
