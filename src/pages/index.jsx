import React from "react";
import { Container, Typography, Box, Grid, Stack } from "@mui/material";
import { WhatsApp } from "@mui/icons-material";
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["latin"] });
const Home = () => (
  <main>
    <Container fluid="true" maxWidth="auto" sx={{ paddingTop: 10, height: 300 }}>
      <Box textAlign="center">
        <Typography variant="h2" fontWeight="bold">
          Get in touch with us for
        </Typography>
        <Typography variant="h2" fontWeight="bold">
          more information
        </Typography>
        <Typography variant="h6">if you need help or a question, we&apos;re here for you</Typography>
      </Box>

      <Box sx={{ paddingY: 10 }}>
        <Grid container textAlign="-webkit-center" spacing={1} sx={{ flexGrow: 1 }}>
          <Grid item lg={4}>
            <Box sx={{ borderRadius: 4, height: 330, width: 400, padding: 2 }}>
              <Box sx={{ backgroundColor: "#feddd6", borderRadius: 4, height: 150, padding: 2 }}>
                <Stack spacing={6} alignItems="center">
                  <WhatsApp fontSize="large" sx={{ marginTop: 5 }} />
                  <Typography variant="body1" sx={{ paddingTop: 4 }}>
                    Accusantium molestias fuga quidem nisi, voluptatum illum provident voluptate dolor quisquam dicta
                    aut tempore quis optio rerum id, quasi earum ullam! Aliquid.
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box sx={{ borderRadius: 4, height: 330, width: 400, padding: 2 }}>
              <Box sx={{ backgroundColor: "#fed6ff", borderRadius: 4, height: 150, padding: 2 }}>
                <Stack spacing={6} alignItems="center">
                  <WhatsApp fontSize="large" sx={{ marginTop: 5 }} />
                  <Typography variant="body1" sx={{ paddingTop: 4 }}>
                    Accusantium molestias fuga quidem nisi, voluptatum illum provident voluptate dolor quisquam dicta
                    aut tempore quis optio rerum id, quasi earum ullam! Aliquid.
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box sx={{ borderRadius: 4, height: 330, width: 400, padding: 2 }}>
              <Box sx={{ backgroundColor: "#d6f2ff", borderRadius: 4, height: 150, padding: 2 }}>
                <Stack spacing={6} alignItems="center">
                  <WhatsApp fontSize="large" sx={{ marginTop: 5 }} />
                  <Typography variant="body1" sx={{ paddingTop: 4 }}>
                    Accusantium molestias fuga quidem nisi, voluptatum illum provident voluptate dolor quisquam dicta
                    aut tempore quis optio rerum id, quasi earum ullam! Aliquid.
                  </Typography>
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  </main>
);

export default Home;
export async function getServerSideProps({ req }) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }
  // if (t)
  return {
    props: {},
  };
}
