import React,{useState} from "react";
import { connect } from "react-redux";
import { makeStyles,createStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete'
import{Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,Box,
  Paper,Button, IconButton, MenuList, Menu, GridListTileBar, List, ListItem, ListItemAvatar,Avatar, ListItemText, Typography, Divider}  from '@material-ui/core'
import clsx from 'clsx'
import {rmFromCart} from '../reducers/actions'
import {Link} from 'react-router-dom'
import '../Asset/styles.css'
import { ShoppingBasketRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme: Theme) => createStyles({
  table: {
    maxWidth: 800,
  },
  but: {
   width: '50%',right:'25%'
  , margin:'10px'
  },
  root: {
    margin:'auto',
    width: '100%',
    maxWidth: '400px',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    position:'absolute',
    dir:'rtl',
    marginTop:'10px'
  },
  hide:{
    [theme.breakpoints.down('sm')] : { display:'none',
  }}}))


function Cart(Props) {
  // const ttl = (res) => {
      
  // }
  // const [itemmd, setitemme] = useState('')
  // const changeCount = (e) =>{
  //   setitemme({[e.target.name] : e.target.value})}
  // console.log(Props.cartItems[1])
  const classes = useStyles();

  return (
    <Box overflow="hidden">
      {/* <Table
        className={clsx(classes.table, {
          [classes.hide]: Props.open,
        })}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>الصنف</TableCell>
            <TableCell size="small" align="right">
              السعر
            </TableCell>
            <TableCell size="small" align="right">
              الكمية
            </TableCell>
            <TableCell size="small" align="right">
              المقاس
            </TableCell>
            <TableCell size="small" align="right">
              Total
            </TableCell>
            <TableCell size="small" align="right">
              الغاء
            </TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Props.cartItems.map((row, index) => {
            if (row.quantity != 0) {
              return (
                <TableRow key={row.name}>
                  <TableCell size="small" component="th" scope="row">
                    <img
                      style={{ height: "100px" }}
                      src={row.products.imgUrl}
                    />
                  </TableCell>
                  <TableCell align="right">
                    {row.products.product_price}
                  </TableCell>
                  <TableCell align="right">{row.quantity}</TableCell>
                  <TableCell align="right">{row.size}</TableCell>
                  <TableCell align="right">
                    {row.quantity * row.products.product_price}
                  </TableCell>
                  <TableCell align="right">
                    <IconButton
                      aria-label="Delete"
                      onClick={() => Props.rmFromCart(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            }
          })}
          <TableRow>
            <TableCell colSpan={2}>Total</TableCell>
            <TableCell align="right">{Props.total}</TableCell>
       //     {/* {Props.cartItems.reduce((total, item)=> parseInt(total) + parseInt(item.quantity) * parseInt(item.products.product_price),0)} 
      //    </TableRow>
       // </TableBody>
     // </Table> */}
      

      <List className={classes.root}>
        {Props.cartItems.map((row, index) => {
          if (row.quantity != 0) { return (
            <React.Fragment>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                {/* <Avatar alt="Remy Sharp" src={row.products.imgUrl} /> */}
                <img src={row.products.imgUrl} style={{height:'100px', position:'relative'}}/>
              </ListItemAvatar>
              <ListItemText
                dir='rtl'
                
                primary={<Typography align="right" ><span style={{margin:'0 5px'}}>{`${row.products.product_name}`}</span> </Typography>}
                secondary={
                  <React.Fragment>
                    <Typography
                    align="right"
                      dir='rtl'
                      variant="body2"
                      className={classes.inline}
                      color="textSecondary"
                    >
                     <span style={{margin:'0 5px'}}> {`مقاس ${row.size}`}</span> <span style={{margin:'0 5px'}}> {`الكمية ${row.quantity}`}</span> <span>{`السعر  ${row.products.product_price}`}</span> 
                    </Typography>
                    <IconButton
                      aria-label="Delete"
                      onClick={() => Props.rmFromCart(index)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" /></React.Fragment>)}
        })}
         <ListItem alignItems="flex-start">
              <ListItemAvatar>
               <ShoppingBasketRounded />
              </ListItemAvatar>
              <ListItemText
                dir='rtl'
                
                primary={<Typography align="right" ><span>{}</span> </Typography>}
                secondary={
                  <React.Fragment>
                    <Typography
                    align="right"
                      dir='rtl'
                      variant="body2"
                      className={classes.inline}
                      color="textSecondary"
                    >
                     <span style={{margin:'0 10px'}}> {`اجمالي السلة = ${Props.total}`} </span> <span>{`جنيه مصري`}</span> 
                    </Typography>
                    
                     
                  </React.Fragment>
                }
              />
            </ListItem>
        </List>
        <Link to="/orderConfirmation/address">
        <Button variant="outlined" color="secondary" className={classes.but}>
    متابعة
        </Button>
      </Link> </Box>)
 
}
const mapStateToProps = state => {
  return {
    cartItems: state.cartReducers.cart,
    total: state.cartReducers.cart.reduce(
      (tol, item) => tol + (parseInt(item.quantity) * parseInt(item.products.product_price)) ,0
      )
  };
};
const mapDispatchToProps = dispatch => {
  return {
    rmFromCart: (index , clear) =>
      dispatch(rmFromCart(index , clear))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
