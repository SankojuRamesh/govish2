"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import {
  Box,
  Button,
  CardContent,
  CardMedia,
  Container,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const StartLogin = () => {
  return (
    <>
      <div className="start-login row ">
        <div className="col-md-8 p-4">
          <div className="d-flex  align-content-center flex-column flex-md-row flex-lg-row">
            <h3 className="text-white mb-3">Start With Gowish Today, </h3>
            <h3 className="text-white ml-2">Professional Video Editor!</h3>
          </div>
          <div>
            <p className="mb-0 text-white">
              Professionals Templetes Community to Stay Ahead
            </p>
          </div>
        </div>
        <div className="col-md-4 d-flex justify-content-end justify-content-end  justify-md-content-end align-items-center">
          <div className=" text-right d-flex  ">
            <Button variant="outlined" className="text-white border-white">
              Login Now
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default StartLogin;
