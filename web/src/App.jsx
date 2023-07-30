import React from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import User from "./container/Dashboard/User";
import UserDetails from "./container/Dashboard/UserDetails";
import Login from "./container/loging/login";
import LogOut from "./container/loging/logout";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Sidebar from './menu/sidebar'

const App = (props) => {
  console.log("fhhdf",props)
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
           <Sidebar />
          <hr />
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route path="/logout" element={<LogOut />} />
            <Route path="/User" element={<User />} />/
            <Route path="/User_details" element={<UserDetails />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;
