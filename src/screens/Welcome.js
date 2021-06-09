import {
  Button,
    Card,
    CardMedia,
  Container,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles(() => ({
  root:{
marginBottom:40
  },
  welcome: {
    textAlign: "left",
    marginTop: "5%",
    fontSize: "48px",
    color:'#fff',
    textTransform:'capitalize',
    wordSpacing:4,
    fontFamily:'Times New Roman Times serif',

  },
  margin: {
    marginTop: -100,
  },
  abt: {
    textAlign: "center",
    fontSize: 45,
    lineHeight:2,
    fontFamily:'Times New Roman Times serif',
fontWeight:'bold'
  },
  body:{
      textAlign:'justify',
      width:'90%',
      fontSize:18,
      marginTop:10,
      wordSpacing:3,
    fontFamily:'Times New Roman Times serif',

  },
  marginbtn:{
    marginTop:40,
    marginBottom:40
  },
  paper:
  {
    borderRadius:'5px',
    borderTopRightRadius:'40px',
    borderTopLeftRadius:'40px',
  },
  learn:{
    borderRadius:'5px',
    "&:hover":{
      borderRadius:'25px'
    }
  }
}));

const Welcome = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div style={{ backgroundColor: "#6A41ED"}}>
        <Grid container>
            <Grid item md={1}/>
   <Grid
            item
            md={11}
            xs={12}
            sm={12}
            style={{ height: "45vh" }}
          >
            <Typography variant="h3" className={classes.welcome}>
              Welcome to Academic Elixir
            </Typography>
          </Grid>
        </Grid>
        </div>
        <Container style={{ padding: 0 }}>
        <Grid container className={classes.margin}>
          <Grid item xs={12} md={12}>
            <Paper elevation={3} className={classes.paper}>
              <Typography className={classes.abt} variant="h4">
                About Us
              </Typography>
             <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
             <Typography variant="body1" className={classes.body}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                explicabo veniam labore ratione illo vero voluptate a deserunt
                incidunt odio aliquam commodi blanditiis voluptas error non
                rerum temporibus optio accusantium!
              </Typography>
              <div className={classes.marginbtn}>
              <Button className={classes.learn} variant='contained' color='primary'>
                Learn More
              </Button>
              </div>
                 </div>
            </Paper>
          </Grid>
         
        </Grid>
      </Container>
    </div>
  );
};

export default Welcome;
