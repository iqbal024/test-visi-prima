import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Inter, sans-serif",
  },
  shadows: ["none"],
  palette: {
    primary: {
      main: "#007FFF",
    },
    secondary: {
      main: "#FD635E",
    },
    blue: {
      main: "#4723d9",
    },
    danger: {
      main: "#FF4841",
    },
    white: {
      main: "#FFFFFF",
    },
    black: {
      main: "#000000",
    },
  },
});

export default theme;
