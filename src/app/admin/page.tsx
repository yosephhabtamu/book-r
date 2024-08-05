"use client";
import { Box } from "@mui/material";
import Content from "./content";
import DrawerComponent from "./drawer";

export default function AdminDashboard() {
  return (
    <Box display="flex" >
      <DrawerComponent />
      <Content />
    </Box>
  );
}
