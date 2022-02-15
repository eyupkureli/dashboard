import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function UserForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  let navigate = useNavigate();

  const handleChangeName = (event) => {
    setName(event.target.value);
  };

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div className="users">
          <FormControl variant="standard">
            <InputLabel htmlFor="component-helper">Name</InputLabel>
            <Input
              id="component-helper"
              value={name}
              onChange={handleChangeName}
              aria-describedby="component-helper-text"
            />
            <FormHelperText id="component-helper-text">
              Name is required
            </FormHelperText>
          </FormControl>
        </div>
        <div className="users">
          <FormControl variant="standard">
            <InputLabel htmlFor="component-helper">Email</InputLabel>
            <Input
              id="component-helper"
              value={email}
              onChange={handleChangeEmail}
              aria-describedby="component-helper-text"
            />
            <FormHelperText id="component-helper-text">
              Email is required
            </FormHelperText>
          </FormControl>
        </div>
        <div className="users">
          <Stack direction="row" spacing={2}>
            <Button
              variant="outlined"
              color="error"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                navigate("/");
              }}
            >
              Submit
            </Button>
          </Stack>
        </div>
      </div>
    </Box>
  );
}
