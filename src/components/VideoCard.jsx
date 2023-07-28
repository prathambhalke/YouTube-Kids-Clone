import React from "react";
import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Tooltip,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";
import { ThumbUp, WatchLater } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { watchLaterVideos } from "../Features/watchLaterSlice";

const VideoCard = ({ video }) => {
  const {
    id: { videoId },
    snippet,
  } = video;
  // let videoId = video.video.id.videoId;
  // let snippet = video.video.snippet.channelId;
  // console.log("videoId", videoId);
  // console.log("snippet", snippet);
  // console.log("video", video);

  const dispatch = useDispatch();
  return (
    <Card
      className="card"
      sx={{
        width: { xs: "100%", sm: "358px", md: "320px" },
        boxShadow: "none",
        borderRadius: 0,
      }}
    >
      <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={snippet?.title}
          sx={{ width: { xs: "100%", sm: "358px" }, height: 180 }}
        />
      </Link>
      <CardContent
        sx={{ display: "grid", backgroundColor: "#1E1E1E", height: "6rem" }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
            {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link
          to={
            snippet?.channelId
              ? `/channel/${snippet?.channelId}`
              : demoChannelUrl
          }
        >
          <Typography variant="subtitle2" color="gray">
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon
              sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
            />
          </Typography>
        </Link>
        <div style={{ display: "flex" }}>
          <Tooltip title="like video">
            <IconButton>
              <ThumbUp style={{ color: "red" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="watch later">
            <IconButton
              onClick={() => {
                dispatch(watchLaterVideos(video));
              }}
            >
              <WatchLater />
            </IconButton>
          </Tooltip>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
