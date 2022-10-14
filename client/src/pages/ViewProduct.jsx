import React, { useState, useEffect } from "react";
import { GetProductById } from "../api/product";

const ViewProduct = ({ productId }) => {
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
    image: "",
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
    image,
  } = product;

  useEffect(() => {
    GetProductById(productId).then((response) => {
      setProduct(response.data);
    });
  }, [productId]);

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalLong"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLongTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">
                {name}
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="container px-0">
                <div className="card mt-0 p-3" style={{ background: "#eee" }}>
                  <div className="container-fliud">
                    <div className="wrapper row">
                      <div className="preview col-md-6">
                        <div className="preview-pic tab-content">
                          <div className="tab-pane active" id="pic-1">
                            <img src={`/uploads/products/${image}`} />
                          </div>
                          {/* <div className="tab-pane" id="pic-2">
                            <img src="http://placekitten.com/400/252" />
                          </div>
                          <div className="tab-pane" id="pic-3">
                            <img src="http://placekitten.com/400/252" />
                          </div>
                          <div className="tab-pane" id="pic-4">
                            <img src="http://placekitten.com/400/252" />
                          </div>
                          <div className="tab-pane" id="pic-5">
                            <img src="http://placekitten.com/400/252" />
                          </div> */}
                        </div>
                        {/* <ul className="preview-thumbnail nav nav-tabs">
                          <li className="active">
                            <a data-target="#pic-1" data-toggle="tab">
                              <img src="http://placekitten.com/200/126" />
                            </a>
                          </li>
                          <li>
                            <a data-target="#pic-2" data-toggle="tab">
                              <img src="http://placekitten.com/200/126" />
                            </a>
                          </li>
                          <li>
                            <a data-target="#pic-3" data-toggle="tab">
                              <img src="http://placekitten.com/200/126" />
                            </a>
                          </li>
                          <li>
                            <a data-target="#pic-4" data-toggle="tab">
                              <img src="http://placekitten.com/200/126" />
                            </a>
                          </li>
                          <li>
                            <a data-target="#pic-5" data-toggle="tab">
                              <img src="http://placekitten.com/200/126" />
                            </a>
                          </li>
                        </ul> */}
                      </div>
                      <div className="details col-md-6">
                        <h3 className="product-title">{name}</h3>
                        {/* <div className="rating">
                          <div className="stars">
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star checked" />
                            <span className="fa fa-star" />
                            <span className="fa fa-star" />
                          </div>
                          <span className="review-no">41 reviews</span>
                        </div> */}
                        <p className="product-description">{description}</p>
                        <h4 className="price">
                          current price: <span>Rs.{price}</span>
                        </h4>
                        <p className="vote">
                          <strong>91%</strong> of buyers enjoyed this product!{" "}
                          <strong>(87 votes)</strong>
                        </p>
                        <h5 className="sizes">
                          sizes:
                          <span
                            className="size"
                            data-toggle="tooltip"
                            title="small"
                          >
                            {size}
                          </span>
                          {/* <span
                            className="size"
                            data-toggle="tooltip"
                            title="medium"
                          >
                            m
                          </span>
                          <span
                            className="size"
                            data-toggle="tooltip"
                            title="large"
                          >
                            l
                          </span>
                          <span
                            className="size"
                            data-toggle="tooltip"
                            title="xtra large"
                          >
                            xl
                          </span> */}
                        </h5>
                        <h5 className="colors">
                          colors:
                          {/* <span
                            className="color orange not-available"
                            data-toggle="tooltip"
                            title="Not In store"
                          /> */}
                          <span
                            className="color"
                            style={{ background: `${color}` }}
                          />
                          {/* <span className="color blue" /> */}
                        </h5>
                        {/* <div className="action">
                          <button
                            className="add-to-cart btn btn-default"
                            type="button"
                          >
                            add to cart
                          </button>
                          <button
                            className="like btn btn-default"
                            type="button"
                          >
                            <span className="fa fa-heart" />
                          </button>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
