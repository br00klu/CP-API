import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { AvatarGenerator } from "random-avatar-generator";

function UserList() {
  const generator = new AvatarGenerator();

  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {users.map((x, i) => (
        <Card style={{ width: "25%", margin: "15px" }} key={i}>
          <Card.Img variant="top" src={generator.generateRandomAvatar()} />
          <Card.Body className="d-flex flex-column">
            <Card.Title class="fs-2 fw-bold">{x.name}</Card.Title>
            <Card.Text class="text-start">
              <p>Email: {x.email}</p>
              <p>Address: {x.address.city}</p>
              <p>Website: {x.website}</p>
            </Card.Text>
            <Button className="mt-auto" variant="dark">
              Go to profile
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default UserList;
