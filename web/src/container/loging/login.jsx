
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [inputValue, setInputValue] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("auth")) {
      navigate("/User");
    }
  }, []);

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    if (
      inputValue?.name === "nataraj" &&
      inputValue?.email === "natarajnatarajc99@gmail.com"
    ) {
      localStorage.setItem("auth", true);
      onLogin(); 
      navigate("/User");
    } else {
      alert("error");
    }
  };

  return (
    <div>
    <div
      style={{
        border: "1px solid black",
        width: "250px",
        height: "230px",
        marginTop: "100px",
        marginLeft: "500px",
        backgroundColor:'brown'
      }}
    >
    <div style={{ padding: "50px", marginTop: "-50px" }}>
      <form onSubmit={handleLogin}>
          <h1 style={{ textAlign: "center" }}>Login</h1>
          <div style={{ padding: "20px",marginLeft:'-20px'}}>
            <lable>Name:</lable>
            <br />
            <input
              style={{ border: "none", borderBottom: "1px solid black" ,width:'180px'}}
              type="name"
              name="name"
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <lable>Email:</lable>
            <br />
            <input
              style={{ border: "none", borderBottom: "1px solid black"  ,width:'180px'}}
              type="email"
              name="email"
              onChange={(e) => handleChange(e)}
            />
            <button
              onClick={handleLogin}
              style={{ marginLeft: "46px", marginTop: "10px" }}
            >
              Submitt
            </button>
          </div>
          <br />
        </form>
        </div>
    </div>
    </div>
  );
};

export default Login;



