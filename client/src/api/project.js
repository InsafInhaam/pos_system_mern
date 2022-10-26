import axios from "axios";

export const addProject = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/api/project/create",
    data,
    config
  );
  return response;
};

export const updateProject = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.put(
    process.env.REACT_APP_API_URL + "/api/project/update/" + id,
    data,
    config
  );
  return response;
};

export const Projects = async (data) => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/project/"
  );
  return response;
};

export const DeleteProject = async (id) => {
  const response = await axios.delete(
    process.env.REACT_APP_API_URL + "/api/project/delete/" + id
  );
  return response;
};

export const GetProjectById = async (id) => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/project/" + id
  );

  return response;
};
