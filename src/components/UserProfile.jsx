import React from "react";
import { Avatar, Typography, Box, Divider, Grid } from "@mui/material";

const styles = {
  root: {
    display: "flex",
    alignItems: "center",
    padding: "16px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
    height: "80vh",
  },
  avatar: {
    marginRight: "16px",
  },
  username: {
    fontWeight: "bold",
    color: "white",
  },
};

const UserProfile = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={8}>
        <Box style={styles.root}>
          <Avatar
            alt="User Avatar"
            src="/path/to/avatar.jpg"
            style={styles.avatar}
          />
          <Box>
            <Typography variant="h6" style={styles.username}>
              John Doe
            </Typography>
            <Typography variant="body2" color="red">
              YouTube Kids User
            </Typography>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box>
            {/* Additional user information */}
            {/* ... */}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default UserProfile;
