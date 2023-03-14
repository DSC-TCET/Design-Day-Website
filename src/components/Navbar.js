import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "react-scroll";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Fab, Fade, Slide, useScrollTrigger } from "@mui/material";
import "./Navbar.css";

const drawerWidth = 240;

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{
          position: "fixed",
          bottom: 20,
          right: 30,
          transform: "1s ease-in-out",
          scrollBehavior: "smooth",
        }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Navbar = function DrawerAppBar(props) {
  const [navItems] = React.useState([
    {
      name: "Home",
      to: "home",
    },
    {
      name: "About",
      to: "about",
    },
    {
      name: "Rules",
      to: "rules",
    },
    {
      name: "Code of Conduct",
      to: "conduct",
    },
    {
      name: "FAQ",
      to: "faq",
    },
  ]);
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h4" sx={{ my: 2 }}>
        Design Day
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <React.Fragment>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar
            component="nav"
            sx={{
              background: "transparent",
              boxShadow: "none",
              fontFamily: "Poppins",
            }}
          >
            <Toolbar>
              <IconButton
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none", color: 'white' } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                style={{
                  flexGrow: 1,
                  display: { xs: "none", sm: "block" },
                  textAlign: "left",
                  fontSize: "1.5rem",
                }}
              >
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Link
                    to={item.to}
                    smooth
                    key={item.to}
                    duration={300}
                    className="cursor-pointer text-black transition"
                  >
                    <button
                      key={item.name}
                      className="px-2"
                      initial={{ translateX: -50, opacity: 0 }}
                      animate={{ translateX: 0, opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <span className="navItemsAnimation">
                        {item.name}
                      </span>
                    </button>
                  </Link>
                ))}
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        {/* id to scroll up from button */}
        <Typography id="back-to-top-anchor" />
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
      </Box>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
};

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
