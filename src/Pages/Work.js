import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import WorkCards from "../Components/Cards";
import workData from "../data/workData.js";

const useStyles = makeStyles((theme) => ({
  container: {
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.primary.dark,
  },
}));

function WorkPage() {
  const classes = useStyles();
  return (
    <Box p={5} className={classes.container}>
      <Grid container spacing={4}>
        {workData.map((data, i) => {
          return <WorkCards key={i} {...data} />;
        })}
      </Grid>
    </Box>
  );
}

export default WorkPage;