import axios from "axios";

export const addProduct = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    "http://localhost:5000/api/product/create",
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
    "http://localhost:5000/api/product/update/" + id,
    data,
    config
  );
  return response;
};

export const Products = async (data) => {
  const response = await axios.get("http://localhost:5000/api/product/");
  return response;
};

export const DeleteProduct = async (id) => {
  const response = await axios.delete(
    "http://localhost:5000/api/product/delete/" + id
  );
  return response;
};

export const GetProductById = async (id) => {
  const response = await axios.get("http://localhost:5000/api/product/" + id);

  return response;
};
