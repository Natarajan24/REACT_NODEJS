import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">User</Link>
        </li>
        <li>
          <Link to="/User_details">UserDetails</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
