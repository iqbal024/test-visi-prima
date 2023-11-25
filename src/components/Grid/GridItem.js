// @material-ui/core components
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

const styles = {
  grid: {
    padding: "0 15px !important",
  },
};

export default function GridItem(props) {
  const useStyles = styled(styles);
  const classes = useStyles();
  const { children, ...rest } = props;
  return (
    <Grid item {...rest} className={classes.grid}>
      {children}
    </Grid>
  );
}
