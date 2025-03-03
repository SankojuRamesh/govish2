import React, { useState, useRef } from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import VolumeOffIcon from "@mui/icons-material/VolumeOff";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShareIcon from "@mui/icons-material/Share";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import Grid from "@mui/material/Grid2";

const InvitationCard = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [duration, setDuration] = useState("00:00"); // Total duration of the video
  const [currentTime, setCurrentTime] = useState("00:00"); // Current playtime of the video
  const videoRef = useRef(null);

  // Format time into "mm:ss"
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  // Handle video metadata loading
  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(formatTime(videoRef.current.duration));
    }
  };

  // Handle time updates during video play
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(formatTime(videoRef.current.currentTime));
    }
  };

  // Play video on hover
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.muted = isMuted; // Ensure the video is muted
      videoRef.current.play();
    }
  };

  // Pause video on hover out
  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      setCurrentTime(duration); // Reset to total duration
    }
  };

  return (
    <>
      <Grid size={{ md: 4, sm: 6, xs: 12 }}>
        <Card
          sx={{
            position: "relative",
            overflow: "visible",
            cursor: "pointer",
            height: "180px",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="shadow-none"
        >
          {/* Media Section - Image or Video based on hover */}
          {isHovered ? (
            <video
              ref={videoRef}
              muted={isMuted}
              loop
              onLoadedMetadata={handleLoadedMetadata}
              onTimeUpdate={handleTimeUpdate}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            >
              <source src="./videos/Video_02.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <CardMedia
              component="img"
              image="./images/grapes.jpg" // Replace with the actual image URL
              alt="Card Video"
              sx={{
                borderRadius: "4px",
                height: "180px",
                objectFit: "cover",
              }}
            />
          )}

          {/* Title Overlay */}
          <Box
            sx={{
              position: "absolute",
              top: 10,
              left: 10,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "#fff",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "10px",
            }}
          >
            CARD VIDEO TITLE NAME
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "#fff",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "10px",
            }}
            className="btn btn-danger btn-sm fs-10"
          >
            Failed
          </Box>

          <Box
            sx={{
              position: "absolute",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "8px 16px",
              width: "100%",
              bottom: "0",
              zIndex: "2",
            }}
          >
            <div className="d-flex justify-content-between align-items-center w-100">
              <div>
                <p className="m-0 text-white fs-10">Start</p>
                <p className="m-0 text-white fs-10">7:30 AM 22-10-2024</p>
              </div>
              <div>
                <p className="m-0 text-white fs-10">End</p>
                <p className="m-0 text-white fs-10">7:30 AM 22-10-2024</p>
              </div>
              <div>
                <p className="m-0 text-white fs-10">ESTIMATED TIME</p>
                <p className="m-0 text-white fs-10">7:30 AM 22-10-2024</p>
              </div>
            </div>
          </Box>
        </Card>
      </Grid>
    </>
  );
};

export default InvitationCard;
