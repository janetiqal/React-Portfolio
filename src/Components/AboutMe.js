import React from "react";
import { Typography, makeStyles, Button, Box, Grid } from "@material-ui/core";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";



const useStyles = makeStyles((theme) => ({
  aboutMeHeader: {
    textAlign: "center",
    color: theme.palette.secondary.dark,
    margin: 30,
    [theme.breakpoints.down("md")]: {
      textAlign: "center",
      fontSize: "2rem",
    },
  },
  textAboutMe: {
    padding: 20,
    margin: 20,
    text: "center",
  },
  spanElement: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
}));
function AboutMe() {
  const classes = useStyles();
  return (
    <>
      <Grid xs={12}>
        <Typography variant="h2" className={classes.aboutMeHeader}>
          ABOUT ME
        </Typography>
      </Grid>
      <Box
        sx={{
          padding: 30,
          width: "60%",
          margin: "0 auto",
          border: "10px solid #546e7a",
        }}
      >
        <Typography variant="h6" className={classes.textAboutMe}>
          I graduated from Loyola University Chicago with a bachelors degree in
          Biology...so how did I end up here? I minored in Bio-Statistics and we
          dabbled in programs like R and used coding to model data from large
          data sets. That exposure made me put my plans on hold for pharmacy
          school. I went into EMS to figure out if I should continue with a
          career in medicine. Unfortunately for the field of medicine, I decided
          to take my talents to web development.
        </Typography>
        <Typography variant="h6" className={classes.textAboutMe}>
          I earned a Bootcamp Certificate of Full Stack Web Development from
          Northwestern University in November of 2021, and have put in the work
          to become a{" "}
          <span className={classes.spanElement}>
            better, stronger developer everyday.
          </span>
        </Typography>
        <Typography variant="h6" className={classes.textAboutMe}>
          My time in EMS has made me proficient in working in teams, with an
          emphasis on working efficiently in diverse environments where time is
          a key factor in determining success. I am an effective communicator,
          problem solver, and efficient under a time crunch.
        </Typography>
        <Typography variant="h6" className={classes.textAboutMe}>
          Passionate about exploring new technologies and resources that make me
          a better, more informed, coder. Resourceful, teachable, and you will
          find that I am a capable collaborator in any setting.
        </Typography>
        <Typography variant="h6" className={classes.textAboutMe}>
          Enough, about me. Let's go see my work.
          <Button variant='text' href='/React-Portfolio/work'>
            <ArrowForwardIcon></ArrowForwardIcon>
          </Button>
        </Typography>
      </Box>
    </>
  );
}

export default AboutMe;
