import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Card, CardContent, CardMedia,  Button, Link } from "@material-ui/core";


const data = [
  {
    img: "https://image.flaticon.com/icons/png/512/194/194931.png",
    num: "20203",
    txt: "Students Enrolled",
  },
  {
    img: "http://www.icseastafrica.org/wp-content/uploads/2017/04/training-icon-15-1.png",

    num: "139",
    txt: "Certified teachers",
  },
  {
      img:'http://www.myiconfinder.com/uploads/iconsets/256-256-c90d3772fdadd43ae11bfb9d067be2e1.png',
    num: "99%",
    txt: "Passing to Universities",
  },
  {
      img:'https://www.kindpng.com/picc/m/288-2881170_happy-icon-blue-smiley-hd-png-download.png',
    num: "100%",
    txt: "Parent's Satisfaction",
  },
];

const useStyles = makeStyles(() => ({
    root:{
        marginTop:140,
marginBottom:140
    },
  img: {
    height: 50,
    borderRadius:'100px',
    
  },
  flex:{
      display:'flex',
      justifyContent:'space-evenly',
      margin:20
  },
  margin:{
    margin:20
  }
 
}));

const Students = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container style={{padding:0}}>
        <Grid container>
          {data.map((item) => (
            <Grid item md={3} xs={12} sm={6} >
              <div className={classes.flex}>
              <img className={classes.img} src={item.img} />
              <div>
              <Typography variant="h4">{item.num}</Typography>
              <Typography variant='body1'>
                  {item.txt}
              </Typography>
              </div>
              </div>

            </Grid>
          ))}
        </Grid>
        
      </Container>
    </div>
  );
};

export default Students;
