import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  img: {
    height: 80,
  },
  txt: {
    fontSize: 26,
    fontFamily:'Times New Roman Times serif',
    marginTop:20,
    marginBottom:20,
    fontWeight:'bold',
    letterSpacing:1
  },
  margin: {
    margin: 15,
    width:'90%',
    borderRadius:'10px',
    "&:hover":{
      boxShadow:'0 2px 2px 0 gray'
    }
  },
  margincont: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  heading: {
    textAlign: "center",
    fontFamily:'Times New Roman Times serif',
    fontWeight:'bold',
    wordSpacing:5,
    color:'white',
    marginBottom:40,
    textTransform:'capitalize',
    height:'30vh',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    letterSpacing:3

  },
  center:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  sub:{
    textAlign:'justify',
    wordSpacing:2
  },
  btn:{
    borderRadius:'10px',
    "&:hover":{
    
      fontWeight:'bold'
    }
  },
  bg:{
    backgroundColor:'#6A41ED'
  }
}));

const data = [
  {
    img: "http://www.myiconfinder.com/uploads/iconsets/256-256-26b70a6370aa8e18421df94146a40cb4.png",
    txt: "English",
    sub: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica",
  },
  {
    img: "http://www.myiconfinder.com/uploads/iconsets/256-256-b6fa74060c332b7a6bcbf593ff4c9596-atom.png",
    txt: "Physics",
    sub: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica",
  },
  {
    img: "http://www.myiconfinder.com/uploads/iconsets/256-256-2d7b44439085535e09a7e9fcaee1169d.png",
    txt: "Chemistry",
    sub: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica",
  },
  {
    img: "http://www.myiconfinder.com/uploads/iconsets/256-256-09ec4ed53f4acd22bd2d8c8d221554b5-microscope.png",
    txt: "Biology",
    sub: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica",
  },
  {
    img: "https://icons-for-free.com/iconfiles/png/512/math+tutor+icon-1320195955563127435.png",
    txt: "Maths",
    sub: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica",
  },
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Circle-icons-computer.svg/1200px-Circle-icons-computer.svg.png",
    txt: "Computer Science",
    sub: " Lizards are a widespread group of squamate reptiles, with over 6,000 species, rangingacross all continents except Antarctica",
  },
];

const Courses = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.bg}>
        <Typography className={classes.heading} variant="h3">
          Courses we offer
        </Typography>
          </div>
      <Container style={{padding:0}}>
        
        <Grid container>
          {data.map((item) => (
            <Grid item xs={12} sm={6} md={4} className={classes.center}>
              <Card className={classes.margin}>
                <CardActionArea>
                  <CardContent className={classes.margincont}>
                    <div>
                      <img
                        className={classes.img}
                       src={item.img}
                      />
                      <Typography
                        className={classes.txt}
                  
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        {item.txt}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        className={classes.sub}
                      >
                        {item.sub}
                      </Typography>
                    </div>
                  </CardContent>
                </CardActionArea>
                <CardActions className={classes.center}>
                 
                  <Button className={classes.btn} fullWidth variant='contained' color="primary">
                    Learn More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Courses;
