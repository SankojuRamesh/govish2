"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, CardContent, CardMedia, Container, Typography } from "@mui/material";
import Link from "next/link";
import { FaPlayCircle } from "react-icons/fa";

const categories = [
    {
      
        image: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/fujifilm.svg', // Replace with your image path
    },
    {
       
        image: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/vodafone.svg', // Replace with your image path
    },
    {
       
        image: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/aspnetzero.svg', // Replace with your image path
    },
    {
       
        image: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/nasa.svg', // Replace with your image path
    },
    ,
    {
      
        image: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/aon.svg', // Replace with your image path
    },
    ,
    {
        image: 'https://preview.keenthemes.com/metronic8/demo1/assets/media/svg/brand-logos/hp-3.svg', // Replace with your image path
    },

];
const OurClients = () => {
    return (
        <>
         <div className="d-flex justify-content-between  flex-row w-100 align-items-center">
            {categories.map((category, index) => (
     <div>
     <CardMedia key={index}
                            component="img"
                           width={10}
                            image={category.image}
                            alt={category.title}
                            className="rounded-3 mt-2"
                        />
          </div>
             
            ))}
            </div>
        </>
    );
};
export default OurClients;
