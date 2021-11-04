import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles({
  container:{
    display:'flex',
    flexDirection:'row',
    margin:'auto',
    height:'auto',
    maxWidth:'80%',
    backgroundColor:'#bdddeb' 
  },
  title:{
    fontSize:'2rem',
    color:'#3260c4',
    textAlign:'center',
    marginTop:'5rem'
  },
  myCard: {
    maxWidth: '33%',
    margin:'auto',
    fontSize:'1.8rem',
    color:'#3260c4'
  },
  media: {
    maxWidth: "100%",
    height:'60vh',
    margin: "auto",
    paddingTop: '16.25%', // 16:9
    backgroundSize:'cover'
  }
});

export default function Product() {
  const classes = useStyles();
   
    
    return (
      <React.Fragment>
         <CssBaseline />
            <Typography paragraph className={classes.title}>
                Considering buying our products!
              </Typography>
              <Container className={classes.container}>
              <Card className={classes.myCard}>
                  <CardHeader
                      title="Canon EOS REBEL T7 EF-18"
                      subheader="$549.99"
                  />
                  <CardMedia
                  component="img"
                  className={classes.media}
                  style={{contain:'true'}}
                  image={require("./eosrebel.jpeg")}
                  alt="Canon EOS REBEL T7 EF-18"
                />

                 
                  <CardContent>
                      <Typography variant="body2" color="textSecondary" component="p">
                          This is a great starter camera for beginners at an amazing price.
                      </Typography>
                  </CardContent>
                  <CardContent>
                      <Typography paragraph>
                          Features: Built-in wi-fi, ISO equivalent 100-6400
                      </Typography>
                  </CardContent>
              </Card>
              <Card  className={classes.myCard}>
              <CardHeader
                      title="Canon EOS 6D Mark II DSLR"
                      subheader="$1399"
              />
               <CardMedia
              component="img"
              className={classes.media}
              style={{contain:'true'}}
              image={require("./eos60.jpeg")}
              alt="Canon EOS 6D Mark II DSLR"
            />
              
             <CardContent>
                  <Typography variant="body2" color="textSecondary" component="p">
                  It can produce beautiful images.
                  </Typography>
              </CardContent>
              <CardContent>
                  <Typography paragraph>
                  Features: Built-in wi-fi, ISO 100-40000
                  </Typography>
              </CardContent>
          </Card>
      
      </Container>
    </React.Fragment>
  );
 }
  

  