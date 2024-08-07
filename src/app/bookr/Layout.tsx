"use client";
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Drawer,
  Toolbar,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import Link from "next/link";
import { useState } from "react";

export default function Layout() {
  const [open, setOpen] = useState(true);

  return (
    <Drawer
      open={open}
      variant="permanent"
      anchor="left"
      sx={{
        "& .MuiDrawer-paper": {
          width: "17%",
          minWidth: "max-content",
          m: 0.2,
          p: 1,
          pl: 2,
          pr: 2,
          borderRadius: 1,
          bgcolor: "#171b36",
          color: "white",
        },
      }}
    >
      {!open && (
        <img
          src="/images/books-blue.png"
          alt="Book Rent"
          width="24"
          height="24"
        />
      )}
      <Toolbar disableGutters={true}>
        <MenuRoundedIcon onClick={() => setOpen(!open)} fontSize="small" />
        {open && (
          <Box sx={{ px: 2 }}>
            <img
              src="/images/books-blue.png"
              alt="Book Rent"
              width="24"
              height="24"
            />
          </Box>
        )}
        {open && (
          <Typography fontSize={14} color="#316AA7">
            Book Rent
          </Typography>
        )}
      </Toolbar>
      <List>
        <Link
          href="/bookr/dashboard"
          style={{
            textDecoration: "none",
            color: "white",
          }}
          passHref
        >
          <ListItem
            sx={{
              p: 0.5,
              borderRadius: 1,
              "&:hover": { bgcolor: "secondary.main", cursor: "pointer" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0.25 }}>
              <SpaceDashboardRoundedIcon fontSize="small" color="primary" />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={<Typography fontSize="small">Dashboard</Typography>}
              />
            )}
          </ListItem>
        </Link>
        <Link
          href="/bookr/upload"
          style={{
            textDecoration: "none",
            color: "white",
          }}
          passHref
        >
          <ListItem
            sx={{
              p: 0.5,
              borderRadius: 1,
              "&:hover": { bgcolor: "secondary.main", cursor: "pointer" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0.25 }}>
              <ImportContactsRoundedIcon
                fontSize="small"
                style={{ color: "white" }}
              />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={<Typography fontSize="small">Book Upload</Typography>}
              />
            )}
          </ListItem>
        </Link>
        <Link
          href="/bookr/books"
          style={{
            textDecoration: "none",
            color: "white",
          }}
          passHref
        >
          <ListItem
            sx={{
              p: 0.5,
              borderRadius: 1,
              "&:hover": { bgcolor: "secondary.main", cursor: "pointer" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0.25 }}>
              <MoreHorizRoundedIcon
                fontSize="small"
                style={{ color: "white" }}
              />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={<Typography fontSize="small">Books</Typography>}
              />
            )}
          </ListItem>
        </Link>
        <Link
          href="/bookr/owner"
          style={{
            textDecoration: "none",
            color: "white",
          }}
          passHref
        >
          <ListItem
            sx={{
              p: 0.5,
              borderRadius: 1,
              "&:hover": { bgcolor: "secondary.main", cursor: "pointer" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0.25 }}>
              <MoreHorizRoundedIcon
                fontSize="small"
                style={{ color: "white" }}
              />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={<Typography fontSize="small">Owners</Typography>}
              />
            )}
          </ListItem>
        </Link>
      </List>
      <Divider sx={{ my: 2 }} />
      <List>
        <Link
          style={{
            textDecoration: "none",
            color: "white",
          }}
          href="/bookr/notifications"
          passHref
        >
          <ListItem
            sx={{
              p: 0.5,
              borderRadius: 1,
              "&:hover": { bgcolor: "secondary.main", cursor: "pointer" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0.25 }}>
              <NotificationsRoundedIcon
                fontSize="small"
                style={{ color: "white" }}
              />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={<Typography fontSize="small">Notification</Typography>}
              />
            )}
          </ListItem>
        </Link>
        <Link
          href="/bookr/settings"
          style={{
            textDecoration: "none",
            color: "white",
          }}
          passHref
        >
          <ListItem
            sx={{
              p: 0.5,
              borderRadius: 1,
              "&:hover": { bgcolor: "secondary.main", cursor: "pointer" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0.25 }}>
              <SettingsOutlinedIcon
                fontSize="small"
                style={{ color: "white" }}
              />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={<Typography fontSize="small">Settings</Typography>}
              />
            )}
          </ListItem>
        </Link>
        <Link
          href="/auth/login"
          style={{
            textDecoration: "none",
            color: "white",
          }}
          passHref
        >
          <ListItem
            sx={{
              mt: "auto",
              p: 0.5,
              borderRadius: 1,
              "&:hover": { bgcolor: "secondary.main", cursor: "pointer" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0.25 }}>
              <AccountCircleOutlinedIcon
                fontSize="small"
                style={{ color: "white" }}
              />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={
                  <Typography fontSize="small">Login as Admin</Typography>
                }
              />
            )}
          </ListItem>
        </Link>
        <Link
          href="/auth/login"
          style={{
            textDecoration: "none",
            color: "white",
          }}
          passHref
        >
          <ListItem
            sx={{
              mt: "auto",
              p: 0.5,
              borderRadius: 1,
              "&:hover": { bgcolor: "secondary.main", cursor: "pointer" },
            }}
          >
            <ListItemIcon sx={{ minWidth: 0.25 }}>
              <AccountCircleOutlinedIcon
                fontSize="small"
                style={{ color: "white" }}
              />
            </ListItemIcon>
            {open && (
              <ListItemText
                primary={
                  <Typography fontSize="small">Login as owner</Typography>
                }
              />
            )}
          </ListItem>
        </Link>
        
      </List>
      
      <Divider sx={{ my: 4 }} />
      {open ? (
        <Button
          variant="contained"
          startIcon={<LogoutRoundedIcon fontSize="small" />}
          sx={{
            width: "100%",
            py: 0.5,
            borderRadius: 1,
            bgcolor: "primary.light",
            color: "black",
            "&:hover": {
              bgcolor: "#808080",
            },
          }}
        >
          <Typography fontSize={13}>Logout</Typography>
        </Button>
      ) : (
        <LogoutRoundedIcon fontSize="small" sx={{ px: 1 }} />
      )}
    </Drawer>
  );
}
