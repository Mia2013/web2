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
  Tooltip
} from "@mui/material";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import { useAuth } from "../../provider/AuthProvider";

const drawerWidth = "50%";

function DrawerAppBar({ handleDrawerToggle, mobileOpen, pages }) {
  const { token, logOut } = useAuth();

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
            <ListItemButton sx={{ justifyContent: 'center' }}>
              <Link
                to={page.path}
                id="drawer-link"
                style={{
                  textDecoration: 'none', width: '100%',
                }}
              >
                <Button
                  key={page.name}
                  sx={{
                    display: "block",
                    fontFamily: "Exo 2, sans-serif",
                    fontSize: "1rem",
                    fontWeight: "bolder",
                    textAlign: 'center',
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
        {token &&
          <ListItem>
            <Tooltip title="Kijelentkezés">
              <ListItemButton sx={{ justifyContent: 'center' }}
                onClick={logOut}
              >
                <LogoutIcon />
              </ListItemButton>
            </Tooltip>
          </ListItem>

        }
      </List>
    </Box >
  );

  return (
    <Box component="nav">
      <Drawer
        container={document.body}
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
