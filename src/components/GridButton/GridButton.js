import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#B9E35C',
        width: "75%"
    },
    root1:{
        backgroundColor: '#2ec1ac'
    },
    border: {
        border: '1px solid red',
        margin: '20px'
    },
    border_blue: {
        border: '1px solid red',
        margin: '20px'
    }
}));

const GridButton = (props) => {
    const classes = useStyles();
    return(<Grid item xs={6}>
        <Button className={ props.isActive ? classes.root1: classes.root } variant="contained" color="primary" onClick={()=>props.buttonClicked()} >
            {props.title}
        </Button>
        </Grid>)
}

export default GridButton;