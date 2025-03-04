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
import SearchIcon from "@mui/icons-material/Search";
const ProcessingList = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <Container className="main-container lt-100">
        <Grid container>
          <Grid
            size={{ xs: 6, md: 6 }}
            className="d-flex flex-column align-content-center justify-content-center"
          >
            <h3 className="fs-6">Media Processing</h3>
            <p className="fs-9 light-text">Home Media generating</p>
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
                  <option value="1">Queue</option>
                  <option value="2">Generating</option>
                  <option value="2">Failed</option>
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
            <div className="d-flex flex-row  align-items-center ">
              <h3 className="fs-6 mb-0 me-2 d-flex ">
                Processing
                <span> (1)</span>
              </h3>
              <div
                className="bg-white pe-2 d-flex align-items-center"
                style={{ paddingleft: "20px" }}
              >
                <span>
                  <SearchIcon className="fs-7" />
                </span>
                <input
                  placeholder="Search icons…"
                  aria-label="search icons"
                  class="MuiInputBase-input border-0 fs-9 ml-2 p-2 rounded"
                  type="text"
                  value=""
                />
              </div>
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
                {/* body */}
                <div className="mt-3 modal-body">
                  <form>
                    <div class="mb-3">
                      <label for="exampleInputEmail1" class="form-label fs-8">
                        Media Processing
                      </label>
                      <select
                        class="form-select fs-8"
                        aria-label="Default select example"
                      >
                        <option selected>All </option>
                        <option value="1">Queue</option>
                        <option value="2">Geetings</option>
                        <option value="3">Failed</option>
                      </select>
                    </div>
                    <div class="mb-3">
                      <label
                        for="exampleInputPassword1"
                        class="form-label fs-8"
                      >
                        Media Varations
                      </label>
                      <select
                        class="form-select fs-8"
                        aria-label="Default select example"
                      >
                        <option selected>All </option>
                        <option value="1">standred</option>
                        <option value="2">Modern</option>
                        <option value="3">Traditional</option>
                      </select>
                    </div>

                    <div class="mb-3">
                      <label
                        for="exampleInputPassword1"
                        class="form-label fs-8"
                      >
                        Media Tag
                      </label>
                      <select
                        class="form-select fs-8"
                        aria-label="Default select example"
                      >
                        <option selected>All </option>
                        <option value="1">Hindus</option>
                        <option value="2">Muslims</option>
                        <option value="3">Grils</option>
                        <option value="3">Boys</option>
                        <option value="3">Mens</option>
                      </select>
                    </div>

                    <div class="mb-3">
                      <label
                        for="exampleInputPassword1"
                        class="form-label fs-8"
                      >
                        Media VIew Format
                      </label>
                      <select
                        class="form-select fs-8"
                        aria-label="Default select example"
                      >
                        <option selected>All </option>
                        <option value="1">Landscape [16:9] </option>
                        <option value="2">Portrait [9:16]</option>
                        <option value="3">Square [1:1]</option>
                        <option value="3">Post [4:3]</option>
                      </select>
                    </div>

                    <div class="mb-3">
                      <label
                        for="exampleInputPassword1"
                        class="form-label fs-8"
                      >
                        Media Duration
                      </label>
                      <select
                        class="form-select fs-8"
                        aria-label="Default select example"
                      >
                        <option selected>All </option>
                        <option value="1">0 - 10 Sec </option>
                        <option value="2">15 - 30 Sec</option>
                        <option value="3">30 - 60 Sec</option>
                        <option value="3">1 M+</option>
                      </select>
                    </div>

                    <div class="mb-3">
                      <label
                        for="exampleInputPassword1"
                        class="form-label fs-8"
                      >
                        Media Size
                      </label>
                      <select
                        class="form-select fs-8"
                        aria-label="Default select example"
                      >
                        <option selected>All </option>
                        <option value="1">HD </option>
                        <option value="2">FULL HD</option>
                        <option value="3">4K</option>
                        <option value="3">6K</option>
                      </select>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <Button
                        type="submit"
                        class="btn btn-primary"
                        size="small"
                        variant="contained"
                      >
                        Rest all
                      </Button>
                      <Button
                        type="submit"
                        variant="contained"
                        class="btn btn-primary btn-small"
                        size="small"
                      >
                        Filter View
                      </Button>
                    </div>
                  </form>
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
export default ProcessingList;
