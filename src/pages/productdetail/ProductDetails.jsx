import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../../features/cart/cartSlice";
import { addToWishList } from "../../features/wishlist/wishlistSlice";

import "./productdetails.scss";
import Loading from "../../components/Loading";

export default function ProductDetails() {
  const parameter = useParams();

  const [productDetails, setProductDetails] = useState();

  // dispatch hook to dispatch action for adding item into cart
  const dispatch = useDispatch();

  // fetching the product basis on given id
  useEffect(() => {
    fetch(`/api/products/${parameter.id}`)
      .then((response) => response.json())
      .then((data) => setProductDetails(data));
  }, [parameter.id]);

  // function to add item in cart
  const handleCartUpdate = () => {
    const cartItem = {
      id: productDetails.id,
      name: productDetails.name,
      image: productDetails.image,
      quantity: 1,
      price: productDetails.price,
      get total() {
        return this.quantity * this.price;
      },
    };
    // dispatching action to redux
    dispatch(addToCart(cartItem));
  };

  //  function to add item into wishlist
  const handleAddToWishlist = () => {
    const wishlistItem = {
      id: productDetails.id,
      name: productDetails.name,
      image: productDetails.image,
      quantity: 1,
      price: productDetails.price,
      get total() {
        return this.quantity * this.price;
      },
    };
    // dispatching action to redux
    dispatch(addToWishList(wishlistItem));
  };

  // if no data in product details show loading (conditional rendering)
  if (!productDetails) {
    return <Loading />;
  } else {
    return (
      <div className="container flex-layout single-product">
        <div className="product-image">
          {productDetails && <img src={productDetails.image} alt="" />}
        </div>
        <div className="product-content">
          <h2>{productDetails && productDetails.name}</h2>
          <h3>
            {" "}
            {productDetails ? "Current Price $ " + productDetails.price : ""}
          </h3>
          <h3>{productDetails ? "Qty: " + productDetails.quantity : ""}</h3>
          <h4>
            {productDetails ? "plant category: " + productDetails.category : ""}
          </h4>
          <p>{productDetails && productDetails.description}</p>
          <div className="flex-layout purchasing-buttons">
            <button onClick={handleCartUpdate}>add to cart</button>
            <button onClick={handleAddToWishlist}>add to wishlist</button>
          </div>
        </div>
      </div>
    );
  }
}
