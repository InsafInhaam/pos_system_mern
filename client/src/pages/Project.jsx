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
import { Projects, DeleteProject } from "../api/project";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    Projects().then((response) => {
      setProjects(response.data);
    });
  }, []);

  const deleteProject = (id) => {
    DeleteProject(id).then((response) => {
      if (response.status === 201) {
        toast.success("Project deleted successfully");
      } else {
        toast.error("Project deleted failed");
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
      dataField: "phone",
      text: " Phone",
      sort: true,
    },
    {
      dataField: "email",
      text: " Email",
      sort: true,
    },
    {
      dataField: "bussinessName",
      text: "Bussiness Name",
      sort: true,
    },
    {
      dataField: "_id",
      text: "View",
      formatter: (cellContent, row) => (
        <Link to={"/viewProject/" + row._id} className="view">
          <i className="material-icons">&#xE417;</i>
        </Link>
      ),
    },
    {
      dataField: "_id",
      text: "Edit",
      formatter: (cellContent, row) => (
        <Link to={"/editProject/" + row._id} className="edit">
          <i className="material-icons">&#xE254;</i>
        </Link>
      ),
    },
    {
      dataField: "_id",
      text: "Delete",
      formatter: (cellContent, row) => (
        <Link to="#" className="delete" onClick={(e) => deleteProject(row._id)}>
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
                <h1 className="h3 mb-0 text-gray-800">Projects</h1>
                <Link
                  to="/createProject"
                  className="d-none d-sm-inline-block btn btn-ht btn-br btn-bg btn-sm btn-primary shadow-sm"
                >
                  <i className="fas fa-plus-circle fa-sm text-white-50"></i>
                  &nbsp; Create project
                </Link>
              </div>
              <div>
                <ToastContainer />
              </div>
              <div className="row">
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-pattern">
                    <div className="card-body">
                      <div className="float-right">
                        <i className="fa fa-archive text-primary h4 ml-3" />
                      </div>
                      <h5 className="font-size-20 mt-0 pt-1">24</h5>
                      <p className="text-muted mb-0">Total Projects</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-pattern">
                    <div className="card-body">
                      <div className="float-right">
                        <i className="fa fa-th text-primary h4 ml-3" />
                      </div>
                      <h5 className="font-size-20 mt-0 pt-1">18</h5>
                      <p className="text-muted mb-0">Completed Projects</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card bg-pattern">
                    <div className="card-body">
                      <div className="float-right">
                        <i className="fa fa-file text-primary h4 ml-3" />
                      </div>
                      <h5 className="font-size-20 mt-0 pt-1">06</h5>
                      <p className="text-muted mb-0">Pending Projects</p>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-md-6">
                  <div className="card">
                    <div className="card-body">
                      <form>
                        <div className="form-group mb-0">
                          <label>Search</label>
                          <div className="input-group mb-0">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Search..."
                              aria-describedby="project-search-addon"
                            />
                            <div className="input-group-append">
                              <button
                                className="btn btn-danger"
                                type="button"
                                id="project-search-addon"
                              >
                                <i className="fa fa-search search-icon font-12" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}
              <div className="row">
                <div className="col-lg-12">
                  <div className="card">
                    <div className="card-body">
                      <div className="table-responsive project-list">
                        <table className="table project-table table-centered table-nowrap">
                          <thead>
                            <tr>
                              <th scope="col">#</th>
                              <th scope="col">Projects</th>
                              <th scope="col">Start Date</th>
                              <th scope="col">Status</th>
                              <th scope="col">Team</th>
                              <th scope="col">Progress</th>
                              <th scope="col">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">1</th>
                              <td>New admin Design</td>
                              <td>02/5/2019</td>
                              <td>
                                <span className="text-success font-12">
                                  <i className="mdi mdi-checkbox-blank-circle mr-1" />{" "}
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className="team">
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Roger Drake"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Reggie James"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Gerald Mayberry"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar8.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0">
                                  Progress
                                  <span className="float-right">100%</span>
                                </p>
                                <div
                                  className="progress mt-2"
                                  style={{ height: "5px" }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="action">
                                  <a
                                    href="#"
                                    className="text-success mr-4"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Edit"
                                  >
                                    {" "}
                                    <i className="fa fa-pencil h5 m-0" />
                                  </a>
                                  <a
                                    href="#"
                                    className="text-danger"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Close"
                                  >
                                    {" "}
                                    <i className="fa fa-remove h5 m-0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">2</th>
                              <td>Landing page Design</td>
                              <td>04/6/2019</td>
                              <td>
                                <span className="text-primary font-12">
                                  <i className="mdi mdi-checkbox-blank-circle mr-1" />{" "}
                                  Pending
                                </span>
                              </td>
                              <td>
                                <div className="team">
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Deborah Mixon"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Scott Jessie"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0">
                                  Progress
                                  <span className="float-right">78%</span>
                                </p>
                                <div
                                  className="progress mt-2"
                                  style={{ height: "5px" }}
                                >
                                  <div
                                    className="progress-bar bg-primary"
                                    role="progressbar"
                                    style={{ width: "78%" }}
                                    aria-valuenow={78}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="action">
                                  <a
                                    href="#"
                                    className="text-success mr-4"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Edit"
                                  >
                                    {" "}
                                    <i className="fa fa-pencil h5 m-0" />
                                  </a>
                                  <a
                                    href="#"
                                    className="text-danger"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Close"
                                  >
                                    {" "}
                                    <i className="fa fa fa-remove h5 m-0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">3</th>
                              <td>Multipurpose Landing Template</td>
                              <td>06/6/2019</td>
                              <td>
                                <span className="text-success font-12">
                                  <i className="mdi mdi-checkbox-blank-circle mr-1" />{" "}
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className="team">
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Neil Wing"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Stanley Barber"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Roger Drake"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Jack Krier"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0">
                                  Progress
                                  <span className="float-right">100%</span>
                                </p>
                                <div
                                  className="progress mt-2"
                                  style={{ height: "5px" }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="action">
                                  <a
                                    href="#"
                                    className="text-success mr-4"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Edit"
                                  >
                                    {" "}
                                    <i className="fa fa-pencil h5 m-0" />
                                  </a>
                                  <a
                                    href="#"
                                    className="text-danger"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Close"
                                  >
                                    {" "}
                                    <i className="fa fa fa-remove h5 m-0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>Blog Template Design</td>
                              <td>07/5/2019</td>
                              <td>
                                <span className="text-success font-12">
                                  <i className="mdi mdi-checkbox-blank-circle mr-1" />{" "}
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className="team">
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Roger Drake"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Reggie James"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar8.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Gerald Mayberry"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0">
                                  Progress
                                  <span className="float-right">100%</span>
                                </p>
                                <div
                                  className="progress mt-2"
                                  style={{ height: "5px" }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="action">
                                  <a
                                    href="#"
                                    className="text-success mr-4"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Edit"
                                  >
                                    {" "}
                                    <i className="fa fa-pencil h5 m-0" />
                                  </a>
                                  <a
                                    href="#"
                                    className="text-danger"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Close"
                                  >
                                    {" "}
                                    <i className="fa fa fa-remove h5 m-0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">5</th>
                              <td>Brand logo design</td>
                              <td>08/6/2019</td>
                              <td>
                                <span className="text-primary font-12">
                                  <i className="mdi mdi-checkbox-blank-circle mr-1" />{" "}
                                  Pending
                                </span>
                              </td>
                              <td>
                                <div className="team">
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Deborah Mixon"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Scott Jessie"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0">
                                  Progress
                                  <span className="float-right">54%</span>
                                </p>
                                <div
                                  className="progress mt-2"
                                  style={{ height: "5px" }}
                                >
                                  <div
                                    className="progress-bar bg-primary"
                                    role="progressbar"
                                    style={{ width: "54%" }}
                                    aria-valuenow={54}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="action">
                                  <a
                                    href="#"
                                    className="text-success mr-4"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Edit"
                                  >
                                    {" "}
                                    <i className="fa fa-pencil h5 m-0" />
                                  </a>
                                  <a
                                    href="#"
                                    className="text-danger"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Close"
                                  >
                                    {" "}
                                    <i className="fa fa fa-remove h5 m-0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">6</th>
                              <td>Redesign - Landing page</td>
                              <td>10/6/2019</td>
                              <td>
                                <span className="text-primary font-12">
                                  <i className="mdi mdi-checkbox-blank-circle mr-1" />{" "}
                                  Pending
                                </span>
                              </td>
                              <td>
                                <div className="team">
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Neil Wing"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Stanley Barber"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Roger Drake"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Jack Krier"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0">
                                  Progress
                                  <span className="float-right">41%</span>
                                </p>
                                <div
                                  className="progress mt-2"
                                  style={{ height: "5px" }}
                                >
                                  <div
                                    className="progress-bar bg-primary"
                                    role="progressbar"
                                    style={{ width: "41%" }}
                                    aria-valuenow={41}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="action">
                                  <a
                                    href="#"
                                    className="text-success mr-4"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Edit"
                                  >
                                    {" "}
                                    <i className="fa fa-pencil h5 m-0" />
                                  </a>
                                  <a
                                    href="#"
                                    className="text-danger"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Close"
                                  >
                                    {" "}
                                    <i className="fa fa fa-remove h5 m-0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">7</th>
                              <td>Redesign - Dashboard</td>
                              <td>12/5/2019</td>
                              <td>
                                <span className="text-success font-12">
                                  <i className="mdi mdi-checkbox-blank-circle mr-1" />{" "}
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className="team">
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Roger Drake"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Reggie James"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar7.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0">
                                  Progress
                                  <span className="float-right">100%</span>
                                </p>
                                <div
                                  className="progress mt-2"
                                  style={{ height: "5px" }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="action">
                                  <a
                                    href="#"
                                    className="text-success mr-4"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Edit"
                                  >
                                    {" "}
                                    <i className="fa fa-pencil h5 m-0" />
                                  </a>
                                  <a
                                    href="#"
                                    className="text-danger"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Close"
                                  >
                                    {" "}
                                    <i className="fa fa fa-remove h5 m-0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">8</th>
                              <td>Landing page Design</td>
                              <td>13/6/2019</td>
                              <td>
                                <span className="text-primary font-12">
                                  <i className="mdi mdi-checkbox-blank-circle mr-1" />{" "}
                                  Pending
                                </span>
                              </td>
                              <td>
                                <div className="team">
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Deborah Mixon"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar2.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Scott Jessie"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0">
                                  Progress
                                  <span className="float-right">84%</span>
                                </p>
                                <div
                                  className="progress mt-2"
                                  style={{ height: "5px" }}
                                >
                                  <div
                                    className="progress-bar bg-primary"
                                    role="progressbar"
                                    style={{ width: "84%" }}
                                    aria-valuenow={84}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="action">
                                  <a
                                    href="#"
                                    className="text-success mr-4"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Edit"
                                  >
                                    {" "}
                                    <i className="fa fa-pencil h5 m-0" />
                                  </a>
                                  <a
                                    href="#"
                                    className="text-danger"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Close"
                                  >
                                    {" "}
                                    <i className="fa fa fa-remove h5 m-0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">9</th>
                              <td>Multipurpose Landing Template</td>
                              <td>15/6/2019</td>
                              <td>
                                <span className="text-success font-12">
                                  <i className="mdi mdi-checkbox-blank-circle mr-1" />{" "}
                                  Completed
                                </span>
                              </td>
                              <td>
                                <div className="team">
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Neil Wing"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar4.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Stanley Barber"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar3.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                  <a
                                    href="javascript: void(0);"
                                    className="team-member"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Roger Drake"
                                  >
                                    <img
                                      src="https://bootdey.com/img/Content/avatar/avatar5.png"
                                      className="rounded-circle avatar-xs"
                                      alt=""
                                    />
                                  </a>
                                </div>
                              </td>
                              <td>
                                <p className="mb-0">
                                  Progress
                                  <span className="float-right">100%</span>
                                </p>
                                <div
                                  className="progress mt-2"
                                  style={{ height: "5px" }}
                                >
                                  <div
                                    className="progress-bar bg-success"
                                    role="progressbar"
                                    style={{ width: "100%" }}
                                    aria-valuenow={100}
                                    aria-valuemin={0}
                                    aria-valuemax={100}
                                  />
                                </div>
                              </td>
                              <td>
                                <div className="action">
                                  <a
                                    href="#"
                                    className="text-success mr-4"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Edit"
                                  >
                                    {" "}
                                    <i className="fa fa-pencil h5 m-0" />
                                  </a>
                                  <a
                                    href="#"
                                    className="text-danger"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title
                                    data-original-title="Close"
                                  >
                                    {" "}
                                    <i className="fa fa fa-remove h5 m-0" />
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* end project-list */}
                      <div className="pt-3">
                        <ul className="pagination justify-content-end mb-0">
                          <li className="page-item disabled">
                            <a
                              className="page-link"
                              href="#"
                              tabIndex={-1}
                              aria-disabled="true"
                            >
                              Previous
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              1
                            </a>
                          </li>
                          <li className="page-item active">
                            <a className="page-link" href="#">
                              2
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              3
                            </a>
                          </li>
                          <li className="page-item">
                            <a className="page-link" href="#">
                              Next
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* end row */}

              {/* <div className="table-responsive">
                <div className="table-wrapper">
                  <div className="table-title">
                    <div className="row">
                      <div className="col-md-12">
                        <h2>
                          Project <b>Details</b>
                        </h2>
                      </div>
                    </div>
                  </div>
                  <ToolkitProvider
                    keyField="id"
                    data={projects}
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
              </div> */}
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

export default Project;
