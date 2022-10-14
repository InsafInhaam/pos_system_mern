import { getCookie, setCookie, deleteCookie } from "./cookies";
import {
  setLocalStorage,
  getLocalStorage,
  deleteLocalStorage,
} from "./localStorage";

export const setAuthentication = (token, admin) => {
  setCookie("token", token);
  setLocalStorage("admin", admin);
};

export const isAuthenticated = () => {
  if (getCookie("token") && getLocalStorage("admin")) {
    return getLocalStorage("admin");
  } else {
    return false;
  }
};

export const logout = (next) => {
  deleteCookie("token");
  deleteLocalStorage("admin");

  next();
};
