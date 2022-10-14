import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addOrder } from "../api/order";
import Loading from "./Loading";
import OrderCartItem from "./OrderCartItem";
import OrderNavbar from "./OrderNavbar";

const OrderCart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalPrice(price);
    setTotalItems(items);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  // add the order to the database
  const [loading, setLoading] = useState(false);
  const [balance, setBalance] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [order, setOrder] = useState({
    name: "",
    phone: "",
    email: "",
    payment: "",
    amountPaid: "",
    address: "",
  });

  const { name, phone, email, payment, amountPaid, address } = order;

  useEffect(() => {
    setBalance(amountPaid - totalPrice);
  }, [amountPaid, totalPrice]);

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  useEffect(() => {
    setTotalAmount(totalPrice);
  }, [totalPrice]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !amountPaid || !payment) {
      toast.error("Please provide all the required fields");
    } else {
      setLoading(true);
      const newObject = {
        ...order,
        cartItems,
        totalAmount,
        balance,
      };
      addOrder(newObject)
        .then((response) => {
          toast.success(response.data.successMessage);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.response.data.errorMessage);
          setLoading(false);
        });
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  return (
    <>
      <div className="container px-0">
        <OrderNavbar />
        <div className="order-cart-scroll">
          <div className="row mx-3">
            {cart.map((item) => {
              return <OrderCartItem itemData={item} key={item._id} />;
            })}
          </div>
        </div>

        <div className="bottom-checkout">
          <h4 className="summary__title">Cart Summary</h4>
          <div className="summary__price">
            <span>TOTAL: ({totalItems} items)</span>
            <span> Rs.{totalPrice}</span>
          </div>
          <button
            className="btn btn-warning w-100"
            type="button"
            data-toggle="modal"
            data-target="#exampleModalLong"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                Checkout
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div>
                <ToastContainer />
              </div>
              <h5 className="text-danger pl-2 mb-3">
                BALANCE AMOUNT = Rs.{amountPaid - totalPrice}
              </h5>
              <form className="form-horizontal" onSubmit={handleSubmit}>
                {loading && (
                  <div className="text-center position-absolute loading-bubble">
                    <Loading />
                  </div>
                )}

                <fieldset>
                  <div className="row">
                    <div className="form-group col-md-12">
                      <label className="col-md-12 control-label" htmlFor="name">
                        Name
                      </label>
                      <div className="col-md-12">
                        <input
                          id="name"
                          name="name"
                          placeholder="Name"
                          className="form-control input-md"
                          required=""
                          type="text"
                          value={name}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-12">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="phone"
                      >
                        Phone
                      </label>
                      <div className="col-md-12">
                        <input
                          id="phone"
                          name="phone"
                          placeholder=" Phone"
                          className="form-control input-md"
                          required=""
                          type="number"
                          value={phone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-12">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="available_email"
                      >
                        Email
                      </label>
                      <div className="col-md-12">
                        <input
                          id="available_email"
                          name="email"
                          placeholder="Email"
                          className="form-control input-md"
                          required=""
                          type="email"
                          value={email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-12">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="address"
                      >
                        Address
                      </label>
                      <div className="col-md-12">
                        <textarea
                          id="address"
                          name="address"
                          placeholder="Address"
                          className="form-control input-md"
                          value={address}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>

                    <div className="form-group col-md-12">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="payment"
                      >
                        Payment Method
                      </label>
                      <div className="col-md-12">
                        <select
                          id="payment"
                          name="payment"
                          className="form-control"
                          value={payment}
                          onChange={handleInputChange}
                        >
                          <option value="cash">Cash</option>
                          <option value="card">Card</option>
                          <option value="cheque">Cheque</option>
                          <option value="voucher">Voucher</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group col-md-12">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="totalAmount"
                      >
                        Total Amount
                      </label>
                      <div className="col-md-12">
                        <input
                          id="totalAmount"
                          name="totalAmount"
                          placeholder="Total Amount"
                          className="form-control input-md"
                          required=""
                          type="number"
                          value={totalAmount}
                          disabled
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-12">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="amountPaid"
                      >
                        Paid Amount
                      </label>
                      <div className="col-md-12">
                        <input
                          id="amountPaid"
                          name="amountPaid"
                          placeholder=" Paid Amount"
                          className="form-control input-md"
                          required=""
                          type="number"
                          value={amountPaid}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-12">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="balance"
                      >
                        Balance
                      </label>
                      <div className="col-md-12">
                        <input
                          id="balance"
                          name="balance"
                          placeholder="Balance"
                          className="form-control input-md"
                          required=""
                          type="number"
                          value={balance}
                          disabled
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Submit Order
                    </button>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              {/* <button
                type="submit"
                className="btn btn-primary"
                onClick={handleSubmit}
              >
                Submit Order
              </button> */}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- modal receipt --> */}

      {/* <!-- end of noprint-area --> */}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(OrderCart);
