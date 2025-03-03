"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import SubCategory from "../app/components/category/subCategory";
import InvitationCard from "./invitationCard";
import Button from "@mui/material/Button";
import TemplateBanner from "../app/components/templateBanner";
const AssetsMedia = () => {
  return (
    <>
      <Container className="main-container lt-100">
        <Grid container>
          <Grid>
            <h3 className="fs-5">Frutis</h3>
            <p className="fs-9 light-text">Home - Sub Category list</p>
          </Grid>
        </Grid>
        <div>
          <Grid container spacing={3} className="mt-3 ">
            <Grid size={{ xs: 12, md: 6 }}>
              <div>
                <h5 className="p-0 m-0">Apple Latest Templetes</h5>
              </div>
              <div></div>
            </Grid>
            <Grid size={{ xs: 6 }} className="d-flex justify-content-end">
              <h2 className="mb-0 ">
                <Button variant="text" className="fs-10 text-light">
                  {" "}
                  More View{" "}
                </Button>
              </h2>
            </Grid>
          </Grid>

          <TemplateBanner />
        </div>
        {/* banner1 */}
        <div className="latest-template-banner"></div>
        <Grid container spacing={1} className="mt-4 ">
          <InvitationCard />
          <InvitationCard />
          <InvitationCard />
        </Grid>

        {/* banner2 */}
        <div>
          <Grid container spacing={3} className="mt-5 ">
            <Grid size={{ xs: 12, md: 6 }}>
              <div>
                <h5 className="p-0 m-0">Banna</h5>
              </div>
              <div></div>
            </Grid>
            <Grid size={{ xs: 6 }} className="d-flex justify-content-end">
              <Button variant="text" className="fs-10 text-light">
                {" "}
                More View{" "}
              </Button>
            </Grid>
          </Grid>

          <TemplateBanner />
        </div>

        {/* banner3 */}
        <div>
          <Grid container spacing={3} className="mt-5 ">
            <Grid size={{ xs: 12, md: 6 }}>
              <div>
                <h5 className="p-0 m-0">Orange Latest Templetes</h5>
              </div>
              <div></div>
            </Grid>
            <Grid size={{ xs: 6 }} className="d-flex justify-content-end">
              <h2 className="mb-0 ">
                <Button variant="text" className="fs-10 text-light">
                  More View
                </Button>
              </h2>
            </Grid>
          </Grid>

          <TemplateBanner />
        </div>

        {/* banner4 */}
        <div>
          <Grid container spacing={3} className="mt-5 ">
            <Grid size={{ xs: 12, md: 6 }}>
              <div>
                <h5 className="p-0 m-0">Mango Latest Templetess</h5>
              </div>
              <div></div>
            </Grid>
            <Grid size={{ xs: 6 }} className="d-flex justify-content-end">
              <h2 className="mb-0 ">
                <Button variant="text" className="fs-10 text-light">
                  {" "}
                  More View{" "}
                </Button>
              </h2>
            </Grid>
          </Grid>

          <TemplateBanner />
        </div>
      </Container>
    </>
  );
};
export default AssetsMedia;
