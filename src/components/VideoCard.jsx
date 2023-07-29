import { Link } from "react-router-dom";
import {
  Typography,
  Card,
  CardContent,
  CardMedia,
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
import { RemoveFromQueue, ThumbUp, WatchLater } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { addWatchLaterVideos, removeWatchLaterVideos } from "../Features/watchLaterSlice";

const VideoCard = ({ video }) => {
  const watchLaterVideosData = useSelector((state) => state.reducer.watchLater);
  const dispatch = useDispatch();
  console.log("videoCard", watchLaterVideosData);
  const {
    id: { videoId },
    snippet,
  } = video;
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
          {watchLaterVideosData.includes(video) ? (
            <Tooltip title="Remove from watch later">
              <IconButton
                onClick={() => {
                  dispatch(removeWatchLaterVideos(video));
                }}
              >
                <RemoveFromQueue />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="watch later">
              <IconButton
                onClick={() => {
                  dispatch(addWatchLaterVideos(video));
                }}
              >
                <WatchLater />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
