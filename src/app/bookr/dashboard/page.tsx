"use client";
import { Box, Grid, Typography } from "@mui/material";
import HomePage from "../page";

const DashBoard = () => {
  return (
    <HomePage>
    <Box component="main" ml="20%" flex={1} px={2} >
      <Box display="flex" flexDirection="column" gap={2}>
        
        <Grid container spacing={2}>
          <Grid item xs={4} lg={4}>
            <Box bgcolor="white" p={2} borderRadius={1} boxShadow={2}>
              {/* Content here */}
            </Box>
          </Grid>
          <Grid item xs direction="column">
            <Grid item xs>
              <Box bgcolor="white" p={2} borderRadius={1} boxShadow={2}  >
                {/* Content here */}
              </Box>
            </Grid>
            <Grid item xs>
              <Box bgcolor="white" p={2} borderRadius={1} boxShadow={2} >
                {/* Content here */}
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Box>
    </HomePage>
  );
};

export default DashBoard;
