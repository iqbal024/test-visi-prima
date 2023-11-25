import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

const ExamInstruction = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <Link href="/admin/dashboard">
          <Button color="inherit">Back</Button>
        </Link>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Exam Title
        </Typography>
        <Link href="/admin/exam">
          <Button color="inherit">Start Exam</Button>
        </Link>
      </Toolbar>
    </AppBar>
    <div id="content">
      <h2>Exam Instructions</h2>
      <p>Rules: Isi Question dengan benar</p>
      <p>Time Limit: 60 minutes</p>
    </div>
  </div>
);

export default ExamInstruction;
