import React, { useState } from "react";
import { IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode"; // Sun icon
import DarkModeIcon from "@mui/icons-material/DarkMode"; // Moon icon

const ThemeToggler = ({ darkMode, setDarkMode }) => {
  return (
    <IconButton
      onClick={() =>
        setDarkMode((prevState) => (prevState === true ? false : true))
      }
      sx={{ color: darkMode ? "white" : "black" }}
    >
      {darkMode === false ? <DarkModeIcon /> : <LightModeIcon />}
    </IconButton>
  );
};

export default ThemeToggler;
