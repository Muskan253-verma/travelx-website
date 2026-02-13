import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar"; 
import "./DashboardLayout.css";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FlightIcon from "@mui/icons-material/Flight";
import PublicIcon  from "@mui/icons-material/Public";
import PersonIcon from "@mui/icons-material/Person";
import BookIcon from "@mui/icons-material/Book";
import LogoutIcon from "@mui/icons-material/Logout";
import WishlistIcon from "@mui/icons-material/Favorite";
import SettingsIcon from "@mui/icons-material/Settings";
import HotelsIcon from "@mui/icons-material/Hotel";


const drawerWidth = 240;

export default function DashboardLayout() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* Drawer */}
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            background: "#ffe4ec",
          },
        }}
      >
        <Toolbar />

        {/* Top Menu */}
        <List>
          

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/dashboard">
              <ListItemIcon><DashboardIcon /></ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/dashboard/trips">
              <ListItemIcon><FlightIcon /></ListItemIcon>
              <ListItemText primary="My Trips" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component={Link} to="/dashboard/destinations">
              <ListItemIcon><PublicIcon /></ListItemIcon>
              <ListItemText primary="Destinations" />
            </ListItemButton>
          </ListItem>
          

            <ListItem disablePadding>
            <ListItemButton component={Link} to="/dashboard/booking">
              <ListItemIcon><WishlistIcon /></ListItemIcon>
              <ListItemText primary="Bookings" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component={Link} to="/dashboard/hotels">
              <ListItemIcon><HotelsIcon /></ListItemIcon>
              <ListItemText primary="Hotels" />
            </ListItemButton>
          </ListItem>

            <ListItem disablePadding>
            <ListItemButton component={Link} to="/dashboard/wishlist">
              <ListItemIcon><WishlistIcon /></ListItemIcon>
              <ListItemText primary="Wishlist" />
            </ListItemButton>
          </ListItem>


          <ListItem disablePadding>
            <ListItemButton component={Link} to="/dashboard/profile">
              <ListItemIcon><PersonIcon /></ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>

         

           <ListItem disablePadding>
            <ListItemButton component={Link} to="/dashboard/setting">
              <ListItemIcon><SettingsIcon /></ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
        </List>

        <Divider />

        {/* Bottom Logout */}
        <List sx={{ marginTop: "auto" }}>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/">
              <ListItemIcon><LogoutIcon /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Page Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Outlet />
      </Box>
    </Box>
  );
}

