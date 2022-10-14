import React from "react";
import logo from "./assets/img/logo.png";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          className="sidebar-brand d-flex align-items-center justify-content-center"
          to="/"
        >
          <div className="sidebar-brand-text mx-3">ININ Technologies</div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseUtilities"
            aria-expanded="true"
            aria-controls="collapseUtilities"
          >
            <i className="fas fa-fw fa-file"></i>
            <span>Project</span>
          </Link>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/projects">
                Projects
              </Link>
              <Link className="collapse-item" to="/tasks">
                Tasks
              </Link>
              <Link className="collapse-item" to="/clients">
                Clients
              </Link>
              <Link className="collapse-item" to="/">
                Other
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseInventory"
            aria-expanded="true"
            aria-controls="collapseInventory"
          >
            <i className="fas fa-fw fa-toolbox"></i>
            <span>Inventory</span>
          </Link>
          <div
            id="collapseInventory"
            className="collapse"
            aria-labelledby="headingInventory"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/products">
                Products
              </Link>
              <Link className="collapse-item" to="/category">
                Category
              </Link>
              <Link className="collapse-item" to="/customers">
                Customers
              </Link>
              <Link className="collapse-item" to="/orders">
                POS Orders
              </Link>
              <Link className="collapse-item" to="/customorders">
                Custom Orders
              </Link>
              <Link className="collapse-item" to="/vieworders">
                Orders
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapsePages"
            aria-expanded="true"
            aria-controls="collapsePages"
          >
            <i className="fas fa-fw fa-folder"></i>
            <span>Components</span>
          </Link>
          <div
            id="collapsePages"
            className="collapse"
            aria-labelledby="headingPages"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/kanban">
                Kanban
              </Link>
              <Link className="collapse-item" to="/calendar">
                Calender
              </Link>
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Charts --> */}
        <li className="nav-item">
          <Link className="nav-link" to="/admin">
            <i className="fas fa-fw fa-users"></i>
            <span>Admin</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div>
      </ul>
    </>
  );
};

export default Sidebar;
