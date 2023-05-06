import React from "react";
import "./Cart.scss";
import { useSelector,useDispatch } from "react-redux";
import {AiTwotoneDelete} from "react-icons/ai"


const Cart = () => {
  const products = useSelector((state) => state.CartReducer.products);
  const dispatch = useDispatch();
  console.log("the products are",products)

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.price;
    });
    return total.toFixed(2);
  };
  return (
    <div className="cart">
      <h1>Products in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.image} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            <p>{item.desc?.substring(0, 100)}</p>
            <div className="price">
              {item.quantity} x ${item.price}
            </div>
          </div>
          <AiTwotoneDelete
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${totalPrice()}</span>
      </div>
    </div>
  );
};

export default Cart;
