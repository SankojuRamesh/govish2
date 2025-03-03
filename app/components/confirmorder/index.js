"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import SubCategory from "../category/subCategory";
import InvitationCard from "./invitationCard";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const Confirmorder = () => {
  return (
    <>
      <Container className="main-container lt-100">
        <Grid container>
          <Grid>
            <h3 className="fs-5">Cart Confirm Order</h3>
            <p className="fs-9 light-text">
              Home Confirm Media Templetes in cart.
            </p>
          </Grid>
        </Grid>

        <Grid container spacing={1}>
          {/* video */}
          <Grid size={{ xs: 12, md: 8 }}>
            {/*  */}
            <div className="d-flex justify-content-between">
              {/*  */}
              <div className="d-flex ">
                <div
                  className="rounded bg-primary bg-opacity-10"
                  style={{ width: "40px", height: "40px" }}
                ></div>
                <div className="ps-2">
                  <div className="fs-7">Half Saree invitations 01</div>
                  <div>
                    <span className="fs-10 me-2">Video</span>
                    <span className="fs-10 me-2">Vertical</span>
                    <span className="fs-10 me-2">Hindus</span>
                    <span className="fs-10 me-2">Standred</span>
                  </div>
                </div>
              </div>
              {/*  */}
              <div className="d-flex">
                <div className="">
                  <div>
                    <span>$</span>
                    <span className="text-success"> 450.00</span>
                  </div>
                  <div className="fs-10">
                    <span>MRP</span>
                    <span className=""> 1000.00</span>
                    <span className="text-danger">[ 55% Off ]</span>
                  </div>
                </div>
                <div className="">
                  <DeleteIcon className="fs-6" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded p-3 mt-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <p className="fs-8 mb-0">Confrim User list</p>
                  <span className="fs-10">Editiable for shared users.</span>
                </div>
                {/*  */}
                <div>
                  <Button variant="contained" size="small">
                    Add Share Users
                  </Button>
                </div>
              </div>
              <div className="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col" className="fs-9">
                        Shared Name
                      </th>
                      <th scope="col" className="fs-9">
                        Contact
                      </th>
                      <th scope="col" className="fs-9">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" className="fs-9">
                        <div className="d-flex ">
                          <div
                            className="rounded bg-primary bg-opacity-10"
                            style={{ width: "40px", height: "40px" }}
                          ></div>
                          <div className="ps-2">
                            <div className="fs-7">Order User Name 01</div>
                            <div>
                              <span className="fs-10 me-2 light-text">
                                Family
                              </span>
                            </div>
                          </div>
                        </div>
                      </th>
                      <td className="fs-9">
                        <div className="d-flex flex-column">
                          <span>+ 9000000000</span>
                          <span className="light-text">melody@altbox.com</span>
                        </div>
                      </td>
                      <td className="fs-9 ">
                        <span>
                          <EditIcon className="fs-8 me-2 text-light" />
                        </span>
                        <span>
                          <DeleteIcon className="fs-8 text-light" />
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" className="fs-9">
                        <div className="d-flex ">
                          <div
                            className="rounded bg-primary bg-opacity-10"
                            style={{ width: "40px", height: "40px" }}
                          ></div>
                          <div className="ps-2">
                            <div className="fs-7">Order User Name 01</div>
                            <div>
                              <span className="fs-10 me-2 light-text">
                                Family
                              </span>
                            </div>
                          </div>
                        </div>
                      </th>
                      <td className="fs-9">
                        <div className="d-flex flex-column">
                          <span>+ 9000000000</span>
                          <span className="light-text">melody@altbox.com</span>
                        </div>
                      </td>
                      <td className="fs-9 ">
                        <span>
                          <EditIcon className="fs-8 me-2 text-light" />
                        </span>
                        <span>
                          <DeleteIcon className="fs-8 text-light" />
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <h className="fs-7">Media Templates for Shared user ( 4 )</h>{" "}
              <p className="fs-10 light-text">
                Notifications Sent Mail & Mobile to Selected users
              </p>
            </div>
            {/* discout */}
            <div className="Discount bg-white p-3 mt-2">
              <h className="fs-7">Reseller Discount</h>
              <div>
                <span className="text-success fs-10">
                  Reseller Coupan Success
                </span>
                <span className="fs-8"> / </span>
                <span className="text-danger fs-10">Not Valid Coupan Code</span>
              </div>
            </div>
          </Grid>
          {/* video content  */}
          <Grid size={{ xs: 12, md: 4 }} className=" ">
            <div className="bg-white p-4 rounded">
              <ul className="video-content-ul p-0 m-0 rounded">
                <li>
                  <span>MRP</span>
                  <span>$ 650.00</span>
                </li>
                <li>
                  <span>No Of Shared Users</span>
                  <span>x4</span>
                </li>
                <li>
                  <span>Subtotal</span>
                  <span>$ 1800.00</span>
                </li>
                <li>
                  <span>Reseller Discounts - 10 %</span>
                  <span>$ -180.00</span>
                </li>
                <li>
                  <span>Tax (18%)</span>
                  <span>$ 324.00</span>
                </li>

                <li>
                  <span>Meida Duratation</span>
                  <span>Trailor | 45 Sec</span>
                </li>
                <li>
                  <span className="fs-2">Total</span>
                  <span className="fs-2">$1944.00</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 mt-2">
              <p>Payment Method</p>
              <div className="justify-content-between">
                <div className="select-cards d-flex justify-content-evenly gap-4 ">
                  {/* All Cards */}
                  <div className="select-cards-info editiable-cards-container-box d-flex flex-column text-center cursor-pointer">
                    <h5 className="p-0 m-1 fs-8 text-black-50">PAYTM</h5>
                    <p className="p-0 m-0 fs-10 light-text">UPI Payment</p>
                  </div>
                  {/* Indival Card */}
                  <div className="select-cards-info editiable-cards-container-box d-flex flex-column text-center mu-4">
                    <h5 className="p-0 m-1 fs-8 text-black-50">Credit Zone</h5>
                    <p className="p-0 m-0 fs-10 light-text">Truest Partners</p>
                  </div>
                </div>
              </div>
              <Button
                variant="contained"
                className="w-100 mt-4 bg-success"
                size="small"
              >
                Proceed to Payment
              </Button>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Confirmorder;
