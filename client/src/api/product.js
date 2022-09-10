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
