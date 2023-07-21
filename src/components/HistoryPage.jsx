import { Grid, Typography } from "@mui/material";
import React from "react";

const HistoryPage = () => {
  return (
    <Grid container style={{ background: "#000", height: "100vh" }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "blue" }}>
        <span style={{ color: "#FC1503" }}>History</span>
      </Typography>
    </Grid>
  );
};

export default HistoryPage;
