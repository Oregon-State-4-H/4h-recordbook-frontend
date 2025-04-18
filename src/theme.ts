'use client';
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "rgba(51, 153, 102, 1)",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
      // beaverOrange: "#D73F09",
    },
    secondary: {
      main: "#0044ff",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#ffcc00",
      // beaverOrange: "#D73F09",
    },

    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
    background: {
      default: "#f1f4f8",
      paper: "#339966",
    },
    text: {
      secondary: "rgba(0,0,0,1)",
      primary: "rgba(0,0,0,0.87)",
      disabled: "rgba(0, 0, 0, 0.6)",
    },
  },
});

export default theme;