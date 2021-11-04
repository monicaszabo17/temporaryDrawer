import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';


const useStyles = makeStyles({
  drawer:{
    width:'200px'
  },
  myLink:{
    textDecoration:'none'
  }
});

export default function TemporaryDrawer() {
  const classes = useStyles();

  return(
    <div style={{display:'flex'}}>
      <Drawer variant="temporary" anchor="left" open="true" className={classes.drawer}>
        <List>
          <Link to = "/" className={classes.myLink}>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon/>
              </ListItemIcon>
              <ListItemText primary={'Home'}/>
            </ListItem>
          </Link>
          <Link to = "/product" className={classes.myLink}>
            <ListItem button>
              <ListItemIcon>
                <PhotoCameraFrontIcon/>
              </ListItemIcon>
              <ListItemText secondary={'Product'}/>
            </ListItem>
          </Link>
          <Link to = "/survey" className={classes.myLink}>
            <ListItem button>
              <ListItemIcon>
                <QuestionAnswerIcon/>
              </ListItemIcon>
              <ListItemText secondary={'Survey'}/>
            </ListItem>
          </Link>
        </List>
      </Drawer>
    </div>

  );
}
