import React, { useState, useEffect } from "react";
import { Row, Col, Card, Table, Button, Form } from "react-bootstrap";
import { addUser, getUser } from "../Dashboard/Action/user";
import { connect } from "react-redux";

const User = (props) => {
  const array = {
    name: "",
    email: "",
  };
  const [inputValue, setInputValue] = useState(array);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const totalPages = Math.ceil(props?.getUserData?.data / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = props?.getUserData?.data.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

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
    props.addUser(array).then((res) => {
      setInputValue({ ...inputValue, name: "", email: "" });
      props.getUser();
    });
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
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
          {currentData?.map((item, index) => {
            return (
              <tr key={index + 1}>
                <td className="align-middle">{index + 1}</td>
                <td className="align-middle">{item.name ? item.name : "--"}</td>
                <td className="align-middle">
                  {item.email ? item.email : "--"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  };

  return (
    <>
      <div style={{ alignItems: "center" }}>
        <h1>User</h1>
        <label>NAME:</label>
        <input
          type="text"
          name="name"
          value={inputValue.name}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={inputValue.email}
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <button onClick={handleSubmitt}>Submitt</button>
        <br />
        <br />
        <br />
        {renderTable()}
        <div>
          <button onClick={handlePrevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
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

// import React, { useState } from 'react';

// const tableData = [
//   // Your data array goes here
//   // Sample data:
//   { id: 1, name: 'John', age: 25, email: 'john@example.com' },
//   { id: 2, name: 'Jane', age: 30, email: 'jane@example.com' },
//   { id: 3, name: 'Bob', age: 28, email: 'bob@example.com' },
//   // Add more data as needed
// ];

// const itemsPerPage = 10; // Number of items to display per page

// function User() {
//   const [currentPage, setCurrentPage] = useState(1);

//   const totalPages = Math.ceil(tableData.length / itemsPerPage);
//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentData = tableData.slice(indexOfFirstItem, indexOfLastItem);

//   const handlePrevPage = () => {
//     setCurrentPage((prevPage) => prevPage - 1);
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => prevPage + 1);
//   };

//   return (
//     <div>
//       <table>
//         <thead>
//           <tr>
//             <th>ID</th>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {currentData.map((item) => (
//             <tr key={item.id}>
//               <td>{item.id}</td>
//               <td>{item.name}</td>
//               <td>{item.age}</td>
//               <td>{item.email}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>

//       <div>
//         <button onClick={handlePrevPage} disabled={currentPage === 1}>
//           Previous
//         </button>
//         <button onClick={handleNextPage} disabled={currentPage === totalPages}>
//           Next
//         </button>
//       </div>
//     </div>
//   );
// }

// export default User;
