"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Login = ({ updateuserdetails }) => {
  return (
    <>
      <div className="m-5">
        <img
          src="../../../../images/logo-light-mode.svg"
          className="login-logo"
        />
        <div class="form-group mb-4">
          <label for="usr" className="bold  mb-1  fs-7">
            Email:
          </label>
          <input
            type="text"
            class="form-control fs-8"
            id="usr"
            placeholder="Email"
          />
          <Typography
            variant="caption"
            gutterBottom
            sx={{ display: "block" }}
            className="mt-2"
          >
            Wrong email format
          </Typography>
        </div>
        <div class="form-group mt-4">
          <label for="pwd" className="mb-1 fs-7">
            Password:
          </label>
          <input
            type="password"
            class="form-control fs-8"
            id="pwd"
            placeholder="Password"
          />
          <a
            href="#"
            variant="caption"
            gutterBottom
            sx={{ display: "block" }}
            className=" text-right fs-8 d-flex justify-content-end mt-2 secondart-color"
          >
            Forgot Password ?
          </a>
        </div>
        <div class="mt-2">
          <Button variant="contained" className="w-100 mt-3" size="small">
            Sign In
          </Button>
        </div>
        <div
          class="mt-5 text-light  text-center fs-8"
          onClick={() => updateuserdetails(false)}
        >
          <span className="me-2 d-inline"> Not a Member yet?</span>
          <a
            href="#"
            class="text-black secondart-color  cursor-pointer "
            sx={{ cursor: "pointer" }}
          >
            Sign Up
          </a>
        </div>
      </div>
    </>
  );
};
export default Login;
