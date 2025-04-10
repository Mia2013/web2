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
import { Link } from "react-router-dom";

const drawerWidth = "50%";

function DrawerAppBar(props) {
  const { window, pagesForPublic, handleDrawerToggle, mobileOpen } = props;

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
        {pagesForPublic.map((page) => (
          <ListItem key={`${page.name}drawer`} disablePadding>
            <ListItemButton >

              <Link
                to={page.path}
                id="drawer-link"
              >
                <Button
                  key={page.name}
                  sx={{
                    display: "block",
                    fontFamily: "Exo 2, sans-serif",
                    fontSize: "1rem",
                    fontWeight: "bolder",
                    width: '100%'
                  }}
                  onClick={handleDrawerToggle}

                >
                  {page.name}
                </Button>
              </Link>
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
