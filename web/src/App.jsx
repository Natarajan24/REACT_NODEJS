import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import User from "./container/Dashboard/User";
import UserDetails from "./container/Dashboard/UserDetails";
import Login from "./container/loging/login";
import LogOut from "./container/loging/logout";
import Sidebar from "./menu/sidebar";
import { Provider } from "react-redux";
import { store } from "./store/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/logout" element={<LogOut />} />
          <Route path="/User" element={<User />} />
          <Route path="/User_details" element={<UserDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
