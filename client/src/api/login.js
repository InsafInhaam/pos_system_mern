import axios from "axios";

export const addLogin = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/api/auth/login",
    data,
    config
  );
  return response;
};

// export const logout = async (data) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const response = await axios.post(
//     process.env.REACT_APP_API_URL  + "/api/auth/logout",
//     data,
//     config
//   );
//   return response;
// };
