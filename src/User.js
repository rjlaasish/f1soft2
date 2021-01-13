import React, { useState } from "react";

function User() {
  const [user, setUser] = useState({
    name: "",
    phone: "",
    address: ""
  });

  const [isUser, setisUser] = useState(false);
  const [error, setError] = useState("");

  const handleUser = (e) => {
    e.preventDefault();
    if (user.name !== "" && user.phone !== "" && user.address !== "") {
      setError("");
      setisUser(true);
    } else {
      setError("Please Enter all fields!");
    }
  };

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <br /> <br />
      <h3>Question no. 1</h3>
      <p>{error}</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <form action="" onSubmit={handleUser}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
          />{" "}
          <br />
          <br />
          <input
            type="number"
            placeholder="Phone Number"
            name="phone"
            value={user.number}
            onChange={handleChange}
          />
          <br />
          <br />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={user.address}
            onChange={handleChange}
          />
          <br /> <br />
          <input type="submit" />
        </form>
      </div>
      <br />
      <br />
      {isUser && (
        <div style={{ width: "500px", boxShadow: "6px 6px 16px black" }}>
          <div className="" style={{ textAlign: "center" }}>
            <br />
            <h3>User</h3>
            <p>Name:{user.name}</p>
            <p>Phone:{user.phone}</p>
            <p>Address:{user.address}</p>
            <br />
          </div>
        </div>
      )}
    </>
  );
}

export default User;
