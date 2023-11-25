import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Grid,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Button,
  Popover,
} from "@mui/material";
import { Menu as MenuIcon, Home as HomeIcon, Add as AddIcon, People as PeopleIcon } from "@mui/icons-material";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const drawerWidth = 240;

export default function AdminLayout({ children }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [title, setTitle] = useState("");

  const router = useRouter();
  const routes = [
    {
      id: 1,
      name: "Dashboard",
      path: "/admin/dashboard",
    },
  ];

  const findRouteByPath = (path, routesPath) => {
    let foundRoute = null;

    routesPath.forEach((route) => {
      if (route.path === path) {
        foundRoute = route;
      } else if (route.submenu) {
        const nestedRoute = findRouteByPath(path, route.submenu);
        if (nestedRoute) {
          foundRoute = nestedRoute;
        }
      }
    });

    return foundRoute;
  };
  useEffect(() => {
    const currentRoute = findRouteByPath(router.pathname, routes);

    if (currentRoute) {
      document.title = currentRoute.name;
      setTitle(document.title);
    }
  }, [router.pathname]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleOut = () => {
    router.push("/auth/login");
  };

  const drawer = (
    <div>
      <Toolbar>
        <div style={{ paddingTop: "24px", paddingBottom: "24px", display: "flex" }}>
          <Image src="/images/visi.svg" alt="senyum-dental" width={57} height={57} />
          <p style={{ paddingLeft: "10px" }}>PT VISI PRIMA</p>
        </div>
      </Toolbar>
      <Divider />
      <List style={{ padding: "16px 24px" }}>
        {routes.slice(0, 3).map((text, index) => (
          <Link key={text.id} href={text.path}>
            <ListItem disablePadding>
              <ListItemButton
                style={
                  router.pathname === text.path || router.pathname.startsWith(`${text.path}/`)
                    ? { backgroundColor: "#FF9B2D", borderRadius: "8px" }
                    : null
                }
                onClick={() => setTitle(text.name)}
              >
                <ListItemIcon>
                  {index === 0 ? <HomeIcon /> : index === 1 ? <AddIcon /> : index === 2 ? <PeopleIcon /> : ""}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "#F3F4F6",
      }}
    >
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#F3F4F6",
          padding: "17px",
        }}
      >
        <Grid
          container
          sx={{
            padding: "15px 0",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 10px rgba(173, 161, 161, 0.25)",
            borderRadius: "16px",
            color: "inherit",
          }}
        >
          <Grid item xs={11} sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ ml: 2, display: { sm: "none" }, paddingRight: "0" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div" style={{ color: "black", paddingLeft: "50px" }}>
              {title}
            </Typography>
          </Grid>
          <Grid
            item
            xs={1}
            sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
            style={{ paddingRight: "24px" }}
          >
            <Button aria-describedby={id} onClick={handleClick}>
              <Image src="/images/Profile.png" alt="profile" width={40} height={40} />
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              transformOrigin={{
                horizontal: "center",
              }}
            >
              <div
                style={{
                  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
                  borderRadius: "16px",
                }}
              >
                <div style={{ padding: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: "1rem",
                      alignItems: "center",
                    }}
                  >
                    <div>
                      <Image src="/images/Profile.png" alt="profile" width={40} height={40} />
                    </div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                        fontSize: "14px",
                      }}
                    >
                      <div style={{ fontSize: "14px", fontWeight: "bold" }}>Super Admin</div>
                      <div>Admin</div>
                      <div>
                        <Link href="/admin/profile">
                          <Button
                            style={{
                              color: "#FF9B2D",
                              padding: "0",
                            }}
                          >
                            Ubah password
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <div style={{ marginTop: "24px", backgroundColor: "#FF9B2D", borderRadius: "16px", width: "100%" }}>
                      <Button
                        fullWidth
                        sx={{ paddingX: "16px 32px", backgroundColor: "none" }}
                        color="white"
                        onClick={handleOut}
                      >
                        Logout
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Popover>
          </Grid>
        </Grid>
      </AppBar>
      <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` }, paddingTop: "113px" }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
