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
              top: 40,
              left: 10,
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              color: "#fff",
              padding: "4px 8px",
              borderRadius: "4px",
              fontSize: "10px",
            }}
          >
            $500.00 MRP $1000.00 [50% OFF]
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
          >
            landscape [16:9]
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
            <Box className="p-1 text-white bg-dark rounded-2 bg-opacity-50 d-flex gap-2">
              <IconButton
                onClick={() => setIsMuted(!isMuted)}
                className="p-0 text-white"
              >
                {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
              </IconButton>
              <Typography className="p-0 text-white mb-0">
                {isHovered ? currentTime : duration}
              </Typography>
            </Box>
            <Box className="d-flex gap-2">
              <IconButton className="p-1 text-white bg-dark rounded-2 bg-opacity-50">
                <ShareIcon className="fs-5" />
              </IconButton>
              <IconButton className="p-1 text-white bg-dark rounded-2 bg-opacity-50">
                <FavoriteBorderIcon />
              </IconButton>
              <IconButton className="p-1 text-white bg-dark rounded-2 bg-opacity-50">
                <FullscreenIcon />
              </IconButton>
            </Box>
          </Box>
        </Card>
      </Grid>
    </>
  );
};

export default InvitationCard;
