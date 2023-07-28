import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import App from "../../App";

const Login = () => {
  const [inputValue, setInputValue] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmitt = () => {
    if (
      inputValue?.name === "nataraj" &&
      inputValue?.email === "natarajnatarajc99@gmail.com"
    ) {
      localStorage.setItem("auth", true);
      <App status={true} />;
      navigate("/User");
    } else {
      <App status={false} />;
      alert("error");
    }
  };

  return (
    <>
      <div>
        <form>
          <lable>Name:</lable>
          <input type="name" name="name" onChange={(e) => handleChange(e)} />
          <br />
          <br />
          <lable>Email:</lable>
          <input type="email" name="email" onChange={(e) => handleChange(e)} />
          <br />
          <br />
          <button onClick={handleSubmitt} style={{ marginLeft: "70px" }}>
            Submitt
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
