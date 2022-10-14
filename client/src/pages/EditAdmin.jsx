import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetAdminById, updateAdmin } from "./../api/admin";
import { useLocation } from "react-router-dom";

const EditAdmin = () => {
  const location = useLocation();
  const adminId = location.pathname.split("/")[2];

  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    role: "",
    gender: "",
    address: "",
  });

  const { firstName, lastName, email, phone, password, role, gender, address } =
    admin;

  useEffect(() => {
    GetAdminById(adminId).then((response) => {
      setAdmin(response.data);
      // console.log(response);
    });
  }, [admin]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !email || !phone || !address || !password) {
      toast.error("Please provide all the required fields");
    } else if (password.length <= 8) {
      toast.error("Password must be at least 8 characters long");
    } else {
      setLoading(true);
      updateAdmin(adminId, admin)
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
    setAdmin({ ...admin, [name]: value });
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
                <h1 className="h3 mb-0 text-gray-800">Create admin</h1>
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
                      <label
                        className="col-md-12 control-label"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <div className="col-md-12">
                        <input
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          className="form-control input-md"
                          required=""
                          type="text"
                          value={firstName}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <div className="col-md-12">
                        <input
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          className="form-control input-md"
                          required=""
                          type="text"
                          value={lastName}
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
                        htmlFor="password"
                      >
                        Password
                      </label>
                      <div className="col-md-12">
                        <input
                          id="password"
                          name="password"
                          placeholder="Password"
                          className="form-control input-md"
                          required=""
                          type="password"
                          value={password}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className="col-md-12 control-label" htmlFor="role">
                        Role
                      </label>
                      <div className="col-md-12">
                        <select
                          id="role"
                          name="role"
                          className="form-control"
                          value={role}
                          onChange={handleInputChange}
                        >
                          <option value="1">HR</option>
                          <option value="2">Developer</option>
                          <option value="3">Admin</option>
                          <option value="4">Staff</option>
                          <option value="5">Cashier</option>
                          <option value="6">Project Manager</option>
                          <option value="7">HR Manager</option>
                        </select>
                      </div>
                    </div>

                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="product_phone"
                      >
                        Phone
                      </label>
                      <div className="col-md-12">
                        <input
                          id="product_phone"
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
                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="address"
                      >
                        Address
                      </label>
                      <div className="col-md-12">
                        <textarea
                          name="address"
                          className="form-control input-md"
                          value={address}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
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

export default EditAdmin;
