import { createTheme, colors, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#213555",
    },
    secondary: {
      main: "#c6ff00",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
});

export default function ThemeConfigProvider({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
