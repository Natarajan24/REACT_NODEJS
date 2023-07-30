import React, { useState, useEffect } from "react";
import { Row, Col, Card, Table, Button, Form } from "react-bootstrap";
import { addUser, getUser, deleteUser } from "../Dashboard/Action/user";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import './User.css'

const User = (props) => {
  const array = {
    name: "",
    email: "",
    contact: "",
    address: ""
  };
  const navigate = useNavigate();


  const [inputValue, setInputValue] = useState(array);


  useEffect(() => {
    props.getUser();
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("auth")) {
      navigate("/");
    }
  }, [])



  const handleLogOut = () => {
    localStorage.removeItem("auth");
    if (localStorage.getItem("auth") !== true) {
      navigate("/");
    }
  };

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmitt = () => {
    let array = {
      name: inputValue.name,
      email: inputValue.email,
      contact: inputValue.contact,
      address: inputValue.address,
      status: true,
    };
    props.addUser(array).then((res) => {
      setInputValue({ ...inputValue, name: "", email: "", contact: "", address: "" });
      props.getUser();
    });
  };


  // const handleDelete = (id) => {
  //   props.deleteUser(id).then((res) => {
  //     props.getUser();
  //   })
  // }

  const colume = ["S.No", "Name", "Email", "Contact", "Address", "Action"];

  const renderColumns = () => {
    return colume.map((columnName, index) => (
      <th
        key={index}
        style={{
          maxWidth: "310px",
          wordWrap: "break-word",
          whiteSpace: "normal",
        }}
      >
        {columnName}
      </th>
    ));
  };


  const renderTable = () => {
    return (
      <div className="table-container">
        <table className="table">
          <thead className="thead-light">
            <tr>{renderColumns()}</tr>
          </thead>
          <tbody>
            {props?.getUserData?.data?.map((item, index) => {
              return (
                <tr key={index + 1}>
                  <td className="align-middle">{index + 1}</td>
                  <td className="align-middle">{item.name ? item.name : "--"}</td>
                  <td className="align-middle">
                    {item.email ? item.email : "--"}
                  </td>
                  <td className="align-middle">
                    {item.email ? item.contact : "--"}
                  </td>
                  <td className="align-middle">
                    {item.email ? item.address : "--"}
                  </td>
                  <td className="align-middle">
                  </td>
                </tr>
              );
            })}

          </tbody>
        </table>

      </div>
    );
  };

  return (
    <>
      <Card>
        <div>
          <button onClick={handleLogOut}>LOGOUT</button>
        </div>
        <div style={{ border: "2px solid black", width: "300px", marginLeft: '600px', marginTop: '100px' }}>
          <h1 style={{ textAlign: "center " }}>User</h1>
          <div style={{ padding: '50px', marginTop: '-50px' }}>
            <label>NAME</label><br />
            <input
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type="text"
              name="name"
              value={inputValue.name}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <label>Email</label><br />
            <input
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type="email"
              name="email"
              value={inputValue.email}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <label>Contact</label><br />
            <input
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type="number"
              name="contact"
              value={inputValue.contact}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <label>Address</label><br />
            <input
              style={{ border: 'none', borderBottom: '1px solid black' }}
              type="text"
              name="address"
              value={inputValue.address}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <button style={{ marginLeft: '46px' }} onClick={handleSubmitt}>Submitt</button>
          </div>
        </div>
        <br />
        <br />
        <br />
        <div style={{ marginTop: '-200px' }}>
          {renderTable()}
        </div>
      </Card>

    </>
  );
};

const mapStateToProps = (state) => ({
  getUserData: state.UserReducer.description,
});

const mapDispatchToProps = {
  addUser: addUser,
  getUser: getUser,
  deleteUser: deleteUser
};

export default connect(mapStateToProps, mapDispatchToProps)(User);




