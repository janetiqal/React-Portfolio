import React from "react";
import {
  makeStyles,
  Card,
  CardContent,
  Grid,
  CardMedia,
  Typography,
  Box,
  CardActions,
  CardHeader
} from "@material-ui/core";

import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton } from "@material-ui/core";
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';

const useStyles = makeStyles((theme) => ({
  container: {
    paddingLeft: 20,
    paddingRight: 20,
    margin: 15,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    background: theme.palette.secondary.dark,
    width: "100%",
    textAlign: "center",
  },
  cardItem: {
    boxShadow: "10 solid theme.palette.secondary.dark",
    "&:hover": {
        zIndex:1
      }
  },
  cardContent: {
    background: theme.palette.primary.light,
    color: "white",
  },
  aligner: {
    alignContent: "center",
  },
  linkButtons:{
    background: theme.palette.secondary.main,
    "&:hover": {
        color: theme.palette.secondary.main,
        background: theme.palette.primary.dark
      }
  },
  opposingLink:{
    background: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
    "&:hover": {
        color: theme.palette.primary.main,
        background: theme.palette.secondary.main
    },
  }
}));

function WorkCards(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={6} lg={4} className={classes.aligner}>
      <Box className={classes.container}>
        <Card  >
          <CardHeader
            title={props.title}
            subheader={props.subheader}
            className={classes.header}
          >
          </CardHeader>
          <CardMedia component="img" image={props.photo} />
          <CardContent className={classes.cardContent}>
            <Typography gutterBottom paragraph>
              {props.description}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton
            className={classes.linkButtons}
              aria-label="github link"
              href={props.githubRepo}
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
            className={classes.opposingLink}
              aria-label="github link"
              href={props.deployedApp}
              target="_blank"
            >
            <InsertLinkOutlinedIcon />
            </IconButton>
          </CardActions>
        </Card>
      </Box>
    </Grid>
  );
}

export default WorkCards;
