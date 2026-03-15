import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/users")
      .then(res => setUsers(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <tr key={user.userID}>
            <td>{user.userID}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}