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
import AppsIcon from "@mui/icons-material/Apps";
import ViewListIcon from "@mui/icons-material/ViewList";
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

const MyTemplete = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [openlist, setOpenlist] = React.useState(false);

  const toggleDrawerlist = (newOpenlist) => () => {
    setOpenlist(newOpenlist);
  };

  return (
    <>
      <Container style={{ marginTop: "80px" }}>
        <Grid container spacing={3} className="mt-5 ">
          <Grid size={{ xs: 12, md: 6 }}>
            <div>
              <h2 className="fs-6 text-black">My Templetes</h2>
              <p className="fs-9">Home My Media Design Templetes.</p>
            </div>
            <div></div>
          </Grid>
          <Grid size={{ xs: 6 }} className="d-flex justify-content-end">
            <h2 className="mb-0 "></h2>
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            size={{ xs: 10, md: 6 }}
            className="d-flex flex-column align-content-center justify-content-center "
          >
            <div className="d-flex flex-row mb-3 align-items-center">
              <h3 className="fs-6 me-2 m-0">My Templetes (1)</h3>
              <input
                placeholder="Search icons…"
                aria-label="search icons"
                type="text"
                value=""
                className="border-0  ml-2 fs-9 rounded"
              />
            </div>
          </Grid>

          <Grid
            size={{ xs: 2, md: 6 }}
            className="d-flex  align-content-end justify-content-end flex-row"
          >
            <a href="#" className="ml-2" onClick={toggleDrawerlist(true)}>
              <ViewListIcon className="text-light" />
            </a>
            <a href="#" onClick={toggleDrawer(true)}>
              <AppsIcon className="text-light" />
            </a>
            {/* side Box */}
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
                  <a className="cursor-pointer" onClick={() => setOpen(false)}>
                    X
                  </a>
                </div>
                <div className="mt-3 modal-body">
                  <div>
                    <p className="fs-5 m-0 fs-7 text-black text-black">
                      Tempeltes Varations
                    </p>
                    <p className="fs-9 fs-9 light-text">
                      View Varations Templete Making
                    </p>
                    {/*  */}
                    <div className="select-cards d-flex justify-content-evenly gap-4 ">
                      {/* All Cards */}
                      <div className="select-cards-info d-flex flex-column text-center cursor-pointer">
                        <p className="p-0 m-0 fs-5">1</p>
                        <p className="p-0 m-0 fs-10 light-text"> Standred</p>
                      </div>
                      {/* Indival Card */}
                      <div className="select-cards-info d-flex flex-column text-center mu-4">
                        <p className="p-0 m-0 fs-5">0</p>
                        <p className="p-0 m-0 fs-10 light-text"> Modren</p>
                      </div>
                      {/* Indival Card */}
                      <div className="select-cards-info d-flex flex-column text-center mu-4">
                        <p className="p-0 m-0 fs-5">0</p>
                        <p className="p-0 m-0 fs-10 light-text"> Premieum</p>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div>
                    <p className="fs-5 m-0 fs-7 text-black mt-3 text-black">
                      Tempeltes Media VIew
                    </p>
                    <p className="fs-9 fs-9 light-text">
                      Temeplete Media Card Acper ration
                    </p>
                    {/*  */}
                    <div className="select-cards d-flex justify-content-evenly gap-4 ">
                      {/* All Cards */}
                      <div className="select-cards-info d-flex flex-column text-center cursor-pointer">
                        <p className="p-0 m-0 fs-5">1</p>
                        <p className="p-0 m-0 fs-10 light-text"> Landscape</p>
                      </div>
                      {/* Indival Card */}
                      <div className="select-cards-info d-flex flex-column text-center mu-4">
                        <p className="p-0 m-0 fs-5">0</p>
                        <p className="p-0 m-0 fs-10 light-text"> Square</p>
                      </div>
                      {/* Indival Card */}
                      <div className="select-cards-info d-flex flex-column text-center mu-4">
                        <p className="p-0 m-0 fs-5">1</p>
                        <p className="p-0 m-0 fs-10 light-text"> Portrait</p>
                      </div>
                    </div>
                  </div>

                  {/*  */}
                  <div>
                    <p className="fs-5 m-0 fs-7 text-black mt-3 text-black">
                      Tempeltes Media Sizes
                    </p>
                    <p className="fs-9 fs-9 light-text">
                      Temeplete Media Card Sizes
                    </p>
                    {/*  */}
                    <div className="select-cards d-flex justify-content-evenly gap-4 ">
                      {/* All Cards */}
                      <div className="select-cards-info d-flex flex-column text-center cursor-pointer">
                        <p className="p-0 m-0 fs-5">1</p>
                        <p className="p-0 m-0 fs-10 light-text"> HD</p>
                      </div>
                      {/* Indival Card */}
                      <div className="select-cards-info d-flex flex-column text-center mu-4">
                        <p className="p-0 m-0 fs-5">0</p>
                        <p className="p-0 m-0 fs-10 light-text"> Full HD</p>
                      </div>
                      {/* Indival Card */}
                      <div className="select-cards-info d-flex flex-column text-center mu-4">
                        <p className="p-0 m-0 fs-5">0</p>
                        <p className="p-0 m-0 fs-10 light-text"> UHD</p>
                      </div>
                      <div className="select-cards-info d-flex flex-column text-center mu-4">
                        <p className="p-0 m-0 fs-5">0</p>
                        <p className="p-0 m-0 fs-10 light-text"> 6K</p>
                      </div>
                    </div>
                  </div>
                  {/*  */}
                  <div>
                    <p className="fs-5 m-0 fs-7 text-black mt-3">
                      Tempeltes Durataion
                    </p>
                    <p className="fs-9 fs-9 light-text">
                      Temeplete Media Card Sizes
                    </p>
                    {/*  */}
                    <div className="select-cards d-flex justify-content-evenly gap-4 ">
                      <div className="select-cards-info d-flex flex-column text-center cursor-pointer">
                        <p className="p-0 m-0 fs-5">15</p>
                        <p className="p-0 m-0 fs-10 light-text"> Sec</p>
                      </div>
                      {/* All Cards */}
                      <div className="select-cards-info d-flex flex-column text-center cursor-pointer">
                        <p className="p-0 m-0 fs-5">30</p>
                        <p className="p-0 m-0 fs-10 light-text"> Sec</p>
                      </div>
                      {/* Indival Card */}
                      <div className="select-cards-info d-flex flex-column text-center mu-4">
                        <p className="p-0 m-0 fs-5">1-</p>
                        <p className="p-0 m-0 fs-10 light-text"> Min</p>
                      </div>
                      {/* Indival Card */}
                      <div className="select-cards-info d-flex flex-column text-center mu-4">
                        <p className="p-0 m-0 fs-5">1+</p>
                        <p className="p-0 m-0 fs-10 light-text"> Min</p>
                      </div>
                    </div>
                  </div>
                  {/* looping */}
                  {/* filter and modal */}
                  <div className="filter-info-slider mt-4"></div>
                </div>
              </Box>
            </Drawer>
          </Grid>
        </Grid>
        <Grid container spacing={1} className="mt-2 ">
          <InvitationCard />
          <InvitationCard />
          <InvitationCard />
        </Grid>
      </Container>
    </>
  );
};
export default MyTemplete;
