"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import SubCategory from "../category/subCategory";
import InvitationCard from "./invitationCard";
const Invitation = () => {
    return (
        <>
            <Container className="main-container">
                <Grid container spacing={1}>
                    <Grid size={{ xs: 12 }}>
                        <h5 className="mb-0">Category</h5>
                        <p className="mb-0 text-black text-opacity-50">Category list</p>
                    </Grid>
                    <InvitationCard />
                    <InvitationCard />
                    <InvitationCard />
              
                </Grid>

            </Container>
        </>
    );
};
export default Invitation;