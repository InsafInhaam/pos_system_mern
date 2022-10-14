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
                        </div>
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
                          Category : <strong>{category}</strong>
                          &nbsp;&nbsp;&nbsp;&nbsp; Quantity :
                          <strong>{quantity}</strong>
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
                        </h5>
                        <h5 className="colors">
                          colors:
                          <span
                            className="color"
                            style={{ background: `${color}` }}
                          />
                        </h5>
                        <h5 className="sizes">
                          Weight:
                          <span
                            className="size"
                            data-toggle="tooltip"
                            title="small"
                          >
                            {weight}
                          </span>
                        </h5>
                        <h5 className="sizes">
                          Dimension:
                          <span
                            className="size"
                            data-toggle="tooltip"
                            title="small"
                          >
                            {dimension}
                          </span>
                        </h5>
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
