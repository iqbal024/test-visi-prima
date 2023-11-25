import React from "react";
import { Divider, Grid } from "@mui/material";

const FormTableLayout = ({ children, cardTitle }) => {
  const title = {
    fontWeight: 700,
    fontSize: "16px",
    lineHeight: "19px",
    letterSpacing: "-0.011em",
  };
  const container = {
    boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)",
    borderRadius: "16px",
    width: "100%",
    backgroundColor: "white",
  };

  return (
    <Grid container>
      <div style={container}>
        <div style={{ padding: "24px" }}>
          <div style={title}>{cardTitle}</div>
        </div>
        <div>
          <Divider />
        </div>
        {children}
      </div>
    </Grid>
  );
};

export default FormTableLayout;
