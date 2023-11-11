import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeItemFromCart,
  updateQuantity,
} from "../../features/cart/cartSlice";
import { Link } from "react-router-dom";
import toast from "../../customtoast/toast";

import "./cart.scss";
import remove from "../../assets/cross.png";
import emptycart from "../../assets/emptycart.png";
import Breadcrumb from "../../components/Breadcrumb";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const [totalAmount, setTotalAmount] = useState(0);

  // function to calculate total amount to pay for all products
  const total = () => {
    const amounttopay = cartItems.reduce((prevvalue, nextvalue) => {
      return prevvalue + nextvalue.total;
    }, 0);
    setTotalAmount(amounttopay);
  };

  // whenever cartItems is updated effect will be called with total function to calculate total
  useEffect(() => {
    total();
  }, [cartItems]);

  // function to change quantity of products in state by dispatching
  const handleChangeQuantity = (cartproductid, quantity) => {
    if (quantity < 1) {
      return "";
    } else if (quantity > 5) {
      toast("quantity cannot be more that 5");
      return "";
    } else {
      dispatch(updateQuantity({ cartproductid, quantity }));
    }
  };

  // function to remove item from cart
  const handleRemoveCartItem = (cartitemid) => {
    dispatch(removeItemFromCart(cartitemid));
  };

  // function to purchase items in cart which will make the cart empty
  const handlePurchaseCartItem = () => {
    dispatch(clearCart());
  };

  if (cartItems.length !== 0) {
    return (
      <>
        <Breadcrumb title={"Cart"} />
        <div className="container">
          <div style={{ overflowX: "auto" }}>
            <table className="cart-table">
              <tr>
                <th colSpan="2">PRODUCT NAME</th>
                <th>PRICE</th>
                <th>QUANTITY</th>
                <th>TOTAL</th>
                <th></th>
              </tr>
              {cartItems.map((item) => {
                return (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} />
                    </td>
                    <td>
                      <h3 className="product-name">{item.name}</h3>
                    </td>
                    <td>
                      <h3> ${item.price}</h3>
                    </td>
                    <td>
                      <h3>
                        <div className="counter">
                          <span
                            onClick={() =>
                              handleChangeQuantity(item.id, item.quantity - 1)
                            }
                          >
                            -
                          </span>
                          <span>{item.quantity}</span>
                          <span
                            onClick={() =>
                              handleChangeQuantity(item.id, item.quantity + 1)
                            }
                          >
                            +
                          </span>
                        </div>
                      </h3>
                    </td>
                    <td>
                      {" "}
                      <p>{item.total}</p>{" "}
                    </td>
                    <td>
                      <img
                        src={remove}
                        alt=""
                        onClick={() => handleRemoveCartItem(item.id)}
                        className="remove-item"
                      />
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>

          <div className="total-to-pay">
            <h3>Total: {totalAmount}</h3>
            <button onClick={handlePurchaseCartItem}>purchase items</button>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <div className="container empty-cart">
        <img src={emptycart} alt="" />
        <h2>Your cart is empty</h2>
        <Link to={"/products"}>Go to products</Link>
      </div>
    );
  }
}
