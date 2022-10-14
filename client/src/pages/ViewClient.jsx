import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import { GetClientById } from "./../api/client";
import { useLocation } from "react-router-dom";

const ViewClient = () => {
  const location = useLocation();
  const client_id = location.pathname.split("/")[2];

  const [client, setClient] = useState({
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
  } = client;

  useEffect(() => {
    GetClientById(client_id).then((response) => {
      setClient(response.data);
    });
  }, [client_id]);

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
                <h1 className="h3 mb-0 text-gray-800">View Client</h1>
              </div>
              <form className="form-horizontal border p-3 shadow-lg mb-5">
                <fieldset>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label className="col-md-12 control-label" htmlFor="name">
                        Name
                      </label>
                      <div className="col-md-12">
                        <input
                          disabled
                          id="name"
                          name="name"
                          placeholder="Name"
                          className="form-control input-md"
                          required=""
                          type="text"
                          value={name}
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
                          disabled
                          id="phone"
                          name="phone"
                          placeholder=" Phone"
                          className="form-control input-md"
                          required=""
                          type="number"
                          value={phone}
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
                          className="form-control input-md"
                          required=""
                          type="email"
                          value={email}
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
                          disabled
                          id="bussinessName"
                          name="bussinessName"
                          placeholder=" bussiness name"
                          className="form-control input-md"
                          required=""
                          type="text"
                          value={bussinessName}
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
                          disabled
                          id="position"
                          name="position"
                          placeholder="Position"
                          className="form-control input-md"
                          required=""
                          type="position"
                          value={position}
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
                          disabled
                          id="bussinessAddress"
                          name="bussinessAddress"
                          placeholder="Bussiness address"
                          className="form-control input-md"
                          required=""
                          value={bussinessAddress}
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
                          disabled
                          id="bussinessEmail"
                          name="bussinessEmail"
                          placeholder="Bussiness email"
                          className="form-control input-md"
                          required=""
                          type="email"
                          value={bussinessEmail}
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
                          disabled
                          id="bussinessPhone"
                          name="bussinessPhone"
                          placeholder="Bussiness phone"
                          className="form-control input-md"
                          required=""
                          type="number"
                          value={bussinessPhone}
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
                          disabled
                          id="gender"
                          name="gender"
                          className="form-control"
                          value={gender}
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
                        <input disabled
                          id="filebutton"
                          name="filebutton"
                          className="input-file"
                          type="file"
                        />
                      </div>
                    </div> */}
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

export default ViewClient;
