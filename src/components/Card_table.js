import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'; 
import AddIcon from '@material-ui/icons/Add';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { withStyles, AppBar } from "@material-ui/core";
import Card_Com from './Card_Com';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#F4F6F9'
    },
    paper: {
        width: "25%",
        height: '10%',
        padding: theme.spacing(12),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: '120px'
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

export default function Card_table(props) {
    const classes = useStyles();
    const {List,handleClickOpen,title} = props;

 return(
        <Grid container className={classes.border_blue} spacing={3}>
<AppBar position="static" style={{"backgroundColor":"#62A490"}} className={classes.appBar}>
    <Toolbar variant="dense">
        <MenuIcon edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={(e) => {
            handleClickOpen()

        }}>
            <AddIcon />
        </MenuIcon>&nbsp;
        <Typography variant="h6" color="inherit">
            {title}
</Typography>
    </Toolbar>
</AppBar>
{List.map((i,index)=> 
<Card_Com image={i.links.mission_patch} name={i.mission_name} number={i.mission_name} missin_id={i.mission_id} launch_year={i.launch_year} launch_success={i.launch_success} key={index}></Card_Com>)}


</Grid>
    )

}