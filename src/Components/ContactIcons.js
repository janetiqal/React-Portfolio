import React from "react";

import { IconButton, Typography } from "@material-ui/core";
import { GitHub } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ContactIcons() {
  return (
    <>
      <IconButton
        aria-label="Github link"
        href="https://github.com/janetiqal"
        target="_blank"
      >
        <GitHub />
      </IconButton>
      <IconButton
        aria-label="Email link"
        href="mailto:j.iqal35@gmail.com"
      >
        <EmailIcon />
      </IconButton>

      <IconButton
        aria-label="LinkedIn link"
        href="https://www.linkedin.com/in/janetiqal/"
        target="_blank"
      >
        <LinkedInIcon />
      </IconButton>
    </>
  );
}

export default ContactIcons;
