"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, CardContent, CardMedia, Container, Typography } from "@mui/material";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const categories = [
    {
        title: 'Invitations',
        subtitle: 'NEW MEMORIES START',
        image: './images/Invatationimage00007.jpeg', // Replace with your image path
    },
    {
        title: 'Weddings',
        subtitle: 'Discrepation',
        image: './images/images03.jpeg', // Replace with your image path
    },
    {
        title: 'Birthday',
        subtitle: "Today's my birthday.",
        image: './images/images02.jpeg', // Replace with your image path
    },
    {
        title: 'Promos',
        subtitle: "Let's Started.",
        image: './images/Invatationimage00002.jpeg', // Replace with your image path
    },
];
const CategoryCard = () => {
    return (
        <>



            {categories.map((category, index) => (
                <Grid size={{ md: 3, sm: 6, xs: 12 }} key={index}>
                    <Box className="position-relative">
                        <CardMedia
                            component="img"
                            height="300"
                            image={category.image}
                            alt={category.title}
                            className="rounded-3 "
                        />
                        {/* <Link href="#" className="span-none    h-auto w-auto p-0 min-wa ms-2 mb-2 position-absolute bottom-0 right-0 fs-4 text-white"><FaPlayCircle />
                        </Link> */}
                        <CardContent className="p-0 mt-3 position-absolute bottom-0 right-10">
                        <h4 href="#" className="text-decoration-none fs-6  fw-medium text-white ">
                            {category.title}
                        </h4>
                        <p className="text-black fw-medium mt-1 mb-0 text-white">
                            {category.subtitle}
                        </p>
                    </CardContent>
                    </Box>
                    

                </Grid>
            ))}


        </>
    );
};
export default CategoryCard;