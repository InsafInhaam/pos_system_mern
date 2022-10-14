import { useLocation, Navigate, Outlet } from "react-router-dom";
import { isAuthenticated } from "./auth";

const RequireAuth = ({ allowedRoles }) => {
  const location = useLocation();

  return isAuthenticated().role == allowedRoles ? (
    <Outlet />
  ) : isAuthenticated() ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default RequireAuth;
