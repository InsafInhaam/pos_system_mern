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
  // const [state, setState] = useState({
  //   name: "",
  //   description: "",
  //   price: "",
  //   category: "",
  //   quantity: "",
  //   weight: "",
  //   color: "",
  //   size: "",
  //   status: "",
  //   discount: "",
  //   tax: "",
  //   dimension: "",
  //   image: "",
  // });
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const [status, setStatus] = useState("");
  const [discount, setDiscount] = useState("");
  const [tax, setTax] = useState("");
  const [dimension, setDimension] = useState("");
  const [image, setImage] = useState("");

  console.log(image);
  // const {
  //   name,
  // description,
  // price,
  // category,
  // quantity,
  // weight,
  // color,
  // size,
  // status,
  // discount,
  // tax,
  // dimension,
  // image,
  // } = state;

  const onChangeFile = (e) => {
    setImage(e.target.files[0]);
  };

  const formData = new FormData();

  formData.append("name", name);
  formData.append("description", description);
  formData.append("price", price);
  formData.append("category", category);
  formData.append("quantity", quantity);
  formData.append("weight", weight);
  formData.append("color", color);
  formData.append("size", size);
  formData.append("status", status);
  formData.append("discount", discount);
  formData.append("tax", tax);
  formData.append("dimension", dimension);
  formData.append("image", image);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !category || !description || !price || !quantity) {
      toast.error("Please provide all the required fields");
    } else {
      setLoading(true);
      addProduct(formData).then((response) => {
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
    // let { name, value } = e.target;
    // setState({ ...state, [name]: value });
  };

  useEffect(() => {
    Categories().then((response) => {
      setFetchCategory(response.data);
      console.log(response.data);
    });
  }, [fetchcategory]);

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
                className="form-horizontal p-3 shadow-lg mb-5"
                onSubmit={handleSubmit}
                enctype="multipart/form-data"
                method="post"
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
                          onChange={(e) => setName(e.target.value)}
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
                          onChange={(e) => setDescription(e.target.value)}
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
                          placeholder="Price"
                          className="form-control input-md"
                          required=""
                          type="number"
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
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
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          {fetchcategory?.map((fetchcat, key) => {
                            return (
                              <option value={fetchcat.name} key={key}>
                                {fetchcat.name}
                              </option>
                            );
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
                          onChange={(e) => setQuantity(e.target.value)}
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
                          onChange={(e) => setWeight(e.target.value)}
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
                          onChange={(e) => setColor(e.target.value)}
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
                          onChange={(e) => setSize(e.target.value)}
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
                          onChange={(e) => setDiscount(e.target.value)}
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
                          onChange={(e) => setStatus(e.target.value)}
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
                          onChange={(e) => setTax(e.target.value)}
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
                          onChange={(e) => setDimension(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="filebutton"
                      >
                        Image
                      </label>
                      <div className="col-md-12">
                        <input
                          className="form-control input-file"
                          // filename="image"
                          name="image"
                          type="file"
                          onChange={onChangeFile}
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
