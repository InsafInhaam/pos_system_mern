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

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    Products().then((response) => {
      setProducts(response.data);
    });
  }, []);

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
      text: " ID",
      sort: true,
    },
    {
      dataField: "name",
      text: " Name",
      sort: true,
    },
    {
      dataField: "price",
      text: " Price",
      sort: true,
    },
    {
      dataField: "category",
      text: " category",
      sort: true,
    },
    {
      dataField: "quantity",
      text: " quantity",
      sort: true,
    },
    {
      dataField: "_id",
      text: "View",
      formatter: (cellContent, row) => (
        <Link to={"/viewProduct/" + row._id} className="view">
          <i className="material-icons">&#xE417;</i>
        </Link>
      ),
    },
    {
      dataField: "_id",
      text: "Edit",
      formatter: (cellContent, row) => (
        <Link to={"/editProduct/" + row._id} className="edit">
          <i className="material-icons">&#xE254;</i>
        </Link>
      ),
    },
    {
      dataField: "_id",
      text: "Delete",
      formatter: (cellContent, row) => (
        <a href="#" className="delete" onClick={(e) => deleteProduct(row._id)}>
          <i className="material-icons">&#xE872;</i>
        </a>
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
                <a
                  href="/createproduct"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-plus-circle fa-sm text-white-50"></i>
                  &nbsp; Create product
                </a>
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
                            className="btn btn-primary"
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
    </>
  );
};

export default Product;
