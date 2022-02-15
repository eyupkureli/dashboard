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
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Email</TableCell>
                <TableCell align="right">City</TableCell>
                <TableCell align="right">Edit</TableCell>
                <TableCell align="right">Delete</TableCell>
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
                  <TableCell align="right">{user.name}</TableCell>
                  <TableCell align="right">{user.username}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                  <TableCell align="right">{user.address.city}</TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="success">
                      Edit
                    </Button>
                  </TableCell>
                  <TableCell align="right">
                    <Button variant="contained" color="success">
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
