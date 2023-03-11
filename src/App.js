import { CssBaseline, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import getProducts from "./api/productsApi";
import customTheme from "./customTheme";
import { Navbar } from "./global";
import { Home } from "./pages";

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
      <CssBaseline />
      <Navbar />
      <Routes>
        <Route path="/" element=<Home /> />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
