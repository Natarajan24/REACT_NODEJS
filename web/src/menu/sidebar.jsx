import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  console.log("props");
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/User">User</Link>
        </li>
        <li>
          <Link to="/User_details">UserDetails</Link>
        </li>
        <li>
          <Link to="/Log_out">LogOut</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
