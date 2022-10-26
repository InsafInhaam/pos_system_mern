import axios from "axios";

export const registerUser = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/api/user/register",
    data,
    config
  );
  return response;
};

export const userLogin = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/api/user/login",
    data,
    config
  );
  return response;
};
