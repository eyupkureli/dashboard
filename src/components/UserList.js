import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

export default function UserList() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get(
        "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
      )
      .then((response) => setUsers(response.data));
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="users">
        User List
        <Button variant="contained" color="primary">
          Add New
        </Button>
      </div>
      <div className="users">
        <table className="usertable">
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>City</td>
            <td>Edit</td>
            <td>Delete</td>
          </tr>
          {users.map((user, index) => (
            <tr key = {user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>
                <button style={{backgroundColor: "yellow"}}>
                  Edit
                </button>
              </td>
              <td>
                <button style={{backgroundColor: "red"}}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}
