import ajax from "../../../util/http/ajax";
import { API_USER } from "../../../util/http/apipath";
import { USER_ADD, USER_GET, USER_DELETE, USER_EDIT } from "../constant";

export const addUser = (data) => {
  return async (dispatch) => {
    return await ajax
      .post(API_USER, data)
      .then((response) => {
        if (response && response.status === 200) {
          return dispatch({
            type: USER_ADD,
            data: response,
          });
        }
      })
      .catch((error) => {
        if (error) {
          const response = {
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response,
          };
          return dispatch({
            type: USER_ADD,
            data: response,
          });
        }
        return "error";
      });
  };
};

export const getUser = () => {
  return async (dispatch) => {
    return await ajax
      .get(API_USER, {})
      .then((response) => {
        if (response && response.status === 200) {
          return dispatch({
            type: USER_GET,
            data: response,
          });
        }
      })
      .catch((error) => {
        if (error) {
          const response = {
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response,
          };
          return dispatch({
            type: USER_GET,
            data: response,
          });
        }
        return "error";
      });
  };
};
export const deleteUser = (data) => {
  return async (dispatch) => {
    return await ajax
      .delete(API_USER, data)
      .then((response) => {
        if (response && response === 200) {
          return dispatch({
            type: USER_DELETE,
            data: response,
          });
        }
      })
      .catch((error) => {
        if (error) {
          const response = {
            status: error.response.status,
            statusText: error.response.statusText,
            data: error.response,
          };
          return dispatch({
            type: USER_DELETE,
            data: response,
          });
        }
        return "error";
      });
  };
};
