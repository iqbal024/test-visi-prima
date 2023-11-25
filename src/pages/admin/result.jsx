import Link from "next/link";
import { Button, AppBar, Toolbar, Typography } from "@mui/material";

const Result = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Link href="/admin/dashboard">
          <Button color="inherit">Back to Dashboard</Button>
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Result
        </Typography>
      </Toolbar>
    </AppBar>
    <div id="content">
      <h2>Result</h2>
      <p>Score: 100%</p>
      <div>
        <p>Question 1: Correct</p>
        <p>Question 2: Correct</p>
        <p>Question 3: Correct</p>
        <p>Question 4: Correct</p>
        <p>Question 5: Correct</p>
      </div>
    </div>
  </div>
);

export default Result;
