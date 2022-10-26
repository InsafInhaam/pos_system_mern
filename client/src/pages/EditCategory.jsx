import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GetCategoryById, updateCategory } from "./../api/category";
import { useLocation } from "react-router-dom";

const EditCategory = () => {
  const location = useLocation();
  const category_id = location.pathname.split("/")[2];
  // console.log(product_id);

  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState({
    name: "",
    description: "",
    color: "",
  });

  const { name, description, color } = category;

  useEffect(() => {
    GetCategoryById(category_id).then((response) => {
      setCategory(response.data);
      // console.log(response);
    });
  }, [category_id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !description || !color) {
      toast.error("Please provide all the required fields");
    } else {
      setLoading(true);
      updateCategory(category_id, category).then((response) => {
        if (response.status === 201) {
          toast.success("Category created successfully");
          setLoading(false);
        } else {
          toast.error(response.data);
        }
      });
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setCategory({ ...category, [name]: value });
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
                <h1 className="h3 mb-0 text-gray-800">Add Category</h1>
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
                        htmlFor="category_name"
                      >
                        Name
                      </label>
                      <div className="col-md-12">
                        <input
                          id="category_name"
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
                        htmlFor="category_description"
                      >
                        Description
                      </label>
                      <div className="col-md-12">
                        <textarea
                          className="form-control"
                          id="category_description"
                          name="description"
                          value={description}
                          onChange={handleInputChange}
                        ></textarea>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="color"
                      >
                        Color
                      </label>
                      <div className="col-md-2">
                        <input
                          id="color"
                          name="color"
                          placeholder="Color"
                          className="form-control input-md"
                          required=""
                          type="color"
                          value={color}
                          onChange={handleInputChange}
                        />
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

export default EditCategory;
