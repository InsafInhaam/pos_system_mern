import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import paginationFactory from "react-bootstrap-table2-paginator";
import BootstrapTable from "react-bootstrap-table-next";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import { Admins, DeleteAdmin } from "../api/admin";

const Admin = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    Admins().then((response) => {
      setAdmins(response.data);
    });
  }, [admins]);

  const deleteAdmin = (id) => {
    DeleteAdmin(id).then((response) => {
      if (response.status === 201) {
        toast.success("Admin deleted successfully");
      } else {
        toast.error("Admin deleted failed");
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
      dataField: "firstName",
      text: "First Name",
      sort: true,
    },
    {
      dataField: "lastName",
      text: "Last Name",
      sort: true,
    },
    {
      dataField: "email",
      text: " Email",
      sort: true,
    },
    {
      dataField: "role",
      text: "Role",
      sort: true,
    },
    {
      dataField: "gender",
      text: "Gender",
      sort: true,
    },
    {
      dataField: "_id",
      text: "View",
      formatter: (cellContent, row) => (
        <Link to={"/viewAdmin/" + row._id} className="view">
          <i className="material-icons">&#xE417;</i>
        </Link>
      ),
    },
    {
      dataField: "_id",
      text: "Edit",
      formatter: (cellContent, row) => (
        <Link to={"/editAdmin/" + row._id} className="edit">
          <i className="material-icons">&#xE254;</i>
        </Link>
      ),
    },
    {
      dataField: "_id",
      text: "Delete",
      formatter: (cellContent, row) => (
        <Link to="#" className="delete" onClick={(e) => deleteAdmin(row._id)}>
          <i className="material-icons">&#xE872;</i>
        </Link>
      ),
    },
  ];

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
              {/* <!-- Page Heading --> */}
              <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Admin</h1>
                <Link
                  to="/createAdmin"
                  className="d-none d-sm-inline-block btn btn-ht btn-br btn-bg btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-plus-circle fa-sm text-white-50"></i>
                  &nbsp; Create admin
                </Link>
              </div>
              <div>
                <ToastContainer />
              </div>
              <div className="table-responsive">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-sm-8">
                        <h2>
                          Admin <b>Details</b>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <ToolkitProvider
                    keyField="id"
                    data={admins}
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

              {/* <!-- Content Row --> */}
            </div>
            {/* <!-- /.container-fluid --> */}
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

export default Admin;
