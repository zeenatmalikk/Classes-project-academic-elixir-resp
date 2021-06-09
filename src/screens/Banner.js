import { Grid, makeStyles, Typography, fade } from "@material-ui/core";
import React from "react";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import "./Banner.css";

const useStyles = makeStyles((theme) => ({
  grid: {
    width: "100%",
    height:'100vh'
  },
  img: {
    objectFit: "cover",
    width: "100%",
    height: "80vh",
    filter: "dropshadow(8px 8px 10px gray)",
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginTop:20,
    backgroundColor: fade(theme.palette.common.black, 0.5),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.black, 0.5),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  inputRoot: {
    color: 'white',
    fontSize:26,
    
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const Banner = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={12} xs={12} sm={12} className={classes.grid}>

          <img
            className="filter"
            src="https://cdn.dribbble.com/users/2281811/screenshots/5922184/campus_instagram_kortext-01_4x.png?compress=1&resize=1600x1200"
          />
          <div className="centered">Your Bright Future is Our Mission
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon style={{fontSize:38}} />
            </div>
            <InputBase
              placeholder="Search your course"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          </div>

          
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
