import React from "react";
import { Box, Container, Paper, Grid, Divider, Typography, TextField, Button, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import {
  LinkedIn as LinkIcon,
  Instagram as InstaIcon,
  Twitter as TwittIcon,
  LogoDev,
  Phone,
  Email,
} from "@mui/icons-material";
// import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    boxShadow: "none",
    backgroundColor: "white",
  }));
  return (
    <footer>
      <div>
        {/* Contact Section */}
        <Container fluid="true" maxWidth="lg" sx={{ paddingTop: 70, paddingBottom: 5 }}>
          <Box>
            <Grid container spacing={4}>
              <Grid item lg={3}>
                <Stack direction="row" useFlexGap flexWrap="wrap" spacing={2}>
                  <LogoDev fontSize="large" />
                  <Typography variant="h6" fontWeight="bold">
                    Just Integrate
                  </Typography>
                </Stack>
                <Typography variant="subtitle1" sx={{ marginTop: 2 }}>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </Grid>
              <Grid item lg={3} />
              <Grid item lg={3}>
                <Box sx={{ border: 2, borderRadius: 6, padding: 5, borderColor: "grey.300" }}>
                  <Stack direction="row">
                    <Email />
                    <Typography variant="subtitle1" sx={{ marginLeft: 1 }}>
                      Send us an email
                    </Typography>
                  </Stack>
                  <Typography variant="subtitle1" fontWeight="bold">
                    admin@admin.com
                  </Typography>
                </Box>
              </Grid>
              <Grid item lg={3}>
                <Box sx={{ border: 2, borderRadius: 6, padding: 5, borderColor: "grey.300" }}>
                  <Stack direction="row">
                    <Phone />
                    <Typography variant="subtitle1" sx={{ marginLeft: 2 }}>
                      Give us a call
                    </Typography>
                  </Stack>
                  <Typography variant="subtitle1" fontWeight="bold">
                    (+62) 984 - 323 - 745
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
        {/* Subscribe Email Section */}
        <Container fluid="true" maxWidth="auto" sx={{ backgroundColor: "grey.300" }}>
          <Box sx={{ height: 150 }}>
            <Grid container spacing={4}>
              <Grid item xs={4} lg={3} sx={{ marginLeft: 50 }}>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Subscribe to our newsletter
                </Typography>
              </Grid>
              <Grid item xs={6} lg={3}>
                <TextField variant="outlined" size="small" fullWidth placeholder="Email Address" />
              </Grid>
              <Grid item xs={3} lg={3}>
                <Button variant="contained">Subscribe</Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
        {/* Copyrights and Social Media Section */}
        <Container fluid="true" maxWidth="lg" disableGutters sx={{ padding: 2 }}>
          <Divider />
          <Box sx={{ flexGrow: 1, bgcolor: "white", height: "20vh" }}>
            <Grid container>
              <Grid item xs={8}>
                <Item sx={{ fontWeight: 600 }}>© Copyright Klik Digital Sinergi</Item>
              </Grid>
              <Grid item xs={1}>
                <Item sx={{ textAlign: "center" }}>
                  <InstaIcon fontSize="large" />
                </Item>
              </Grid>
              <Grid item xs={1}>
                <Item sx={{ textAlign: "center" }}>
                  <LinkIcon fontSize="large" />
                </Item>
              </Grid>
              <Grid item xs={1}>
                <Item sx={{ textAlign: "center" }}>
                  <TwittIcon fontSize="large" />
                </Item>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </div>
    </footer>
  );
};
export default Footer;
