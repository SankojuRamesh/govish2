"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { Container, Grid2 } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
const LoginPage = () => {
  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }} className="d-flex flex-column">
          {/* login area */}
          <div className="login-container w-lg-500 mx-auto">
            <div className="login-container-inner" sx={{ flex: 1 }}>
              <div>
                <div className="text-center mb-4">
                  <h4 className="text-black">Sign In</h4>
                  <p className="text-light fs-8">Your Social Video Editor</p>
                </div>

                <div className="form-group mb-4">
                  <input
                    type="text"
                    className="form-control fs-8"
                    id="usr"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group mt-4">
                  <input
                    type="password"
                    className="form-control fs-8"
                    id="pwd"
                    placeholder="Password"
                  />
                  <a
                    href="#"
                    variant="caption"
                    sx={{ display: "block" }}
                    className=" text-right fs-8 d-flex justify-content-end mt-2 secondart-color"
                  >
                    Forgot Password ?
                  </a>
                </div>
                <div className="mt-2">
                  <Button
                    variant="contained"
                    className="w-100 mt-3"
                    size="small"
                  >
                    Sign In
                  </Button>
                </div>
                <div
                  className="mt-5 text-light  text-center fs-8"
                  onClick={() => updateuserdetails(false)}
                >
                  <span className="me-2 d-inline text-light">
                    {" "}
                    Not a Member yet?
                  </span>
                  <a
                    href="#"
                    className="text-black secondart-color  cursor-pointer "
                    sx={{ cursor: "pointer" }}
                  >
                    Sign Up
                  </a>
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

export default LoginPage;
