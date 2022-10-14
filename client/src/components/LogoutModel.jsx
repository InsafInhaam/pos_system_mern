import React from "react";
import { logout } from "./../helpers/auth";
import { useNavigate } from "react-router-dom";

const LogoutModel = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(() => {
      navigate("/login");
    });
  };
  return (
    <>
      {/* <!-- Logout Modal--> */}
      <div
        className="modal fade"
        id="logoutModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Ready to Leave?
              </h5>
              <button
                className="close"
                type="button"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              Select "Logout" below if you are ready to end your current
              session.
            </div>
            <div className="modal-footer">
              <button
                className="btn btn-ht btn-br btn-bg btn-secondary"
                type="button"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                className="btn btn-ht btn-br btn-bg btn-primary"
                data-dismiss="modal"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LogoutModel;
