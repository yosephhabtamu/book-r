"use client";
import { Box, Grid, Typography } from "@mui/material";

const Layout = () => {
  return (
    <Box flex={1} px={2} >
      <Box display="flex" flexDirection="column" gap={2}>
        <Box bgcolor="white" alignItems="stretch" p={2} borderRadius={1} boxShadow={2}>
          <Typography color="black" fontSize={14}>Admin/Dashboard</Typography>
        </Box>
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
  );
};

export default Layout;
