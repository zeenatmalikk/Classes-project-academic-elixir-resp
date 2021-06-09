import React from "react";
import { fade, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import { Button } from "@material-ui/core";

const styles = (theme) => ({
  grow: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    margin: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  logo: {
    display: "none",
    
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    fontSize:32,
    fontFamily:'Times New Roman Times serif',
    
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 15),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
});

const Tool = (props) => {
  console.log("toolbars", props);
  const { classes } = props;
  return (
    <div className={classes.grow}>
      <AppBar style={{backgroundColor:'#002D6A'}} position="static">
        <Toolbar>
          <Typography className={classes.logo} variant="h5" noWrap>
            Academic Elixir
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className={classes.grow} />
          <div style={{ display: "flex" }}>
            <Typography
              style={{}}
              className={classes.title}
              variant="h6"
              color="inherit"
            >
              Home
            </Typography>
            <Typography className={classes.title} variant="h6" color="inherit">
              About
            </Typography>
            <Typography className={classes.title} variant="h6" color="inherit">
              Courses
            </Typography>
            <Typography className={classes.title} variant="h6" color="inherit">
              Pages
            </Typography>
            <Typography className={classes.title} variant="h6" color="inherit">
              Contact
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <Button variant="none" color="inherit">
              Login
            </Button>
            <IconButton
              edge="start"
              className={classes.sectionMobile}
              color="inherit"
              aria-label="open drawer"
              onClick={props.openDrawerHandler}
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withStyles(styles)(Tool);
