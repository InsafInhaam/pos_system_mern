import React from "react";
import logo from "../components/assets/img/logo.png";

const Registration = () => {
  return (
    <div className="container-fluid full-height registration-container">
      <div className="row row-height registration-row">
        <div className="col-lg-6 content-left registration-content-left">
          <div className="content-left-wrapper ">
            <div className="d-flex justify-content-between align-items-center registration-header">
              <a href="index.html" id="logo">
                <img src={logo} alt="" width={100} height={100} />
              </a>
              <div id="social">
                <ul className="d-flex justify-content-center align-items-center registration-social-icons">
                  <li>
                    <a href="#0">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* /social */}
            <div className="registration-middle-content">
              <figure>
                <img
                  src="https://techcube.ca/assets/img/illustration/operate.svg"
                  alt=""
                  className="img-fluid registration-img"
                />
              </figure>
              <h2>ALL in One System for your business!!</h2>
              <p>
                Tation argumentum et usu, dicit viderer evertitur te has. Eu
                dictas concludaturque usu, facete detracto patrioque an per,
                lucilius pertinacia eu vel. Adhuc invidunt duo ex. Eu tantas
                dolorum ullamcorper qui.
              </p>
              <a
                href="https://1.envato.market/JAL9r"
                className="btn_1 rounded"
                target="_parent"
              >
                Start register and using
              </a>
              <a href="#start" className="btn_1 rounded mobile_btn">
                Start Now!
              </a>
            </div>
            <div className="copy registration-copyrights">
              © 2022 ININ Technologies
            </div>
          </div>
          {/* /content-left-wrapper */}
        </div>
        {/* /content-left */}
        <div className="col-lg-6 content-right " id="start">
          <div className="row p-5 my-4">
            <form action="#">
              <div className="row">
                {/* First Name */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted" />
                    </span>
                  </div>
                  <input
                    id="firstName"
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/* Last Name */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-user text-muted" />
                    </span>
                  </div>
                  <input
                    id="lastName"
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/* Email Address */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-envelope text-muted" />
                    </span>
                  </div>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/* Phone Number */}
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-phone-square text-muted" />
                    </span>
                  </div>
                  <select
                    id="countryCode"
                    name="countryCode"
                    style={{ maxWidth: "80px" }}
                    className="custom-select form-control bg-white border-left-0 border-md h-100 font-weight-bold text-muted"
                  >
                    <option value>+12</option>
                    <option value>+10</option>
                    <option value>+15</option>
                    <option value>+18</option>
                  </select>
                  <input
                    id="phoneNumber"
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="form-control bg-white border-md border-left-0 pl-3"
                  />
                </div>
                <div className="input-group col-lg-12 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-black-tie text-muted" />
                    </span>
                  </div>
                  <select
                    id="job"
                    name="jobtitle"
                    className="form-control custom-select bg-white border-left-0 border-md"
                  >
                    <option value>Choose your job</option>
                    <option value>Designer</option>
                    <option value>Developer</option>
                    <option value>Manager</option>
                    <option value>Accountant</option>
                  </select>
                </div>
                {/* Password */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/* Password Confirmation */}
                <div className="input-group col-lg-6 mb-4">
                  <div className="input-group-prepend">
                    <span className="input-group-text bg-white px-4 border-md border-right-0">
                      <i className="fa fa-lock text-muted" />
                    </span>
                  </div>
                  <input
                    id="passwordConfirmation"
                    type="text"
                    name="passwordConfirmation"
                    placeholder="Confirm Password"
                    className="form-control bg-white border-left-0 border-md"
                  />
                </div>
                {/* Submit Button */}
                <div className="form-group col-lg-12 mx-auto mb-0">
                  <a href="#" className="btn btn-primary btn-block py-2">
                    <span className="font-weight-bold">
                      Create your account
                    </span>
                  </a>
                </div>
                {/* Divider Text */}
                <div className="form-group col-lg-12 mx-auto d-flex align-items-center my-4">
                  <div className="border-bottom w-100 ml-5" />
                  <span className="px-2 small text-muted font-weight-bold text-muted">
                    OR
                  </span>
                  <div className="border-bottom w-100 mr-5" />
                </div>
                {/* Already Registered */}
                <div className="text-center w-100">
                  <p className="text-muted font-weight-bold">
                    Already Registered?{" "}
                    <a href="#" className="text-primary ml-2">
                      Login
                    </a>
                  </p>
                </div>
              </div>
            </form>
          </div>
          {/* /Wizard container */}
        </div>
        {/* /content-right*/}
      </div>
      {/* /row*/}
    </div>
  );
};

export default Registration;
