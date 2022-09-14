import axios from "axios";

export const addClient = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    "http://localhost:5000/api/client/create",
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
    "http://localhost:5000/api/client/update/" + id,
    data,
    config
  );
  return response;
};

export const Clients = async (data) => {
  const response = await axios.get("http://localhost:5000/api/client/");
  return response;
};

export const DeleteClient = async (id) => {
  const response = await axios.delete(
    "http://localhost:5000/api/client/delete/" + id
  );
  return response;
};

export const GetClientById = async (id) => {
  const response = await axios.get("http://localhost:5000/api/client/" + id);

  return response;
};
