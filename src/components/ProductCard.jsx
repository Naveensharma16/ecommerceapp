// component to show a single product in card in product listing page

import { Link } from "react-router-dom";
import "./component.scss";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

// eslint-disable-next-line react/prop-types
export default function ProductCard({ plant }) {
  // eslint-disable-next-line react/prop-types
  const { id, image, name, category, price } = plant;
  const dispatch = useDispatch();

  const handleAddToCart = (event) => {
    event.stopPropagation();
    const cartItem = {
      id,
      name,
      image,
      quantity: 1,
      price,
      get total() {
        return this.quantity * this.price;
      },
    };
    dispatch(addToCart(cartItem));
  };

  return (
    <div className="single-product-card">
      <Link to={`/products/${id}`} className="">
        <div className="item-background">
          <img src={image} alt="" />
          <h4>{name}</h4>
          <h5>{category}</h5>
          <p>$ {price}</p>
        </div>
      </Link>
      <button onClick={(event) => handleAddToCart(event)}>add to cart</button>
    </div>
  );
}
