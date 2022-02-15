import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function UserList() {
  let navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get(
        "https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data"
      )
      .then((response) => setUsers(response.data));
  };

  const handleDelete = (id) => {
    const newUsers = [...users];
    const index = users.findIndex((user) => user.id === id);
    newUsers.splice(index, 1);
    setUsers(newUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <div className="users">
        <strong>User List</strong>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            navigate("/userform");
          }}
        >
          Add New
        </Button>
      </div>
      <div className="users">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Username</TableCell>
                <TableCell align="center">Email</TableCell>
                <TableCell align="center">City</TableCell>
                <TableCell align="center">Edit</TableCell>
                <TableCell align="center">Delete</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {users.map((user, index) => (
                <TableRow
                  key={user.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {user.id}
                  </TableCell>
                  <TableCell align="center">{user.name}</TableCell>
                  <TableCell align="center">{user.username}</TableCell>
                  <TableCell align="center">{user.email}</TableCell>
                  <TableCell align="center">{user.address.city}</TableCell>
                  <TableCell align="center">
                    <Button variant="contained" color="success">
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      variant="contained"
                      color="success"
                      onClick={handleDelete}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
