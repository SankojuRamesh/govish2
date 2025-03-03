"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const SignUp = ({ updateuserdetails }) => {
  return (
    <>
      <div className="m-5 fs-8">
        <div className="text-center mb-4">
          <h1 className="fs-4">Sign Up</h1>
          <p className="text-light">Your Social Campaigns</p>
        </div>
        <div className="d-flex justify-content-between gap-2 mb-3">
          {/* gmail */}
          <div className="w-100 d-flex p-2 flex-row border rounded">
            <div className=" ">
              <img
                alt="Logo"
                src="https://thevfx.studio/media/svg/brand-logos/google-icon.svg"
                class=" me-3"
                style={{ width: "20px" }}
              />
            </div>
            <div>Sign with Google</div>
          </div>
          {/* apple */}
          <div className="w-100 p-2 d-flex flex-row border rounded ">
            <div className=" ">
              <img
                alt="Logo"
                src="https://thevfx.studio/media/svg/brand-logos/apple-black.svg"
                class="theme-light-show h-15px me-3"
                style={{ width: "15px" }}
              />
            </div>
            <div>Sign with Google</div>
          </div>
        </div>
        <div className="p-2 text-center">
          <div className="">Or with email</div>
        </div>
        <div class="form-group mb-3">
          <label for="usr" className="bold fs-8 mb-1 ">
            Full name
          </label>
          <input
            type="text"
            class="form-control fs-8"
            id="usr"
            placeholder="Enter Name"
          />
        </div>
        <div class="form-group mb-3">
          <label for="text" className="mb-1 fs-7">
            Email
          </label>
          <input
            type="password"
            class="form-control fs-8"
            id="pwd"
            placeholder="Email"
          />
        </div>
        <div class="form-group mb-3">
          <label for="text" className="mb-1 fs-7">
            Phone Number
          </label>
          <input
            type="text"
            class="form-control fs-8"
            id="pwd"
            placeholder="Phone Number"
          />
        </div>
        <div class="form-group mb-3">
          <label for="text" className="mb-1 fs-8">
            DATE OF BRITH
          </label>
          <input
            type="text"
            class="form-control fs-8"
            id="pwd"
            placeholder="DDMMYY"
          />
        </div>
        <div class="form-group mb-3">
          <label for="text" className="mb-1 fs-7">
            Password
          </label>
          <input
            type="text"
            class="form-control fs-8"
            id="pwd"
            placeholder="DDMMYY"
          />
          <Typography className="fs-10 mt-1">
            Use 8 or more characters with a mix of letters, numbers & symbols.
          </Typography>
        </div>
        <div class="form-group mb-3">
          <label for="text" className="mb-1 fs-7">
            Confirm Password
          </label>
          <input
            type="text"
            class="form-control fs-8"
            id="pwd"
            placeholder="DDMMYY"
          />
        </div>
        <div class="form-group mb-3">
          <label for="text" className="mb-1 fs-7">
            Address
          </label>
          <input
            type="text"
            class="form-control fs-8"
            id="pwd"
            placeholder="Password Confirmation"
          />
        </div>
        <div class="form-group mb-3">
          <label for="text" className="mb-1 fs-7">
            Area Pincode / Zipcode
          </label>
          <input
            type="text"
            class="form-control fs-8"
            id="pwd"
            placeholder="Address"
          />
        </div>
        <div class="mt-2">
          <Button variant="contained" className="w-100 mt-3" size="small">
            Sign In
          </Button>
          <Button
            variant="contained"
            className="w-100 mt-3 "
            size="small"
            onClick={() => updateuserdetails(true)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </>
  );
};
export default SignUp;
