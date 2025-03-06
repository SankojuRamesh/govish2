"use client";
import * as React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { Container, Grid2 } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { borders } from "@mui/system";
import { Password } from "@mui/icons-material";
import Checkbox from "@mui/material/Checkbox";
const AdminPassword = () => {
  const [checked, setChecked] = React.useState([true, false]);

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }} className="d-flex flex-column">
          {/* login area */}
          <div className="login-container w-lg-500 mx-auto">
            <div className="login-container-inner" sx={{ flex: 1 }}>
              <div className="mt-4">
                <div className="text-center mb-4">
                  <h4 className="text-black">Setup New Password</h4>
                  <div className="d-flex text-center justify-content-center">
                    <p className="text-light fs-7 mx-2">
                      Have you already reset the password ?
                    </p>
                    <Link href="" className="linkclass fs-7 bold">
                      Sign in
                    </Link>
                  </div>
                </div>
                <input
                  type="text"
                  className="form-control fs-8"
                  id="usr"
                  placeholder="Email"
                />
                <Typography className="fs-9 mt-2 text-light">
                  Use 8 or more characters with a mix of letters, numbers &
                  symbols.
                </Typography>
                <input
                  type="text"
                  className="form-control fs-8 mt-3"
                  id="usr"
                  placeholder="Repeat Password"
                />
                {/* i agree */}
                <div className="mt-2">
                  <Checkbox
                    checked={checked[0] && checked[1]}
                    indeterminate={checked[0] !== checked[1]}
                    onChange={handleChange1}
                  />

                  <span className="fs-7">I Agree & </span>
                  <Link href="" className="linkclass fs-7">
                    Terms and conditions.
                  </Link>
                </div>
                {/*  */}
                <div className="mt-2 d-flex gap-2">
                  <Button
                    variant="contained"
                    className="w-100 mt-3 p-10"
                    size="small "
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </div>
            <div>
              <Grid
                container
                className="text-center d-flex justify-content-center"
              >
                <Grid size={{ xs: 3 }} className="fs-8">
                  <Link href="#" className="linkclass">
                    Terms
                  </Link>
                </Grid>
                <Grid size={{ xs: 3 }} className="fs-8">
                  <Link href="#" className="linkclass">
                    Plans
                  </Link>
                </Grid>
                <Grid size={{ xs: 3 }} className="fs-8">
                  <Link href="#" className="linkclass">
                    Contact Us
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          {/* info area */}
          <div
            style={{
              height: "100%",
              backgroundImage: `url('../../../../../../images/07_Landscape.png')`, // Your Image Path
              backgroundSize: "cover", // Image Fit
              backgroundPosition: "center", // Center Image
              backgroundRepeat: "no-repeat",
              width: "100%",
              position: "relative",
            }}
          >
            <div className="bg-white p-3 rounded me-4 mx-auto login-content text-center">
              <h2 className="text-black fw-medium mt-1 mb-0 primary-color ms-2">
                Fast, useEffect and Productive
              </h2>
              <p className="text-light fs-7 pt-3">
                In this kind of post, introduces a person they’ve interviewed
                and provides some background information about the
                intervieweeand their work following this is a transcript of the
                interview.
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AdminPassword;
