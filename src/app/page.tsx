import "@styles/globals.css";
import dynamic from "next/dynamic";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Signup from "./auth/signup/page";
import HomePage from "./bookr/page";
import { green, lime, purple } from "@mui/material/colors";
import { Typography } from "@mui/material";
import { theme } from "./components/theme";
import { AuthProvider, useAuth } from "./components/authProvider";
import DashBoard from "./bookr/dashboard/page";
import { AbilityProvider, useAbility } from "./components/abilityProvider";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { defineAbilitiesFor } from "@/hooks/defineAbilities";

export default function Home() {
  const {role} = useAuth();
  const router = useRouter(); 
  const ability = useAbility();
  return (
    <>
     <AbilityProvider ability={ability.ability}>
        <ThemeProvider theme={theme}>
          <HomePage path="">
            <DashBoard />
          </HomePage>
        </ThemeProvider>
        </AbilityProvider>
    </>
  );
}
