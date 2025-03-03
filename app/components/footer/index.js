"use client";
import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid2";
const Footer = () => {
    const logo = require('../../../public/images/logo-light-mode.png')
    return (
        <>
       <div className="footer bg-white p-4 mt-6" >
       <div className="MuiContainer-root MuiContainer-maxWidthLg css-5c1adp-MuiContainer-root">
        <div className="row">
            <div className="col-md-6 col-sm-12">
                <div className="d-flex sm-justify-content-center">
                <div className="fs-7 text-light">© 2024 www.gowish.app </div>
                <div className="mr-5 fs-7 text-light"> | All rights reserved</div>
                </div>
           </div>
            <div className="col-md-6 col-sm-12 " >
            <div className="d-flex justify-content-end ">
                <div className="fs-7 text-light">Terms and conditions </div>
                <div className="mr-5 fs-7 text-light"> | www.gowish.studio</div>
                </div>


            </div>
        </div>
       </div>
       </div>
        </>
    )
}
export default Footer;