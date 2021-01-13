import React, { useEffect, useState } from "react";
import "./userpill.css";

function FetchApi() {
  const [user, setUser] = useState([]);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) {
      fetch("https://dummyapi.io/data/api/user", {
        method: "GET",
        headers: {
          "app-id": "5ffbb654fecce05686c42436"
        }
      })
        .then((res) => res.json())
        .then((data) => setUser(data.data));
      setMount(true);
    }
  }, [mount, user]);

  return (
    <div>
      <h3>Question no. 3</h3>
      {user && user.length > 0 ? (
        user.map((item) => (
          <>
            <UserPills
              key={item.id}
              image={item.picture}
              name={item.title + " " + item.firstName + " " + item.lastName}
              email={item.email}
            />
          </>
        ))
      ) : (
        <p>Loading ...</p>
      )}
    </div>
  );
}

const UserPills = ({ image, name, email }) => (
  <div className="item-wrap">
    <div className="user-item">
      <div className="img">
        <img src={image} alt="" />
      </div>
      <div className="desc">
        <p>{name}</p>
        <p>
          <span>{email}</span>
        </p>
      </div>
    </div>
  </div>
);

export default FetchApi;
