import axios from "axios";

export const Categories = async (data) => {
  const response = await axios.get("http://localhost:5000/api/category/");
  return response;
};
