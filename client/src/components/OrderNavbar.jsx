import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

const OrderNavbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

  return (
    <>
      <h4 className="text-center font-weight-bold text-dark mb-4">
        YOUR CART &nbsp; <i className="fa-solid fa-cart-shopping"></i>
        <span className="badge badge-warning" id="lblCartCount">
          {cartCount}
        </span>
      </h4>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(OrderNavbar);
