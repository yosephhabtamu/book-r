"use client";

import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React, { ReactNode } from "react";

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <Grid container m={-1} sx={{ height:"100vh", padding:0 }}>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          backgroundColor: "#0A1929",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
      
          <Image
            src="/images/books-white.png"
            alt="Book Rent"
            width={200}
            height={200}
          />
      </Grid>
      <Grid
        item
        xs
        md={6}
        style={{
          backgroundColor: "#FFFFFF",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </Grid>
    </Grid>
  );
}
