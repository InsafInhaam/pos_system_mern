import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addLogin } from "../api/login";
import { isAuthenticated, setAuthentication } from "../helpers/auth";

const Login = () => {
  const history = useNavigate();

  useEffect(() => {
    if (isAuthenticated()) {
      history("/");
    } else {
      history("/login");
    }
  }, [history]);

  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const { email, password } = login;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill the input fields");
    } else {
      setLoading(true);
      addLogin(login)
        .then((response) => {
          // console.log(response);
          setAuthentication(response.data.token, response.data.admin);
          toast.success(response.data.successMessage);
          setLoading(false);
          history("/");
        })
        .catch((err) => {
          toast.error(err.response.data.errorMessage);
          setLoading(false);
        });
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setLogin({ ...login, [name]: value });
  };

  return (
    <>
      <div className="container">
        {/* <!-- Outer Row --> */}
        <div className="row justify-content-center">
          <div className="col-xl-10 col-lg-12 col-md-9">
            <div className="card o-hidden border-0 shadow-lg mypercentage-17">
              <div className="card-body p-0">
                {/* <!-- Nested Row within Card Body --> */}
                <div className="row">
                  <div className="col-lg-6 d-none d-lg-block bg-login-image"></div>
                  <div className="col-lg-6">
                    <div className="p-5">
                      <div className="text-center">
                        <h1 className="h4 text-gray-900 mb-4">Welcome Back!</h1>
                      </div>
                      <div>
                        <ToastContainer />
                      </div>
                      <form className="user" onSubmit={handleSubmit}>
                        {loading && (
                          <div className="text-center position-absolute loading-bubble-login">
                            <Loading />
                          </div>
                        )}
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control form-control-user"
                            id="exampleInputEmail"
                            name="email"
                            placeholder="Enter Email Address..."
                            value={email}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="form-group">
                          <input
                            type="password"
                            className="form-control form-control-user"
                            id="exampleInputPassword"
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handleInputChange}
                          />
                        </div>
                        <button
                          className="btn btn-ht btn-br btn-bg btn-primary btn-user btn-block"
                          type="submit"
                        >
                          Submit
                        </button>
                      </form>
                      <div className="text-center">
                        <Link className="small" to="forgot-password.html">
                          Forgot Password?
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;