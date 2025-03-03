"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Login from "../Login";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Container, Drawer } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ComputerIcon from "@mui/icons-material/Computer";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import axios from "axios";
import SignUp from "../SignUp";

const MyVideos = () => {
  const [data, setData] = useState([]);
  const [userdetails, setuserdetails] = useState(true);

  useEffect(() => {
    axios
      .get("https://gowish.thevfx.studio/categories/")
      .then((response) => setData(response.data.results))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [userdata, setUserData] = React.useState(null);
  const userinfo = Boolean(userdata);
  const handleUserClick = (event) => {
    setUserData(event.currentTarget);
  };
  const handleUserClose = () => {
    setUserData(null);
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
    ...theme.applyStyles("dark", {
      backgroundColor: "#1A2027",
    }),
  }));

  const menuItems = [
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M22 8.20267V15.7027C22 19.1027 19.2 22.0026 15.7 22.0026H8.2C4.8 22.0026 2 19.2027 2 15.7027V8.20267C2 4.80267 4.8 2.0026 8.2 2.0026H15.7C19.2 1.9026 22 4.70267 22 8.20267ZM12 7.30265C9.5 7.30265 7.39999 9.40262 7.39999 11.9026C7.39999 14.4026 9.5 16.5026 12 16.5026C14.5 16.5026 16.6 14.4026 16.6 11.9026C16.6 9.30262 14.5 7.30265 12 7.30265ZM17.9 5.0026C17.3 5.0026 16.9 5.4026 16.9 6.0026C16.9 6.6026 17.3 7.0026 17.9 7.0026C18.5 7.0026 18.9 6.6026 18.9 6.0026C18.9 5.5026 18.4 5.0026 17.9 5.0026Z"
            fill="currentColor"
          ></path>
          <path
            d="M12 17.5026C8.9 17.5026 6.39999 15.0026 6.39999 11.9026C6.39999 8.80259 8.9 6.30261 12 6.30261C15.1 6.30261 17.6 8.80259 17.6 11.9026C17.6 15.0026 15.1 17.5026 12 17.5026ZM12 8.30261C10 8.30261 8.39999 9.90259 8.39999 11.9026C8.39999 13.9026 10 15.5026 12 15.5026C14 15.5026 15.6 13.9026 15.6 11.9026C15.6 9.90259 14 8.30261 12 8.30261Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      text: "Logout",
      linkto: "",
    },
    {
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M22 12C22 13.8 21.5 15.5 20.7 17L14.9 7H20.7C21.5 8.5 22 10.2 22 12ZM3.3 7L6.2 12L12 2C8.3 2 5.1 4 3.3 7ZM3.3 17C5 20 8.3 22 12 22L14.9 17H3.3Z"
            fill="currentColor"
          ></path>
          <path
            d="M20.7 7H9.2L12.1 2C15.7 2 18.9 4 20.7 7ZM3.3 7C2.4 8.5 2 10.2 2 12C2 13.8 2.5 15.5 3.3 17H9.10001L3.3 7ZM17.8 12L12 22C15.7 22 18.9 20 20.7 17L17.8 12Z"
            fill="currentColor"
          ></path>
        </svg>
      ),
      text: "OverView",
      linkto: "/over-view",
    },
    {
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.34375 3.9463V15.2178C1.34375 16.119 2.08105 16.8563 2.98219 16.8563H8.65093V19.4594H6.15702C5.38853 19.4594 4.75981 19.9617 4.75981 20.5757V21.6921H19.2403V20.5757C19.2403 19.9617 18.6116 19.4594 17.8431 19.4594H15.3492V16.8563H21.0179C21.919 16.8563 22.6562 16.119 22.6562 15.2178V3.9463C22.6562 3.04516 21.9189 2.30786 21.0179 2.30786H2.98219C2.08105 2.30786 1.34375 3.04516 1.34375 3.9463ZM12.9034 9.9016C13.241 9.98792 13.5597 10.1216 13.852 10.2949L15.0393 9.4353L15.9893 10.3853L15.1297 11.5727C15.303 11.865 15.4366 12.1837 15.523 12.5212L16.97 12.7528V13.4089H13.9851C13.9766 12.3198 13.0912 11.4394 12 11.4394C10.9089 11.4394 10.0235 12.3198 10.015 13.4089H7.03006V12.7528L8.47712 12.5211C8.56345 12.1836 8.69703 11.8649 8.87037 11.5727L8.0107 10.3853L8.96078 9.4353L10.148 10.2949C10.4404 10.1215 10.759 9.98788 11.0966 9.9016L11.3282 8.45467H12.6718L12.9034 9.9016ZM16.1353 7.93758C15.6779 7.93758 15.3071 7.56681 15.3071 7.1094C15.3071 6.652 15.6779 6.28122 16.1353 6.28122C16.5926 6.28122 16.9634 6.652 16.9634 7.1094C16.9634 7.56681 16.5926 7.93758 16.1353 7.93758ZM2.71385 14.0964V3.90518C2.71385 3.78023 2.81612 3.67796 2.94107 3.67796H21.0589C21.1839 3.67796 21.2861 3.78023 21.2861 3.90518V14.0964C15.0954 14.0964 8.90462 14.0964 2.71385 14.0964Z"
            fill="currentColor"
          ></path>{" "}
        </svg>
      ),
      text: "My Templetes ",
      linkto: "/my-templete",
    },
    {
      icon: (
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            enable-background="new 0 0 24 24"
            height="24px"
            viewBox="0 0 24 24"
            width="24px"
            fill="#5985E1"
          >
            <g>
              <rect fill="none" height="24" width="24"></rect>
            </g>
            <g>
              <path d="M20,2H4C3,2,2,2.9,2,4v3.01C2,7.73,2.43,8.35,3,8.7V20c0,1.1,1.1,2,2,2h14c0.9,0,2-0.9,2-2V8.7c0.57-0.35,1-0.97,1-1.69V4 C22,2.9,21,2,20,2z M15,14H9v-2h6V14z M20,7H4V4h16V7z"></path>
            </g>
          </svg>{" "}
        </svg>
      ),
      text: "My Assets  ",
      linkto: "/assets-page",
    },

    {
      icon: (
        <span class="svg-icon svg-icon-3x svg-icon-primary mb-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.43 8.56949L10.744 15.1395C10.6422 15.282 10.5804 15.4492 10.5651 15.6236C10.5498 15.7981 10.5815 15.9734 10.657 16.1315L13.194 21.4425C13.2737 21.6097 13.3991 21.751 13.5557 21.8499C13.7123 21.9488 13.8938 22.0014 14.079 22.0015H14.117C14.3087 21.9941 14.4941 21.9307 14.6502 21.8191C14.8062 21.7075 14.9261 21.5526 14.995 21.3735L21.933 3.33649C22.0011 3.15918 22.0164 2.96594 21.977 2.78013C21.9376 2.59432 21.8452 2.4239 21.711 2.28949L15.43 8.56949Z"
              fill="currentColor"
            ></path>
            <path
              opacity="0.3"
              d="M20.664 2.06648L2.62602 9.00148C2.44768 9.07085 2.29348 9.19082 2.1824 9.34663C2.07131 9.50244 2.00818 9.68731 2.00074 9.87853C1.99331 10.0697 2.04189 10.259 2.14054 10.4229C2.23919 10.5869 2.38359 10.7185 2.55601 10.8015L7.86601 13.3365C8.02383 13.4126 8.19925 13.4448 8.37382 13.4297C8.54839 13.4145 8.71565 13.3526 8.85801 13.2505L15.43 8.56548L21.711 2.28448C21.5762 2.15096 21.4055 2.05932 21.2198 2.02064C21.034 1.98196 20.8409 1.99788 20.664 2.06648Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      ),
      text: "My Orders  ",
      linkto: "/order-list",
    },
    {
      icon: (
        <span class="svg-icon svg-icon-3x svg-icon-primary mb-2">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z"
              fill="currentColor"
            ></path>
            <path
              d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      ),
      text: "Processing  ",
      linkto: "/Processing-list",
    },
    {
      icon: (
        <span class="svg-icon svg-icon-3x svg-icon-primary ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21 6.30005C20.5 5.30005 19.9 5.19998 18.7 5.09998C17.5 4.99998 14.5 5 11.9 5C9.29999 5 6.29998 4.99998 5.09998 5.09998C3.89998 5.19998 3.29999 5.30005 2.79999 6.30005C2.19999 7.30005 2 8.90002 2 11.9C2 14.8 2.29999 16.5 2.79999 17.5C3.29999 18.5 3.89998 18.6001 5.09998 18.7001C6.29998 18.8001 9.29999 18.8 11.9 18.8C14.5 18.8 17.5 18.8001 18.7 18.7001C19.9 18.6001 20.5 18.4 21 17.5C21.6 16.5 21.8 14.9 21.8 11.9C21.8 9.00002 21.5 7.30005 21 6.30005ZM9.89999 15.7001V8.20007L14.5 11C15.3 11.5 15.3 12.5 14.5 13L9.89999 15.7001Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      ),
      text: "My  Videos  ",
      linkto: "/my-videos",
    },
    {
      icon: (
        <span class="svg-icon svg-icon-3x svg-icon-primary ">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M16.5 9C16.5 13.125 13.125 16.5 9 16.5C4.875 16.5 1.5 13.125 1.5 9C1.5 4.875 4.875 1.5 9 1.5C13.125 1.5 16.5 4.875 16.5 9Z"
              fill="currentColor"
            ></path>
            <path
              d="M9 16.5C10.95 16.5 12.75 15.75 14.025 14.55C13.425 12.675 11.4 11.25 9 11.25C6.6 11.25 4.57499 12.675 3.97499 14.55C5.24999 15.75 7.05 16.5 9 16.5Z"
              fill="currentColor"
            ></path>
            <rect
              x="7"
              y="6"
              width="4"
              height="4"
              rx="2"
              fill="currentColor"
            ></rect>
          </svg>
        </span>
      ),
      text: "My Users ",
      linkto: "/users-list",
    },

    {
      icon: (
        <span class="svg-icon svg-icon-3x svg-icon-primary ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z"
              fill="currentColor"
            ></path>
            <path
              d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      ),
      text: "My Billing  ",
      linkto: "/my-billing",
    },

    {
      icon: (
        <span class="svg-icon svg-icon-3x svg-icon-primary ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M22.1 11.5V12.6C22.1 13.2 21.7 13.6 21.2 13.7L19.9 13.9C19.7 14.7 19.4 15.5 18.9 16.2L19.7 17.2999C20 17.6999 20 18.3999 19.6 18.7999L18.8 19.6C18.4 20 17.8 20 17.3 19.7L16.2 18.9C15.5 19.3 14.7 19.7 13.9 19.9L13.7 21.2C13.6 21.7 13.1 22.1 12.6 22.1H11.5C10.9 22.1 10.5 21.7 10.4 21.2L10.2 19.9C9.4 19.7 8.6 19.4 7.9 18.9L6.8 19.7C6.4 20 5.7 20 5.3 19.6L4.5 18.7999C4.1 18.3999 4.1 17.7999 4.4 17.2999L5.2 16.2C4.8 15.5 4.4 14.7 4.2 13.9L2.9 13.7C2.4 13.6 2 13.1 2 12.6V11.5C2 10.9 2.4 10.5 2.9 10.4L4.2 10.2C4.4 9.39995 4.7 8.60002 5.2 7.90002L4.4 6.79993C4.1 6.39993 4.1 5.69993 4.5 5.29993L5.3 4.5C5.7 4.1 6.3 4.10002 6.8 4.40002L7.9 5.19995C8.6 4.79995 9.4 4.39995 10.2 4.19995L10.4 2.90002C10.5 2.40002 11 2 11.5 2H12.6C13.2 2 13.6 2.40002 13.7 2.90002L13.9 4.19995C14.7 4.39995 15.5 4.69995 16.2 5.19995L17.3 4.40002C17.7 4.10002 18.4 4.1 18.8 4.5L19.6 5.29993C20 5.69993 20 6.29993 19.7 6.79993L18.9 7.90002C19.3 8.60002 19.7 9.39995 19.9 10.2L21.2 10.4C21.7 10.5 22.1 11 22.1 11.5ZM12.1 8.59998C10.2 8.59998 8.6 10.2 8.6 12.1C8.6 14 10.2 15.6 12.1 15.6C14 15.6 15.6 14 15.6 12.1C15.6 10.2 14 8.59998 12.1 8.59998Z"
              fill="currentColor"
            ></path>
            <path
              d="M17.1 12.1C17.1 14.9 14.9 17.1 12.1 17.1C9.30001 17.1 7.10001 14.9 7.10001 12.1C7.10001 9.29998 9.30001 7.09998 12.1 7.09998C14.9 7.09998 17.1 9.29998 17.1 12.1ZM12.1 10.1C11 10.1 10.1 11 10.1 12.1C10.1 13.2 11 14.1 12.1 14.1C13.2 14.1 14.1 13.2 14.1 12.1C14.1 11 13.2 10.1 12.1 10.1Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      ),
      text: "Profile Setting",
      linkto: "/profile-details",
    },

    {
      icon: (
        <span class="svg-icon svg-icon-3x svg-icon-primary ">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z"
              fill="currentColor"
            ></path>
            <path
              opacity="0.3"
              d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </span>
      ),
      text: "Media Setting",
      linkto: "/media-settings",
    },
  ];

  // template maping

  const steps = [
    {
      id: 1,
      label: "All Templetes",
      description: "Captions",
      imageUrl:
        "https://images.pexels.com/photos/548084/pexels-photo-548084.jpeg",
      linkTag: "/latest-Templete",
    },
    {
      id: 2,
      label: "Geetings",
      description: "Captions",
      imageUrl:
        "https://images.pexels.com/photos/548084/pexels-photo-548084.jpeg",
      linkTag: "/latest-Templete",
    },
    {
      id: 3,
      label: "Promations",
      description: "Captions",
      imageUrl:
        "https://images.pexels.com/photos/789101/pexels-photo-789101.jpeg",
      linkTag: "/latest-Templete",
    },
    {
      id: 4,
      label: "Eployee Brinding",
      description: "Captions",
      imageUrl:
        "https://images.pexels.com/photos/789101/pexels-photo-789101.jpeg",
      linkTag: "/latest-Templete",
    },
    {
      id: 5,
      label: "STEP 03",
      description: "Finalize Designs",
      imageUrl:
        "https://images.pexels.com/photos/789101/pexels-photo-789101.jpeg",
      linkTag: "/latest-Templete",
    },
    // Add more steps as needed
  ];

  // menu

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [openDraw, setOpenDraw] = React.useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpenDraw(newOpen);
  };
  return (
    <>
      <div className="header d-flex justify-centent-center position-fixed w-100 z-1  ">
        <Container>
          <div className="d-flex justify-content-between align-items-center menu-height-fix">
            <div className="flex-row d-flex gap-1">
              <img
                src="./images/logo-light-mode.svg"
                className="h-30px h-lg-30px "
              />
              {/* 1 */}

              {/* 2 */}

              {/* 3 */}

              {data.map((item) => (
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={handleClick}
                    className="light-text"
                  >
                    <span>
                      <ArrowDropDownIcon />
                    </span>
                    <span>{item.category_name}</span>
                  </Button>
                  <Menu
                    className="menuwraper"
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <div className="row">
                      <div className="menu-box">
                        <div className="row p-4">
                          {/* First column */}
                          <div className="col">
                            <div className="v-template-container">
                              {steps.map((step) =>
                                step.linkTag ? ( // Check if linkTag exists
                                  <Link
                                    href={step.linkTag}
                                    key={step.id}
                                    className="v-template d-flex justify-content-start mb-4"
                                  >
                                    <span className="v-template-icon me-3">
                                      <img
                                        src={step.imageUrl}
                                        alt={step.label}
                                      />
                                    </span>
                                    <div className="v-template-info d-flex flex-column justify-content-center">
                                      <p className="fw-medium mb-0 fs-7">
                                        {step.label}
                                      </p>
                                      <p className="mb-0 fs-7 light-text">
                                        {step.description}
                                      </p>
                                    </div>
                                  </Link>
                                ) : (
                                  <div
                                    key={step.id}
                                    className="v-template d-flex justify-content-start mb-4"
                                  >
                                    <span className="v-template-icon me-3">
                                      <img
                                        src={step.imageUrl}
                                        alt={step.label}
                                      />
                                    </span>
                                    <div className="v-template-info d-flex flex-column justify-content-center">
                                      <p className="fw-medium mb-0 fs-7">
                                        {step.label}
                                      </p>
                                      <p className="mb-0 fs-7 light-text">
                                        {step.description}
                                      </p>
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          </div>

                          {/* Second column */}
                          <div className="col">
                            <div className="v-template-container">
                              {steps.map((step) =>
                                step.linkTag ? ( // Check if linkTag exists
                                  <Link
                                    href={step.linkTag}
                                    key={step.id}
                                    className="v-template d-flex justify-content-start mb-4"
                                  >
                                    <span className="v-template-icon me-3">
                                      <img
                                        src={step.imageUrl}
                                        alt={step.label}
                                      />
                                    </span>
                                    <div className="v-template-info d-flex flex-column justify-content-center">
                                      <p className="fw-medium mb-0 fs-7">
                                        {step.label}
                                      </p>
                                      <p className="mb-0 fs-7 light-text">
                                        {step.description}
                                      </p>
                                    </div>
                                  </Link>
                                ) : (
                                  <div
                                    key={step.id}
                                    className="v-template d-flex justify-content-start mb-4"
                                  >
                                    <span className="v-template-icon me-3">
                                      <img
                                        src={step.imageUrl}
                                        alt={step.label}
                                      />
                                    </span>
                                    <div className="v-template-info d-flex flex-column justify-content-center">
                                      <p className="fw-medium mb-0 fs-7">
                                        {step.label}
                                      </p>
                                      <p className="mb-0 fs-7 light-text">
                                        {step.description}
                                      </p>
                                    </div>
                                  </div>
                                )
                              )}
                            </div>
                          </div>

                          {/* Third column */}
                          <div className="col"></div>
                        </div>
                      </div>
                    </div>
                  </Menu>
                </div>
              ))}
            </div>
            <div className="d-flex justify-content-end align-items-center gap-4 right-menu">
              <Link href="/">
                <SearchIcon className="light-text" href="#" />
              </Link>
              <Link href="/my-templete">
                <ComputerIcon className="light-text" href="#" />
              </Link>
              <Link href="/assets-page">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M22 12C22 13.8 21.5 15.5 20.7 17L14.9 7H20.7C21.5 8.5 22 10.2 22 12ZM3.3 7L6.2 12L12 2C8.3 2 5.1 4 3.3 7ZM3.3 17C5 20 8.3 22 12 22L14.9 17H3.3Z"
                    fill="currentColor"
                  ></path>
                  <path
                    d="M20.7 7H9.2L12.1 2C15.7 2 18.9 4 20.7 7ZM3.3 7C2.4 8.5 2 10.2 2 12C2 13.8 2.5 15.5 3.3 17H9.10001L3.3 7ZM17.8 12L12 22C15.7 22 18.9 20 20.7 17L17.8 12Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>
              <Link href="/favourites-templete">
                <FavoriteIcon className="light-text" />
              </Link>
              <a className="user-pic" href="#">
                <img
                  src="https://www.w3schools.com/images/picture.jpg"
                  width={10}
                  alt="user"
                  onClick={handleUserClick}
                />
              </a>
              <Menu
                className="profile-menu"
                id="basic-menu"
                anchorEl={userdata}
                open={userinfo}
                anchor="right"
                onClose={handleUserClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                elevation={0}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
              >
                <List
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    bgcolor: "background.paper",
                  }}
                >
                  <ListItem>
                    <ListItemAvatar>
                      <img
                        src="https://www.w3schools.com/images/picture.jpg"
                        width={50}
                        alt="user"
                        onClick={handleUserClick}
                        className="rounded me-3"
                      />
                    </ListItemAvatar>
                    <ListItemText
                      primary="Online User"
                      secondary="OUID0000001"
                    />
                    <span className="fs-10">Oline User</span>
                  </ListItem>
                </List>
                {menuItems.map((item, index) => (
                  <div key={index} className="fix-profile-menu">
                    <div className="menu-box-fix d-flex justify-content-center align-items-center flex-column">
                      <div className="menu-item d-flex flex-column align-items-center">
                        <Link
                          href={item.linkto}
                          className=" d-flex flex-column align-items-center"
                        >
                          {item.icon}
                          <p className="mb-0 mt-2 fs-7">{item.text}</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </Menu>
              <Button
                variant="contained"
                onClick={toggleDrawer(true)}
                size="small"
              >
                Sign In
              </Button>
              <Drawer
                open={openDraw}
                onClose={toggleDrawer(false)}
                anchor="right"
              >
                {userdetails ? (
                  <Login updateuserdetails={setuserdetails} />
                ) : (
                  <SignUp updateuserdetails={setuserdetails} />
                )}
              </Drawer>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};
export default MyVideos;
