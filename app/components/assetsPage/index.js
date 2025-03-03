"use client";
import React, { useEffect, useState } from "react";
import { Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2";
import TuneIcon from "@mui/icons-material/Tune";
import Drawer from "@mui/material/Drawer";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const myUpload = [
  { id: 1, name: "Image Name 1", src: "../../../images/grapes.jpg" },
  { id: 2, name: "Image Name 2", src: "../../../images/grapes.jpg" },
  { id: 3, name: "Image Name 3", src: "../../../images/grapes.jpg" },
  // Add more images here
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const AssetsPage = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const [activeTab, setActiveTab] = useState("myUpload");
  const [tabValue, setTabValue] = useState("myUpload"); // You can update this based on user interaction

  useEffect(() => {
    const tabMapping = {
      myUpload: "myUpload",
      galleryImage: "galleryImage",
      stockImage: "stockImage",
      stockVideo: "stockVideo",
      stockAudio: "stockAudio",
      stockFonts: "stockFonts",
    };

    setActiveTab(tabMapping[tabValue] || "myUpload");
  }, [tabValue]);
  return (
    <>
      <Container style={{ marginTop: "80px" }}>
        <Grid container spacing={3} className="mt-5 ">
          <Grid size={{ xs: 6, md: 6 }}>
            <div>
              <h2 className="fs-6 text-black">Assets Media Files</h2>
              <p className="fs-9">Editor for layers all Tempetes.</p>
            </div>
            <div></div>
          </Grid>
          <Grid size={{ xs: 6 }} className="d-flex justify-content-end">
            <h2 className="mb-0 ">
              <Button variant="contained" disableElevation size="small">
                My Favourate
              </Button>{" "}
            </h2>
          </Grid>
          <Grid size={{ xs: 12 }} className="assets-menu bg-white p-2">
            <ul>
              <li onClick={() => setTabValue("myUpload")}>My Upload</li>
              <li
                onClick={() => setTabValue("galleryImage")}
                className={activeTab === "galleryImage" ? "active-tab" : ""}
              >
                Gallery Image
              </li>
              <li
                onClick={() => setTabValue("stockImage")}
                className={activeTab === "galleryImage" ? "active-tab" : ""}
              >
                Stock Image
              </li>
              <li
                onClick={() => setTabValue("stockVideo")}
                className={activeTab === "galleryImage" ? "active-tab" : ""}
              >
                Stock Video
              </li>
              <li
                onClick={() => setTabValue("stockAudio")}
                className={activeTab === "galleryImage" ? "active-tab" : ""}
              >
                Stock Audio
              </li>
              <li
                onClick={() => setTabValue("stockFonts")}
                className={activeTab === "galleryImage" ? "active-tab" : ""}
              >
                Stock Fonts
              </li>
            </ul>
          </Grid>
          <Grid size={{ xs: 12 }}>
            {/* Render the active tab content based on activeTab */}
            {activeTab === "myUpload" && (
              <div>
                <Grid container>
                  <Grid size={6}>
                    <h6>My Upload</h6>
                  </Grid>
                  <Grid size={6} className="d-flex justify-content-end">
                    <span>
                      <Button
                        variant="contained"
                        disableElevation
                        className="me-2"
                        size="small"
                      >
                        Upload Files Manager
                      </Button>
                    </span>
                    <a href="#" onClick={toggleDrawer(true)}>
                      <TuneIcon />
                    </a>
                    <Drawer
                      open={open}
                      onClose={toggleDrawer(false)}
                      anchor="right"
                    >
                      <Box
                        sx={{ width: 100, padding: 4 }}
                        className="modal-box w-xs-100"
                      >
                        {/* header */}
                        <div className="d-flex justify-content-between modal-header">
                          <p className="mb-0">Select Filters Options</p>
                          <div onClick={toggleDrawer(false)}>X</div>
                        </div>
                        {/* body */}
                        <div className="mt-3 modal-body">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label fs-8"
                            >
                              Media VIew Format
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Landscape [16:9]</option>
                              <option value="2">Protrait [9:16]</option>
                              <option value="3">Square [1:1]</option>
                              <option value="3">Post [4:1]</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Media Size
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">HD</option>
                              <option value="2">FULL HD</option>
                              <option value="3">4K</option>
                              <option value="3">6K</option>
                            </select>
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Media Tag
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Hindus</option>
                              <option value="2">Muslims</option>
                              <option value="3">Grils</option>
                              <option value="3">Boys</option>
                              <option value="3">Mens</option>
                              <option value="3">Others</option>
                            </select>
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Tag lables
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Mens</option>
                              <option value="2">Womens</option>
                              <option value="3">Childs</option>
                            </select>
                          </div>
                          <div>
                            <Grid container spacing={2}>
                              <Grid size={6}>
                                <Button variant="contained" disableElevation>
                                  Reset all
                                </Button>
                              </Grid>
                              <Grid
                                size={6}
                                className="d-flex justify-content-end"
                              >
                                <Button variant="contained" disableElevation>
                                  Filter View
                                </Button>
                              </Grid>
                            </Grid>
                          </div>
                        </div>
                      </Box>
                    </Drawer>
                  </Grid>
                </Grid>
                {/* loop my upload */}
                <Grid container spacing={2} className="mt-3">
                  {myUpload.map((image) => (
                    <Grid key={image.id} size={{ xs: 12, md: 2 }}>
                      <div>
                        <img
                          src={image.src}
                          className="rounded"
                          style={{ width: "100%" }}
                          alt={image.name}
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <span className="fs-10">{image.name}</span>
                        <a
                          href="#"
                          className="arrow-left d-flex justify-content-center align-items-center rounded"
                        >
                          <ArrowForwardIosIcon className="fs-9" />
                        </a>
                      </div>
                    </Grid>
                  ))}
                  <Grid size={{ xs: 12, md: 2 }}></Grid>
                  <Grid size={{ xs: 12, md: 2 }}></Grid>
                </Grid>
              </div>
            )}
            {/*  */}
            {activeTab === "galleryImage" && (
              <div>
                <Grid container>
                  <Grid size={6}>
                    <h6>CS Gallery Images</h6>
                  </Grid>
                  <Grid size={6} className="d-flex justify-content-end">
                    <span>
                      <Button
                        variant="contained"
                        disableElevation
                        className="me-2"
                        size="small"
                      >
                        Upload Files Manager
                      </Button>
                    </span>
                    <a href="#" onClick={toggleDrawer(true)}>
                      <TuneIcon />
                    </a>
                    <Drawer
                      open={open}
                      onClose={toggleDrawer(false)}
                      anchor="right"
                    >
                      <Box
                        sx={{ width: 100, padding: 4 }}
                        className="modal-box w-xs-100"
                      >
                        {/* header */}
                        <div className="d-flex justify-content-between modal-header">
                          <p className="mb-0">Select Filters Options</p>
                          <div onClick={toggleDrawer(false)}>X</div>
                        </div>
                        {/* body */}
                        <div className="mt-3 modal-body">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label fs-8"
                            >
                              Media VIew Format
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Landscape [16:9]</option>
                              <option value="2">Protrait [9:16]</option>
                              <option value="3">Square [1:1]</option>
                              <option value="3">Post [4:1]</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Media Size
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">HD</option>
                              <option value="2">FULL HD</option>
                              <option value="3">4K</option>
                              <option value="3">6K</option>
                            </select>
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Media Tag
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Hindus</option>
                              <option value="2">Muslims</option>
                              <option value="3">Grils</option>
                              <option value="3">Boys</option>
                              <option value="3">Mens</option>
                              <option value="3">Others</option>
                            </select>
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Tag lables
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Mens</option>
                              <option value="2">Womens</option>
                              <option value="3">Childs</option>
                            </select>
                          </div>
                          <div>
                            <Grid container spacing={2}>
                              <Grid size={6}>
                                <Button variant="contained" disableElevation>
                                  Reset all
                                </Button>
                              </Grid>
                              <Grid
                                size={6}
                                className="d-flex justify-content-end"
                              >
                                <Button variant="contained" disableElevation>
                                  Filter View
                                </Button>
                              </Grid>
                            </Grid>
                          </div>
                        </div>
                      </Box>
                    </Drawer>
                  </Grid>
                </Grid>
                {/* loop my upload */}
                <Grid container spacing={2} className="mt-3">
                  {myUpload.map((image) => (
                    <Grid key={image.id} size={{ xs: 12, md: 2 }}>
                      <div>
                        <img
                          src={image.src}
                          className="rounded"
                          style={{ width: "100%" }}
                          alt={image.name}
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <span className="fs-10">{image.name}</span>
                        <a
                          href="#"
                          className="arrow-left d-flex justify-content-center align-items-center rounded"
                        >
                          <ArrowForwardIosIcon className="fs-9" />
                        </a>
                      </div>
                    </Grid>
                  ))}
                  <Grid size={{ xs: 12, md: 2 }}></Grid>
                  <Grid size={{ xs: 12, md: 2 }}></Grid>
                </Grid>
              </div>
            )}
            {/*  */}
            {activeTab === "stockImage" && (
              <div>
                <Grid container>
                  <Grid size={6}>
                    <h6>CS Gallery Images</h6>
                  </Grid>
                  <Grid size={6} className="d-flex justify-content-end">
                    <span>
                      <Button
                        variant="contained"
                        disableElevation
                        className="me-2"
                        size="small"
                      >
                        Upload Files Manager
                      </Button>
                    </span>
                    <a href="#" onClick={toggleDrawer(true)}>
                      <TuneIcon />
                    </a>
                    <Drawer
                      open={open}
                      onClose={toggleDrawer(false)}
                      anchor="right"
                    >
                      <Box
                        sx={{ width: 100, padding: 4 }}
                        className="modal-box w-xs-100"
                      >
                        {/* header */}
                        <div className="d-flex justify-content-between modal-header">
                          <p className="mb-0">Select Filters Options</p>
                          <div onClick={toggleDrawer(false)}>X</div>
                        </div>
                        {/* body */}
                        <div className="mt-3 modal-body">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label fs-8"
                            >
                              Media VIew Format
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Landscape [16:9]</option>
                              <option value="2">Protrait [9:16]</option>
                              <option value="3">Square [1:1]</option>
                              <option value="3">Post [4:1]</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Media Size
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">HD</option>
                              <option value="2">FULL HD</option>
                              <option value="3">4K</option>
                              <option value="3">6K</option>
                            </select>
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Media Tag
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Hindus</option>
                              <option value="2">Muslims</option>
                              <option value="3">Grils</option>
                              <option value="3">Boys</option>
                              <option value="3">Mens</option>
                              <option value="3">Others</option>
                            </select>
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Tag lables
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Mens</option>
                              <option value="2">Womens</option>
                              <option value="3">Childs</option>
                            </select>
                          </div>
                          <div>
                            <Grid container spacing={2}>
                              <Grid size={6}>
                                <Button variant="contained" disableElevation>
                                  Reset all
                                </Button>
                              </Grid>
                              <Grid
                                size={6}
                                className="d-flex justify-content-end"
                              >
                                <Button variant="contained" disableElevation>
                                  Filter View
                                </Button>
                              </Grid>
                            </Grid>
                          </div>
                        </div>
                      </Box>
                    </Drawer>
                  </Grid>
                </Grid>
                {/* loop my upload */}
                <Grid container spacing={2} className="mt-3">
                  {myUpload.map((image) => (
                    <Grid key={image.id} size={{ xs: 12, md: 2 }}>
                      <div>
                        <img
                          src={image.src}
                          className="rounded"
                          style={{ width: "100%" }}
                          alt={image.name}
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <span className="fs-10">{image.name}</span>
                        <a
                          href="#"
                          className="arrow-left d-flex justify-content-center align-items-center rounded"
                        >
                          <ArrowForwardIosIcon className="fs-9" />
                        </a>
                      </div>
                    </Grid>
                  ))}
                  <Grid size={{ xs: 12, md: 2 }}></Grid>
                  <Grid size={{ xs: 12, md: 2 }}></Grid>
                </Grid>
              </div>
            )}
            {/*  */}
            {activeTab === "stockVideo" && (
              <div>
                <Grid container>
                  <Grid size={6}>
                    <h6>Stock Videos</h6>
                  </Grid>
                  <Grid size={6} className="d-flex justify-content-end">
                    <span>
                      <Button
                        variant="contained"
                        disableElevation
                        className="me-2"
                        size="small"
                      >
                        Upload Files Manager
                      </Button>
                    </span>
                    <a href="#" onClick={toggleDrawer(true)}>
                      <TuneIcon />
                    </a>
                    <Drawer
                      open={open}
                      onClose={toggleDrawer(false)}
                      anchor="right"
                    >
                      <Box
                        sx={{ width: 100, padding: 4 }}
                        className="modal-box w-xs-100"
                      >
                        {/* header */}
                        <div className="d-flex justify-content-between modal-header">
                          <p className="mb-0">Select Filters Options</p>
                          <div onClick={toggleDrawer(false)}>X</div>
                        </div>
                        {/* body */}
                        <div className="mt-3 modal-body">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label fs-8"
                            >
                              Media VIew Format
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Landscape [16:9]</option>
                              <option value="2">Protrait [9:16]</option>
                              <option value="3">Square [1:1]</option>
                              <option value="3">Post [4:1]</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Media Size
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">HD</option>
                              <option value="2">FULL HD</option>
                              <option value="3">4K</option>
                              <option value="3">6K</option>
                            </select>
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Media Tag
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Hindus</option>
                              <option value="2">Muslims</option>
                              <option value="3">Grils</option>
                              <option value="3">Boys</option>
                              <option value="3">Mens</option>
                              <option value="3">Others</option>
                            </select>
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Tag lables
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Mens</option>
                              <option value="2">Womens</option>
                              <option value="3">Childs</option>
                            </select>
                          </div>
                          <div>
                            <Grid container spacing={2}>
                              <Grid size={6}>
                                <Button variant="contained" disableElevation>
                                  Reset all
                                </Button>
                              </Grid>
                              <Grid
                                size={6}
                                className="d-flex justify-content-end"
                              >
                                <Button variant="contained" disableElevation>
                                  Filter View
                                </Button>
                              </Grid>
                            </Grid>
                          </div>
                        </div>
                      </Box>
                    </Drawer>
                  </Grid>
                </Grid>
                {/* loop my upload */}
                <Grid container spacing={2} className="mt-3">
                  {myUpload.map((image) => (
                    <Grid key={image.id} size={{ xs: 12, md: 2 }}>
                      <div>
                        <img
                          src={image.src}
                          className="rounded"
                          style={{ width: "100%" }}
                          alt={image.name}
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <span className="fs-10">{image.name}</span>
                        <a
                          href="#"
                          className="arrow-left d-flex justify-content-center align-items-center rounded"
                        >
                          <ArrowForwardIosIcon className="fs-9" />
                        </a>
                      </div>
                    </Grid>
                  ))}
                  <Grid size={{ xs: 12, md: 2 }}></Grid>
                  <Grid size={{ xs: 12, md: 2 }}></Grid>
                </Grid>
              </div>
            )}
            {/*  */}
            {activeTab === "stockAudio" && (
              <div>
                <Grid container>
                  <Grid size={6}>
                    <h6>Audio Assets Files</h6>
                  </Grid>
                  <Grid size={6} className="d-flex justify-content-end">
                    <span>
                      <Button
                        variant="contained"
                        disableElevation
                        className="me-2"
                        size="small"
                      >
                        Upload Files Manager
                      </Button>
                    </span>
                    <a href="#" onClick={toggleDrawer(true)}>
                      <TuneIcon />
                    </a>
                    <Drawer
                      open={open}
                      onClose={toggleDrawer(false)}
                      anchor="right"
                    >
                      <Box
                        sx={{ width: 100, padding: 4 }}
                        className="modal-box w-xs-100"
                      >
                        {/* header */}
                        <div className="d-flex justify-content-between modal-header">
                          <p className="mb-0">Select Filters Options</p>
                          <div onClick={toggleDrawer(false)}>X</div>
                        </div>
                        {/* body */}
                        <div className="mt-3 modal-body">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label fs-8"
                            >
                              Media VIew Format
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Landscape [16:9]</option>
                              <option value="2">Protrait [9:16]</option>
                              <option value="3">Square [1:1]</option>
                              <option value="3">Post [4:1]</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Media Size
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">HD</option>
                              <option value="2">FULL HD</option>
                              <option value="3">4K</option>
                              <option value="3">6K</option>
                            </select>
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Media Tag
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Hindus</option>
                              <option value="2">Muslims</option>
                              <option value="3">Grils</option>
                              <option value="3">Boys</option>
                              <option value="3">Mens</option>
                              <option value="3">Others</option>
                            </select>
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Tag lables
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Mens</option>
                              <option value="2">Womens</option>
                              <option value="3">Childs</option>
                            </select>
                          </div>
                          <div>
                            <Grid container spacing={2}>
                              <Grid size={6}>
                                <Button variant="contained" disableElevation>
                                  Reset all
                                </Button>
                              </Grid>
                              <Grid
                                size={6}
                                className="d-flex justify-content-end"
                              >
                                <Button variant="contained" disableElevation>
                                  Filter View
                                </Button>
                              </Grid>
                            </Grid>
                          </div>
                        </div>
                      </Box>
                    </Drawer>
                  </Grid>
                </Grid>
                {/* loop my upload */}
                <Grid container spacing={2} className="mt-3">
                  {myUpload.map((image) => (
                    <Grid key={image.id} size={{ xs: 12, md: 2 }}>
                      <div>
                        <img
                          src={image.src}
                          className="rounded"
                          style={{ width: "100%" }}
                          alt={image.name}
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <span className="fs-10">{image.name}</span>
                        <a
                          href="#"
                          className="arrow-left d-flex justify-content-center align-items-center rounded"
                        >
                          <ArrowForwardIosIcon className="fs-9" />
                        </a>
                      </div>
                    </Grid>
                  ))}
                  <Grid size={{ xs: 12, md: 2 }}></Grid>
                  <Grid size={{ xs: 12, md: 2 }}></Grid>
                </Grid>
              </div>
            )}
            {/*  */}
            {activeTab === "stockFonts" && (
              <div>
                <Grid container>
                  <Grid size={6}>
                    <h6>Fonts Assets Files</h6>
                  </Grid>
                  <Grid size={6} className="d-flex justify-content-end">
                    <span>
                      <Button
                        variant="contained"
                        disableElevation
                        className="me-2"
                        size="small"
                      >
                        Upload Files Manager
                      </Button>
                    </span>
                    <a href="#" onClick={toggleDrawer(true)}>
                      <TuneIcon />
                    </a>
                    <Drawer
                      open={open}
                      onClose={toggleDrawer(false)}
                      anchor="right"
                    >
                      <Box
                        sx={{ width: 100, padding: 4 }}
                        className="modal-box w-xs-100"
                      >
                        {/* header */}
                        <div className="d-flex justify-content-between modal-header">
                          <p className="mb-0">Select Filters Options</p>
                          <div onClick={toggleDrawer(false)}>X</div>
                        </div>
                        {/* body */}
                        <div className="mt-3 modal-body">
                          <div className="mb-3">
                            <label
                              for="exampleFormControlInput1"
                              className="form-label fs-8"
                            >
                              Media VIew Format
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Landscape [16:9]</option>
                              <option value="2">Protrait [9:16]</option>
                              <option value="3">Square [1:1]</option>
                              <option value="3">Post [4:1]</option>
                            </select>
                          </div>
                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Media Size
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">HD</option>
                              <option value="2">FULL HD</option>
                              <option value="3">4K</option>
                              <option value="3">6K</option>
                            </select>
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Media Tag
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Hindus</option>
                              <option value="2">Muslims</option>
                              <option value="3">Grils</option>
                              <option value="3">Boys</option>
                              <option value="3">Mens</option>
                              <option value="3">Others</option>
                            </select>
                          </div>

                          <div class="mb-3">
                            <label
                              for="exampleFormControlTextarea1"
                              className="form-label  fs-8"
                            >
                              Tag lables
                            </label>
                            <select
                              className="form-select  fs-8"
                              aria-label="Default select example"
                            >
                              <option selected>All</option>
                              <option value="1">Mens</option>
                              <option value="2">Womens</option>
                              <option value="3">Childs</option>
                            </select>
                          </div>
                          <div>
                            <Grid container spacing={2}>
                              <Grid size={6}>
                                <Button variant="contained" disableElevation>
                                  Reset all
                                </Button>
                              </Grid>
                              <Grid
                                size={6}
                                className="d-flex justify-content-end"
                              >
                                <Button variant="contained" disableElevation>
                                  Filter View
                                </Button>
                              </Grid>
                            </Grid>
                          </div>
                        </div>
                      </Box>
                    </Drawer>
                  </Grid>
                </Grid>
                {/* loop my upload */}
                <Grid container spacing={2} className="mt-3">
                  {myUpload.map((image) => (
                    <Grid key={image.id} size={{ xs: 12, md: 2 }}>
                      <div>
                        <img
                          src={image.src}
                          className="rounded"
                          style={{ width: "100%" }}
                          alt={image.name}
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <span className="fs-10">{image.name}</span>
                        <a
                          href="#"
                          className="arrow-left d-flex justify-content-center align-items-center rounded"
                        >
                          <ArrowForwardIosIcon className="fs-9" />
                        </a>
                      </div>
                    </Grid>
                  ))}
                  <Grid size={{ xs: 12, md: 2 }}></Grid>
                  <Grid size={{ xs: 12, md: 2 }}></Grid>
                </Grid>
              </div>
            )}
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default AssetsPage;
