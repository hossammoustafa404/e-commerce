import { createTheme } from "@mui/material";

const customTheme = createTheme({
  palette: {
    navbar: "#203040",
    background: "#fafafa",
    cardBgColor: "#ffffff",
    activeStar: "#ffb400",
    inActiveStar: "#bdbdbd",
    search: "#f8c040",
    activeSwipper: "#494949",
    inActiveSwipper: "#afafaf",
    white: "#f9f9f9",
  },
  typography: {
    h1: {
      fontSize: 28,
    },
    h2: {
      fontSize: 20,
    },
  },
});

export default customTheme;
