import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProduct } from "../api/product";
import { Categories } from "../api/category";
const CreateProduct = () => {
  const [loading, setLoading] = useState(false);
  const [fetchcategory, setFetchCategory] = useState([]);
  const [state, setState] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    quantity: "",
    weight: "",
    color: "",
    size: "",
    status: "",
    discount: "",
    tax: "",
    dimension: "",
  });

  const {
    name,
    description,
    price,
    category,
    quantity,
    weight,
    color,
    size,
    status,
    discount,
    tax,
    dimension,
  } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !description || !price || !quantity) {
      toast.error("Please provide all the required fields");
    } else {
      setLoading(true);
      addProduct(state).then((response) => {
        if (response.status === 201) {
          toast.success("Product created successfully");
          setLoading(false);
        } else {
          toast.error(response.data);
        }
      });
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  useEffect(() => {
    Categories().then((response) => {
      setFetchCategory(response.data);
    });
  }, []);

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
                <h1 className="h3 mb-0 text-gray-800">Product</h1>
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
                        htmlFor="product_name"
                      >
                        Name
                      </label>
                      <div className="col-md-12">
                        <input
                          id="product_name"
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
                        htmlFor="product_description"
                      >
                        Description
                      </label>
                      <div className="col-md-12">
                        <textarea
                          className="form-control"
                          id="product_description"
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
                        htmlFor="product_price"
                      >
                        Price
                      </label>
                      <div className="col-md-12">
                        <input
                          id="product_price"
                          name="price"
                          placeholder=" Price"
                          className="form-control input-md"
                          required=""
                          type="number"
                          value={price}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="product_categorie"
                      >
                        Category
                      </label>
                      <div className="col-md-12">
                        <select
                          id="product_category"
                          name="category"
                          className="form-control"
                          value={category}
                          onChange={handleInputChange}
                        >
                          {fetchcategory?.map((fetchcat, key) => {
                            return <option value={key}>{fetchcat.name}</option>;
                          })}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="available_quantity"
                      >
                        Quantity
                      </label>
                      <div className="col-md-12">
                        <input
                          id="available_quantity"
                          name="quantity"
                          placeholder="Quantity"
                          className="form-control input-md"
                          required=""
                          type="text"
                          value={quantity}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="product_weight"
                      >
                        Weight
                      </label>
                      <div className="col-md-12">
                        <input
                          id="product_weight"
                          name="weight"
                          placeholder=" Weight"
                          className="form-control input-md"
                          required=""
                          type="number"
                          value={weight}
                          onChange={handleInputChange}
                        />
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

                    <div className="form-group col-md-6 ">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="product_size"
                      >
                        Size
                      </label>
                      <div className="col-md-12">
                        <input
                          id="product_size"
                          name="size"
                          placeholder="Size"
                          className="form-control input-md"
                          required=""
                          type="number"
                          value={size}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="percentage_discount"
                      >
                        Discount percentage
                      </label>
                      <div className="col-md-12">
                        <input
                          id="percentage_discount"
                          name="discount"
                          placeholder="Discount percentage"
                          className="form-control input-md"
                          required=""
                          type="number"
                          value={discount}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="product_status"
                      >
                        Status
                      </label>
                      <div className="col-md-12">
                        <input
                          id="product_status"
                          name="status"
                          placeholder="Status"
                          className="form-control input-md"
                          required=""
                          type="text"
                          value={status}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="product_tax"
                      >
                        Tax
                      </label>
                      <div className="col-md-12">
                        <input
                          id="product_tax"
                          name="tax"
                          placeholder="Tax"
                          className="form-control input-md"
                          required=""
                          type="number"
                          value={tax}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="product_dimension"
                      >
                        Dimension
                      </label>
                      <div className="col-md-12">
                        <input
                          id="product_dimension"
                          name="dimension"
                          placeholder="Dimension"
                          className="form-control input-md"
                          required=""
                          type="text"
                          value={dimension}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div className="row">
                    <div className="form-group col-md-6">
                      <label className="col-md-12 control-label" htmlFor="filebutton">
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
                    </div>
                  </div> */}
                  <div className="form-group col-md-6 pl-0">
                    <div className="col-md-12">
                      <button
                        id="singlebutton"
                        name="singlebutton"
                        className="btn btn-primary"
                        type="submit"
                      >
                        Submit
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

export default CreateProduct;
