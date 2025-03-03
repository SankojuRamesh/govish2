"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import SubCategory from "../category/subCategory";
import InvitationCard from "./invitationCard";
import Button from '@mui/material/Button';
import TemplateBanner from "../templateBanner";


import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const MediaTemplete = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return (
        <>
            <Container className="main-container lt-100" >
            <Grid container>
            <Grid size={{xs:12, md:6}} className="d-flex flex-column align-content-center justify-content-center">
                <h3 className="fs-5">Sub Category Name Media list</h3>
                <p className="fs-9 light-text">Home Invitations</p>
            </Grid>
            {/*group down  */}
            <Grid size={{ xs:12, md:6}} >
            <Box  className="d-flex justify-content-end ">
            <div style={{width:200}}>
            <FormControl fullWidth >
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange} 
                
                >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            </div>
            </Box>

            </Grid>
            </Grid>
        
            <div className="latest-template-banner">

            </div>
            <Grid container spacing={3} className="mt-4 "> 
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