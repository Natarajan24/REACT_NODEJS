import React, { useEffect, useState, useRef } from "react";

const UserDetails = () => {
  const array = {
    description: "",
  };
  const [inputValue, setInputValue] = useState(array);
  const inputRef = useRef(null);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  const handleChange = (e) => {
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    count.current = 0;
  };

  const handlesubmit = () => {
    const values = [
      "Apple",
      "Banana",
      "Orange",
      "Grapes",
      "Mango",
      "red",
      "green",
      "yellow",
      "description",
    ];
    inputRef.current.placeholder =
      values[Math.floor(Math.random() * values.length)];
    inputRef.current.focus();
  };
  return (
    <>
      <div
        style={{
          width: "300px",
          marginLeft: "450px",
          marginTop: "-500px",
        }}
      >
        <h1>UserDetails</h1>
        <div>
          <lable>Description</lable>
          <input
            ref={inputRef}
            type="text"
            placeholder="description"
            name="description"
            value={inputValue.description}
            onChange={(e) => handleChange(e)}
          />
          <br />
          <h2>Current Count: {count.current}</h2> <br />
          <button onClick={handleReset}>Reset Count</button>
          <br />
          <button onClick={handlesubmit}>Submitt</button>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
