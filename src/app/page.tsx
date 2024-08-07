import "@styles/globals.css";
import dynamic from "next/dynamic";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Signup from "./auth/signup/page";
import HomePage from "./bookr/page";
import { ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#171b36",
      light: "#45495e",
    },
    secondary: {
      main: "#316aa7",
    },
  },
};
const theme = createTheme(themeOptions);
//TODO: get the user profile and handle the permission here.
export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HomePage children />
      </ThemeProvider>
    </>
  );
}
