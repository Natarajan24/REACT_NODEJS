import { combineReducers } from "redux";
import UserReducer from "../container/Dashboard/Reducer/UserReducer";

const reducer = combineReducers({
  UserReducer: UserReducer,
});

export default reducer;
