"use client";
import { AppBar, Box, Typography } from "@mui/material";
import Content from "./dashboard/page";
import Layout from "./Layout";

export default function HomePage({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Box display="flex">
      <Layout />
      <AppBar
        style={{
          width: "80%",
          marginTop: 2,
          backgroundColor:"white",
          padding: 8,
          borderRadius:1,
        }}>
          <Typography color="black" fontSize={14}>Admin/Dashboard</Typography>
      </AppBar>
      {children}
    </Box>
  );
}
