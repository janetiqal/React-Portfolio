import React, { Component } from "react";


import BottomNavigation from '@mui/material/BottomNavigation';
import ContactIcons from "./ContactIcons";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    footer: {
        bottom:0,
        width:'100%',       
    }
}));

function Footer() {
    const classes=useStyles();
    return (
      <BottomNavigation className={classes.footer} > 
        <ContactIcons />
      </BottomNavigation>
    );
  
}
export default Footer;
