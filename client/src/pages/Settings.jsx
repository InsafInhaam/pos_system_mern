import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./../components/Loading";

const Settings = () => {
  const [loading, setLoading] = useState(false);
  const [admin, setAdmin] = useState({
    companyName: "",
    email: "",
    phone: "",
    industry: "",
    address: "",
  });

  const { companyName, email, phone, industry, address } = admin;

  // useEffect(() => {
  //   GetAdminById(adminId).then((response) => {
  //     setAdmin(response.data);
  //     // console.log(response);
  //   });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!firstName || !lastName || !email || !phone || !address || !password) {
    //   toast.error("Please provide all the required fields");
    // } else if (password.length <= 8) {
    //   toast.error("Password must be at least 8 characters long");
    // } else {
    //   setLoading(true);
    //   updateAdmin(adminId, admin)
    //     .then((response) => {
    //       toast.success(response.data.successMessage);
    //       setLoading(false);
    //     })
    //     .catch((err) => {
    //       toast.error(err.response.data.errorMessage);
    //       setLoading(false);
    //     });
    // }
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
              {/* <!-- Page Heading --> */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Settings</h1>
              </div>
              <div className=" rounded bg-white mt-4 mb-5">
                <div className="row">
                  <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3">
                      <img
                        className="rounded mt-5"
                        style={{ width: "200px", height: "200px" }}
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      />
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="p-3 py-5">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right">Company Details</h4>
                      </div>
                      <div>
                        <ToastContainer />
                      </div>
                      <form
                        className="form-horizontal mb-5"
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
                                htmlFor="companyName"
                              >
                                Name
                              </label>
                              <div className="col-md-12">
                                <input
                                  id="companyName"
                                  name="companyName"
                                  placeholder="Company Name"
                                  className="form-control input-md"
                                  required=""
                                  type="text"
                                  value={companyName}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>

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
                                />
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
                                  id="product_phone"
                                  name="phone"
                                  placeholder="Company Phone"
                                  className="form-control input-md"
                                  required=""
                                  type="number"
                                  value={phone}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>

                            <div className="form-group col-md-6">
                              <label
                                className="col-md-12 control-label"
                                htmlFor="industry"
                              >
                                Industry
                              </label>
                              <div className="col-md-12">
                                <select
                                  id="industry"
                                  name="industry"
                                  className="form-control"
                                  value={industry}
                                  onChange={handleInputChange}
                                >
                                  <option value="software">Software</option>
                                  <option value="finance">Financae</option>
                                  <option value="sales">Sales</option>
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
                                  name="address"
                                  className="form-control input-md"
                                  placeholder="Company Address"
                                  value={address}
                                  onChange={handleInputChange}
                                ></textarea>
                              </div>
                            </div>

                            <div className="form-group col-md-6">
                              <label
                                className="col-md-12 control-label"
                                htmlFor="logo"
                              >
                                Logo
                              </label>
                              <div className="col-md-12">
                                <input
                                  className="form-control input-file"
                                  filename="image"
                                  name="image"
                                  type="file"
                                  // value={image}
                                  // onChange={onChangeFile}
                                />
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
                                Update Settings
                              </button>
                            </div>
                          </div>
                        </fieldset>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Content Row --> */}
            </div>
            {/* <!-- /.container-fluid --> */}
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

export default Settings;
