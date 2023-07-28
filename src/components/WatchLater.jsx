import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Videos } from "./";

const WatchLater = () => {
  const watchLaterVideos = useSelector((state) => state.reducer.watchLater);
  console.log(watchLaterVideos);
  return (
    <Box
      p={2}
      minHeight="95vh"
      display="flex"
      justifyContent="center"
      flexDirection="column"
    >
      <Typography
        variant="h4"
        fontWeight={900}
        color="white"
        mb={3}
        ml={{ sm: "100px" }}
        display="flex"
        justifyContent="center"
      >
        <span style={{ color: "#FC1503" }}>WatchLater</span> videos
      </Typography>
      {/* <Box>
        {watchLaterVideos.map((item) => (
          <h2 style={{ color: "white" }}>{item.id.videoId}</h2>
        ))}
      </Box> */}
      <Box display="flex">{<Videos videos={watchLaterVideos} />}</Box>
    </Box>
  );
};

export default WatchLater;
