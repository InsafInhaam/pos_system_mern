import axios from "axios";

export const addClient = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/api/client/create",
    data,
    config
  );
  return response;
};

export const updateClient = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.put(
    process.env.REACT_APP_API_URL + "/api/client/update/" + id,
    data,
    config
  );
  return response;
};

export const Clients = async (data) => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/client/"
  );
  return response;
};

export const DeleteClient = async (id) => {
  const response = await axios.delete(
    process.env.REACT_APP_API_URL + "/api/client/delete/" + id
  );
  return response;
};

export const GetClientById = async (id) => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/client/" + id
  );

  return response;
};
