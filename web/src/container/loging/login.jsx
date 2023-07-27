import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      navigate("/User");
    } else {
      alert("error");
    }
  };

  return (
    <>
      <lable>Name:</lable>
      <input type="name" name="name" onChange={(e) => handleChange(e)} />
      <br />
      <lable>Email:</lable>
      <input type="email" name="email" onChange={(e) => handleChange(e)} />
      <br />
      <button onClick={handleSubmitt}>Submitt</button>
    </>
  );
};

export default Login;
