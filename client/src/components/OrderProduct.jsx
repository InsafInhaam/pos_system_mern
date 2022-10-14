import React from "react";
import { addToCart } from "./../redux/Shopping/shopping-actions";
import { connect } from "react-redux";
import { motion } from "framer-motion";

const OrderProduct = ({ product, key, addToCart }) => {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
        layout
        className="col-md-3 col-lg-3 "
        key={key}
        onClick={() => addToCart(product._id)}
      >
        <div className="card shadow-sm text-center text-capitalize mb-4 order-cart-product">
          <a href="#" className="position-relative">
            <img
              src={`/uploads/products/${product.image}`}
              className="card-img-top px-2 pt-2 h-100"
              style={{ width: "60%" }}
              alt="image"
            />
          </a>
          <div className="card-body pt-0 pb-2 px-2 d-flex align-items-center justify-content-center flex-column">
            <h6 className="font-weight-normal" style={{ fontSize: "14px" }}>
              {product.name}
            </h6>
            <h6 className="font-weight-bold" style={{ color: "#000" }}>
              Rs.{product.price}
            </h6>
          </div>
        </div>
      </motion.div>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(OrderProduct);
