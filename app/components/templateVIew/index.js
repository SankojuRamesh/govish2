"use client";
import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid2";
import { Container } from "@mui/material";
import SubCategory from "../category/subCategory";
import InvitationCard from "./invitationCard";
import Button from '@mui/material/Button';
const TemplateView = () => {
    return (
        <>
            <Container className="main-container lt-100" >
            <Grid container>
            <Grid>
                            <h3 className="fs-5">Templete View</h3>
                            <p className="fs-9 light-text">Home - Templete Details overview</p>
                        </Grid>
            </Grid>

                    <Grid container spacing={1} >
                   

                    {/* video */}
                    <Grid size={{ xs: 12, md:8}}>
                    <iframe class="embed-responsive-item card-rounded h-450px w-100" src="https://www.youtube.com/embed/TWdDZYNqlg4" allowfullscreen="allowfullscreen"></iframe>
                    </Grid> 
                     {/* video content  */}
                    <Grid size={{ xs: 12, md:4}} className="bg-white p-4">
                       <ul className="video-content-ul p-0 m-0">
                        <li>
                            <span>Templete Meida Informations	</span>
                            <span>View</span>
                        </li>
                        <li>
                            <span>Type Of Meida Source	</span>
                            <span>AEAR</span>
                        </li>
                        <li>
                            <span>Type Of Meida Templete</span>
                            <span>Video / Image</span>
                        </li>
                        <li>
                            <span>Type Of Meida Size</span>
                            <span>Landscape [ 16 : 9 ]</span>
                        </li>
                        <li>
                            <span>Media Tag	</span>
                            <span>Hindus</span>
                        </li>
                        <li>
                            <span>Media variations	</span>
                            <span>Modren</span>
                        </li>

                        <li>
                            <span>Meida Duratation</span>
                            <span>Trailor | 45 Sec</span>
                        </li>
                        <li>
                            <div className="d-flex flex-column">
                            <span className="text-black font-bold">Design Templete 0001</span>
                            <span className="light-text">WDI000000001</span>
                            </div>
                            {/*  */}
                            <div className="d-flex flex-column justify-content-end align-items-end">
                            <span className="fs-6">200.00</span>
                      <div>
                      <span className="fs-10">MRP</span> <span className="fs-9">10000.00</span><span className="fs-9 ml-2"> [ 80% Off]</span>
                      </div>
                            </div>
                        </li>
                        <li>
                           <div className="d-flex justify-content-between gap-4">
                            <span>
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="light-text">
                            <path d="M18.3721 4.65439C17.6415 4.23815 16.8052 4 15.9142 4C14.3444 4 12.9339 4.73924 12.003 5.89633C11.0657 4.73913 9.66 4 8.08626 4C7.19611 4 6.35789 4.23746 5.62804 4.65439C4.06148 5.54462 3 7.26056 3 9.24232C3 9.81001 3.08941 10.3491 3.25153 10.8593C4.12155 14.9013 9.69287 20 12.0034 20C14.2502 20 19.875 14.9013 20.7488 10.8593C20.9109 10.3491 21 9.81001 21 9.24232C21.0007 7.26056 19.9383 5.54462 18.3721 4.65439Z" fill="currentColor"></path>
                            </svg>
                            </span>
                            <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="light-text">
                            <rect opacity="0.3" x="12.75" y="4.25" width="12" height="2" rx="1" transform="rotate(90 12.75 4.25)" fill="currentColor"></rect>
                            <path d="M12.0573 6.11875L13.5203 7.87435C13.9121 8.34457 14.6232 8.37683 15.056 7.94401C15.4457 7.5543 15.4641 6.92836 15.0979 6.51643L12.4974 3.59084C12.0996 3.14332 11.4004 3.14332 11.0026 3.59084L8.40206 6.51643C8.0359 6.92836 8.0543 7.5543 8.44401 7.94401C8.87683 8.37683 9.58785 8.34458 9.9797 7.87435L11.4427 6.11875C11.6026 5.92684 11.8974 5.92684 12.0573 6.11875Z" fill="currentColor"></path>
                            <path opacity="0.3" d="M18.75 8.25H17.75C17.1977 8.25 16.75 8.69772 16.75 9.25C16.75 9.80228 17.1977 10.25 17.75 10.25C18.3023 10.25 18.75 10.6977 18.75 11.25V18.25C18.75 18.8023 18.3023 19.25 17.75 19.25H5.75C5.19772 19.25 4.75 18.8023 4.75 18.25V11.25C4.75 10.6977 5.19771 10.25 5.75 10.25C6.30229 10.25 6.75 9.80228 6.75 9.25C6.75 8.69772 6.30229 8.25 5.75 8.25H4.75C3.64543 8.25 2.75 9.14543 2.75 10.25V19.25C2.75 20.3546 3.64543 21.25 4.75 21.25H18.75C19.8546 21.25 20.75 20.3546 20.75 19.25V10.25C20.75 9.14543 19.8546 8.25 18.75 8.25Z" fill="currentColor"></path>
                            </svg>
                            </span>
                            <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="light-text">
                            <path opacity="0.3" d="M18.041 22.041C18.5932 22.041 19.041 21.5932 19.041 21.041C19.041 20.4887 18.5932 20.041 18.041 20.041C17.4887 20.041 17.041 20.4887 17.041 21.041C17.041 21.5932 17.4887 22.041 18.041 22.041Z" fill="currentColor"></path>
                            <path opacity="0.3" d="M6.04095 22.041C6.59324 22.041 7.04095 21.5932 7.04095 21.041C7.04095 20.4887 6.59324 20.041 6.04095 20.041C5.48867 20.041 5.04095 20.4887 5.04095 21.041C5.04095 21.5932 5.48867 22.041 6.04095 22.041Z" fill="currentColor"></path>
                            <path opacity="0.3" d="M7.04095 16.041L19.1409 15.1409C19.7409 15.1409 20.141 14.7409 20.341 14.1409L21.7409 8.34094C21.9409 7.64094 21.4409 7.04095 20.7409 7.04095H5.44095L7.04095 16.041Z" fill="currentColor"></path>
                            <path d="M19.041 20.041H5.04096C4.74096 20.041 4.34095 19.841 4.14095 19.541C3.94095 19.241 3.94095 18.841 4.14095 18.541L6.04096 14.841L4.14095 4.64095L2.54096 3.84096C2.04096 3.64096 1.84095 3.04097 2.14095 2.54097C2.34095 2.04097 2.94096 1.84095 3.44096 2.14095L5.44096 3.14095C5.74096 3.24095 5.94096 3.54096 5.94096 3.84096L7.94096 14.841C7.94096 15.041 7.94095 15.241 7.84095 15.441L6.54096 18.041H19.041C19.641 18.041 20.041 18.441 20.041 19.041C20.041 19.641 19.641 20.041 19.041 20.041Z" fill="currentColor"></path>
                            </svg>
                            </span>
                           </div>
{/* button */}
                           <div>
                           <Button variant="contained" disableElevation>
                           Edit Templete
                            </Button>
                           </div>
                        </li>

                  

                        
                       </ul>
                    </Grid>
                    </Grid>
                <Grid container spacing={1} className="mt-4 ">
                    <Grid size={{ xs: 12, md:6 }}>
                        <h6 className="mb-0 text-black ">Recomened Varations Templetes</h6>
                    </Grid>
                    <Grid size={{ xs: 12, md:6  }} className="">
                        <p className="mb-0 text-black  d-flex justify-content-end align-items-end fs-9 mb-0">More View</p>
                    </Grid>
                </Grid>

                <Grid container spacing={1} className="mt-4 "> 
                <InvitationCard />
                    <InvitationCard />
                    <InvitationCard />
                </Grid>

            </Container>
        </>
    );
};
export default TemplateView;