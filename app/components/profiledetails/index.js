"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
function createData(name, calories, fat, carbs, protein, data) {
  return { name, calories, fat, carbs, protein, data };
}

const rows = [
  createData(
    "Nov 01, 2020 ,7:25 AM",
    "WEDINV00002",
    "Karthik",
    "$ 450.00 ",
    "$ 45.00 ",
    "$$ 405.00"
  ),
  createData(
    "Nov 01, 2020 ,7:25 AM",
    "WEDINV00002",
    "Karthik",
    "$ 450.00 ",
    "$ 45.00 ",
    "$$ 405.00"
  ),
  createData(
    "Nov 01, 2020 ,7:25 AM",
    "WEDINV00002",
    "Karthik",
    "$ 450.00 ",
    "$ 45.00 ",
    "$$ 405.00"
  ),
  createData(
    "Nov 01, 2020 ,7:25 AM",
    "WEDINV00002",
    "Karthik",
    "$ 450.00 ",
    "$ 45.00 ",
    "$$ 405.00"
  ),
  createData(
    "Nov 01, 2020 ,7:25 AM",
    "WEDINV00002",
    "Karthik",
    "$ 450.00 ",
    "$ 45.00 ",
    "$$ 405.00"
  ),
];

const ProfileDetails = () => {
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
  />;

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Container className="main-container lt-100">
        <Grid container spacing={2}>
          <Grid size={12}>
            <h6>Profile Details</h6>
            <p className="fs-8 text-light">Home My Profile Setting</p>
          </Grid>
        </Grid>
        {/*  */}
        <Grid container className="bg-white  p-4 ">
          <Grid
            size={12}
            className="d-flex justify-content-between align-items-center border-bottom"
          >
            <h2 className="fs-6">Profile Details</h2>
            <Button
              variant="contained"
              disableElevation
              className="mb-3"
              size="small"
            >
              Disable elevation
            </Button>
          </Grid>
          <Grid className="mt-2 fs-7 flex-row" size={12}>
            <p className="mb-0"> Photo</p>
            <div className="edit-user position-relative">
              <div className="edit-user-edit position-absolute ">
                <EditIcon className="fs-7" />
              </div>
              <div className="edit-user-close position-absolute ">
                <CloseIcon className="fs-7" />
              </div>
            </div>
            <p className="mt-3 text-light">
              Allowed file types: png, jpg, jpeg.
            </p>
          </Grid>
          <Grid container spacing={2} size={12} className="mt-3">
            <Grid size={{ xs: 12, nd: 6, lg: 6 }}>
              <p className="fs-8 mb-0">Name</p>
              <input
                type="email"
                class="form-control fs-6"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </Grid>
            <Grid size={{ xs: 12, nd: 6, lg: 6 }}>
              <p className="fs-8 mb-0">Date Of Brith </p>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </Grid>
          </Grid>
          <Grid container spacing={2} size={12} className="mt-3">
            <Grid size={{ xs: 12, nd: 6, lg: 6 }}>
              <p className="mb-0  fs-7">Contact No </p>
              <input
                type="email"
                class="form-control fs-6"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </Grid>
            <Grid size={{ xs: 12, nd: 6, lg: 6 }}>
              <p className="mb-0 fs-8">Mail Id</p>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </Grid>
          </Grid>

          <Grid container spacing={2} size={12} className="mt-3">
            <Grid size={{ xs: 12, nd: 6, lg: 6 }}>
              <p className="mb-0  fs-7">Address</p>
              <input
                type="email"
                class="form-control fs-6"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </Grid>
            <Grid size={{ xs: 12, nd: 6, lg: 6 }}>
              <p className="mb-0 fs-8">Area Pincoe </p>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </Grid>
          </Grid>

          <Grid container spacing={2} size={12} className="mt-3">
            <Grid size={{ xs: 12, nd: 6, lg: 6 }}>
              <p className="mb-0  fs-7">Town</p>
              <input
                type="email"
                class="form-control fs-6"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </Grid>
            <Grid size={{ xs: 12, nd: 6, lg: 6 }}>
              <p className="mb-0 fs-8">City </p>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </Grid>
          </Grid>

          <Grid container spacing={2} size={12} className="mt-3">
            <Grid size={{ xs: 12, nd: 6, lg: 6 }}>
              <p className="mb-0  fs-7">State</p>
              <input
                type="email"
                class="form-control fs-6"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </Grid>
            <Grid size={{ xs: 12, nd: 6, lg: 6 }}>
              <p className="mb-0 fs-8">Country </p>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              ></input>
            </Grid>
          </Grid>
          <Grid container spacing={2} size={12} className="mt-3">
            <Grid size={6}></Grid>
            <Grid size={6} className="d-flex">
              <div className="d-flex justify-conten-end align-items-center "></div>
            </Grid>
          </Grid>
          <Grid container size={12}>
            <div className="border-top d-flex justify-content-end w-100 pt-3 mt-4">
              <Button variant="contained" size="small" className="me-2">
                Submit
              </Button>
              <Button
                variant="contained"
                size="small"
                className="btn btn-success"
              >
                Submit
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default ProfileDetails;
