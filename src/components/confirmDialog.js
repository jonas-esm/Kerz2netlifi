import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTypography-h6':{
        fontFamily:`"Tajawal", sans-serif`
      },},
      button:{
          margin: theme.spacing(1)
      }
    }))

const ConfirmDialog = (props) => {
 const classes = useStyles()
    const { title, children, open, setOpen, onConfirm ,yBtn, nBtn} = props;
 return (
 <Dialog
 onClose={()=>setOpen(false)}
 open={open}
 aria-labelledby="confirm-dialog"
 >
 <DialogTitle classes={{root:classes.root}}>{title}</DialogTitle>
 <DialogContent>{children}</DialogContent>
 <DialogActions>
 {nBtn  && (
 <Button
 variant="contained"
  onClick = {()=> setOpen(false)}
 color="secondary"
 >
 {nBtn}
 </Button>)}
 <Button
 className={classes.button}
 variant="contained"
  onClick={()=> {
 setOpen(false);
 onConfirm();
 }}
 color="default"
 >
 {yBtn}
 </Button>
 </DialogActions>
 </Dialog>
 );
};
export default ConfirmDialog;