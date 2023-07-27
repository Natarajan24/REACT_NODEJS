import React, { useState, useEffect } from "react";
import { Row, Col, Card, Table, Button, Form } from "react-bootstrap";
import { addUser, getUser } from "../Dashboard/Action/user";
import { connect } from "react-redux";

const User = (props) => {
  const [inputValue, setInputValue] = useState();

  useEffect(() => {
    props.getUser();
  }, []);

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleSubmitt = () => {
    let array = {
      name: inputValue.name,
      email: inputValue.email,
      status: true,
    };
    props.addUser(array);
  };

  const colume = ["s.no", "name", "email"];

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
      <Table striped hover responsive id="data-table-zero3">
        <thead className="thead-light">
          <tr>{renderColumns()}</tr>
        </thead>
        <tbody>
          {" "}
          {props?.getUserData?.data?.map((item, index) => {
            return (
              <tr key={index + 1}>
                <td className="align-middle">{index + 1}</td>
                <td className="align-middle">{item.name}</td>
                <td className="align-middle">{item.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  return (
    <>
      <label>NAME:</label>
      <input type="text" name="name" onChange={(e) => handleChange(e)} />
      <br />
      <br />
      <label>Email:</label>
      <input type="email" name="email" onChange={(e) => handleChange(e)} />
      <br />
      <button onClick={handleSubmitt}>Submitt</button>
      {renderTable()}
    </>
  );
};

const mapStateToProps = (state) => ({
  getUserData: state.UserReducer.description,
});

const mapDispatchToProps = {
  addUser: addUser,
  getUser: getUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
