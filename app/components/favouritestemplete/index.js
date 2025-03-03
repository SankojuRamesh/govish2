"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import SubCategory from "../category/subCategory";
import InvitationCard from "./invitationCard";
import Button from "@mui/material/Button";
import TemplateBanner from "../templateBanner";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AppsIcon from "@mui/icons-material/Apps";
import TuneIcon from "@mui/icons-material/Tune";
import Slider from "react-slick";
const MediaTemplete = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
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
  const Tvarations = [
    { id: "0", text: "Standred" },
    { id: "1", text: "Modren" },
    { id: "1", text: "Premieum" },
  ];
  const Mview = [
    { id: "1", text: "Landscape" },
    { id: "1", text: "Square" },
    { id: "0", text: "Portraient" },
  ];
  const Msize = [
    { id: "35", text: "HD" },
    { id: "45", text: "Ful HD" },
    { id: "45", text: "UHD" },
    { id: "09", text: "6K" },
  ];

  const Duration = [
    { id: "1", text: "0 to 15 Sec" },
    { id: "0", text: "15 to 30 Sec" },
    { id: "0", text: "30 to 1 Min" },
    { id: "0", text: "1 Min to Above" },
  ];
  return (
    <>
      <Container className="main-container lt-100">
        <Grid container>
          <Grid
            size={{ xs: 12, md: 6 }}
            className="d-flex flex-column align-content-center justify-content-center"
          >
            <h3 className="fs-6">My Favourites</h3>
            <p className="fs-9 light-text">Home Invitations</p>
          </Grid>
          {/*group down  */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box className="d-flex justify-content-end ">
              <div style={{ width: 200, padding: 0 }}>
                <select
                  class="form-select fs-7"
                  aria-label="Default select example"
                >
                  <option selected>All</option>
                  <option value="1">Neweast Frist</option>
                  <option value="2">Older First</option>
                </select>
              </div>
            </Box>
          </Grid>
        </Grid>

        <Grid container>
          <Grid
            size={{ xs: 12, md: 6 }}
            className="d-flex flex-column align-content-center justify-content-center "
          >
            <div className="d-flex flex-row mb-3">
              <h3 className="fs-6  ">Favourites (2)</h3>
              <input
                placeholder="Search icons…"
                aria-label="search icons"
                class="MuiInputBase-input css-aae3xl"
                type="text"
                value=""
                className="border-0 fs-9 ml-2"
              />
            </div>
          </Grid>

          <Grid
            size={{ xs: 12, md: 6 }}
            className="d-flex  align-content-end justify-content-end flex-row"
          >
            <a href="#" className="me-2 text-light">
              <AppsIcon />
            </a>
            <a
              href="#"
              className="text-light"
              onClick={toggleDrawer(true)}
              anchor="right"
            >
              <TuneIcon />
            </a>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor="right">
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
                    Tempeltes Varations
                  </p>
                  <p className="fs-9 fs-9 light-text">
                    View Varations Templete Making
                  </p>
                  {/*  */}
                  <div className="select-cards d-flex justify-content-evenly gap-5 ">
                    {/* All Cards */}
                    <div className="select-cards-info editiable-cards-container-box d-flex flex-column text-center cursor-pointer">
                      <h5 className="p-0 m-0 fs-4 text-black-50">1</h5>
                      <p className="p-0 m-0 fs-10 light-text">Self</p>
                    </div>
                    {/* Indival Card */}
                    <div className="select-cards-info editiable-cards-container-box d-flex flex-column text-center mu-4">
                      <h5 className="p-0 m-0 fs-4 text-black-50">1</h5>
                      <p className="p-0 m-0 fs-10 light-text">
                        Indival Card Filter
                      </p>
                    </div>
                  </div>
                  {/* looping */}
                  {/*media view */}
                  <div className="filter-info-slider mt-2">
                    <p className="mb-0 fs-7">Tempeltes Media VIew</p>
                    <p className="mb-0 fs-9 text-light">
                      Temeplete Media Card Acper ration
                    </p>

                    <Slider {...settings}>
                      {Tvarations.map((card, index) => (
                        <div key={index}>
                          <div className="m-2  editiable-cards-container-box">
                            <h5 className="mb-0 fs-4 text-black-50">
                              {card.id}
                            </h5>
                            <p className="mb-0 fs-10 light-text">{card.text}</p>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  {/* Size */}
                  <div className="filter-info-slider mt-2">
                    <p className="mb-0 fs-7 text-black">
                      Tempeltes Media Sizes
                    </p>
                    <p className="mb-0 fs-9 text-light">
                      Temeplete Media Card Sizes
                    </p>

                    <Slider {...settings}>
                      {Msize.map((card, index) => (
                        <div key={index}>
                          <div className="m-2  editiable-cards-container-box">
                            <h5 className="mb-0 fs-4 text-black-50">
                              {card.id}
                            </h5>
                            <p className="mb-0 fs-10 light-text">{card.text}</p>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                  {/* Meedia view  */}
                  <div className="filter-info-slider mt-2">
                    <p className="mb-0 fs-7 text-black">Tempeltes Durataion</p>
                    <p className="mb-0 fs-9 text-light">
                      Temeplete Media Card Acper ration
                    </p>

                    <Slider {...settings}>
                      {Mview.map((mcard, index) => (
                        <div key={index}>
                          <div className="m-2  editiable-cards-container-box">
                            <h5 className="mb-0 fs-4 text-black-50">
                              {mcard.id}
                            </h5>
                            <p className="mb-0 fs-10 light-text">
                              {mcard.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>

                  {/* Duration view  */}
                  <div className="filter-info-slider mt-2">
                    <p className="mb-0 fs-7 bold text-black">
                      Tempeltes Durataion
                    </p>
                    <p className="mb-0 fs-9 text-light">
                      Temeplete Media Card Acper ration
                    </p>

                    <Slider {...settings}>
                      {Duration.map((Dcard, index) => (
                        <div key={index}>
                          <div className="m-2  editiable-cards-container-box">
                            <h5 className="mb-0 fs-4 text-black-50">
                              {Dcard.id}
                            </h5>
                            <p className="mb-0 fs-10 light-text">
                              {Dcard.text}
                            </p>
                          </div>
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </Box>
            </Drawer>
          </Grid>
        </Grid>

        <div className="latest-template-banner"></div>
        <Grid container spacing={3} className=" ">
          <InvitationCard />
          <InvitationCard />
          <InvitationCard />
          <InvitationCard />
          <InvitationCard />
          <InvitationCard />
          <InvitationCard />
        </Grid>
      </Container>
    </>
  );
};
export default MediaTemplete;
