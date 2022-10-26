import axios from "axios";

export const addCustomer = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/api/customer/create",
    data,
    config
  );
  return response;
};

export const updateCustomer = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.put(
    process.env.REACT_APP_API_URL + "/api/customer/update/" + id,
    data,
    config
  );
  return response;
};

export const Customers = async (data) => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/customer/"
  );
  return response;
};

export const DeleteCustomer = async (id) => {
  const response = await axios.delete(
    process.env.REACT_APP_API_URL + "/api/customer/delete/" + id
  );
  return response;
};

export const GetCustomerById = async (id) => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/customer/" + id
  );

  return response;
};
