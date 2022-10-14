import React, { useEffect, useState } from "react";
import { GetOrderById } from "../api/order";

const OrderView = ({ orderId }) => {
  const [order, setOrder] = useState([]);

  useEffect(() => {
    GetOrderById(orderId).then((response) => {
      setOrder(response.data);
    });
  }, [order]);

  const taxPercentage = 5;
  const taxAmount = (order.totalAmount * 5) / 100;

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                order view
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
              <div id="invoice" className="p-0">
                <div className="toolbar hidden-print">
                  <div className="text-right">
                    <button id="printInvoice" className="btn btn-info mr-3">
                      <i className="fa fa-print" /> Print
                    </button>
                    <button className="btn btn-info">
                      <i className="fa fa-file-pdf-o" /> Export as PDF
                    </button>
                  </div>
                  <hr />
                </div>
                <div className="invoice overflow-auto">
                  <div style={{ minWidth: "600px" }}>
                    <header>
                      <div className="row">
                        <div className="col">
                          <a target="_blank" href="https://lobianijs.com">
                            <img
                              src="http://lobianijs.com/lobiadmin/version/1.0/ajax/img/logo/lobiadmin-logo-text-64.png"
                              data-holder-rendered="true"
                            />
                          </a>
                        </div>
                        <div className="col company-details">
                          <h2 className="name">
                            <a target="_blank" href="https://lobianijs.com">
                              Arboshiki
                            </a>
                          </h2>
                          <div>455 Foggy Heights, AZ 85004, US</div>
                          <div>(123) 456-789</div>
                          <div>company@example.com</div>
                        </div>
                      </div>
                    </header>
                    <main>
                      <div className="row contacts">
                        <div className="col invoice-to">
                          <div className="text-gray-light">INVOICE TO:</div>
                          <h2 className="to">{order.name}</h2>
                          <div className="address">{order.address}</div>
                          <div className="email">
                            <a href="mailto:john@example.com">{order.email}</a>
                          </div>
                        </div>
                        <div className="col invoice-details">
                          <h5 className="invoice-id">
                            INVOICE&nbsp;-&nbsp;
                            {order._id}
                          </h5>
                          <div className="date">
                            Date of Invoice: {order.postDate}
                          </div>
                          <div className="date">Due Date: 30/10/2018</div>
                        </div>
                      </div>
                      <table border={0} cellSpacing={0} cellPadding={0}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th className="text-left">DESCRIPTION</th>
                            <th className="text-right">QTY</th>
                            <th className="text-right">PRICE</th>
                            <th className="text-right">TOTAL</th>
                          </tr>
                        </thead>
                        <tbody>
                          {order.cartItems?.map((item) => {
                            return (
                              <tr>
                                <td className="no">{1}</td>
                                <td className="text-left">
                                  <h3>{item.name}</h3>
                                  {item.description}
                                </td>
                                <td className="qty">{item.qty}</td>
                                <td className="unit">Rs.{item.price}</td>
                                <td className="total">
                                  Rs.{item.qty * item.price}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan={2} />
                            <td colSpan={2}>SUBTOTAL</td>
                            <td>Rs.{order.totalAmount}</td>
                          </tr>
                          <tr>
                            <td colSpan={2} />
                            <td colSpan={2}>TAX {taxPercentage}%</td>
                            <td>Rs.{taxAmount}</td>
                          </tr>
                          <tr>
                            <td colSpan={2} />
                            <td colSpan={2}>GRAND TOTAL</td>
                            <td>Rs.{order.totalAmount + taxAmount}</td>
                          </tr>
                        </tfoot>
                      </table>
                      <div className="thanks">Thank you!</div>
                      <div className="notices">
                        <div>NOTICE:</div>
                        <div className="notice">
                          A finance charge of 1.5% will be made on unpaid
                          balances after 30 days.
                        </div>
                      </div>
                    </main>
                    <footer>
                      Invoice was created on a computer and is valid without the
                      signature and seal.
                    </footer>
                  </div>
                  {/*DO NOT DELETE THIS div. IT is responsible for showing footer always at the bottom*/}
                  <div />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderView;
