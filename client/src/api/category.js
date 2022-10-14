import axios from "axios";

export const addCategory = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/api/category/create",
    data,
    config
  );
  return response;
};

export const updateCategory = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.put(
    process.env.REACT_APP_API_URL + "/api/category/update/" + id,
    data,
    config
  );
  return response;
};

export const Categories = async () => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/category/"
  );
  return response;
};

export const DeleteCategory = async (id) => {
  const response = await axios.delete(
    process.env.REACT_APP_API_URL + "/api/category/delete/" + id
  );
  return response;
};

export const GetCategoryById = async (id) => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/category/" + id
  );

  return response;
};
