import React from "react";
import Footer from "../components/Footer";
import LogoutModel from "../components/LogoutModel";
import Navbar from "../components/Navbar";
import ScrollTop from "../components/ScrollTop";
import Sidebar from "../components/Sidebar";

const Admin = () => {
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
                      <div className="col-sm-4">
                        <div className="search-box">
                          <i className="material-icons">&#xE8B6;</i>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search&hellip;"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <table className="table table-striped table-hover table-bordered">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>
                          Name <i className="fa fa-sort"></i>
                        </th>
                        <th>Address</th>
                        <th>
                          City <i className="fa fa-sort"></i>
                        </th>
                        <th>Pin Code</th>
                        <th>
                          Country <i className="fa fa-sort"></i>
                        </th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Thomas Hardy</td>
                        <td>89 Chiaroscuro Rd.</td>
                        <td>Portland</td>
                        <td>97219</td>
                        <td>USA</td>
                        <td>
                          <a
                            href="#"
                            className="view"
                            title="View"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE417;</i>
                          </a>
                          <a
                            href="#"
                            className="edit"
                            title="Edit"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE254;</i>
                          </a>
                          <a
                            href="#"
                            className="delete"
                            title="Delete"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE872;</i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Maria Anders</td>
                        <td>Obere Str. 57</td>
                        <td>Berlin</td>
                        <td>12209</td>
                        <td>Germany</td>
                        <td>
                          <a
                            href="#"
                            className="view"
                            title="View"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE417;</i>
                          </a>
                          <a
                            href="#"
                            className="edit"
                            title="Edit"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE254;</i>
                          </a>
                          <a
                            href="#"
                            className="delete"
                            title="Delete"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE872;</i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>Fran Wilson</td>
                        <td>C/ Araquil, 67</td>
                        <td>Madrid</td>
                        <td>28023</td>
                        <td>Spain</td>
                        <td>
                          <a
                            href="#"
                            className="view"
                            title="View"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE417;</i>
                          </a>
                          <a
                            href="#"
                            className="edit"
                            title="Edit"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE254;</i>
                          </a>
                          <a
                            href="#"
                            className="delete"
                            title="Delete"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE872;</i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <td>Dominique Perrier</td>
                        <td>25, rue Lauriston</td>
                        <td>Paris</td>
                        <td>75016</td>
                        <td>France</td>
                        <td>
                          <a
                            href="#"
                            className="view"
                            title="View"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE417;</i>
                          </a>
                          <a
                            href="#"
                            className="edit"
                            title="Edit"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE254;</i>
                          </a>
                          <a
                            href="#"
                            className="delete"
                            title="Delete"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE872;</i>
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <td>Martin Blank</td>
                        <td>Via Monte Bianco 34</td>
                        <td>Turin</td>
                        <td>10100</td>
                        <td>Italy</td>
                        <td>
                          <a
                            href="#"
                            className="view"
                            title="View"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE417;</i>
                          </a>
                          <a
                            href="#"
                            className="edit"
                            title="Edit"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE254;</i>
                          </a>
                          <a
                            href="#"
                            className="delete"
                            title="Delete"
                            data-toggle="tooltip"
                          >
                            <i className="material-icons">&#xE872;</i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="clearfix">
                    <div className="hint-text">
                      Showing <b>5</b> out of <b>25</b> entries
                    </div>
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a href="#">
                          <i className="fa fa-angle-double-left"></i>
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          2
                        </a>
                      </li>
                      <li className="page-item active">
                        <a href="#" className="page-link">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          4
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          5
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          <i className="fa fa-angle-double-right"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
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
