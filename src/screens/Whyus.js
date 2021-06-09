import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const data = [
  {
    title: "Consectetur Adipisicing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos quibusdam soluta at.        ",
  },
  {
    title: "Consectetur Adipisicing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos quibusdam soluta at.        ",
  },
  {
    title: "Consectetur Adipisicing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos quibusdam soluta at.        ",
  },
  {
    title: "Consectetur Adipisicing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto provident qui tempore natus quos quibusdam soluta at.        ",
  },
];

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 140,
  },
  root2: {
    marginTop: 40,
  },
  head: {
    textAlign: "center",
    fontFamily: "Times New Roman Times serif",
    fontWeight: "bold",
    wordSpacing: 5,
    color: "black",
    marginBottom: 40,
    textTransform: "capitalize",
    color:'#053361'
  },
  sub: {
    textAlign: "center",
    fontFamily: "Times New Roman Times serif",
    wordSpacing: 5,
    color: "black",
    marginBottom: 30,
    textTransform: "capitalize",
  },
  height: {
    height: 30,
    marginRight: 20,
  },
  title: {
    fontFamily: "Times New Roman Times serif",
    textTransform: "capitalize",
    wordSpacing: 5,
    fontSize: 26,
    color:'#053361'
  },
  desc: {
    fontFamily: "Times New Roman Times serif",
    textTransform: "capitalize",
    wordSpacing: 5,
    fontSize: 16,
  },

  btnadm: {
    backgroundColor: "black",
    color: "#fff",
    borderRadius: "20px",
    width:'100%',
    "&:hover": {
      backgroundColor: "white",
      color: "black",
      fontWeight: "bold",
      padding: 20,
    },
  },
  btnplace: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  admission: {
    display: "flex",
    justifyContent: "space-around",
    backgroundColor: "#6A41ED",
  },
  adm: {
    fontFamily: "Times New Roman Times serif",
    textTransform: "capitalize",
    wordSpacing: 5,
    fontSize: 50,
    textAlign: "center",
    marginTop: 50,
    marginBottom: 50,
    color: "#fff",
  },
}));

const Whyus = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container>
        <Typography className={classes.head} variant="h3">
          Why Choose academic Elixir
        </Typography>
        <Typography className={classes.sub} variant="body1">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
          provident qui tempore natus quos quibusdam soluta at.
        </Typography>
        <Grid container>
          {data.map((item) => (
            <Grid item md={6} xs={12} sm={6}>
              <div style={{ display: "flex", margin: 40 }}>
                <img
                  className={classes.height}
                  src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"
                />
                <div>
                  <Typography className={classes.title} variant="h4">
                    {item.title}
                  </Typography>
                  <Typography variant="body1">{item.desc}</Typography>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Grid container className={classes.root2}>
        <Grid item md={6} xs={12} sm={12} className={classes.admission}>
          <Typography className={classes.adm} variant="h3">
            Get your admission now!
          </Typography>
        </Grid>
        <Grid
          item
          md={6}
          xs={12}
          sm={12}
          style={{
            display: "flex",
            justifyContent: "space-around",
            backgroundColor: "#6A41ED",
          }}
        >
          <div className={classes.btnplace}>
            <Button className={classes.btnadm} size="medium" variant="outlined">
              Enroll Now
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Whyus;
