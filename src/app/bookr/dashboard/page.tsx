"use client";
import { Box, Grid } from "@mui/material";
import HomePage from "../page";

const DashBoard = () => {
  return (
    <HomePage>
        <Grid height="100%" alignItems="stretch"  container p={0.5} spacing={2}>
          <Grid  item xs={4} lg={4}>
            <Box bgcolor="red" height="100%" p={4}borderRadius={1} boxShadow={2}>
              {/* Content here */}
            </Box>
          </Grid>
          
            <Grid item xs display="flex" flexDirection="column" width="100%" gap={2} alignItems="stretch" justifyItems="stretch" height="100%">
            <Box bgcolor="green" height="50%" p={2} borderRadius={1} boxShadow={2}  >
                {/* Content here */}
              </Box>
              <Box bgcolor="blue" p={2} height="50%" borderRadius={1} boxShadow={2} >
                {/* Content here */}
              </Box>
            </Grid>
              
          </Grid>
    
    </HomePage>
  );
};

export default DashBoard;
