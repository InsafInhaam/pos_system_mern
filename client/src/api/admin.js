import axios from "axios";

export const addAdmin = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/api/auth/create",
    data,
    config
  );
  return response;
};

export const updateAdmin = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.put(
    process.env.REACT_APP_API_URL + "/api/auth/update/" + id,
    data,
    config
  );
  return response;
};

export const Admins = async () => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/auth/"
  );
  return response;
};

export const DeleteAdmin = async (id) => {
  const response = await axios.delete(
    process.env.REACT_APP_API_URL + "/api/auth/delete/" + id
  );
  return response;
};

export const GetAdminById = async (id) => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/auth/" + id
  );

  return response;
};
