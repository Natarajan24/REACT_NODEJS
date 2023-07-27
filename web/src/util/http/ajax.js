import axios from "axios";

let access_token = JSON.parse(localStorage.getItem("access_token"));
const client = axios.create({
  baseURL: "http://localhost:8000/",
  //   headers: { Authorization: `Bearer ${access_token}`, Pragma: "no-cache" },
});
// const TEXT_INSIDE_SSO_TIMEOUT_RESPONSE =
//   "This page is used to hold your data while you are being authorized for your request.";
// client.interceptors.request.use(
//   (config) => {
//     if (JSON.parse(localStorage.getItem("access_token"))) {
//       config.headers["Authorization"] = `Bearer ${JSON.parse(
//         localStorage.getItem("access_token")
//       )}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );
// client.interceptors.response.use(
//   async (response) => {
//     if (
//       response.data &&
//       typeof response.data === "string" &&
//       response.data
//         .toUpperCase()
//         .indexOf(TEXT_INSIDE_SSO_TIMEOUT_RESPONSE.toUpperCase()) >= 0
//     ) {
//       window.location.href = `https://${window.location.host}`;
//       response.data = null;
//       return response;
//     }
//     return response;
//   },
//   async (error) => {
//     const configError = error.config;
//     const response = {
//       status: error.response.status,
//       statusText: error.response.statusText,
//       data: error.response.data.message,
//     };
//     if (response.status == 401) {
//     } else if (response.status == 412) {
//       localStorage.clear();
//       window.location.reload(false);
//     } else if (response.status === 406) {
//       errorFunction(configError);
//     }
//     return Promise.reject(error);
//   }
// );
// const errorFunction = (configError) => {
//   var data = "";

//   var config1 = {
//     method: "put",
//     url: `${config.apiBaseURL}/hr_portal/refresh_token`,
//     headers: {
//       Authorization: `Bearer ${JSON.parse(
//         localStorage.getItem("refresh_token")
//       )}`,
//     },
//     data: data,
//   };
//   axios(config1)
//     .then(function (response) {
//       localStorage.setItem(
//         "access_token",
//         JSON.stringify(response.data.access_token)
//       );
//       if (JSON.parse(localStorage.getItem("access_token"))) {
//         config1.headers[
//           "Authorization"
//         ] = `Bearer ${response.data.access_token}`;
//       }
//       client(configError);
//       window.location.reload(false);
//     })

//     .catch(function (error) {
//       const response = {
//         status: error.response.status,
//         statusText: error.response.statusText,
//         data: error.response.data.message,
//       };
//       if (response.status == 412) {
//         localStorage.clear();
//         window.location.reload(false);
//       }
//     });
// };

export default client;
