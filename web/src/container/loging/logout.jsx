import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const [status, setStatus] = useState(false);
  const navigate = useNavigate();

  //   useEffect(() => {
  //     if (localStorage.getItem("auth") !== true) {
  //       navigate("/login");
  //     }
  //   }, [status]);

  //   console.log("sdvsd", status);

  //   const handleLogOut = () => {
  //     localStorage.removeItem("auth");
  //     setStatus(true);
  //   };

  console.log("sdkncsndnj");
  return (
    <>
      <div style={{ marginTop: "1000px" }}>
        <button>LOGOUT</button>
      </div>
    </>
  );
};

export default LogOut;
