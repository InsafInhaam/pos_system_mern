import axios from "axios";

export const addProduct = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/api/product/create",
    data,
    config
  );
  return response;
};

export const updateProduct = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.put(
    process.env.REACT_APP_API_URL + "/api/product/update/" + id,
    data,
    config
  );
  return response;
};

export const Products = async (data) => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/product/"
  );
  return response;
};

export const DeleteProduct = async (id) => {
  const response = await axios.delete(
    process.env.REACT_APP_API_URL + "/api/product/delete/" + id
  );
  return response;
};

export const GetProductById = async (id) => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/product/" + id
  );

  return response;
};
