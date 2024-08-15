import { Box, CircularProgress } from "@mui/material";
import React from "react";

export function Spinner() {
    return (
      <React.Fragment>
   <Box maxWidth="min-content" sx={{margin:"0 auto"}} >
        <svg width="100%" height="100%">
          <defs>
            <linearGradient id="my_gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e01cd5" />
              <stop offset="100%" stopColor="#1CB5E0" />
            </linearGradient>
          </defs>
        </svg>
        <CircularProgress sx={{ 'svg circle': { stroke: 'url(#my_gradient)' } }} />
        </Box>
      </React.Fragment>
    );
  }