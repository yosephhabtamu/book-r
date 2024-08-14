"use client";
import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Button, makeStyles } from "@mui/material";
import Link from "next/link";
import SpaceDashboardRoundedIcon from "@mui/icons-material/SpaceDashboardRounded";
import ImportContactsRoundedIcon from "@mui/icons-material/ImportContactsRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import { MenuRounded } from "@mui/icons-material";
import { logout } from "@/lib/features/auth/authSlice";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "@emotion/react";
import { theme } from "../components/theme";

const drawerWidth = 200;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function HomePage({
  path,
  children,
}: Readonly<{
  path: string;
  children: React.ReactNode;
}>) {
  const [open, setOpen] = React.useState(true);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    logout();
    router.replace("/auth/login");
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box height="100vh" sx={{ display: "flex", gap: 1 }}>
        <CssBaseline />
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            "& .MuiDrawer-paper": {
              maxWidth: "17%",
              minWidth: "max-content",
              m: 0.2,
              p: 1,
              pl: 2,
              pr: open ? 2 : 0,
              borderRadius: 1,
              bgcolor: "#171b36",
              color: "white",
            },
          }}
        >
          <Toolbar disableGutters={true}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={open ? handleDrawerClose : handleDrawerOpen}
              edge="start"
              sx={{
                maxWidth: "min-content",
                p: 2,
              }}
            >
              <MenuRounded fontSize="small"/>
            </IconButton>
            {open && (
              <Box display="flex" gap={0.2} alignItems="center">
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={open ? handleDrawerClose : handleDrawerOpen}
                  edge="start"
                  sx={{
                    maxWidth: "min-content",
                  }}
                >
                  <img
                    src="/images/books-blue.png"
                    alt="Book Rent"
                    width="24"
                    height="24"
                  />
                </IconButton>
                <Typography color={theme.palette.primary.main}>
                  Book Rent
                </Typography>
              </Box>
            )}
          </Toolbar>
          {open && <Divider variant="middle" color="white" />}
          <List sx={{ mt: 1 }}>
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
                  maxWidth: open ? "100%" : "min-content",
                  "&:hover": { bgcolor: "primary.main", cursor: "pointer" },
                }}
              >
                <ListItemIcon sx={{ minWidth: 0.25 }}>
                  <SpaceDashboardRoundedIcon fontSize="small" style={{ color: "white" }} />
                </ListItemIcon>
                {open && (
                  <ListItemText
                    primary={
                      <Typography fontSize="small">Dashboard</Typography>
                    }
                  />
                )}
              </ListItem>
            </Link>
            <Link
              href="/bookr/books/upload"
              style={{
                textDecoration: "none",
                color: "white",
              }}
              passHref
            >
              <ListItem
                sx={{
                  p: 0.5,
                  maxWidth: open ? "100%" : "min-content",
                  borderRadius: 1,
                  "&:hover": { bgcolor: "primary.main", cursor: "pointer" },
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
                    primary={
                      <Typography fontSize="small">Book Upload</Typography>
                    }
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
                  maxWidth: open ? "100%" : "min-content",
                  "&:hover": { bgcolor: "primary.main", cursor: "pointer" },
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
                width: "100%",
                textDecoration: "none",
                color: "white",
              }}
              passHref
            >
              <ListItem
                sx={{
                  p: 0.5,
                  borderRadius: 1,
                  maxWidth: open ? "100%" : "min-content",
                  "&:hover": {
                    bgcolor: "primary.main",
                    cursor: "pointer",
                    width: "100%",
                  },
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
          {open && <Divider variant="middle" color="white" sx={{ my: 2 }} />}
          <List sx={{ maxwidth: "min-content", mt: 1 }}>
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
                  maxWidth: open ? "100%" : "min-content",
                  "&:hover": { bgcolor: "primary.main", cursor: "pointer" },
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
                    primary={
                      <Typography fontSize="small">Notification</Typography>
                    }
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
                  maxWidth: open ? "100%" : "min-content",
                  "&:hover": { bgcolor: "primary.main", cursor: "pointer" },
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
                  maxWidth: open ? "100%" : "min-content",
                  "&:hover": { bgcolor: "primary.main", cursor: "pointer" },
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
                  maxWidth: open ? "100%" : "min-content",
                  "&:hover": { bgcolor: "primary.main", cursor: "pointer" },
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

          {open && (
            <Button
              variant="contained"
              onClick={handleLogout}
              startIcon={<LogoutRoundedIcon fontSize="small" />}
              sx={{
                p: 0,
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
          )}
        </Drawer>
        <Box component="main" height="95%" overflow="hidden" sx={{ flexGrow: 1 }}>
          <AppBar
            
            position="static"
            sx={{ backgroundColor:"white", color:"black", px: 3, py: 0.5, my: 0.2, mr: 2.5, borderRadius: 1 }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {path}
            </Typography>
          </AppBar>
          {children}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
