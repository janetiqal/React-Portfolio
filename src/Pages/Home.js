import React from "react";
import colorado from "../images/colorado.jpg";
import {
  Typography,
  makeStyles,
  Container,
  Box,
} from "@material-ui/core";

import AboutMe from "../Components/AboutMe.js";

const useStyles = makeStyles((theme) => ({
  intro: {
    display: "flex",
    [theme.breakpoints.down("md")]: {
      background: theme.palette.primary.dark,
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    [theme.breakpoints.down("lg")]: {
      background: theme.palette.primary.dark,
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
  },
  left: {
    flex: 0.5,
    overflow: "hidden",
    background: theme.palette.secondary.dark,
    [theme.breakpoints.down("lg")]: {
      width: "auto",
      borderRadius: "50%",
      background: theme.palette.secondary.dark,
    },
    [theme.breakpoints.down("md")]: {
      width: "auto",
    },
  },
  right: {
    flex: 0.5,
    position: "relative",
    background: theme.palette.secondary.main,
  },
  imgContainer: {
    width: 700,
    height: 700,
    background: theme.palette.primary.dark,
    borderRadius: "50%",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    float: "right",
    [theme.breakpoints.down("lg")]: {
      width: 500,
      height: 500,
      background: theme.palette.secondary.dark,
    },
    [theme.breakpoints.down("md")]: {
      width: 200,
      height: 200,
      borderRadius: "50%",
      justifyContent: "center",
      float: "right",
    },
  },
  photo: {
    height: "90%",
    width: "90%",
    borderRadius: "50%",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  },
  span: {
    color: theme.palette.primary.dark,
    paddingLeft: 70,
    margin: 10,
    fontSize: 76,
    [theme.breakpoints.down("lg")]: {
      fontSize: "6rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "3rem",
    },
  },
  wrapper: {
    width: "100%",
    height: "100%",
    paddingLeft: 50,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    [theme.breakpoints.down("lg")]: {
      textAlign: "center",
    },
  },
  colorChange: {
    color: "white",
  },
  text: {
    [theme.breakpoints.down("lg")]: {
      fontSize: "5rem",
    },
    [theme.breakpoints.down("md")]: {
      fontSize: "2.5rem",
    },
  },
}));

function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.intro}>
        <Container className={classes.left}>
          <Box className={classes.imgContainer}>
            <img
              src={colorado}
              className={classes.photo}
              alt="Me, enjoying the the view post hike, Colorado Springs, Co."
            />
          </Box>
        </Container>
        <Box className={classes.right}>
          <Box className={classes.wrapper}>
            <Typography className={classes.text} variant="h2">
              Hi <span className={classes.colorChange}>friends</span>, I'm
            </Typography>
            <Typography variant="h1" className={classes.span}>
              Janet Iqal
            </Typography>
          </Box>
        </Box>
      </Box>
      <AboutMe />
    </>
  );
}

export default HomePage;
