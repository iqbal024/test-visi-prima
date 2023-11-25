import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

const styles = {
  grid: {
    margin: "0 -15px !important",
    width: "unset",
  },
};

export default function GridContainer(props) {
  const useStyles = styled(styles);
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid container justifyContent="flex-end" alignItems="center" {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}
