import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width :'150px',
    height :"300px",
    margin : '20px'

  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  dashboard :{
    color : 'white'
  },
  media: {
    height: 140,
  }
}));

const Card_Com = (props) => {
  const classes = useStyles();
  const {name,number,missin_id,launch_year,launch_success,image} = props;
    return (
      <div className={classes.root}>
      <Card className={classes.root}>
      <CardActionArea>
        <img src={image} style ={{height :"100px", width : "100px"}}/>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Commented by : {name}
        </Typography>
        <Typography variant="h5" component="h2">
        {number}
        </Typography>
        <Typography variant="body2" component="p">
        launch_year :{launch_year}
        </Typography>
        <Typography variant="body2" component="p">
        missin_id :{missin_id}
        </Typography>
        <Typography variant="body2" component="p">
        launch_success :{launch_success}
        </Typography>
      </CardContent>
      </CardActionArea>
    </Card>
    </div>
    );
};



export default Card_Com;

Card_Com.defaultProps ={
  name :"Undefined",
  Comment :"Not Given"
}
