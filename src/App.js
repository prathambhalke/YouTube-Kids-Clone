import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
  Feed,
  LoginPage,
  Signup,
  UserProfile,
} from "./components";
import { AuthProvider } from "./utils/AuthContext";
import ProtectedRoute from "./utils/ProtectedRoute";
import { backgroundImg } from "./utils/constants";

const App = () => (
  <BrowserRouter>
    <AuthProvider>
      <Box
        sx={{
          background: `url(${backgroundImg})`,
          height: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "repeat-y",
          backgroundAttachment: "fixed",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route
            exact
            path="/"
            element={<ProtectedRoute path="/" element={<Feed />} />}
          />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </AuthProvider>
  </BrowserRouter>
);

export default App;
