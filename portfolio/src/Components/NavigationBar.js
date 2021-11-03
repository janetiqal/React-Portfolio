import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";

import DrawerComponent from "./Drawer";

const useStyles = makeStyles((theme) => ({
  darkColor:{
    color: theme.palette.secondary.main
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
  space:{
  justifyContent: 'space-between'
  }
}));

function NavBar() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.space} >
        <Typography variant="h1" className={classes.darkColor}>welcome</Typography>
            <DrawerComponent />
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
