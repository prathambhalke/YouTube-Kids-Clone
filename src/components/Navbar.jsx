import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo, kidProfile } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack
    zIndex="2"
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#000",
      top: 0,
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <span color="red">
        <img src={logo} alt="logo" height={55} /> Youtube Kids
      </span>
    </Link>
    <SearchBar />
    <div
      style={{ border: "1.5px solid red", borderRadius: "50%", padding: "5px" }}
    >
      <img src={kidProfile} alt="kidProfile" height={40} />
    </div>
  </Stack>
);

export default Navbar;
