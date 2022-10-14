import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import { Products, DeleteProduct } from "../api/product";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import ViewProduct from "./ViewProduct";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [productId, setProductId] = useState("");

  useEffect(() => {
    Products().then((response) => {
      setProducts(response.data);
    });
  }, [products]);

  const deleteProduct = (id) => {
    DeleteProduct(id).then((response) => {
      if (response.status === 201) {
        toast.success("Product deleted successfully");
      } else {
        toast.error("Product deleted failed");
      }
    });
  };

  const { ExportCSVButton } = CSVExport;

  const { SearchBar } = Search;

  const columns = [
    {
      dataField: "#",
      text: "ID",
      sort: true,
    },
    {
      dataField: "image",
      text: "Image",
      sort: true,
      formatter: (cellContent, row) => (
        <img
          src={`/uploads/products/${row.image}`}
          alt={row.image}
          className="rounded img-product-list"
        />
      ),
    },
    {
      dataField: "name",
      text: "Name",
      sort: true,
    },
    {
      dataField: "price",
      text: " Price",
      sort: true,
    },
    {
      dataField: "category",
      text: "Category",
      sort: true,
    },
    {
      dataField: "quantity",
      text: "Quantity",
      sort: true,
    },
    {
      dataField: "_id",
      text: "View",
      formatter: (cellContent, row) => (
        <>
          <Link
            data-toggle="modal"
            data-target="#exampleModalLong"
            className="view"
            onClick={(e) => setProductId(row._id)}
          >
            <i className="material-icons">&#xE417;</i>
          </Link>
        </>
      ),
    },
    {
      dataField: "_id",
      text: "Edit",
      formatter: (cellContent, row) => (
        <Link to={"/editproduct/" + row._id} className="edit">
          <i className="material-icons">&#xE254;</i>
        </Link>
      ),
    },
    {
      dataField: "_id",
      text: "Delete",
      formatter: (cellContent, row) => (
        <Link to="#" className="delete" onClick={(e) => deleteProduct(row._id)}>
          <i className="material-icons">&#xE872;</i>
        </Link>
      ),
    },
  ];

  return (
    <>
      <div id="wrapper">
        {/* <!-- Sidebar --> */}
        <Sidebar />

        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            {/* <!-- Topbar --> */}
            <Navbar />

            {/* <!-- Begin Page Content --> */}
            <div className="container-fluid">
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Products</h1>
                <Link
                  to="/createProduct"
                  className="d-none d-sm-inline-block btn btn-ht btn-br btn-bg btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-plus-circle fa-sm text-white-50"></i>
                  &nbsp; Create product
                </Link>
              </div>
              <div>
                <ToastContainer />
              </div>
              <div className="table-responsive">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-md-12">
                        <h2>
                          Product <b>Details</b>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <ToolkitProvider
                    keyField="id"
                    data={products}
                    columns={columns}
                    search
                    exportCSV
                  >
                    {(props) => (
                      <div>
                        <div className="d-flex align-items-center justify-content-between search-export-col">
                          <SearchBar
                            {...props.searchProps}
                            className="form-control mb-0"
                          />
                          <ExportCSVButton
                            {...props.csvProps}
                            className="btn btn-ht btn-br btn-bg btn-primary"
                          >
                            Export CSV!!
                          </ExportCSVButton>
                        </div>

                        <hr />
                        <BootstrapTable
                          {...props.baseProps}
                          pagination={paginationFactory()}
                        />
                      </div>
                    )}
                  </ToolkitProvider>
                </div>
              </div>
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

      {/* <!-- Modal --> */}
      <ViewProduct productId={productId} />
    </>
  );
};

export default Product;
