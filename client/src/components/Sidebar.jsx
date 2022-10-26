import React from "react";
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
          <div className="sidebar-brand-text mx-3">Bigtech</div>
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
              <Link className="collapse-item" to="/expenses">
                Expenses
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
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseUser"
            aria-expanded="true"
            aria-controls="collapseUser"
          >
            <i className="fas fa-fw fa-users"></i>
            <span>User</span>
          </Link>
          <div
            id="collapseUser"
            className="collapse"
            aria-labelledby="headingUser"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/admin">
                User
              </Link>
              <Link className="collapse-item" to="/role">
                Role
              </Link>
              <Link className="collapse-item" to="/permission">
                Permission
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item ">
          <Link className="nav-link" to="/department">
            <i class="fas fa-building"></i>
            <span>Department</span>
          </Link>
        </li>

        <li className="nav-item">
          <Link
            className="nav-link collapsed"
            to="#"
            data-toggle="collapse"
            data-target="#collapseLeave"
            aria-expanded="true"
            aria-controls="collapseLeave"
          >
            <i class="fas fa-calendar-day"></i>
            <span>Staff Leave</span>
          </Link>
          <div
            id="collapseLeave"
            className="collapse"
            aria-labelledby="headingLeave"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <Link className="collapse-item" to="/requestLeave">
                Request Leave
              </Link>
              <Link className="collapse-item" to="/approveLeave">
                Approve/Reject Leave
              </Link>
            </div>
          </div>
        </li>

        <li className="nav-item ">
          <Link className="nav-link" to="/staffNotice">
            <i class="fas fa-sticky-note"></i>
            <span>Staff Notice</span>
          </Link>
        </li>

        <li className="nav-item ">
          <Link className="nav-link" to="/mail">
            <i class="fas fa-mail-bulk"></i>
            <span>Send Mail</span>
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
