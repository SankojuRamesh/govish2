"use client";
import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/joy";
import { Container } from "@mui/material";
const Login = () => {
  const templates = [
    { id: 1, name: "My Templetes", count: 22 },
    { id: 2, name: "My Favorate", count: 10 },
    { id: 3, name: "My Users ", count: 5 },
  ];
  const orderoverview = [
    { id: 1, name: "My Order", count: 22 },
    { id: 2, name: "Processing", count: 10 },
    { id: 3, name: "My Videos", count: 5 },
  ];

  const salesoverview = [
    { id: 1, name: "Total Amount ", count: "$ 7100.00" },
    { id: 2, name: "Paid Amount ", count: "$ 5600 .00" },
    { id: 3, name: "Failed", count: "$ 1500.00 " },
    { id: 4, name: "Refund Amount ", count: "$ 1500.00 " },
  ];
  return (
    <>
      <Container className="main-container lt-100">
        <Grid container>
          <Grid>
            <h3 className="fs-5">Over View</h3>
            <p className="fs-9 light-text">Home Over View</p>
          </Grid>
        </Grid>
        <Grid container>
          <Grid>
            <h3 className="fs-5 mb-0">My Overview</h3>
            <p className="fs-9 light-text">User Status</p>
          </Grid>
        </Grid>
        {/* loop  */}
        <Grid container spacing={4}>
          {templates.map((template) => (
            <Grid item sx={{ xs: 12, md: 3, lg: 3 }} key={template.id}>
              <div className="bg-white p-10 flex-column d-flex p-5 rounded">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.34375 3.9463V15.2178C1.34375 16.119 2.08105 16.8563 2.98219 16.8563H8.65093V19.4594H6.15702C5.38853 19.4594 4.75981 19.9617 4.75981 20.5757V21.6921H19.2403V20.5757C19.2403 19.9617 18.6116 19.4594 17.8431 19.4594H15.3492V16.8563H21.0179C21.919 16.8563 22.6562 16.119 22.6562 15.2178V3.9463C22.6562 3.04516 21.9189 2.30786 21.0179 2.30786H2.98219C2.08105 2.30786 1.34375 3.04516 1.34375 3.9463ZM12.9034 9.9016C13.241 9.98792 13.5597 10.1216 13.852 10.2949L15.0393 9.4353L15.9893 10.3853L15.1297 11.5727C15.303 11.865 15.4366 12.1837 15.523 12.5212L16.97 12.7528V13.4089H13.9851C13.9766 12.3198 13.0912 11.4394 12 11.4394C10.9089 11.4394 10.0235 12.3198 10.015 13.4089H7.03006V12.7528L8.47712 12.5211C8.56345 12.1836 8.69703 11.8649 8.87037 11.5727L8.0107 10.3853L8.96078 9.4353L10.148 10.2949C10.4404 10.1215 10.759 9.98788 11.0966 9.9016L11.3282 8.45467H12.6718L12.9034 9.9016ZM16.1353 7.93758C15.6779 7.93758 15.3071 7.56681 15.3071 7.1094C15.3071 6.652 15.6779 6.28122 16.1353 6.28122C16.5926 6.28122 16.9634 6.652 16.9634 7.1094C16.9634 7.56681 16.5926 7.93758 16.1353 7.93758ZM2.71385 14.0964V3.90518C2.71385 3.78023 2.81612 3.67796 2.94107 3.67796H21.0589C21.1839 3.67796 21.2861 3.78023 21.2861 3.90518V14.0964C15.0954 14.0964 8.90462 14.0964 2.71385 14.0964Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="fs-4 text-black">{template.count}</span>
                <span className="text-light fs-8">{template.name}</span>
              </div>
            </Grid>
          ))}
        </Grid>
        {/*  */}

        <Grid container>
          <Grid>
            <h3 className="fs-5 mt-4 mb-0">Orders Overview</h3>
            <p className="fs-9 light-text">Order Status</p>
          </Grid>
        </Grid>
        {/* loop  */}
        <Grid container spacing={4}>
          {orderoverview.map((order) => (
            <Grid item sx={{ xs: 12, md: 3, lg: 3 }} key={order.id}>
              <div className="bg-white p-10 flex-column d-flex p-5 rounded">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.34375 3.9463V15.2178C1.34375 16.119 2.08105 16.8563 2.98219 16.8563H8.65093V19.4594H6.15702C5.38853 19.4594 4.75981 19.9617 4.75981 20.5757V21.6921H19.2403V20.5757C19.2403 19.9617 18.6116 19.4594 17.8431 19.4594H15.3492V16.8563H21.0179C21.919 16.8563 22.6562 16.119 22.6562 15.2178V3.9463C22.6562 3.04516 21.9189 2.30786 21.0179 2.30786H2.98219C2.08105 2.30786 1.34375 3.04516 1.34375 3.9463ZM12.9034 9.9016C13.241 9.98792 13.5597 10.1216 13.852 10.2949L15.0393 9.4353L15.9893 10.3853L15.1297 11.5727C15.303 11.865 15.4366 12.1837 15.523 12.5212L16.97 12.7528V13.4089H13.9851C13.9766 12.3198 13.0912 11.4394 12 11.4394C10.9089 11.4394 10.0235 12.3198 10.015 13.4089H7.03006V12.7528L8.47712 12.5211C8.56345 12.1836 8.69703 11.8649 8.87037 11.5727L8.0107 10.3853L8.96078 9.4353L10.148 10.2949C10.4404 10.1215 10.759 9.98788 11.0966 9.9016L11.3282 8.45467H12.6718L12.9034 9.9016ZM16.1353 7.93758C15.6779 7.93758 15.3071 7.56681 15.3071 7.1094C15.3071 6.652 15.6779 6.28122 16.1353 6.28122C16.5926 6.28122 16.9634 6.652 16.9634 7.1094C16.9634 7.56681 16.5926 7.93758 16.1353 7.93758ZM2.71385 14.0964V3.90518C2.71385 3.78023 2.81612 3.67796 2.94107 3.67796H21.0589C21.1839 3.67796 21.2861 3.78023 21.2861 3.90518V14.0964C15.0954 14.0964 8.90462 14.0964 2.71385 14.0964Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="fs-4  text-black">{order.count}</span>
                <span className="text-light fs-8">{order.name}</span>
              </div>
            </Grid>
          ))}
        </Grid>

        <Grid container>
          <Grid>
            <h3 className="fs-5 mt-4 mb-0">Online Sales Overview</h3>
            <p className="fs-9 light-text">Order Sales Status</p>
          </Grid>
        </Grid>
        {/* loop  */}
        <Grid container spacing={4}>
          {salesoverview.map((sales) => (
            <Grid item sx={{ xs: 12, md: 3, lg: 3 }} key={sales.id}>
              <div className="bg-white p-10 flex-column d-flex p-5 rounded">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M1.34375 3.9463V15.2178C1.34375 16.119 2.08105 16.8563 2.98219 16.8563H8.65093V19.4594H6.15702C5.38853 19.4594 4.75981 19.9617 4.75981 20.5757V21.6921H19.2403V20.5757C19.2403 19.9617 18.6116 19.4594 17.8431 19.4594H15.3492V16.8563H21.0179C21.919 16.8563 22.6562 16.119 22.6562 15.2178V3.9463C22.6562 3.04516 21.9189 2.30786 21.0179 2.30786H2.98219C2.08105 2.30786 1.34375 3.04516 1.34375 3.9463ZM12.9034 9.9016C13.241 9.98792 13.5597 10.1216 13.852 10.2949L15.0393 9.4353L15.9893 10.3853L15.1297 11.5727C15.303 11.865 15.4366 12.1837 15.523 12.5212L16.97 12.7528V13.4089H13.9851C13.9766 12.3198 13.0912 11.4394 12 11.4394C10.9089 11.4394 10.0235 12.3198 10.015 13.4089H7.03006V12.7528L8.47712 12.5211C8.56345 12.1836 8.69703 11.8649 8.87037 11.5727L8.0107 10.3853L8.96078 9.4353L10.148 10.2949C10.4404 10.1215 10.759 9.98788 11.0966 9.9016L11.3282 8.45467H12.6718L12.9034 9.9016ZM16.1353 7.93758C15.6779 7.93758 15.3071 7.56681 15.3071 7.1094C15.3071 6.652 15.6779 6.28122 16.1353 6.28122C16.5926 6.28122 16.9634 6.652 16.9634 7.1094C16.9634 7.56681 16.5926 7.93758 16.1353 7.93758ZM2.71385 14.0964V3.90518C2.71385 3.78023 2.81612 3.67796 2.94107 3.67796H21.0589C21.1839 3.67796 21.2861 3.78023 21.2861 3.90518V14.0964C15.0954 14.0964 8.90462 14.0964 2.71385 14.0964Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="fs-6 fs-4 text-black">{sales.count}</span>
                <span className="text-light fs-8">{sales.name}</span>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};
export default Login;
