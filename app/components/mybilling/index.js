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
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
function createData(name, calories, fat, carbs, protein, data) {
  return { name, calories, fat, carbs, protein, data };
}

const MyBilling = () => {
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
        <Grid container>
          <Grid size={6}>
            <h4 className="fs-5">My Billing</h4>
            <p className="text-light fs-9">Home Billing Statement</p>
          </Grid>
          <Grid size={6} className="d-flex justify-content-end">
            <Button id="basic-button" onClick={handleClick}>
              Select Filter
            </Button>
            <Menu
              className=" p-2 "
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <div className="select-filter fs-6 p-3 ">
                Select Filter Options
                <div>
                  <p class="fs-8 mt-2 m-0 mb-2">Select Year</p>
                  <div>
                    <select
                      class="form-select fs-8"
                      aria-label="Default select example "
                    >
                      <option selected>2023</option>
                      <option value="1">2024</option>
                      <option value="2">2025</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p class="fs-8 mt-2 m-0 mb-2">Select Month</p>
                  <div>
                    <select
                      class="form-select fs-8"
                      aria-label="Default select example"
                    >
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>
                </div>
                <div>
                  <p class="fs-8 mt-2 m-0 mb-2">Select Order Status</p>
                  <div>
                    <select
                      class="form-select fs-8"
                      aria-label="Default select example"
                    >
                      <option value="1">All</option>
                      <option value="2">Process</option>
                      <option value="3">Failed</option>
                      <option value="4">Completed</option>
                    </select>
                  </div>
                </div>
                <Button className="mt-2" variant="contained" disableElevation>
                  Apply
                </Button>
              </div>
            </Menu>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid size={12}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell className="text-light">Date</TableCell>
                    <TableCell align="left" className="text-light">
                      Media
                    </TableCell>
                    <TableCell align="left" className="text-light">
                      Order Type
                    </TableCell>
                    <TableCell align="left" className="text-light">
                      MRP
                    </TableCell>
                    <TableCell align="left" className="text-light">
                      Voucher
                    </TableCell>
                    <TableCell align="left" className="text-light">
                      Payment Status{" "}
                    </TableCell>
                    <TableCell align="left" className="text-light">
                      Order Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <div className="">
                        <div className="text-light">Nov 01, 2020 ,7:25 AM</div>
                        <a href="" className="text-light fs-7">
                          OIDU 000001
                        </a>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="d-flex justify-content-sart align-items-center">
                        <div className="users-img me-2"></div>
                        <div>
                          <div className="text-light">
                            Nov 01, 2020 ,7:25 AM
                          </div>
                          <div className="badge rounded-pill bg-light text-dar me-2 badgelable fs-10">
                            Vertical
                          </div>
                          <div className="badge rounded-pill bg-light text-dar me-2  badgelable fs-10">
                            Hindus
                          </div>
                          <div className="badge rounded-pill bg-light text-dar  badgelable fs-10">
                            Standred
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div className="text-light">Karthik</div>
                      <div className="badge rounded-pill bg-light me-2  badgelable fs-10">
                        Generated
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div className="text-light">$ 450.00</div>
                      <div className=" me-2 text-light">$ 500.00 10 % off</div>
                    </TableCell>
                    <TableCell align="left">
                      <div className="text-light">$ 45.00</div>
                      <div className="badge rounded-pill bg-light me-2  badgelable fs-10">
                        User Voucher - 10 %
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div>$ 405.00</div>
                      <div className="badge rounded-pill bg-success me-2 succesbadge">
                        Success
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div className="badge rounded-pill bg-success me-2 processbadge">
                        Processing
                      </div>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      <div className="">
                        <div className="text-light">Nov 01, 2020 ,7:25 AM</div>
                        <a href="" className="text-light fs-7">
                          OIDU 000001
                        </a>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="d-flex justify-content-sart align-items-center">
                        <div className="users-img me-2"></div>
                        <div>
                          <div className="text-light">
                            Nov 01, 2020 ,7:25 AM
                          </div>
                          <div className="badge rounded-pill bg-light text-dar me-2 badgelable fs-10">
                            Vertical
                          </div>
                          <div className="badge rounded-pill bg-light text-dar me-2  badgelable fs-10">
                            Hindus
                          </div>
                          <div className="badge rounded-pill bg-light text-dar  badgelable fs-10">
                            Standred
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div className="text-light">Karthik</div>
                      <div className="badge rounded-pill bg-light me-2  badgelable fs-10">
                        Generated
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div className="text-light">$ 450.00</div>
                      <div className=" me-2 text-light">$ 500.00 10 % off</div>
                    </TableCell>
                    <TableCell align="left">
                      <div className="text-light">$ 45.00</div>
                      <div className="badge rounded-pill bg-light me-2  badgelable fs-10">
                        User Voucher - 10 %
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div className="text-light">$ 405.00</div>
                      <div className="badge rounded-pill bg-success me-2 succesbadge">
                        Success
                      </div>
                    </TableCell>
                    <TableCell align="left">
                      <div className="badge rounded-pill bg-success me-2 processbadge">
                        Processing
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default MyBilling;
