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

const categories = [
  {
    title: "Create on any device",
    content:
      "Edit videos from the browser of any modern smartphone, tablet or PC device. No need to install an app or buy new hardware.",
    image: "./images/07_Landscape.png", // Replace with your image path
  },
  {
    title: "Highest video quality",
    content:
      "Export ProRes encoded videos for maximum visual fidelity while allowing for the greatest flexibility when used in editing software.",
    image: "./images/07_Landscape.png", // Replace with your image path
  },
  {
    title: "No licensing restrictions",
    content:
      "All templates have perpetual licenses for commercial use. This also includes audio, so youll never suffer a copyright strike.",
    image: "./images/07_Landscape.png", // Replace with your image path
  },
  {
    title: "Elevate your production",
    content:
      "Boost the production value of your videos with a large selection of professionally designed screen overlays, graphics and lower thirds. ",
    image: "./images/07_Landscape.png", // Replace with your image path
  },
  ,
  {
    title: "One-click branding",
    content:
      "Adapt any template to your branding in seconds. Save logos, fonts, colors and taglines so that you implement your visual style in seconds",
    image: "./images/07_Landscape.png", // Replace with your image path
  },
  ,
  {
    title: "Connect your workflows",
    content:
      "Access your videos directly from Adobe After Effects and Premiere Pro with our custom extension — the Videobolt Companion. Available for both Windows and Mac OS.",
    image: "./images/07_Landscape.png", // Replace with your image path
  },
];
const VideoHelights = () => {
  return (
    <>
      {categories.map((category, index) => (
        <Grid
          size={{ md: 4, sm: 12, xs: 12 }}
          key={index}
          className="bg-white rounded p-4"
        >
          <Box className="position-relative Video-Helights mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="24px"
              viewBox="0 -960 960 960"
              width="24px"
              fill="#CCCCCC"
            >
              <path d="M146.5-170q-23.54 0-40.02-16.47Q90-202.94 90-226.47t16.48-40.03Q122.96-283 146.5-283H170v-432q0-30.94 22.03-52.97Q214.06-790 245-790h547.5q15.5 0 26.5 11t11 26.5q0 15.5-11 26.5t-26.5 11H245v432h186.5q23.54 0 40.02 16.47 16.48 16.47 16.48 40t-16.48 40.03Q455.04-170 431.5-170h-285Zm454 0q-15.5 0-26.5-11t-11-26.5v-395q0-15.5 11-26.5t26.5-11h232q15.5 0 26.5 11t11 26.5v395q0 15.5-11 26.5t-26.5 11h-232ZM638-283h157v-282H638v282Zm0 0h157-157Z"></path>
            </svg>
          </Box>
          <CardContent className="p-0 mt-3 ">
            <div className="mb-2">
              <Link
                href="#"
                className="text-decoration-none fs-6 text-light-emphasis fw-medium black-text"
              >
                {category.title}
              </Link>
            </div>
            <p className="light-text fs-7">{category.content}</p>
          </CardContent>
        </Grid>
      ))}
    </>
  );
};
export default VideoHelights;
