import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card_Com from './Card_Com';
import { withStyles, AppBar } from "@material-ui/core";
import GridButton from './GridButton/GridButton';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Card_table from './Card_table';
import Menu from './Menu';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#F4F6F9',
        width: "75%"
    },
    paper: {
        // padding: theme.spacing(12),
        // textAlign: 'center',
        // color: theme.palette.text.secondary,

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


const Home = () => {
    var persons;
    const classes = useStyles();
    const [List4, setList4] = React.useState([]);
    const [List, setList] = React.useState([]);
    const [List5, setList5] = React.useState([]);
    const [List1, setList1] = React.useState([{ id: "1", name: "sweta", comment: "blabla" }, { id: "2", name: "sweta", comment: "blabla" }, { id: "3", name: "sweta", comment: "blabla" }]);
    const [List2, setList2] = React.useState([{ id: "1", name: "sweta", comment: "blabla" }, { id: "2", name: "sweta", comment: "blabla" }, { id: "3", name: "sweta", comment: "blabla" }]);
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [comment, setComment] = React.useState("");
    const [ initialLoad,setinitialLoad] = React.useState(true);
    const handleClickOpen = () => {
        setOpen(true);
    };
    React.useEffect(() => {
        var arr=[];
        axios.get(`https://api.spacexdata.com/v3/launches?limit=100`)
        .then(res => {
           persons =  res.data;
       persons.filter(i=>{if(!arr.includes(i.launch_year)){
              arr.push(i.launch_year);
       }})
       setList4(arr);
       setList5(persons);
       })
        }
       , []);
    const handleClose = () => {
        setOpen(false);
    };
    const funSetName = (e) => {
        console.log(name + "name")
        if (!e.target.value.match(/[0-9]/)) {
            setName(e.target.value);
        }

    }
    const funSetComment = (e) => {
        setComment(e.target.value);
    }
    const handleSubmit = (e) => {
        setList([...List, { name: name, comment: comment, id: List.length + 1 }]);
        setOpen(false);
    };
    const buttonClicked =(year) =>{
        var arr = [];
        List5.map(i=>{if(year === i.launch_year){
            arr.push(i);
        }

        })
        setList(arr);
        setinitialLoad(false);

    }
    const successStartTrue =()=>{
        axios.get(`https://api.spacexdata.com/v3/launches?launch_success=true`)
        .then(res =>{
            var succfullyStart = res.data;
            setinitialLoad(false);
            setList(succfullyStart);

        })
        

    }
    const successlandedFalse =()=>{
        axios.get('https://api.spacexdata.com/v3/launches?land_success=false')
        .then(res=>{
            var failureLand = res.data;
            setinitialLoad(false);
            setList(failureLand);
            
        })

    }
    const successlandedTrue = ()=>{
        axios.get('https://api.spacexdata.com/v3/launches?land_success=true')
        .then(res=>{
            var successLand = res.data;
            setinitialLoad(false);
            setList(successLand);
            
        })

    }
    const successStartFalse =()=>{
            axios.get(`https://api.spacexdata.com/v3/launches?launch_success=false`)
            .then(res =>{
                var unSuccfullyStart = res.data;
                setinitialLoad(false);
                setList(unSuccfullyStart);
    
            })
            

    }
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{"backgroundColor": "#E0EAE7" , "color":"black"}} className={classes.appBar}  >
                <h1>SpaceX launch program</h1>
            </AppBar>
            <Grid container spacing={1}>
                <Grid item xs={12} sm={3} className={classes.border}>
                    <Grid container spacing={3}>
                    <Grid item xs={12} sm={12}>
                           <h3 style={{color :"black"}}>launch year</h3>
                        </Grid>
                       
                       
                        {List4.map((i,index)=>{
                            
                                return <GridButton title={i} key={index} buttonClicked={(e)=>buttonClicked(i)}/>
                            
                      } )}
                        <Grid item xs={12} sm={12}>
                           <h3 style={{color :"black"}}>Successful launch</h3>
                        </Grid>
                        <GridButton title="true"  buttonClicked={()=>successStartTrue()} />
                        <GridButton title="false" buttonClicked={()=>successStartFalse()}/>
                        <Grid item xs={12}>
                           <h3 style={{color :"black"}}>Successful landed</h3>
                        </Grid>
                        <GridButton title="true" buttonClicked={()=>successlandedTrue()} />
                        <GridButton title="false" buttonClicked={()=>successlandedFalse()} />

                    </Grid>
                </Grid>
                <Grid item xs={12} sm={7}  >
                    <Card_table title="Rockets!!!" List={initialLoad?List5:List}  />
                </Grid>
            </Grid>

        </div>
    );
};



export default Home;