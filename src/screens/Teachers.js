import {
  Card,
  CardContent,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import "./High.css";
const data = [
  {
    img: "https://uicookies.com/demo/theme/enlight/img/person_1.jpg",
    title: "Name of faculty",
    name: "English",
  },
  {
    img: "https://uicookies.com/demo/theme/enlight/img/person_3.jpg",
    title: "Name of faculty",
    name: "English",
  },
  {
    img: "https://uicookies.com/demo/theme/enlight/img/person_2.jpg",
    title: "Name of faculty",
    name: "English",
  },
  {
    img: "https://uicookies.com/demo/theme/enlight/img/person_5.jpg",
    title: "Name of faculty",
    name: "English",
  },
  {
    img: "https://uicookies.com/demo/theme/enlight/img/person_6.jpg",
    title: "Name of faculty",
    name: "English",
  },
  {
    img: "https://uicookies.com/demo/theme/enlight/img/person_7.jpg",
    title: "Name of faculty",
    name: "English",
  },
];

const useStyles = makeStyles(() => ({
  root: {
    marginTop: 140,
  },
  img: {
    height: 100,
    borderRadius: "100%",
    marginTop: 20,
  },
  margin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    border: "1px solid gray",
    margin: 10,
  },
  name: {
    fontSize: 22,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    marginBottom: 10,
  },
  heading: {
    textAlign: "center",
    height: "30vh",
    fontFamily: "Times New Roman Times serif",
    fontWeight: "bold",
    wordSpacing: 5,
    color: "white",
    marginBottom: 40,
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: 3,
  },
  bg: {
    backgroundColor: "#6A41ED",
  },
}));

const Teachers = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.bg}>
        <Typography className={classes.heading} variant="h3">
          Our qualified teachers
        </Typography>
      </div>
      <Container>
        <Grid container>
          {data.map((item) => (
            <Grid item md={4} xs={12}>
              <div className="body">
                <div className="container">
                  <div className="card">
                    <div className="imgbx">
                      <img src={item.img} />
                    </div>
                    <div className="content">
                      <h2>{item.title}</h2>
                      <p>
                        Description of faculty Description of faculty
                        Description of faculty Description of faculty
                        Description of faculty Description of faculty
                        Description of faculty Description of faculty
                        Description of faculty
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* <div className='body'>
      <div className="container">
        <div className="card">
          <div className="imgbx">
            <img  src="https://cdn.dribbble.com/users/7834604/screenshots/15652014/media/52f9a8064978d820f98135cd77b1e84f.jpg?compress=1&resize=800x600" />
          </div>
          <div className="content">
            <h2>Card one</h2>
            <p>
              Lorem ipsumdolor Lorem ipsumdolor Lorem ipsumdolor Lorem
              ipsumdolor Lorem ipsumdolor Lorem ipsumdolor Lorem ipsumdolorLorem
              ipsumdolor Lorem ipsumdolor Lorem ipsumdolor
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgbx">
            <img className='imgsize' src="https://cdn.dribbble.com/users/7834604/screenshots/15652014/media/52f9a8064978d820f98135cd77b1e84f.jpg?compress=1&resize=800x600" />
          </div>
          <div className="content">
            <h2>Card two</h2>
            <p>
              Lorem ipsumdolor Lorem ipsumdolor Lorem ipsumdolor Lorem
              ipsumdolor Lorem ipsumdolor Lorem ipsumdolor Lorem ipsumdolorLorem
              ipsumdolor Lorem ipsumdolor Lorem ipsumdolor
            </p>
          </div>
        </div>
        <div className="card">
          <div className="imgbx">
            <img className='imgsize' src="https://cdn.dribbble.com/users/7834604/screenshots/15652014/media/52f9a8064978d820f98135cd77b1e84f.jpg?compress=1&resize=800x600" />
          </div>
          <div className="content">
            <h2>Card three</h2>
            <p>
              Lorem ipsumdolor Lorem ipsumdolor Lorem ipsumdolor Lorem
              ipsumdolor Lorem ipsumdolor Lorem ipsumdolor Lorem ipsumdolorLorem
              ipsumdolor Lorem ipsumdolor Lorem ipsumdolor
            </p>
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default Teachers;
