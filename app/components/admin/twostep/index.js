"use client";
import { useState } from "react";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid2";
import Button from "@mui/material/Button";
import { Container, Grid2 } from "@mui/material";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { borders } from "@mui/system";
const TwoStep = () => {
  return (
    <Container maxWidth={false}>
      <Grid container>
        <Grid size={{ xs: 12, md: 6 }} className="d-flex flex-column">
          {/* login area */}
          <div className="login-container w-lg-500 mx-auto">
            <div className="login-container-inner" sx={{ flex: 1 }}>
              <img
                src="../../../../images/logo-light-mode.svg"
                className="twostep-logo"
              />
              <div className="mt-4">
                <div className="text-center mb-4">
                  <h4 className="text-black">Two Step Verification</h4>
                  <p className="text-light fs-7">
                    Enter the verification code we sent to
                  </p>
                  <p className="fs-5 text-black">******7859</p>
                </div>

                <div className="form-group mb-4">
                  <p className="fs-6">Type your 6 digit security code</p>
                  <div className="d-flex flex-wrap flex-stack">
                    <input className="w-60px h-60px mx-1 rounded inputborder text-center"></input>
                    <input className="w-60px h-60px mx-1 rounded inputborder text-center"></input>
                    <input className="w-60px h-60px mx-1 rounded inputborder text-center"></input>
                    <input className="w-60px h-60px mx-1 rounded inputborder text-center"></input>
                    <input className="w-60px h-60px mx-1 rounded inputborder text-center"></input>
                    <input className="w-60px h-60px mx-1 rounded inputborder text-center"></input>
                  </div>
                </div>

                <div className="mt-2">
                  <Button
                    variant="contained"
                    className="w-100 mt-3"
                    size="small inline"
                  >
                    Sign In
                  </Button>
                </div>
                <div
                  className="mt-5 text-light  text-center fs-8"
                  onClick={() => updateuserdetails(false)}
                >
                  <span className="me-2 d-inline text-light fs-7">
                    {" "}
                    Didn’t get the code ?
                  </span>
                  <a
                    href="#"
                    className="text-black secondart-color  cursor-pointer fs-7"
                    sx={{ cursor: "pointer" }}
                  >
                    Resend
                  </a>
                  <span className="mx-2 fs-7">or</span>
                  <a
                    href="#"
                    className="text-black secondart-color  cursor-pointer fs-7"
                    sx={{ cursor: "pointer" }}
                  >
                    CAll Us
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

export default TwoStep;
