import axios from "axios";

export const addSetting = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/api/setting/create",
    data,
    config
  );
  return response;
};

export const updateSetting = async (id, data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.put(
    process.env.REACT_APP_API_URL + "/api/setting/update/" + id,
    data,
    config
  );
  return response;
};

export const Settings = async (data) => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/setting/"
  );
  return response;
};

export const DeleteSetting = async (id) => {
  const response = await axios.delete(
    process.env.REACT_APP_API_URL + "/api/setting/delete/" + id
  );
  return response;
};

export const GetSettingById = async (id) => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/setting/" + id
  );

  return response;
};
