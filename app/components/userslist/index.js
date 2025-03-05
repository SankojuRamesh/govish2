"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Container, Input } from "@mui/material";
import SubCategory from "../category/subCategory";
import Button from "@mui/material/Button";
import TemplateBanner from "../templateBanner";
import { Switch } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AppsIcon from "@mui/icons-material/Apps";
import TuneIcon from "@mui/icons-material/Tune";
import EditIcon from "@mui/icons-material/Edit";
import Drawer from "@mui/material/Drawer";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
const UsersList = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Container className="main-container lt-100">
        <Grid container>
          <Grid
            size={{ xs: 6, md: 6 }}
            className="d-flex flex-column align-content-center justify-content-center"
          >
            <h3 className="fs-6">My Shared Users list</h3>
            <p className="fs-9 light-text">Home Templetes Share Users</p>
          </Grid>
          {/*group down  */}
          <Grid size={{ xs: 6, md: 6 }}>
            <Box className="d-flex justify-content-end ">
              <div style={{ width: 200, padding: 0 }}>
                <select
                  class="form-select fs-7"
                  aria-label="Default select example"
                  defaultValue="all"
                >
                  <option value="all">All</option>
                  <option value="1">My Family</option>
                  <option value="2">Coustmer</option>
                  <option value="2">Friends</option>
                  <option value="2">My Employess</option>
                </select>
              </div>
            </Box>
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            size={{ xs: 6, md: 6 }}
            className="d-flex flex-column align-content-center justify-content-center "
          >
            <div className="d-flex flex-row align-items-center">
              <h3 className="fs-6 mb-0 me-2 ">users</h3> <span> (2)</span>
              <input
                placeholder="Search "
                aria-label="search "
                class="MuiInputBase-input border-0 fs-9 ml-2 p-2 rounded"
                type="text"
                value=""
              />
            </div>
          </Grid>

          <Grid
            size={{ xs: 6, md: 6 }}
            className="d-flex  align-content-end justify-content-end flex-row align-items-center"
          >
            <a href="#" className="me-2 text-light">
              <AppsIcon />
            </a>
            <a href="#" className="text-light" onClick={toggleDrawer(true)}>
              <TuneIcon />
            </a>
            <Drawer
              open={open}
              onClose={toggleDrawer(false)}
              anchor="right"
              className="modal-drawer"
            >
              <Box
                sx={{ width: 100, padding: 4 }}
                className="modal-box w-xs-100"
              >
                <div className="d-flex justify-content-between modal-header">
                  <div>
                    <p className="mb-1">Shared For User Templete</p>
                    <p className="fs-10 text-light">
                      Edit Templetes Edited or Purches Templetes Edit for users
                    </p>
                  </div>
                  <div onClick={toggleDrawer(false)} className="cursor-pointer">
                    X
                  </div>
                </div>

                <Grid container spacing={2} className="mt-2">
                  <Grid size={{ xs: 3 }}>
                    <div className="m-2  editiable-cards-container-box">
                      <PersonAddIcon className="text-light" />
                      <p class="fs-9 text-light m-0">Single User</p>
                    </div>
                  </Grid>
                  <Grid size={{ xs: 3 }}>
                    <div className="m-2  editiable-cards-container-box">
                      <GroupAddIcon className="text-light" />
                      <p class="fs-9 text-light m-0">Bluk Zone</p>
                    </div>
                  </Grid>
                </Grid>

                <div className="mt-3 modal-body">
                  <h6 className="fs-8 text-black">
                    single Shared User Media Templete Access
                  </h6>
                  <p className="fs-9 text-light">
                    Media Templetes share User editable access
                  </p>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label fs-8">
                      Select Type Of User
                    </label>
                    <select
                      class="form-select fs-8"
                      aria-label="Default select example"
                    >
                      <option selected>Select a User </option>
                      <option selected>Self </option>
                      <option value="1">My Family</option>
                      <option value="2">Coustmer</option>
                      <option value="3">Friends</option>
                      <option value="4">My Employee</option>
                    </select>
                  </div>
                  <div class="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      class="form-label fs-8"
                    >
                      User name
                    </label>
                    <input
                      type="email"
                      class="form-control  fs-8"
                      id="exampleFormControlInput1"
                      placeholder="Enter the User name"
                    />
                  </div>
                  <Grid container spacing={2} className="mb-4">
                    <Grid size={6}>
                      <label
                        for="exampleFormControlInput1"
                        class="form-label fs-8"
                      >
                        User Phone Number
                      </label>
                      <input
                        type="email"
                        class="form-control  fs-8"
                        id="exampleFormControlInput1"
                        placeholder="+91 000000000"
                      />
                    </Grid>
                    <Grid size={6}>
                      <label
                        for="exampleFormControlInput1"
                        class="form-label fs-8"
                      >
                        Email Id
                      </label>
                      <input
                        type="email"
                        class="form-control  fs-8"
                        placeholder="yourmail@mail.com"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid size={6}>
                      <h6 className="fs-8">shared Templates for user</h6>
                      <p className="fs-10">Share Users in listing</p>
                    </Grid>
                    <Grid size={6}>
                      <Button
                        variant="contained"
                        disableElevation
                        size="small"
                        className="fs-8"
                      >
                        Add Shared user
                      </Button>
                    </Grid>
                  </Grid>
                </div>
              </Box>
            </Drawer>
          </Grid>
        </Grid>

        <div className="latest-template-banner"></div>
        <Grid container spacing={3} className="mt-2 ">
          {/*  */}
          <Grid size={{ md: 4, sm: 6, xs: 12 }}>
            <div className="bg-white p-2 ">
              {/* 1 */}
              <div className="d-flex justify-content-between p-2">
                {/* header */}
                <div className="d-flex justify-content-start">
                  <div className="user-box justify-content-center d-flex align-items-center text-white">
                    R
                  </div>
                  <div>
                    <h4 className="fs-6 p-0 m-0">Rajareddy</h4>
                    <span className="fs-10 me-2 badge bg-light text-white">
                      Friend
                    </span>{" "}
                    <span className="fs-10 badge bg-success">Show</span>
                  </div>
                </div>
                {/* body */}
                <div className="d-flex justify-content-center align-items-center">
                  <Switch defaultChecked disabled color="primary" />
                </div>
              </div>
              {/* 2 */}
              <div className="d-flex justify-content-between p-2">
                {/* header */}
                <div className="d-flex justify-content-start">
                  <div>
                    <h4 className="fs-10 p-0 m-0 text-light">
                      usermail@mail.com
                    </h4>
                    <span className="fs-8 me-2">9000000000</span>{" "}
                  </div>
                </div>

                {/* body */}
                <div className="d-flex justify-content-center align-items-center">
                  <a href="#">
                    <EditIcon className="text-light fs-7" />
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-between p-2">
                {/* header */}
                <div className="d-flex justify-content-start">
                  <div>
                    <h4 className=" fs-10 p-0 m-0 text-light">7:25 AM</h4>
                    <span className="fs-8 me-2">Nov 26, 2020</span>{" "}
                  </div>
                </div>

                {/* body */}
                <div className="d-flex justify-content-center align-items-center"></div>
              </div>
            </div>
          </Grid>
          {/*  */}
          <Grid size={{ md: 4, sm: 6, xs: 12 }}>
            <div className="bg-white p-2 ">
              {/* 1 */}
              <div className="d-flex justify-content-between p-2">
                {/* header */}
                <div className="d-flex justify-content-start">
                  <div className="user-box justify-content-center d-flex align-items-center text-white">
                    M
                  </div>
                  <div>
                    <h4 className="fs-6 p-0 m-0">Mashesh</h4>
                    <span className="fs-10 me-2 bg-light text-white p-1 rounded">
                      Employee
                    </span>{" "}
                    <span className="fs-10 badge bg-danger">Hide</span>
                  </div>
                </div>
                {/* body */}
                <div className="d-flex justify-content-center align-items-center">
                  <Switch defaultChecked disabled color="primary" />
                </div>
              </div>
              {/* 2 */}
              <div className="d-flex justify-content-between p-2">
                {/* header */}
                <div className="d-flex justify-content-start">
                  <div>
                    <h4 className="fs-10 p-0 m-0 text-light">
                      usermail@mail.com
                    </h4>
                    <span className="fs-8 me-2">9000000000</span>{" "}
                  </div>
                </div>

                {/* body */}
                <div className="d-flex justify-content-center align-items-center">
                  <a href="#">
                    <EditIcon className="text-light fs-7" />
                  </a>
                </div>
              </div>
              <div className="d-flex justify-content-between p-2">
                {/* header */}
                <div className="d-flex justify-content-start">
                  <div>
                    <h4 className=" fs-10 p-0 m-0 text-light">7:25 AM</h4>
                    <span className="fs-8 me-2">Nov 26, 2020</span>{" "}
                  </div>
                </div>

                {/* body */}
                <div className="d-flex justify-content-center align-items-center"></div>
              </div>
            </div>
          </Grid>
          {/*  */}
          <Grid size={{ md: 4, sm: 6, xs: 12 }}></Grid>
        </Grid>
      </Container>
    </>
  );
};
export default UsersList;
