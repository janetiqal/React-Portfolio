import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Grid
} from "@material-ui/core";

import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  width:{
    width: '100%',
    [theme.breakpoints.down('md')]: {
      width:'100%'
  }
  },
  darkColor:{
    color: theme.palette.secondary.main,

    [theme.breakpoints.down('md')]: {
     fontSize:'50px'
  }
  },
  link: {
    textDecoration: "none",
    color: "white",
    fontSize: "20px",
    marginLeft: theme.spacing(20),
    "&:hover": {
      color: "yellow",
      borderBottom: "1px solid white",
    },
  },
  spacing:{
  justifyContent: 'space-between',
  }
}));

function NavBar() {
  const classes = useStyles();

  return (
  <Grid xs={12} md={12} lg={12} sm={12}>
      <AppBar position="static" className={classes.width} >
        <Toolbar className={classes.spacing}  >
          <Typography variant="h1" className={classes.darkColor}>welcome</Typography>
              <DrawerComponent />
        </Toolbar>
      </AppBar>
  </Grid>
  );
}

export default NavBar;
