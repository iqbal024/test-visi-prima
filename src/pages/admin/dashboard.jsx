import React from "react";
import Link from "next/link";
import AdminLayout from "@comps/layout/AdminLayout";
import { Container, Grid, List, ListItem, ListItemText } from "@mui/material";

export default function Dashboard() {
  return (
    <AdminLayout>
      <Container fluid="true" maxWidth="xl" style={{ padding: "0" }}>
        <Grid
          container
          spacing={1}
          style={{
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
            padding: "1em",
            display: "flex",
            gap: "1em",
            backgroundColor: "#fff",
          }}
          alignItems="center"
          justifyContent="center"
        >
          <div id="content">
            <h2>Exam Tests</h2>
            <List>
              <ListItem button>
                <Link href="/admin/exam-instruction">
                  <ListItemText primary="Soal Test 1" />
                </Link>
              </ListItem>
              <ListItem button>
                <Link href="/admin/exam-instruction">
                  <ListItemText primary="Soal Test 2" />
                </Link>
              </ListItem>
            </List>
          </div>
        </Grid>
      </Container>
    </AdminLayout>
  );
}
