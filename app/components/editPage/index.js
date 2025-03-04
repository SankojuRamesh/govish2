"use client";
import React, { useEffect, useState } from "react";

import SubCategory from "../category/subCategory";
import InvitationCard from "./invitationCard";
import {
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import CategoryCard from "../category/categoryCard";

import VideoEditor from "../videoEditor";
import VideoHelights from "../videoHelights";
import OurClients from "../ourClients";
import ClientSays from "../clientsay";
import Footer from "../footer";
import StartLogin from "../stratLogin";
import Button from "@mui/material/Button";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const EditPage = () => {
  const [open, setOpen] = React.useState(false);
  const [opend, setOpend] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };
  const toggleDrawerd = (newOpend) => () => {
    setOpend(newOpend);
  };
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 8,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: true,
        },
      },
    ],
  };
  const cardsData = [
    { id: "01", text: "card" },
    { id: "02", text: "card" },
    { id: "03", text: "card" },
    { id: "04", text: "card" },
    { id: "05", text: "card" },
    { id: "06", text: "card" },
    { id: "07", text: "card" },
    { id: "08", text: "card" },
  ];

  const filterarea = [
    { id: "01", text: "Text" },
    { id: "02", text: "Images" },
    { id: "03", text: "Videos" },
    { id: "04", text: "Audio" },
  ];

  return (
    <>
      <Container style={{ marginTop: "80px" }}>
        <div className="mt-7 container">
          <Grid container spacing={3} className="mt-5 ">
            <Grid size={{ xs: 6, md: 6 }}>
              <div>
                <h2 className="fs-6 text-black">Editor Page</h2>
                <p className="fs-9">Editor for layers all Tempetessss.</p>
              </div>
              <div></div>
            </Grid>
            <Grid size={{ xs: 6 }} className="d-flex justify-content-end">
              <h2 className="mb-0 ">
                <Button variant="contained" disableElevation size="small">
                  Save Template
                </Button>{" "}
              </h2>
            </Grid>
          </Grid>
          {/**/}
          <div
            className="bg-white p-4 mb-1"
            sx={{
              padding: {
                xs: 2, // Padding for small screens (mobile)
                sm: 4, // Padding for tablets
                md: 6, // Padding for desktops
                lg: 8, // Large screens
                xl: 10, // Extra large screens
              },
            }}
          >
            <div className="editiable-cards">
              {/*  */}
              <div className="editiable-cards-header">
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 6 }}>
                    <div>
                      <p className="p-0 m-0 fs-9 text-black f-bold">
                        Templetes Design 000001{" "}
                      </p>
                      <p className="text-light fs-9">Editiable Cards.</p>
                    </div>
                    <div></div>
                  </Grid>
                  <Grid size={{ xs: 6 }} className="d-flex justify-content-end">
                    <h2 className="mb-0 ">
                      <Button
                        variant="outlined"
                        href="#outlined-buttons"
                        onClick={toggleDrawerd(true)}
                        size="small"
                      >
                        Full Preview
                      </Button>
                    </h2>
                    <Drawer
                      open={opend}
                      onClose={toggleDrawerd(false)}
                      anchor="right"
                    >
                      <Box
                        sx={{ width: 100, padding: 4 }}
                        className="modal-box w-xs-100"
                      >
                        <div className="d-flex justify-content-between modal-header">
                          <p className="mb-0">Video Templete Preview</p>
                          <div onClick={toggleDrawer(false)}>X</div>
                        </div>
                        <div className="mt-3 modal-body">
                          {/*  */}
                          <div className="select-cards d-flex justify-content-evenly gap-5 ">
                            {/* All Cards */}
                            <div className="select-cards-info d-flex flex-column text-center cursor-pointer">
                              <p className="p-0 m-0 fs-9">Full Preview </p>
                              <p className="p-0 m-0 fs-10 light-text">
                                ALl Card Render
                              </p>
                            </div>
                            {/* Indival Card */}
                            <div className="select-cards-info d-flex flex-column text-center mu-4">
                              <p className="p-0 m-0 fs-9">
                                Indival Card Preview
                              </p>
                              <p className="p-0 m-0 fs-10 light-text">
                                Selected Card Video Privew
                              </p>
                            </div>
                          </div>
                          {/* looping */}
                          {/* filter and modal */}
                          <div className="filter-info-slider mt-4">
                            <div className="d-flex justify-content-between align-items-center">
                              <span className="fs-8">
                                Full cards Templete Preview
                              </span>
                              <span className="fs-8">00 / 05</span>
                            </div>
                            {/* video */}
                            <div>
                              <iframe
                                width="100%"
                                height="220"
                                src="https://www.youtube.com/embed/HJ3RNhoI24A"
                                title="Themeforest Licenses and Support - Metronic Admin Theme"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                              ></iframe>
                            </div>
                          </div>
                        </div>
                      </Box>
                    </Drawer>
                  </Grid>
                </Grid>
              </div>
              {/* cards start */}
              <div className="slider-container counter-slider">
                <Slider {...settings}>
                  {cardsData.map((card, index) => (
                    <div key={index}>
                      <div className="m-2  editiable-cards-container-box">
                        <h5 className="mb-0 fs-4">{card.id}</h5>
                        <p className="mb-0 fs-7 text-light">{card.text}</p>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>

          {/*  */}
          <div className="bg-white p-4 rounded">
            {/*  */}
            <Grid container spacing={3}>
              <Grid size={{ xs: 8, md: 6 }}>
                <div>
                  <p className="p-0 m-0">Card 01</p>
                  <p className="text-light fs-7">Card In side layers list.</p>
                </div>
                <div></div>
              </Grid>
              <Grid
                size={{ xs: 4, md: 6 }}
                className="d-flex justify-content-end align-items-center"
              >
                <div className="d-flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#B7B7B7"
                  >
                    <path d="M240-160q-33 0-56.5-23.5T160-240q0-33 23.5-56.5T240-320q33 0 56.5 23.5T320-240q0 33-23.5 56.5T240-160Zm240 0q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm240 0q-33 0-56.5-23.5T640-240q0-33 23.5-56.5T720-320q33 0 56.5 23.5T800-240q0 33-23.5 56.5T720-160ZM240-400q-33 0-56.5-23.5T160-480q0-33 23.5-56.5T240-560q33 0 56.5 23.5T320-480q0 33-23.5 56.5T240-400Zm240 0q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm240 0q-33 0-56.5-23.5T640-480q0-33 23.5-56.5T720-560q33 0 56.5 23.5T800-480q0 33-23.5 56.5T720-400ZM240-640q-33 0-56.5-23.5T160-720q0-33 23.5-56.5T240-800q33 0 56.5 23.5T320-720q0 33-23.5 56.5T240-640Zm240 0q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Zm240 0q-33 0-56.5-23.5T640-720q0-33 23.5-56.5T720-800q33 0 56.5 23.5T800-720q0 33-23.5 56.5T720-640Z"></path>
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    open={open}
                    onClick={toggleDrawer(true)}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-light cursor-pointer"
                  >
                    <path
                      d="M19.0759 3H4.72777C3.95892 3 3.47768 3.83148 3.86067 4.49814L8.56967 12.6949C9.17923 13.7559 9.5 14.9582 9.5 16.1819V19.5072C9.5 20.2189 10.2223 20.7028 10.8805 20.432L13.8805 19.1977C14.2553 19.0435 14.5 18.6783 14.5 18.273V13.8372C14.5 12.8089 14.8171 11.8056 15.408 10.964L19.8943 4.57465C20.3596 3.912 19.8856 3 19.0759 3Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  {/* Filter */}
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
                        <p className="mb-0">Select Filters Options</p>
                        <div onClick={toggleDrawer(false)}>X</div>
                      </div>
                      <div className="mt-3 modal-body">
                        <p className="fs-5 m-0 fs-7 text-black">
                          Select Filters
                        </p>
                        <p className="fs-9 fs-9 light-text">
                          Select View Fliters
                        </p>
                        {/*  */}
                        <div className="select-cards d-flex justify-content-evenly gap-5 ">
                          {/* All Cards */}
                          <div className="select-cards-info d-flex flex-column text-center cursor-pointer">
                            <p className="p-0 m-0 fs-9">Select Filters</p>
                            <p className="p-0 m-0 fs-10 light-text">
                              {" "}
                              Select View Fliters
                            </p>
                          </div>
                          {/* Indival Card */}
                          <div className="select-cards-info d-flex flex-column text-center mu-4">
                            <p className="p-0 m-0 fs-9">Indival Card</p>
                            <p className="p-0 m-0 fs-10 light-text">
                              Indival Card Filter
                            </p>
                          </div>
                        </div>
                        {/* looping */}
                        {/* filter and modal */}
                        <div className="filter-info-slider mt-4">
                          <Slider {...settings}>
                            {filterarea.map((card, index) => (
                              <div key={index}>
                                <div className="m-2  editiable-cards-container-box">
                                  <h5 className="mb-0 fs-4 text-black-50">
                                    {card.id}
                                  </h5>
                                  <p className="mb-0 fs-7 light-text">
                                    {card.text}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </Slider>
                        </div>
                      </div>
                    </Box>
                  </Drawer>
                </div>
              </Grid>
            </Grid>

            {/*  */}

            <Box sx={{ flexGrow: 1 }}>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                  <div className="card-container">
                    <div className="cart-container-box d-flex  justify-content-center align-items-center">
                      <p className="mb-0 text-black">
                        Preview will appear here.
                      </p>
                    </div>
                    {/*  */}
                    <Grid container spacing={3} className="mt-1 ">
                      <Grid size={{ xs: 6, md: 6 }}>
                        <div className="d-flex gap-2 align-items-center">
                          <div className="edit-user-pic fs-8 text-primary">
                            V
                          </div>
                          <div>
                            <p className="p-0 m-0 fs-9">Layer Name 01</p>
                            <p className="text-light fs-10 p-0 m-0 ">
                              Required
                            </p>
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        size={{ xs: 6 }}
                        className="d-flex justify-content-end"
                      >
                        <Button
                          variant="contained"
                          disableElevation
                          className="fs-9"
                          size="small"
                        >
                          Upload image
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                {/*  */}
                <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                  <div className="card-container">
                    <div className="cart-container-box d-flex  justify-content-center align-items-center">
                      <p className="mb-0 text-black">
                        Preview will appear here.
                      </p>
                    </div>
                    {/*  */}
                    <Grid container spacing={3} className="mt-1 ">
                      <Grid size={{ xs: 6, md: 6 }}>
                        <div className="d-flex gap-2 align-items-center">
                          <div className="edit-user-pic fs-8 text-primary">
                            V
                          </div>
                          <div>
                            <p className="p-0 m-0 fs-9">Layer Name 01</p>
                            <p className="text-light fs-10 p-0 m-0 ">
                              Required
                            </p>
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        size={{ xs: 6 }}
                        className="d-flex justify-content-end"
                      >
                        <Button
                          variant="contained"
                          disableElevation
                          className="fs-9"
                          size="small"
                        >
                          Upload image
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                {/*  */}
                <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                  <div className="card-container">
                    <div className="cart-container-box d-flex  justify-content-center align-items-center">
                      <p className="mb-0 text-black">
                        Preview will appear here.
                      </p>
                    </div>
                    {/*  */}
                    <Grid container spacing={3} className="mt-1 ">
                      <Grid size={{ xs: 6, md: 6 }}>
                        <div className="d-flex gap-2 align-items-center">
                          <div className="edit-user-pic fs-8 text-primary">
                            V
                          </div>
                          <div>
                            <p className="p-0 m-0 fs-9">Layer Name 01</p>
                            <p className="text-light fs-10 p-0 m-0 ">
                              Required
                            </p>
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        size={{ xs: 6 }}
                        className="d-flex justify-content-end"
                      >
                        <Button
                          variant="contained"
                          disableElevation
                          className="fs-10"
                          size="small"
                        >
                          Upload image
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                {/*  */}
                <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                  <div className="card-container">
                    <div className="cart-container-box d-flex  justify-content-center align-items-center">
                      <p className="mb-0 text-black">
                        Preview will appear here.
                      </p>
                    </div>
                    {/*  */}
                    <Grid container spacing={3} className="mt-1 ">
                      <Grid size={{ xs: 6, md: 6 }}>
                        <div className="d-flex gap-2 align-items-center">
                          <div className="edit-user-pic fs-8 text-primary">
                            V
                          </div>
                          <div>
                            <p className="p-0 m-0 fs-9">Layer Name 01</p>
                            <p className="text-light fs-10 p-0 m-0 ">
                              Required
                            </p>
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        size={{ xs: 6 }}
                        className="d-flex justify-content-end"
                      >
                        <Button
                          variant="contained"
                          disableElevation
                          className="fs-10"
                          size="small"
                        >
                          Upload image
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                {/*  */}

                <Grid size={{ xs: 12, sm: 4, md: 3 }}>
                  <div className="card-container">
                    <div className="cart-container-box d-flex  justify-content-center align-items-center">
                      <p className="mb-0 text-black">
                        Preview will appear here.
                      </p>
                    </div>
                    {/*  */}
                    <Grid container spacing={3} className="mt-1 ">
                      <Grid size={{ xs: 6, md: 6 }}>
                        <div className="d-flex gap-2 align-items-center">
                          <div className="edit-user-pic fs-8 text-primary">
                            V
                          </div>
                          <div>
                            <p className="p-0 m-0 fs-9">Layer Name 01</p>
                            <p className="text-light fs-10 p-0 m-0 ">
                              Required
                            </p>
                          </div>
                        </div>
                      </Grid>
                      <Grid
                        size={{ xs: 6 }}
                        className="d-flex justify-content-end"
                      >
                        <Button
                          variant="contained"
                          disableElevation
                          className="fs-9"
                          size="small"
                        >
                          Upload image
                        </Button>
                      </Grid>
                    </Grid>
                  </div>
                </Grid>
                {/*  */}
              </Grid>
              {/* LAST BOX */}
              <Grid container spacing={3} className="mt-5 ">
                <Grid size={{ xs: 6, md: 6 }}>
                  <div>
                    <p className="p-0 m-0 fs-7">Confrim Card Layer list</p>
                    <p className="text-light  fs-9">
                      ALl Updated card layer list.
                    </p>
                  </div>
                  <div></div>
                </Grid>
                <Grid size={{ xs: 6 }} className="d-flex justify-content-end">
                  <h2 className="mb-0 ">
                    <Button
                      variant="outlined"
                      href="#outlined-buttons"
                      size="small"
                    >
                      Card Render
                    </Button>
                  </h2>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};
export default EditPage;
