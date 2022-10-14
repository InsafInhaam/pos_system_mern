import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addOrder } from "./../api/order";

const CustomOrder = () => {
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState({
    name: "",
    email: "",
    phone: "",
    bussinessName: "",
    position: "",
    bussinessAddress: "",
    bussinessEmail: "",
    bussinessPhone: "",
    gender: "",
  });

  const {
    name,
    email,
    phone,
    bussinessName,
    position,
    bussinessAddress,
    bussinessEmail,
    bussinessPhone,
    gender,
  } = order;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !name ||
      !email ||
      !phone ||
      !bussinessName ||
      !bussinessAddress ||
      !bussinessEmail ||
      !bussinessPhone
    ) {
      toast.error("Please provide all the required fields");
    } else {
      setLoading(true);
      addOrder(order).then((response) => {
        if (response.status === 201) {
          toast.success("Order created successfully");
          setLoading(false);
        } else {
          toast.error(response.data);
        }
      });
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setOrder({ ...order, [name]: value });
  };

  return (
    <>
      {/* <!-- Page Wrapper --> */}
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar />

        {/* <!-- Content Wrapper --> */}
        <div id="content-wrapper" className="d-flex flex-column">
          {/* <!-- Main Content --> */}
          <div id="content">
            {/* <!-- Topbar --> */}
            <Navbar />

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Create custom order</h1>
              </div>
              <div>
                <ToastContainer />
              </div>
              <form
                className="form-horizontal border p-3 shadow-lg mb-5"
                onSubmit={handleSubmit}
              >
                {loading && (
                  <div className="text-center position-absolute loading-bubble">
                    <Loading />
                  </div>
                )}

                <fieldset>
                  <div className="row">
                    <div className="form-group col-md-6">
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

                    <div className="form-group col-md-6">
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
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
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

                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="bussinessName"
                      >
                        Bussiness name
                      </label>
                      <div className="col-md-12">
                        <input
                          id="bussinessName"
                          name="bussinessName"
                          placeholder=" bussiness name"
                          className="form-control input-md"
                          required=""
                          type="text"
                          value={bussinessName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="position"
                      >
                        Position
                      </label>
                      <div className="col-md-12">
                        <input
                          id="position"
                          name="position"
                          placeholder="Position"
                          className="form-control input-md"
                          required=""
                          type="position"
                          value={position}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-6 ">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="bussinessAddress"
                      >
                        Bussiness address
                      </label>
                      <div className="col-md-12">
                        <textarea
                          id="bussinessAddress"
                          name="bussinessAddress"
                          placeholder="Bussiness address"
                          className="form-control input-md"
                          required=""
                          value={bussinessAddress}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="bussinessEmail"
                      >
                        Bussiness email
                      </label>
                      <div className="col-md-12">
                        <input
                          id="bussinessEmail"
                          name="bussinessEmail"
                          placeholder="Bussiness email"
                          className="form-control input-md"
                          required=""
                          type="email"
                          value={bussinessEmail}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="bussinessPhone"
                      >
                        Bussiness phone
                      </label>
                      <div className="col-md-12">
                        <input
                          id="bussinessPhone"
                          name="bussinessPhone"
                          placeholder="Bussiness phone"
                          className="form-control input-md"
                          required=""
                          type="number"
                          value={bussinessPhone}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="gender"
                      >
                        Gender
                      </label>
                      <div className="col-md-12">
                        <select
                          id="gender"
                          name="gender"
                          className="form-control"
                          value={gender}
                          onChange={handleInputChange}
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="not_specified">
                            Rather not specified
                          </option>
                        </select>
                      </div>
                    </div>
                    {/* <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="filebutton"
                      >
                        Image
                      </label>
                      <div className="col-md-12">
                        <input
                          id="filebutton"
                          name="filebutton"
                          className="input-file"
                          type="file"
                        />
                      </div>
                    </div> */}
                  </div>

                  <div className="form-group col-md-6 pl-0">
                    <div className="col-md-12">
                      <button
                        id="singlebutton"
                        name="singlebutton"
                        className="btn btn-ht btn-br btn-bg btn-primary"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>

          {/* <!-- Footer --> */}
          <Footer />
        </div>
      </div>

      {/* <!-- Scroll to Top Button--> */}
      <ScrollTop />

      {/* <!-- Logout Modal--> */}
      <LogoutModel />
    </>
  );
};

export default CustomOrder;
