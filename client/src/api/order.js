import axios from "axios";

export const addOrder = async (data) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await axios.post(
    process.env.REACT_APP_API_URL + "/api/order/create",
    data,
    config
  );
  return response;
};

// export const updateOrder = async (id, data) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };

//   const response = await axios.put(
//     process.env.REACT_APP_API_URL + "/api/order/update/" + id,
//     data,
//     config
//   );
//   return response;
// };

export const Orders = async () => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/order/"
  );
  return response;
};

export const DeleteOrder = async (id) => {
  const response = await axios.delete(
    process.env.REACT_APP_API_URL + "/api/order/delete/" + id
  );
  return response;
};

export const GetOrderById = async (id) => {
  const response = await axios.get(
    process.env.REACT_APP_API_URL + "/api/order/" + id
  );

  return response;
};
