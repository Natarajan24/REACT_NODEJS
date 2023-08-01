import React ,{useState,useEffect}from "react";
import { BrowserRouter, Route, Routes, Link, Navigate } from "react-router-dom";
import User from "./container/Dashboard/User";
import UserDetails from "./container/Dashboard/UserDetails";
import Login from "./container/loging/login";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Sidebar from "./menu/sidebar";

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(()=>{
    if (localStorage.getItem("auth") === null){
      setIsLoggedIn(false);
    }
  },[])

  const handleLogin = () => {
    setIsLoggedIn(true);
  };
    
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          {isLoggedIn && localStorage.getItem("auth") ? (
            <div>
              <Sidebar />
              <Routes>
                <Route path="/User" element={<User />} />
                <Route path="/User_details" element={<UserDetails />} />
              </Routes>
            </div>
          ) : (
            <Login onLogin={handleLogin} />
          )}
      </BrowserRouter>
      </Provider>
    </>
  );
};

export default App;



