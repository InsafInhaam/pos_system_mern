import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import jsonItems from "../helpers/jsonItems";
import { registerUser } from "./../api/user";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const MAX_STEP = 3;

const Registration = () => {
  let navigate = useNavigate();
  const [formStep, setFormStep] = useState(0);
  const {
    watch,
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    companyName: "",
    companyWebiste: "",
    businessType: "",
    businessScale: "",
    username: "",
    password: "",
  });

  const {
    firstName,
    lastName,
    email,
    phone,
    companyName,
    companyWebiste,
    businessType,
    businessScale,
    username,
    password,
  } = user;

  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  const prevFormStep = () => {
    setFormStep((cur) => cur - 1);
  };

  const renderNextButton = () => {
    if (formStep > 2) {
      return undefined;
    } else if (formStep === 2) {
      return (
        <button
          type="submit"
          disabled={!isValid}
          className="btn btn-primary py-2"
        >
          <span className="font-weight-bold">Create an account</span>
        </button>
      );
    } else {
      return (
        <button
          type="button"
          disabled={!isValid}
          onClick={completeFormStep}
          className="btn btn-primary py-2"
        >
          <span className="font-weight-bold">Next</span>
        </button>
      );
    }
  };

  const renderPrevButton = () => {
    if (formStep > 0 && formStep <= 2) {
      return (
        <button
          type="button"
          onClick={prevFormStep}
          className="btn btn-default prev-step py-2 border"
        >
          <span className="font-weight-bold">Previous</span>
        </button>
      );
    } else {
      return <div></div>;
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    registerUser(user)
      .then((response) => {
        toast.success(response.data.successMessage);
        // setLoading(false);
        navigate("/userlogin");
      })
      .catch((err) => {
        toast.error(err.response.data.errorMessage);
        // setLoading(false);
      });
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  // console.log(jsonItems);
  return (
    <>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black" style={{ borderRadius: "25px" }}>
                <div>
                  <ToastContainer />
                </div>
                <div className="card-body p-md-5">
                  <p
                    className="text-center h2 fw-bold mx-md-4"
                    style={{ fontWeight: "bold", color: "#000" }}
                  >
                    BIGTECH
                  </p>
                  <div className="row justify-content-center">
                    <div className="col-md-1 col-lg-6 col-xl-5 order-2 order-lg-1">
                      <p
                        className="text-center h5 fw-bold mx-1 mx-md-4 mt-4"
                        style={{ marginBottom: "2rem" }}
                      >
                        Let’s create your bigtech workstation
                      </p>
                      <div>
                        <p style={{ fontSize: "14px" }}>
                          Step {formStep + 1} of {MAX_STEP}
                        </p>
                      </div>
                      <form onSubmit={submitForm}>
                        <div className="row">
                          {/* contact information */}
                          {formStep >= 0 && (
                            <div
                              className={
                                formStep === 0
                                  ? "d-block w-100"
                                  : "d-none w-100"
                              }
                            >
                              {/* First Name */}
                              <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                  <span
                                    className={
                                      errors.firstName
                                        ? "input-group-text bg-white px-4 border-md border-right-0 border-danger"
                                        : "input-group-text bg-white px-4 border-md border-right-0 "
                                    }
                                  >
                                    <i className="fa fa-user text-muted" />
                                  </span>
                                </div>
                                <input
                                  id="firstName"
                                  type="text"
                                  name="firstName"
                                  placeholder="First Name"
                                  className={
                                    errors.firstName
                                      ? "form-control bg-white border-left-0 border-md border-danger rounded-right"
                                      : "form-control bg-white border-left-0 border-md"
                                  }
                                  {...register("firstName", {
                                    required: {
                                      value: true,
                                      message: "Please enter first name",
                                    },
                                  })}
                                  value={firstName}
                                  onChange={handleInputChange}
                                />
                              </div>
                              {/* Last Name */}
                              <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                  <span
                                    className={
                                      errors.lastName
                                        ? "input-group-text bg-white px-4 border-md border-right-0 border-danger"
                                        : "input-group-text bg-white px-4 border-md border-right-0 "
                                    }
                                  >
                                    <i className="fa fa-user text-muted" />
                                  </span>
                                </div>
                                <input
                                  id="lastName"
                                  type="text"
                                  name="lastName"
                                  placeholder="Last Name"
                                  className={
                                    errors.lastName
                                      ? "form-control bg-white border-left-0 border-md border-danger rounded-right"
                                      : "form-control bg-white border-left-0 border-md"
                                  }
                                  {...register("lastName", {
                                    required: {
                                      value: true,
                                      message: "Please enter last name",
                                    },
                                  })}
                                  value={lastName}
                                  onChange={handleInputChange}
                                />
                              </div>
                              {/* Email Address */}
                              <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                  <span
                                    className={
                                      errors.email
                                        ? "input-group-text bg-white px-4 border-md border-right-0 border-danger"
                                        : "input-group-text bg-white px-4 border-md border-right-0 "
                                    }
                                  >
                                    <i className="fa fa-envelope text-muted" />
                                  </span>
                                </div>
                                <input
                                  id="email"
                                  type="email"
                                  name="email"
                                  placeholder="Email Address"
                                  className={
                                    errors.email
                                      ? "form-control bg-white border-left-0 border-md border-danger rounded-right"
                                      : "form-control bg-white border-left-0 border-md"
                                  }
                                  {...register("email", {
                                    required: {
                                      value: true,
                                      message: "Please enter email",
                                    },
                                  })}
                                  value={email}
                                  onChange={handleInputChange}
                                />
                              </div>
                              {/* Phone Number */}
                              <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                  <span
                                    className={
                                      errors.phone
                                        ? "input-group-text bg-white px-4 border-md border-right-0 border-danger"
                                        : "input-group-text bg-white px-4 border-md border-right-0 "
                                    }
                                  >
                                    <i className="fa fa-phone-square text-muted" />
                                  </span>
                                </div>

                                <input
                                  id="phoneNumber"
                                  type="tel"
                                  name="phone"
                                  placeholder="Phone Number"
                                  className={
                                    errors.phone
                                      ? "form-control bg-white border-md border-left-0 pl-3 border-danger"
                                      : "form-control bg-white border-md border-left-0 pl-3"
                                  }
                                  {...register("phone", {
                                    required: {
                                      value: true,
                                      message: "Please enter phone",
                                    },
                                  })}
                                  value={phone}
                                  onChange={handleInputChange}
                                />
                              </div>
                            </div>
                          )}

                          {/* company */}
                          {formStep >= 1 && (
                            <div
                              className={
                                formStep === 1
                                  ? "d-block w-100"
                                  : "d-none w-100"
                              }
                            >
                              {/* company Name */}
                              <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                  <span
                                    className={
                                      errors.companyName
                                        ? "input-group-text bg-white px-4 border-md border-right-0 border-danger"
                                        : "input-group-text bg-white px-4 border-md border-right-0 "
                                    }
                                  >
                                    <i className="fa fa-user text-muted" />
                                  </span>
                                </div>
                                <input
                                  id="companyName"
                                  type="text"
                                  name="companyName"
                                  placeholder="Company Name"
                                  className={
                                    errors.companyName
                                      ? "form-control bg-white border-left-0 border-md border-danger rounded-right"
                                      : "form-control bg-white border-left-0 border-md"
                                  }
                                  {...register("companyName", {
                                    required: {
                                      value: true,
                                    },
                                  })}
                                  value={companyName}
                                  onChange={handleInputChange}
                                />
                              </div>

                              {/* company Webiste */}
                              <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                  <span
                                    className={
                                      errors.companyWebiste
                                        ? "input-group-text bg-white px-4 border-md border-right-0 border-danger"
                                        : "input-group-text bg-white px-4 border-md border-right-0 "
                                    }
                                  >
                                    <i className="fa fa-user text-muted" />
                                  </span>
                                </div>
                                <input
                                  id="companyWebiste"
                                  type="url"
                                  name="companyWebiste"
                                  placeholder="Company Webiste"
                                  className={
                                    errors.companyWebiste
                                      ? "form-control bg-white border-left-0 border-md border-danger rounded-right"
                                      : "form-control bg-white border-left-0 border-md"
                                  }
                                  {...register("companyWebiste", {
                                    required: {
                                      value: true,
                                    },
                                  })}
                                  value={companyWebiste}
                                  onChange={handleInputChange}
                                />
                              </div>

                              {/* business type */}
                              <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                  <span
                                    className={
                                      errors.businessType
                                        ? "input-group-text bg-white px-4 border-md border-right-0 border-danger"
                                        : "input-group-text bg-white px-4 border-md border-right-0 "
                                    }
                                  >
                                    <i className="fa fa-black-tie text-muted" />
                                  </span>
                                </div>
                                <select
                                  id="businessType"
                                  name="businessType"
                                  className={
                                    errors.businessType
                                      ? "form-control custom-select bg-white border-left-0 border-md border-danger"
                                      : "form-control custom-select bg-white border-left-0 border-md"
                                  }
                                  {...register("businessType", {
                                    required: {
                                      value: true,
                                    },
                                  })}
                                  value={businessType}
                                  onChange={handleInputChange}
                                >
                                  <option value="" selected disabled hidden>
                                    Choose your industry
                                  </option>
                                  {jsonItems.industry?.map((industryItem) => {
                                    return (
                                      <option
                                        value={industryItem}
                                        key={industryItem}
                                      >
                                        {industryItem}
                                      </option>
                                    );
                                  })}
                                </select>
                              </div>

                              {/* business scale */}
                              <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                  <span
                                    className={
                                      errors.businessScale
                                        ? "input-group-text bg-white px-4 border-md border-right-0 border-danger"
                                        : "input-group-text bg-white px-4 border-md border-right-0 "
                                    }
                                  >
                                    <i className="fa fa-black-tie text-muted" />
                                  </span>
                                </div>
                                <select
                                  id="businessScale"
                                  name="businessScale"
                                  className={
                                    errors.businessScale
                                      ? "form-control custom-select bg-white border-left-0 border-md border-danger"
                                      : "form-control custom-select bg-white border-left-0 border-md"
                                  }
                                  {...register("businessScale", {
                                    required: {
                                      value: true,
                                    },
                                  })}
                                  value={businessScale}
                                  onChange={handleInputChange}
                                >
                                  <option value="" selected disabled hidden>
                                    Bigtech will be used by
                                  </option>
                                  <option value="onlyme">only me</option>
                                  <option value="2-9">2 -9</option>
                                  <option value="10-99">10 - 99</option>
                                  <option value="100+">100+</option>
                                </select>
                              </div>
                            </div>
                          )}

                          {formStep >= 2 && (
                            <div
                              className={
                                formStep === 2
                                  ? "d-block w-100"
                                  : "d-none w-100"
                              }
                            >
                              {/* username */}
                              <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                  <span
                                    className={
                                      errors.username
                                        ? "input-group-text bg-white px-4 border-md border-right-0 border-danger"
                                        : "input-group-text bg-white px-4 border-md border-right-0 "
                                    }
                                  >
                                    <i className="fa fa-user text-muted" />
                                  </span>
                                </div>
                                <input
                                  id="username"
                                  type="text"
                                  name="username"
                                  placeholder="User Name"
                                  className={
                                    errors.username
                                      ? "form-control bg-white border-left-0 border-md border-danger rounded-right"
                                      : "form-control bg-white border-left-0 border-md"
                                  }
                                  {...register("username", {
                                    required: {
                                      value: true,
                                    },
                                  })}
                                  value={username}
                                  onChange={handleInputChange}
                                />
                              </div>
                              {/* Password */}
                              <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                  <span
                                    className={
                                      errors.password
                                        ? "input-group-text bg-white px-4 border-md border-right-0 border-danger"
                                        : "input-group-text bg-white px-4 border-md border-right-0 "
                                    }
                                  >
                                    <i className="fa fa-lock text-muted" />
                                  </span>
                                </div>
                                <input
                                  id="password"
                                  type="password"
                                  name="password"
                                  placeholder="Password"
                                  className={
                                    errors.password
                                      ? "form-control bg-white border-left-0 border-md border-danger rounded-right"
                                      : "form-control bg-white border-left-0 border-md"
                                  }
                                  {...register("password", {
                                    required: {
                                      value: true,
                                    },
                                    minLength: {
                                      value: 8,
                                      message:
                                        "Password must have at least 8 characters",
                                    },
                                  })}
                                  value={password}
                                  onChange={handleInputChange}
                                />
                                {errors.password && (
                                  <p>{errors.password.message}</p>
                                )}
                              </div>

                              {/* Password Confirmation */}
                              <div className="input-group col-lg-12 mb-4">
                                <div className="input-group-prepend">
                                  <span
                                    className={
                                      errors.passwordConfirmation
                                        ? "input-group-text bg-white px-4 border-md border-right-0 border-danger"
                                        : "input-group-text bg-white px-4 border-md border-right-0 "
                                    }
                                  >
                                    <i className="fa fa-lock text-muted" />
                                  </span>
                                </div>
                                <input
                                  id="passwordConfirmation"
                                  type="text"
                                  name="passwordConfirmation"
                                  placeholder="Confirm Password"
                                  className={
                                    errors.passwordConfirmation
                                      ? "form-control bg-white border-left-0 border-md border-danger rounded-right"
                                      : "form-control bg-white border-left-0 border-md"
                                  }
                                  {...register("passwordConfirmation", {
                                    required: {
                                      value: true,
                                    },
                                    validate: (value) => {
                                      const { password } = getValues();
                                      return (
                                        password === value ||
                                        "Passwords should match!"
                                      );
                                    },
                                  })}
                                />
                              </div>

                              {/* terms And Condition */}
                              <div className="input-group col-lg-12 mb-2">
                                <input
                                  name="termsAndCondition"
                                  className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                                  type="checkbox"
                                  {...register("termsAndCondition", {
                                    required: {
                                      value: true,
                                    },
                                  })}
                                />
                                <span>
                                  I accept the&nbsp;
                                  <a
                                    className="text-blue-400 underline"
                                    href="/"
                                  >
                                    Terms and Conditions
                                  </a>
                                  .
                                </span>
                              </div>

                              {/* Privacy Policy */}
                              <div className="input-group col-lg-12 mb-4">
                                <input
                                  name="PrivacyPolicy"
                                  className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                                  type="checkbox"
                                  {...register("PrivacyPolicy", {
                                    required: {
                                      value: true,
                                    },
                                  })}
                                />
                                <span>
                                  I accept the&nbsp;
                                  <a
                                    className="text-blue-400 underline"
                                    href="/"
                                  >
                                    Privacy Policy
                                  </a>
                                  .
                                </span>
                              </div>
                            </div>
                          )}
                          {/* Submit Button */}
                          <div className="form-group col-lg-12 mx-auto mb-0 d-flex align-items-center justify-content-between">
                            {renderPrevButton()}
                            {renderNextButton()}
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
                              Already Registered?
                              <a
                                href="/userlogin"
                                className="text-primary ml-2"
                              >
                                Login
                              </a>
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                      <img
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid"
                        alt="Sample image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Registration;
