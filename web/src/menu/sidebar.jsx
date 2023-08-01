import React, { useState } from "react";
import { FaTh, FaUserAlt, FaContao, FaQq, FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";

function Sidebar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("auth");
    if (localStorage.getItem("auth") !== true) {
      navigate("/");
    }
  };
  const menuItem = [
    {
      path: "/User",
      name: "User",
      icon: <FaTh />,
    },
    {
      path: "/User_details",
      name: "UserDetails",
      icon: <FaUserAlt />,
    },
  ];
  return (
    <div className="container">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Logo
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
        <br />
        <br />
        <button
          onClick={handleLogOut}
          style={
            isOpen ? { width: "50px", marginLeft: "50px", color: "blue" } : {marginLeft: "15px"}
          }
        >
          {isOpen ? "LogOut" : <FaUserAlt />}
        </button>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Sidebar;
