import React, { useEffect, useState } from "react";
import { GetCustomerById } from "./../api/customer";

const ViewCustomer = ({ customerId }) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    GetCustomerById(customerId).then((response) => {
      setCustomers(response.data);
    });
  }, [customerId]);

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
                Customer
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
              <div className="m-b-30 ViewCustomerCard">
                <div className="card-body py-5 ">
                  <div className="row">
                    <div className="col-lg-3 text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        className="img-fluid mb-3 rounded"
                        alt="user"
                      />
                    </div>
                    <div className="col-lg-9">
                      <h4>{customers.name}</h4>
                      <p>{customers.website}</p>
                      <div className="button-list mt-4 mb-3">
                        <a
                          type="button"
                          className="btn btn-primary-rgba mr-3"
                          href={`mailto:${customers.email}`}
                        >
                          <i className="feather icon-message-square mr-2" />
                          Message
                        </a>
                        <a
                          type="button"
                          className="btn btn-success-rgba"
                          href={`tel:${customers.phone}`}
                        >
                          <i className="feather icon-phone mr-2" />
                          Call Now
                        </a>
                      </div>

                      <div className="table-responsive">
                        <table className="table table-borderless mb-0">
                          <tbody>
                            <tr>
                              <th scope="row" className="p-1">
                                Company Name :
                              </th>
                              <td className="p-1">{customers.companyName}</td>
                            </tr>
                            <tr>
                              <th scope="row" className="p-1">
                                Address :
                              </th>
                              <td className="p-1">{customers.address}</td>
                            </tr>
                            <tr>
                              <th scope="row" className="p-1">
                                Position :
                              </th>
                              <td className="p-1">{customers.position}</td>
                            </tr>
                            <tr>
                              <th scope="row" className="p-1">
                                Gender :
                              </th>
                              <td className="p-1">{customers.gender}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
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

export default ViewCustomer;
