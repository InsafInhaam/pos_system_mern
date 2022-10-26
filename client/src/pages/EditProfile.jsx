import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import Loading from "./../components/Loading";

const EditProfile = () => {
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
                <h1 className="h3 mb-0 text-gray-800">Edit your profile</h1>
              </div>
              <div className="rounded bg-white mt-4 mb-5">
                <div className="row">
                  <div className="col-md-3 border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3">
                      <img
                        className="rounded mt-5"
                        style={{ width: "200px", height: "200px" }}
                        src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                      />
                      <form className="mt-3">
                        <div className="file-input">
                          <input
                            type="file"
                            name="file-input"
                            id="file-input"
                            className="file-input__input"
                          />
                          <label className="file-input__label" for="file-input">
                            <svg
                              aria-hidden="true"
                              focusable="false"
                              data-prefix="fas"
                              data-icon="upload"
                              className="svg-inline--fa fa-upload fa-w-16"
                              role="img"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                            >
                              <path
                                fill="currentColor"
                                d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                              ></path>
                            </svg>
                            <span>Change Image</span>
                          </label>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="p-3 py-5">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="text-right">Profile Settings</h4>
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
                                  disabled
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
                              <label
                                className="col-md-12 control-label"
                                htmlFor="role"
                              >
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

                          <hr />
                          <div className="p-3 py-5">
                            <div className="d-flex justify-content-between align-items-center experience">
                              <span>Edit Experience</span>
                              <button className="border px-3 p-1 add-experience">
                                <i className="fa fa-plus" />
                                &nbsp;Experience
                              </button>
                            </div>
                            <br />
                            <div className="col-md-12">
                              <label className="labels">
                                Experience in Designing
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="experience"
                                defaultValue
                              />
                            </div>
                            <br />
                            <div className="col-md-12">
                              <label className="labels">
                                Additional Details
                              </label>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="additional details"
                                defaultValue
                              />
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
                                Save Profile
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

export default EditProfile;
