import React from "react";
import { useState } from "react";

//styles
import { Typography, TextField, Button, Container, Alert } from "@mui/material";
import { NavLink } from "react-router-dom";

//backend
import axios from "axios";
const backendUrl = process.env.REACT_APP_BACKEND_URL;

const SellerSignIn = () => {
  //================================STATES AND STORES=================

  const [alert, setAlert] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [details, setDetails] = useState({
    name: "",
    email: "",
    phone: "",
    gstID: "",
    password: "",
  });

  //===========================SUBMIT THE REGISTER FORM======================

  const handleSellerSignIn = async () => {
    try {
      const response = await axios.post(`${backendUrl}/dealer/signup`, details);
      setAlert(false);
      console.log(response);
    } catch ({ response }) {
      setAlert(true);
      setErrMsg(response.data.message);
    }
  };

  return (
    <Container sx={{ margin: { md: "1rem" }, padding: "0" }}>
      <TextField
        id="Name"
        label="Name"
        variant="outlined"
        type="text"
        required={true}
        sx={{
          width: "100%",
          backgroundColor: "white",
          margin: "0.4rem 0",
          fontSize: "0.7rem",
        }}
        onChange={(e) => setDetails({ ...details, name: e.target.value })}
      />
      <TextField
        id="Email ID"
        label="Email ID"
        variant="outlined"
        type="email"
        sx={{
          width: "100%",
          backgroundColor: "white",
          margin: "0.4rem 0",
          fontSize: "0.7rem",
        }}
        onChange={(e) => setDetails({ ...details, email: e.target.value })}
      />
      <TextField
        id="GST ID"
        label="GST ID"
        variant="outlined"
        type="text"
        required={true}
        sx={{
          width: "100%",
          backgroundColor: "white",
          margin: "0.4rem 0",
          fontSize: "0.7rem",
        }}
        onChange={(e) => setDetails({ ...details, gstID: e.target.value })}
      />
      <TextField
        id="Phone"
        label="Phone"
        variant="outlined"
        type="tel"
        required={true}
        sx={{
          width: "100%",
          backgroundColor: "white",
          margin: "0.4rem 0",
          fontSize: "0.7rem",
        }}
        onChange={(e) => setDetails({ ...details, phone: e.target.value })}
      />
      <TextField
        id="password"
        label="Password"
        variant="outlined"
        type="password"
        required={true}
        sx={{
          width: "100%",
          backgroundColor: "white",
          margin: "0.4rem 0",
          fontSize: "0.7rem",
        }}
        onChange={(e) => setDetails({ ...details, password: e.target.value })}
      />

      <Typography component="p" align="center">
        Already registered?{" "}
        <NavLink to="/seller/login" style={{ color: "dodgerblue" }}>
          Login
        </NavLink>
      </Typography>
      <Button
        sx={{ width: "100%", height: "3rem", margin: "1rem 0" }}
        variant="contained"
        component="button"
        onClick={handleSellerSignIn}
      >
        Join as Seller
      </Button>
      {alert && <Alert severity="warning">{errMsg}</Alert>}
    </Container>
  );
};

export default SellerSignIn;
