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
const Orderlist = () => {
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

  const Tvarations = [
    { id: "0", text: "Standred" },
    { id: "1", text: "Modren" },
    { id: "1", text: "Premieum" },
  ];
  const Mview = [
    { id: "1", text: "HD" },
    { id: "0", text: "Full Hd" },
    { id: "1", text: "UHD" },
    { id: "1", text: "6K" },
  ];
  const Msize = [
    { id: "1", text: "Landscape" },
    { id: "0", text: "Square" },
    { id: "1", text: "Potraiet" },
  ];

  const Duration = [
    { id: "15", text: "Sec" },
    { id: "30", text: "Sec" },
    { id: "1-", text: "Min" },
    { id: "1+", text: "Min" },
  ];
  return (
    <>
      <Container className="main-container lt-100">
        <Grid container>
          <Grid
            size={{ xs: 6, md: 6 }}
            className="d-flex flex-column align-content-center justify-content-center"
          >
            <h3 className="fs-6">Order list</h3>
            <p className="fs-9 light-text">Home My orders</p>
          </Grid>
          {/*group down  */}
          <Grid size={{ xs: 6, md: 6 }}>
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
            size={{ xs: 6, md: 6 }}
            className="d-flex flex-column align-content-center justify-content-center "
          >
            <div className="d-flex flex-row align-items-center">
              <h3 className="fs-6 mb-0 me-2 d-flex">
                <span>Orders</span> <span> (2)</span>
              </h3>
              <input
                placeholder="Search icons…"
                aria-label="search icons"
                class="MuiInputBase-input border-0 fs-9 ml-2 p-2 rounded"
                type="text"
                value=""
              />
            </div>
          </Grid>

          <Grid
            size={{ xs: 6, md: 6 }}
            className="d-flex  align-content-end justify-content-end flex-row align-items-center"
          >
            <a href="#" className="me-2 text-light">
              <AppsIcon />
            </a>
            <a href="#" className="text-light" onClick={toggleDrawer(true)}>
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
                    Type of Templetes order
                  </p>
                  <p className="fs-9 fs-9 light-text">Purched order List</p>
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
                    <p className="mb-0 fs-7">Tempeltes Varations</p>
                    <p className="mb-0 fs-9 text-light">
                      View Varations Templete Making
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
                    <p className="mb-0 fs-7 text-black">Tempeltes Media VIew</p>
                    <p className="mb-0 fs-9 text-light">
                      Temeplete Media Card Acper ration
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
                    <p className="mb-0 fs-7 text-black">
                      Tempeltes Media Sizes
                    </p>
                    <p className="mb-0 fs-9 text-light">
                      Temeplete Media Card Sizes
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
        <Grid container spacing={3} className="mt-2 ">
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
export default Orderlist;
