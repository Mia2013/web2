import * as React from "react";
import {
  Box,
  Button,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { Link } from "react-scroll";

const drawerWidth = "80%";

function DrawerAppBar(props) {
  const { window, pages, handleDrawerToggle, mobileOpen } = props;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        className="logo"
        component="a"
        href="/"
        sx={{
          my: 1,
        }}
      >
        <Typography
          component="img"
          className="logo"
          sx={{
            width: "50%",
          }}
          src={`${process.env.PUBLIC_URL}/pic/logo.svg`}
        ></Typography>
      </Typography>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={`${page.name}drawer`} disablePadding>
            <ListItemButton >
              <Button
                sx={{
                  my: 2,
                  mx: "auto",
                  display: "block",
                }}
              >
                <Link
                  onClick={handleDrawerToggle}
                  activeClass="active"
                  to={page.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {page.name}
                </Link>
              </Button>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box component="nav">
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
            background: "#1E1F20",
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
}

export default DrawerAppBar;
