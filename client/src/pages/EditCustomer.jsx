import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetCustomerById, updateCustomer } from "./../api/customer";
import { useLocation, useNavigate } from "react-router-dom";

const EditCustomer = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const customer_id = location.pathname.split("/")[2];

  const [loading, setLoading] = useState(false);
  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    position: "",
    address: "",
    gender: "",
  });

  const { name, email, phone, companyName, position, address, gender } =
    customer;

  useEffect(() => {
    GetCustomerById(customer_id).then((response) => {
      setCustomer(response.data);
    });
  }, [customer_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !companyName || !address) {
      toast.error("Please provide all the required fields");
    } else {
      setLoading(true);
      updateCustomer(customer).then((response) => {
        if (response.status === 201) {
          toast.success("Customer created successfully");
          setLoading(false);
          navigate("/products");
        } else {
          toast.error(response.data);
        }
      });
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setCustomer({ ...customer, [name]: value });
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
                <h1 className="h3 mb-0 text-gray-800">Edit customer</h1>
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
                        htmlFor="companyName"
                      >
                        Company name
                      </label>
                      <div className="col-md-12">
                        <input
                          id="companyName"
                          name="companyName"
                          placeholder=" company name"
                          className="form-control input-md"
                          required=""
                          type="text"
                          value={companyName}
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
                          required=""
                          value={address}
                          onChange={handleInputChange}
                        ></textarea>
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
                        Update
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

export default EditCustomer;
