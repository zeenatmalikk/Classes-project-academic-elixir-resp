import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import {
  LinkedIn,
  LocationCity,
  LocationOn,
  Mail,
  Phone,
  Twitter,
  WhatsApp,
  YouTube,
} from "@material-ui/icons";
import React from "react";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "#000",
  },
  head: {
    fontFamily: "Times New Roman Times serif",
    fontWeight: "bold",
    wordSpacing: 5,
    color: "black",
    marginBottom: 40,
    textTransform: "capitalize",
    marginTop: 40,
    color: "#fff",
  },
  sub: {
    fontFamily: "Times New Roman Times serif",
    fontSize: 16,
    fontWeight: 400,
    wordSpacing: 5,
    color: "black",
    marginBottom: 40,
    textTransform: "capitalize",
    marginTop: 40,
    color: "#fff",
  },
  socialhd: {
    fontFamily: "Times New Roman Times serif",
    fontSize: 35,
    fontWeight: 400,
    wordSpacing: 5,
    color: "black",
    marginBottom: 10,
    textTransform: "capitalize",
    color: "#fff",
  },
  social: {
    justifyContent: "space-between",
    display: "flex",
  },
  tw: {
    fontSize: 39,
    color: "#1DA1F2",
  },
  wp: {
    fontSize: 39,
    color: "#00D9BB",
  },
  yt: {
    fontSize: 39,
    color: "#FF0000",
  },
  li: {
    fontSize: 39,
    color: "#0A66C2",
  },
  flex: {
    display: "flex",
    marginTop:20

  },
  add:{
      marginTop:2,
      color:'#fff',
      marginLeft:20
  },
 
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container >
        <Grid container>
          <Grid item md={6} xs={12} sm={12}>
            <Typography className={classes.head} variant="h4">
              About Academic Elixir
            </Typography>
            <Typography className={classes.sub} variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              provident suscipit natus a cupiditate ab minus illum quaerat
              maxime inventore Ea consequatur consectetur hic provident dolor ab
              aliquam eveniet alias
            </Typography>
            <Typography className={classes.socialhd} variant="h6">
              Social
            </Typography>
            <div className={classes.social}>
              <Twitter className={classes.tw} />
              <WhatsApp className={classes.wp} />
              <YouTube className={classes.yt} />
              <LinkedIn className={classes.li} />
            </div>
          </Grid>
          <Grid item md={1} />
          <Grid item md={5} xs={12} sm={12}>
            <Typography className={classes.head} variant="h5">
              Contact Info
            </Typography>
            <div >
            <div className={classes.flex}>
              <LocationOn style={{ color: "#fff" }} />{" "}
              <Typography className={classes.add}>
                198 West 21th Street, Suite 721 New York NY 10016
              </Typography>
            </div>
            <div className={classes.flex}>
                <Mail style={{ color: "#fff" }}/>
                <Typography className={classes.add}>
                example@mail.com
              </Typography>
            </div>
            <div className={classes.flex}>
                <Phone style={{ color: "#fff" }}/>
                <Typography className={classes.add}>
            2233556677
              </Typography>
            </div>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
