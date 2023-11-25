import React from "react";
import Head from "next/head";
import { Box, Container, Typography, Grid, AppBar, Toolbar } from "@mui/material";
import { LinkedIn as LinkIcon, Instagram as InstaIcon, Twitter as TwittIcon, WhatsApp } from "@mui/icons-material";

const AuthLayout = ({ children }) => (
  <div>
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
    </Head>
    <header>
      <AppBar position="static" color="black">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <WhatsApp sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "white" }} />
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
                color: "white",
              }}
            >
              LOGOs
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
    <main>
      <div className="main-content">{children}</div>
    </main>
    <footer>
      <div>
        <Container fluid="true" maxWidth="auto" sx={{ marginTop: 15, backgroundColor: "grey.300" }}>
          <Box sx={{ height: "auto", minHeight: 100 }}>
            {/* Desktop */}
            <Grid container spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
              <Grid item lg={1} sx={{ display: { xs: "none", md: "flex" } }} />
              <Grid item lg={3}>
                <Typography>© Copyright Klik Digital Sinergi</Typography>
              </Grid>
              <Grid item lg={6} />
              <Grid item sx={{ textAlign: "center" }}>
                <InstaIcon fontSize="large" />
              </Grid>
              <Grid item sx={{ textAlign: "center" }}>
                <LinkIcon fontSize="large" />
              </Grid>
              <Grid item sx={{ textAlign: "center" }}>
                <TwittIcon fontSize="large" />
              </Grid>
            </Grid>
            {/* Mobile */}
            <Grid container spacing={3} sx={{ display: { xs: "flex", md: "none" } }}>
              <Grid item lg={1} sx={{ display: { xs: "none", md: "flex" } }} />
              <Grid item lg={2}>
                <Typography>© Copyright Klik Digital SinergiX</Typography>
              </Grid>
              <Grid item lg={7} />
              <Grid item sx={{ textAlign: "center" }}>
                <InstaIcon fontSize="large" />
              </Grid>
              <Grid item sx={{ textAlign: "center" }}>
                <LinkIcon fontSize="large" />
              </Grid>
              <Grid item sx={{ textAlign: "center" }}>
                <TwittIcon fontSize="large" />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </footer>
  </div>
);

export default AuthLayout;
