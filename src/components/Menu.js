import React, { Component }  from 'react';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button'

const useStyles = makeStyles({
  root: {
    width: 230,
  },
});

export default function Menu() {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <MenuList>
      {/* <Grid container spacing={6}>

              </Grid> */}
      </MenuList>
    </Paper>
  );
}
