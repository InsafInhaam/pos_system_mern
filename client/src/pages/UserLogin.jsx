import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../api/user";
import { isAuthenticated, setAuthentication } from "../helpers/auth";

const UserLogin = () => {
  let navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/");
    } else {
      navigate("/userlogin");
    }
  }, [navigate]);

  const [formStep, setFormStep] = useState(0);
  const {
    watch,
    register,
    getValues,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const submitForm = (e) => {
    e.preventDefault();

    userLogin(user)
      .then((response) => {
        setAuthentication(response.data.token, response.data.user);
        toast.success(response.data.successMessage);
        // setLoading(false);
        navigate("/");
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
                      <form onSubmit={submitForm}>
                        <div className="row">
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

                          {/* rememeber Me */}
                          <div className="input-group col-lg-12 mb-2 d-flex align-items-center justify-content-between">
                            <div>
                              <input
                                name="rememeberMe"
                                className="p-3 text-green-600 rounded mr-3 border-2 border-gray-300 ring-0 focus:ring-0 focus:ring-offset-0 focus:border-0 cursor-pointer"
                                type="checkbox"
                                {...register("rememeberMe", {
                                  required: {
                                    value: true,
                                  },
                                })}
                              />
                              <span>Rememeber me</span>
                            </div>
                            <div>
                              <span>
                                <a className="text-blue-400 underline" href="/">
                                  Forgot password?
                                </a>
                              </span>
                            </div>
                          </div>

                          {/* Submit Button */}
                          <div className="form-group col-lg-12 mx-auto mb-0 d-flex align-items-center justify-content-between">
                            <button
                              type="submit"
                              disabled={!isValid}
                              className="btn btn-primary py-2"
                            >
                              <span className="font-weight-bold">Login</span>
                            </button>
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
                              Don't have an account
                              <a
                                href="/registration"
                                className="text-primary ml-2"
                              >
                                Signup
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

export default UserLogin;
