import React, { useState } from "react";
import { connect } from "react-redux";
import {
  adjustItemQty,
  removeFromCart,
} from "../redux/Shopping/shopping-actions";

const OrderCartItem = ({ itemData, adjustQty, removeFromCart }) => {
  const [input, setInput] = useState(itemData.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(itemData._id, e.target.value);
  };

  return (
    <>
      <div className="cart-items w-100 py-2 d-flex align-items-center justify-content-between">
        <div className="cart-item-img">
          <img
            src={`/uploads/products/${itemData.image}`}
            alt=""
            className="rounded"
          />
        </div>
        <div className="d-flex align-items-start flex-column w-30 cart-item-name-price">
          <span className="cart-product-name mb-0">{itemData.name}</span>
          <span className="cart-product-price text-dark font-weight-bold mb-0">
            Rs.{itemData.price}
          </span>
        </div>
        <div className="d-flex align-items-center cart-item-qty">
          <input
            className="form-control w-50 mr-2"
            min="1"
            type="number"
            id="qty"
            name="input"
            value={itemData.qty}
            onChange={onChangeHandler}
          />

          <button
            className="btn btn-danger"
            onClick={() => removeFromCart(itemData._id)}
          >
            <i className="fas fa-trash fa-sm"></i>
          </button>
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(OrderCartItem);
