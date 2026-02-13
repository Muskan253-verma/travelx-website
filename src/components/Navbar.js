import * as React from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
<AppBar
  position="static"
  sx={{ background: "linear-gradient(135deg, #ff5c8d 0%, #b85fd6 50%)" }}
>
      <Toolbar>

        {/* Logo */}
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          TravelX
        </Typography>

        {/* Links */}
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/dashboard/destinations">Destinations</Button>
        <Button color="inherit" component={Link} to="/dashboard/hotels">Hotels</Button>
        <Button color="inherit" component={Link} to="/features">Features</Button>


        {/* Right Side */}
        <Box sx={{ marginLeft: 2 }}>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Box>

      </Toolbar>
    </AppBar>
  );
}
