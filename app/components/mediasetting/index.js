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

import Switch from "@mui/material/Switch";
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

const MediaSetting = () => {
  const [checked, setChecked] = React.useState(true);

  const handleChanged = (event) => {
    setChecked(event.target.checked);
  };

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
            <h6>Media Settings Options</h6>
            <p className="fs-8 text-light">
              Home Media Catergolry Enables or Disable Settings
            </p>
          </Grid>
          {/*  */}
          <div className="bg-white w-100 p-4">
            <div className="  d-flex justify-content-between align-items-center border-bottom mb-3">
              <div>
                <h6>Invitations</h6>
                <p className="fs-10 text-light">
                  Total Catergory Enable or Disbale
                </p>
              </div>
              <div className="flex-row d-flex justify-content-center align-items-center">
                <div>
                  {" "}
                  <Switch
                    checked={checked}
                    onChange={handleChanged}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div className="fs-10">View</div>
              </div>
            </div>
            <div className="  d-flex justify-content-between align-items-center mb-4">
              <div className=" d-flex justify-content-start align-items-center">
                <div className="users-img me-2 d-flex">
                  <img
                    src="https://www.w3schools.com/images/picture.jpg"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <h6>Half Sarees</h6>
                  <p className="fs-10 text-light mb-0">Girls & Invitations</p>
                </div>
              </div>
              <div className="flex-row d-flex justify-content-center align-items-center">
                <div>
                  {" "}
                  <Switch
                    checked={checked}
                    onChange={handleChanged}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div className="fs-10">View</div>
              </div>
            </div>
            <div className="  d-flex justify-content-between align-items-center">
              <div className=" d-flex justify-content-start align-items-center">
                <div className="users-img me-2 d-flex">
                  <img
                    src="https://www.w3schools.com/images/picture.jpg"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <h6>Dhoti Invitations</h6>
                  <p className="fs-10 text-light mb-0">Girls & Invitations</p>
                </div>
              </div>
              <div className="flex-row d-flex justify-content-center align-items-center">
                <div>
                  {" "}
                  <Switch
                    checked={checked}
                    onChange={handleChanged}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div className="fs-10">View</div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="bg-white w-100 p-4">
            <div className="  d-flex justify-content-between align-items-center border-bottom mb-3">
              <div>
                <h6>Greetings & Events</h6>
                <p className="fs-10 text-light">
                  Total Catergory Enable or Disbale
                </p>
              </div>
              <div className="flex-row d-flex justify-content-center align-items-center">
                <div>
                  {" "}
                  <Switch
                    checked={checked}
                    onChange={handleChanged}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div className="fs-10">View</div>
              </div>
            </div>
            <div className="  d-flex justify-content-between align-items-center mb-4">
              <div className=" d-flex justify-content-start align-items-center">
                <div className="users-img me-2 d-flex">
                  <img
                    src="https://www.w3schools.com/images/picture.jpg"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <h6>Half Sarees</h6>
                  <p className="fs-10 text-light mb-0">Girls & Invitations</p>
                </div>
              </div>
              <div className="flex-row d-flex justify-content-center align-items-center">
                <div>
                  {" "}
                  <Switch
                    checked={checked}
                    onChange={handleChanged}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div className="fs-10">View</div>
              </div>
            </div>
            <div className="  d-flex justify-content-between align-items-center">
              <div className=" d-flex justify-content-start align-items-center">
                <div className="users-img me-2 d-flex">
                  <img
                    src="https://www.w3schools.com/images/picture.jpg"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <h6>Dhoti Invitations</h6>
                  <p className="fs-10 text-light mb-0">Girls & Invitations</p>
                </div>
              </div>
              <div className="flex-row d-flex justify-content-center align-items-center">
                <div>
                  {" "}
                  <Switch
                    checked={checked}
                    onChange={handleChanged}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div className="fs-10">View</div>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="bg-white w-100 p-4">
            <div className="  d-flex justify-content-between align-items-center border-bottom mb-3">
              <div>
                <h6>Cinematic</h6>
                <p className="fs-10 text-light">
                  Total Catergory Enable or Disbale
                </p>
              </div>
              <div className="flex-row d-flex justify-content-center align-items-center">
                <div>
                  {" "}
                  <Switch
                    checked={checked}
                    onChange={handleChanged}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div className="fs-10">View</div>
              </div>
            </div>
            <div className="  d-flex justify-content-between align-items-center mb-4">
              <div className=" d-flex justify-content-start align-items-center">
                <div className="users-img me-2 d-flex">
                  <img
                    src="https://www.w3schools.com/images/picture.jpg"
                    className="img-fluid"
                  />
                </div>
                <div>
                  <h6>Half Sarees</h6>
                  <p className="fs-10 text-light mb-0">Girls & Invitations</p>
                </div>
              </div>
              <div className="flex-row d-flex justify-content-center align-items-center">
                <div>
                  {" "}
                  <Switch
                    checked={checked}
                    onChange={handleChanged}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div className="fs-10">View</div>
              </div>
            </div>
            <div className="  d-flex justify-content-between align-items-center">
              <div className=" d-flex justify-content-start align-items-center">
                <div className="users-img me-2 d-flex">
                  <img
                    src="https://www.w3schools.com/images/picture.jpg"
                    className="img-fluid"
                  />
                </div>*
                <div>
                  <h6>Dhoti Invitations</h6>
                  <p className="fs-10 text-light mb-0">Girls & Invitations</p>
                </div>
              </div>
              <div className="flex-row d-flex justify-content-center align-items-center">
                <div>
                  {" "}
                  <Switch
                    checked={checked}
                    onChange={handleChanged}
                    inputProps={{ "aria-label": "controlled" }}
                  />
                </div>
                <div className="fs-10">View</div>
              </div>
            </div>
          </div>
        </Grid>
      </Container>
    </>
  );
};
export default MediaSetting;
