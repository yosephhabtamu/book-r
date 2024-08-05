"use client";
import { Box, Grid, Typography, Button, List, ListItem, ListItemIcon, ListItemText, Divider, Drawer } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import ImportContactsRoundedIcon from '@mui/icons-material/ImportContactsRounded';
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import { useTheme } from "@emotion/react";
import { useState } from "react";

export default function DrawerComponent() {

    const [open, setOpen] = useState(true);
  const toggleDrawer = () => () => {
    // setOpen(!open);
  };

  return (
    <Box>
      <Box
        bgcolor={"#171b36"}
        color="white"
        p={2}
        borderRadius={1}
        boxShadow={2}
      >
          <Box display="flex" gap={2} alignItems="center" mb={4}>
            <MenuRoundedIcon onClick={toggleDrawer} fontSize="small" />
            <img
              src="/images/books-blue.png"
              alt="Book Rent"
              width="24"
              height="24"
            />
            <Typography fontSize={14} color="#316AA7">
              Book Rent
            </Typography>
          </Box>
          <List>
            <ListItem  sx={{ p: 0.5, borderRadius: 1, '&:hover': { bgcolor: "secondary.main" } }}>
              <ListItemIcon>
                <SpaceDashboardRoundedIcon fontSize="small" style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={<Typography fontSize="small">Dashboard</Typography>} />
            </ListItem>
            <ListItem  sx={{ p: 0.5, borderRadius: 1, '&:hover': { bgcolor: "secondary" } }}>
              <ListItemIcon >
                <ImportContactsRoundedIcon fontSize="small" style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={<Typography fontSize="small">Book Upload</Typography>} />
            </ListItem>
            <ListItem  sx={{ p: 0.5, borderRadius: 1, '&:hover': { bgcolor: "secondary" } }}>
              <ListItemIcon>
                <MoreHorizRoundedIcon fontSize="small" style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={<Typography fontSize="small">Books</Typography>} />
            </ListItem>
            <ListItem  sx={{ p: 0.5, borderRadius: 1, '&:hover': { bgcolor: "secondary" } }}>
              <ListItemIcon>
                <MoreHorizRoundedIcon fontSize="small" style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={<Typography fontSize="small">Owners</Typography>} />
            </ListItem>
          </List>
          <Divider sx={{ my: 2 }} />
          <List>
            <ListItem  sx={{ p: 0.5, borderRadius: 1, '&:hover': { bgcolor: "secondary" } }}>
              <ListItemIcon>
                <NotificationsRoundedIcon fontSize="small" style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={<Typography fontSize="small">Notification</Typography>} />
            </ListItem>
            <ListItem  sx={{ p: 0.5, borderRadius: 1, '&:hover': { bgcolor: "secondary" } }}>
              <ListItemIcon>
                <SettingsOutlinedIcon fontSize="small" style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={<Typography fontSize="small">Setting</Typography>} />
            </ListItem>
            <ListItem  sx={{ mt: 'auto', p: 0.5, borderRadius: 1, '&:hover': { bgcolor: "secondary" } }}>
              <ListItemIcon>
                <AccountCircleOutlinedIcon fontSize="small" style={{ color: 'white' }} />
              </ListItemIcon>
              <ListItemText primary={<Typography fontSize="small">Login as Admin</Typography>} />
            </ListItem>
          </List>
        <Button
          variant="contained"
          startIcon={<LogoutRoundedIcon fontSize="small" />}
          sx={{
            width: '100%',
            py: 0.5,
            borderRadius: 1,
            bgcolor: "primary.light",
            color: 'black',
            '&:hover': {
              bgcolor: '#808080',
            },
          }}
        >
          <Typography fontSize={13}>Logout</Typography>
        </Button>
      </Box>
        </Box>
  );
}
