import { USER_ADD, USER_GET } from "../constant";

const initalState = {
  description: null,
  message: null,
};

const UserReducer = (state = initalState, action) => {
  switch (action.type) {
    case USER_GET:
      return {
        ...state,
        description: action.data,
      };
    case USER_ADD:
      return {
        ...state,
        message: action.data,
      };
    default:
      return state;
  }
};

export default UserReducer;
