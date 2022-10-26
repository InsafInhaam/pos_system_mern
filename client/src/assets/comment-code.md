import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { GetProductById, updateProduct } from "../api/product";
import { Categories } from "../api/category";

const EditProduct = () => {
const location = useLocation();
const product_id = location.pathname.split("/")[2];

const [loading, setLoading] = useState(false);
const [fetchcategory, setFetchCategory] = useState([]);

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
const [displayImage, setDisplayImage] = useState("");

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

// console.log(formData);

useEffect(() => {
GetProductById(product_id).then((response) => {
setName(response.data.name);
setDescription(response.data.description);
setPrice(response.data.price);
setCategory(response.data.category);
setQuantity(response.data.quantity);
setWeight(response.data.weight);
setColor(response.data.color);
setSize(response.data.size);
setStatus(response.data.status);
setDiscount(response.data.discount);
setTax(response.data.tax);
setDimension(response.data.dimension);
setDisplayImage(response.data.image);
});
}, [product_id]);

useEffect(() => {
Categories().then((response) => {
setFetchCategory(response.data);
});
}, [fetchcategory]);

const handleSubmit = (e) => {
e.preventDefault();
if (!name || !category || !description || !price || !quantity) {
toast.error("Please provide all the required fields");
} else {
setLoading(true);
updateProduct(product_id, formData).then((response) => {
if (response.status === 201) {
toast.success("Product updated successfully");
setLoading(false);
console.log(response);
} else {
toast.error(response.data);
}
});
}
};

return (
<>
{/_ <!-- Page Wrapper --> _/}
<div id="wrapper">
{/_ <!-- Sidebar --> _/}
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
                <h1 className="h3 mb-0 text-gray-800">Edit {name}</h1>
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
                        htmlFor="product_dimension"
                      >
                        Image
                      </label>
                      <div className="col-md-12">
                        <img
                          src={`/uploads/products/${displayImage}`}
                          style={{ width: "100px", height: "100%" }}
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <label
                        className="col-md-12 control-label"
                        htmlFor="filebutton"
                      >
                        Image
                      </label>
                      <div className="col-md-12">
                        <input
                          className="form-control input-md input-file"
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

export default EditProduct;

import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import Loading from "../components/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useLocation } from "react-router-dom";
import { GetProductById, updateProduct } from "../api/product";
import { Categories } from "../api/category";

const EditProduct = () => {
const location = useLocation();
const product_id = location.pathname.split("/")[2];
// console.log(product_id);

const [loading, setLoading] = useState(false);
const [fetchcategory, setFetchCategory] = useState([]);
const [product, setProduct] = useState({
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
} = product;

useEffect(() => {
GetProductById(product_id).then((response) => {
setProduct(response.data);
// console.log(response);
});
}, []);

useEffect(() => {
Categories().then((response) => {
setFetchCategory(response.data);
});
}, [fetchcategory]);

const handleSubmit = (e) => {
e.preventDefault();
if (!name || !category || !description || !price || !quantity) {
toast.error("Please provide all the required fields");
} else {
setLoading(true);
updateProduct(product_id, product).then((response) => {
if (response.status === 201) {
toast.success("Product updated successfully");
setLoading(false);
} else {
toast.error(response.data);
}
});
}
};

const handleInputChange = (e) => {
let { name, value } = e.target;
setProduct({ ...product, [name]: value });
};

return (
<>
{/_ <!-- Page Wrapper --> _/}
<div id="wrapper">
{/_ <!-- Sidebar --> _/}
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
                <h1 className="h3 mb-0 text-gray-800">Edit {name}</h1>
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
                          type="text"
                          value={name || ""}
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
                          value={description || ""}
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
                          type="number"
                          value={price || ""}
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
                          value={category || ""}
                          onChange={handleInputChange}
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
                          type="text"
                          value={quantity || ""}
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
                          type="number"
                          value={weight || ""}
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
                          type="color"
                          value={color || ""}
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
                          type="number"
                          value={size || ""}
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
                          type="number"
                          value={discount || ""}
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
                          type="text"
                          value={status || ""}
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
                          type="number"
                          value={tax || ""}
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
                          type="text"
                          value={dimension || ""}
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

export default EditProduct;
