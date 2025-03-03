"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, CardContent, CardMedia, Container, Typography } from "@mui/material";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

const categories = [
    {
        title: 'Heading Line',
        content:'Edit videos from the browser of any modern smartphone, tablet or PC device. No need to install an app or buy new hardware.',
        image: './images/07_Landscape.png', // Replace with your image path
    },
    {
        title: 'Heading Line',
        content:'Export ProRes encoded videos for maximum visual fidelity while allowing for the greatest flexibility when used in editing software.',
        image: './images/07_Landscape.png', // Replace with your image path
    },
    {
        title: 'Heading Line',
        content:'All templates have perpetual licenses for commercial use. This also includes audio, so youll never suffer a copyright strike.',
        image: './images/07_Landscape.png', // Replace with your image path
    },
    
];
const ClientSays = () => {
    return (
        <>
            {categories.map((category, index) => (
                <Grid size={{ md: 4, sm: 12, xs: 12 }} key={index} className="">
                <Stack spacing={1}>
                <Rating name="size-small" defaultValue={2} size="small" />
    
                </Stack>
            
                    <CardContent className="p-0 mt-3 ">
                    <div className="mb-2">
                        <Link href="#" className="text-decoration-none fs-6 text-light-emphasis fw-medium ">
                            {category.title}
                        </Link>
                        <h4 className="text-black fw-medium mt-1 mb-0 primary-color">
                            {category.subtitle}
                        </h4>
                    </div>
                        <p className="text-light ">
                            {category.content}
                        </p>
                     
                                   <div className="c-says d-flex justify-content-start">
                    {/*  */}
                    <CardMedia
                            component="img"
                           width={10}
                            image={category.image}
                            alt={category.title}
                            className="rounded-3 me-3 "
                            style={{ width:50, height:50}}
                           
                        />
                    {/*  */}
                        <div className="c-says-info ml-4 d-fle align-content-center">
                            <p className="fw-small mb-0 fs-7 black-text fw-medium">Client Name</p>
                            <p className="mb-0 fs-7 light-text">Start Designs</p>
                        </div>
                        
                    </div>
                    </CardContent>

                </Grid>
            ))}
        </>
    );
};
export default ClientSays;
