"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import CategoryCard from "../category/categoryCard";
import SubCategory from "../category/subCategory";
import VideoEditor from '../videoEditor';
import VideoHelights from "../videoHelights";
import OurClients from "../ourClients";
import ClientSays from "../clientsay";
import Footer from "../footer";
import StartLogin from "../stratLogin";

const Home = () => {
    return (
        <>
            <Container>
            
            <Grid container spacing={3} className="mt-5 gup">
                    <Grid size={{ xs: 12 }}>
                        <h5 className="mb-0" >Category
                        </h5>
                        <p className="mb-0 text-black text-opacity-50">Category list</p>
                    </Grid>
                   <CategoryCard/>
                </Grid>

                <Grid container spacing={3} className="mt-5 gup">
                    <Grid size={{ xs: 12 }}>
                        <h5 className="mb-0" >How it Works Video Edior
                        </h5>
                        <p className="mb-0 text-black text-opacity-50">Save thousands to millions of bucks by using single tool for different amazing and great useful admin

                        </p>
                    </Grid>
                    <VideoEditor />
                </Grid>


                <Grid container spacing={3} className="mt-5">
                    <Grid size={{ xs: 12 }}>
                        <h2 className="mb-0 primary-color">Video Edior Helights

                        </h2>
                        <p className="mb-0 text-black text-opacity-50">Save thousands to millions of bucks by using single tool for different amazing and great useful admin

                        </p>
                    </Grid>
                    <VideoHelights />
                </Grid>

                <Grid container spacing={3} className="mt-5">
                    <Grid size={{ xs: 12 }}>
                        <h2 className="mb-0 primary-color">Our Clients

                        </h2>
                        <p className="mb-0 text-black text-opacity-50">Save thousands to millions of bucks by using single tool for different amazing and great useful admin
                        </p>
                    </Grid>
                    <OurClients/>
                </Grid>

                <Grid container spacing={3} className="mt-5">
                    <Grid size={{ xs: 12 }}>
                        <h2 className="mb-0 primary-color">What Our Clients Say

                        </h2>
                        <p className="mb-0 text-black text-opacity-50">Save thousands to millions of bucks by using single tool for different amazing and great useful admin
                        </p>
                    </Grid>
                    <ClientSays/>
                </Grid>
              {/* start login  */}
                <StartLogin/>

            </Container>
            <Footer/>
        </>
    );
};
export default Home;