import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
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
export default function Dialog_box(props) {
    const classes = useStyles();
    const {funSetName,funSetComment,handleClose,handleSubmit,open,name,comment} = props;
    return(<Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
    <DialogTitle id="form-dialog-title">Retro_Card</DialogTitle>
    <DialogContent>
        <DialogContentText>
            To Enter the name and comment
</DialogContentText>
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="name"
            type="name"
            fullWidth
            value={name}
            onChange={(e) => {
                funSetName(e);
            }}
        />
        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Comment"
            type="name"
            fullWidth
            value={comment}
            onChange={
                (e) => {
                    funSetComment(e);
                }
            }
        />
    </DialogContent>
    <DialogActions>
        <Button onClick={handleClose} color="primary">
            Cancel
</Button>
        <Button onClick={handleSubmit} color="primary">
            Submit
</Button>
    </DialogActions>
</Dialog>)
}


