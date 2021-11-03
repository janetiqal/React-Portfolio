import React from "react";
import colorado from "../images/colorado.jpg";
import { Typography, makeStyles, Container, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  intro: {
    // background: theme.palette.secondary.main,
    display: "flex",
    
  },
  left: {
    flex: 0.5,
    overflow: "hidden",
    background: theme.palette.secondary.dark,

  },
  right: {
    flex: 0.5,
    position:'relative',
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
  },
  photo: {
    height: "90%",
    width:'90%',
    borderRadius: "50%",
  },
  span:{
      color:theme.palette.primary.dark,
      paddingLeft:70 ,
      margin: 10 ,
      fontSize:76
  },
  wrapper:{
      width:'100%',
      height:'100%',
      paddingLeft:50,
      display:'flex',
      flexDirection:'column',
      justifyContent:'center'
    },
    colorChange:{
        // color: theme.palette.secondary.dark
        color:"white"
    }
}));

function HomePage() {
  const classes = useStyles();
  return (
    <Box className={classes.intro}>
      <Container className={classes.left}>
            <Box className={classes.imgContainer} >
              <img
                src={colorado}
                className={classes.photo}
                alt="Me, enjoying the the view post hike, Colorado Springs, Co."
              />
            </Box>
      </Container>
      <Box className={classes.right}>
        <Box className={classes.wrapper}>
          <Typography variant="h2">Hi <span className={classes.colorChange}>friends</span>, I'm</Typography>
          <Typography variant="h1" className={classes.span}>Janet Iqal</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default HomePage;
