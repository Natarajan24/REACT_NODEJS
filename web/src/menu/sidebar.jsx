import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  // className="sidebar"
  return (
    <div style={{ display: "flex" }}>
      <ul style={{ display: "flex", listStyle: "none", padding: 0 }}>
        <li style={{ margin: "0 10px" }}>
          <Link to="/User">User</Link>
        </li>
        <li style={{ margin: "0 10px" }}>
          <Link to="/User_details">UserDetails</Link>
        </li>
        {/* <li style={{ margin: "0 10px" }}>
          <Link to="/Log_out">LogOut</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Sidebar;
