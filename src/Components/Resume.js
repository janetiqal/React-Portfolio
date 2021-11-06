import React from "react";
import { Box, Button, Container, makeStyles, Typography } from "@material-ui/core";

const useStyles=makeStyles((theme)=> ({
    root:{
        background: theme.palette.secondary.dark
    },
    container:{
        display:'flex',
        flexDirection:'column',
        margin: '0 auto',
        padding:30
    },
    button:{
        margin:'auto',
        width:'fit-content',
        marginBottom:30,
        background:theme.palette.primary.main,
        color:'white',
        '&:hover':{
            color:theme.palette.primary.dark
        }
    },
    text:{
        textAlign:'center',
        color:'black',
        paddingBottom:15
    }

}));


function Resume() {
    const classes=useStyles();
  return (
    <Box className={classes.root}>
      <Container className={classes.container}>
      <Typography className={classes.text} variant='h6'>To view my resume as a PDF, click the button and you will then be able to download it.</Typography>
      <Button className= {classes.button} href="https://drive.google.com/file/d/18qlAP49ZwLy8priQLGHrkALbLwoFiysa/view?usp=sharing">
        View as PDF
      </Button>
        <iframe
          src="https://drive.google.com/file/d/18qlAP49ZwLy8priQLGHrkALbLwoFiysa/preview" 
          width='100%'
          height='700px'
          title="Janet Iqal's Resume"
          allow="autoplay"
        ></iframe>
      </Container>

    </Box>
  );
}
export default Resume;
