"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, CardContent, CardMedia, Container, Typography } from "@mui/material";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const categories = [
    {
        title: 'Select from 13,400+ Premium video templates',
        subtitle: 'Designed by seasoned Professionals',
        content:'The high production quality of our templates comes from our cinema and TV roots. Our technology is built on Hollywood visual effects software and our library is sourced by a growing community of accredited video makers who get a piece of the pie.',
        image: './images/07_Landscape.png', // Replace with your image path
    },
    {
        title: 'Make it unique and on-brand with our online  ',
        subtitle: 'Template Editor',
        content:'Each template is created with a precise use-case in mind allowing for quick video making without technical skills. Add content, apply branding and get a video people wont believe you made on your own. If thats not enough for you, use deep customization options to sculpt a template to fit beyond its original use-case.',
        image: './images/07_Landscape.png', // Replace with your image path
    },
    {
        title: 'BirthMake it unique Design Tempetes and on-Sharing.day',
        subtitle: "Templates Sharging        .",
        content:'A video template is a pre-designed framework or layout for creating videos. It includes placeholders for elements like text, images, videos, music, and animations. Templates help streamline the video creation process by providing a structure that you can customize to fit your needs.',
        image: './images/07_Landscape.png', // Replace with your image path
    },
    {
        title: 'Download and publish',
        subtitle: "Anywhere.",
        content:'Download the video from the source while ensuring you have the necessary rights or permissions, then upload and publish it to your chosen platform with an engaging title, description, and relevant tags to reach your audience effectively',
        image: './images/07_Landscape.png', // Replace with your image path
    },
];
const VideoEditor = () => {
    return (
        <>
            {categories.map((category, index) => (
                <Grid size={{ md: 6, sm: 12, xs: 12 }} key={index}>
                    <Box className="position-relative">
                    {/*  */}
                    <div className="v-editor d-flex justify-content-start">
                    {/*  */}
                    <span class="svg-icon svg-icon-muted svg-icon-4hx me-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#ff0000"><path d="M616-242q-27 1-51.5 1.5t-43.5.5h-41q-71 0-133-2-53-2-104.5-5.5T168-257q-26-7-45-26t-26-45q-6-23-9.5-56T82-447q-2-36-2-73t2-73q2-30 5.5-63t9.5-56q7-26 26-45t45-26q23-6 74.5-9.5T347-798q62-2 133-2t133 2q53 2 104.5 5.5T792-783q26 7 45 26t26 45q6 23 9.5 56t5.5 63q2 36 2 73v17q-19-8-39-12.5t-41-4.5q-83 0-141.5 58.5T600-320q0 21 4 40.5t12 37.5ZM400-400l208-120-208-120v240Zm360 200v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z"></path></svg>
                        </span>
                    {/*  */}
                        <div className="v-editor-info d-flex flex-column justify-content-center">
                            <p className="fw-medium mb-0 fs-7">STEP 01</p>
                            <p className="mb-0 fs-7 light-text">Start Designs</p>
                        </div>
                        
                    </div>
                  
                        <CardMedia
                            component="img"
                            height="300"
                            image={category.image}
                            alt={category.title}
                            className="rounded-3 "
                        />
                   
                    </Box>
                    <CardContent className="p-0 mt-3 ">
                    <div className="mb-2">
                        <Link href="#" className="text-decoration-none fs-6 text-light-emphasis fw-medium black-text mb-1">
                            {category.title}
                        </Link>
                        <h4 className="text-black fw-medium mt-1 mb-0 primary-color">
                            {category.subtitle}
                        </h4>
                    </div>
                        <p className="text-light fs-7">
                            {category.content}
                        </p>
                    </CardContent>

                </Grid>
            ))}
        </>
    );
};
export default VideoEditor;
