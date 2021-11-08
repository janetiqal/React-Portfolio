import React, { useRef } from "react";
import emailjs from "emailjs-com";

import {
  Container,
  makeStyles,
  Button,
  Typography,
  Box,
} from "@material-ui/core";
import ContactIcons from "./ContactIcons";

const useStyles = makeStyles((theme) => ({
  header: {
    margin:'0 auto',
    width:'60%',
    display:'flex',
    justifyContent:'space-around',
    padding:15,
    marginTop:15
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: "60%",
    margin: "0 auto",
    padding: 15,
    border: `5px solid ${theme.palette.secondary.dark}`,
    backgroundColor: theme.palette.primary.light,
  },
  label: {
    fontFamily: "Roboto",
    padding: 15,
    fontSize: 20,
  },
  inputs: {
    lineHeight: "1.5em",
    fontSize: 20,
    fontFamily: "Roboto",
  },
  text:{
    lineHeight:'1.5em',
    color:theme.palette.secondary.dark
  },
  sendBtn:{
    width:'30%',
    margin:'0 auto',
    marginTop:15,
    background: theme.palette.secondary.dark,
    "&:hover":{
      background: theme.palette.secondary.main,

    }
  }
}));

function ContactForm() {
  const classes = useStyles();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Container >
     <Box className={classes.header}>
        <Typography variant="h4" className={classes.text}> CONTACT ME </Typography>
     </Box>
     <Box className={classes.header}>
        <ContactIcons />
     </Box>
     <Box className={classes.header}>
        <Typography variant="P" className={classes.text}> github.com/janetiqal</Typography>
        <Typography variant="P" className={classes.text}> j.iqal35@gmail.com </Typography>
        <Typography variant="P" className={classes.text}> linkedin.com/in/janetiqal</Typography>     
     </Box>

      <form ref={form} onSubmit={sendEmail} className={classes.container}>
        <label className={classes.label}>Name</label>
        <input className={classes.inputs} type="text" name="user_name" />
        <label className={classes.label}>Email</label>
        <input className={classes.inputs} type="email" name="user_email" />
        <label className={classes.label}>Message</label>
        <textarea
          className={classes.inputs}
          cols="30"
          rows="8"
          name="message"
        />
        <Button type="submit" value="Send" className={classes.sendBtn}>
        Send
        </Button>
      </form>
    </Container>
  );
}

export default ContactForm;
