import React from "react";
import { AppBar, Container, Toolbar, Box, IconButton, Typography, Menu, MenuItem, Button } from "@mui/material";
import { WhatsApp, Menu as MenuIcon } from "@mui/icons-material";
import Head from "next/head";
import Link from "next/link";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return (
    <>
      <Head>
        <title>Whatsapp Notification</title>
        <meta name="author" content="Klik Digital Sinergi" />
        <meta name="description" content="Whatsapp Notification by Klik Digital" />

        <meta property="og:locale" content="en_ID" />
        <meta property="og:site_name" content="Whatsapp Notification" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Whatsapp Notification" />
        <meta property="og:description" content="Whatsapp Notification by klik digital" />

        <meta name="twitter:title" content="Whatsapp Notification" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@klik.digital" />
        <meta name="twitter:description" content="Whatsapp Notification by klik digital" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap" rel="stylesheet" />
      </Head>
      <AppBar position="fixed" color="black">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Web View */}
            <WhatsApp sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "white !important" }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: "white !important",
              }}
            >
              LOGO
            </Typography>
            {/* Mobile View */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
              >
                <MenuIcon color="white" />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem>
                  <Link href="/" passHref>
                    <Button color="black">Home</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/about" passHref>
                    <Button color="black">About Us</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/pricing" passHref>
                    <Button color="black">Pricing</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/features" passHref>
                    <Button color="black">Features</Button>
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link href="/contact" passHref>
                    <Button color="black">Contact</Button>
                  </Link>
                </MenuItem>
              </Menu>
            </Box>

            <WhatsApp sx={{ display: { xs: "flex", md: "none" }, mr: 1, color: "white !important" }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                textDecoration: "none",
                color: "white !important",
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Link href="/" passHref>
                <Button color="white">Home</Button>
              </Link>
              <Link href="/about">
                <Button color="white">About Us</Button>
              </Link>
              <Link href="/pricing" passHref>
                <Button color="white">Pricing</Button>
              </Link>
              <Link href="/features" passHref>
                <Button color="white">Features</Button>
              </Link>
              <Link href="/contact" passHref>
                <Button color="white">Contact</Button>
              </Link>
            </Box>
            <Box sx={{ flexGrow: 0, padding: 2 }}>
              <Link href="/auth/login">
                <Button variant="text" color="white">
                  Login
                </Button>
              </Link>
              <Button style={{ marginLeft: 9 }} variant="contained" color="white">
                Get Started
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
