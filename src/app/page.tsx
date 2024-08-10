import "@styles/globals.css";
import dynamic from "next/dynamic";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Signup from "./auth/signup/page";
import HomePage from "./bookr/page";
import { lime, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: lime,
    secondary: purple,
  },
});
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
