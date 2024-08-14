import "@styles/globals.css";
import dynamic from "next/dynamic";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Signup from "./auth/signup/page";
import HomePage from "./bookr/page";
import { green, lime, purple } from '@mui/material/colors';
import { Typography } from "@mui/material";
import { theme } from "./components/theme";

//TODO: get the user profile and handle the permission here.
export default function Home() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HomePage path="" children />
      </ThemeProvider>
    </>
  );
}
