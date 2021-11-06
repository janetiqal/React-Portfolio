import React, { useRef } from "react";
import emailjs from "emailjs-com";

import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import { display } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    width:"50%",
    margin:'0 auto'
  },
}));

function ContactForm() {
  const classes = useStyles();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_serviceKey,
        process.env.REACT_APP_templatekEY,
        form.current,
        process.env.REACT_APP_id
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <Container >
      <form ref={form} onSubmit={sendEmail} className={classes.container}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </Container>
  );
}

export default ContactForm;
