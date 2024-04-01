import { Box } from "@mui/material";
import React from "react";
import "./Navbar.css";
import { XFlixLogo } from "./XflixLogo";
import { SearchBar } from "./SearchBar";
import UploadModal from "./UploadModal";

const Navbar = ({ search, setSearch, performSearch }) => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <XFlixLogo />
      <SearchBar
        search={search}
        setSearch={setSearch}
        performSearch={performSearch}
      />
      <Box>
        <UploadModal />
      </Box>
    </Box>
  );
};

export default Navbar;
