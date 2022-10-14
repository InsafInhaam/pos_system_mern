import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import { useLocation } from "react-router-dom";
import { GetAdminById } from "../api/admin";

const ViewAdmin = () => {
  const location = useLocation();
  const adminId = location.pathname.split("/")[2];

  const [admin, setAdmin] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    role: "",
    gender: "",
    address: "",
  });

  const { firstName, lastName, email, phone, role, gender, address } = admin;

  useEffect(() => {
    GetAdminById(adminId).then((response) => {
      setAdmin(response.data);
      // console.log(response);
    });
  }, [adminId]);

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
                <h1 className="h3 mb-0 text-gray-800">
                  {firstName + " " + lastName} details
                </h1>
              </div>
              <form className="form-horizontal border p-3 shadow-lg mb-5">
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
                          disabled
                          id="firstName"
                          name="firstName"
                          placeholder="First Name"
                          className="form-control input disabled-md"
                          required=""
                          type="text"
                          value={firstName}
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
                          disabled
                          id="lastName"
                          name="lastName"
                          placeholder="Last Name"
                          className="form-control input disabled-md"
                          required=""
                          type="text"
                          value={lastName}
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
                          disabled
                          id="available_email"
                          name="email"
                          placeholder="Email"
                          className="form-control input disabled-md"
                          required=""
                          type="email"
                          value={email}
                        />
                      </div>
                    </div>

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
                          disabled
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
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="product_phone"
                      >
                        Phone
                      </label>
                      <div className="col-md-12">
                        <input
                          disabled
                          id="product_phone"
                          name="phone"
                          placeholder=" Phone"
                          className="form-control input disabled-md"
                          required=""
                          type="number"
                          value={phone}
                        />
                      </div>
                    </div>

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
                          disabled
                        >
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="not_specified">
                            Rather not specified
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="address"
                      >
                        Address
                      </label>
                      <div className="col-md-12">
                        <textarea
                          disabled
                          name="address"
                          className="form-control input disabled-md"
                          value={address}
                        ></textarea>
                      </div>
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

export default ViewAdmin;
