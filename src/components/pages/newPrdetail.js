import React, { Component, useState, useEffect, useRef} from 'react'
import { connect } from 'react-redux'
import {useParams} from 'react-router-dom'
import { addToCart, selectProduct } from '../reducers/actions'
import Loading2 from '../Asset/Loading2'
import {UndoRounded} from '@material-ui/icons';
import {
  Button,
  Box,
  Typography,
  MenuItem,
  Grid,
  TextField,
 
} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Link } from "react-router-dom";
import {makeStyles,
  createStyles} from '@material-ui/core/styles'
import SizeChart from './SizeChart'
  const useStyles = makeStyles((theme) => ({
      formLabelRoot: {
        
      },
      MuiInputLabel: {
        
      }}))

export const NewPrdetail = (Props) => {
    const [selectedProduct, setSelectedProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [getColors, setColors] = useState([]);
  const [size, setSize] = useState(4);
  const urlParams = useParams();
      const classes = useStyles()
      const [open, setOpen] = useState(false);
  const [sizeArr, setSizeArr] = useState([])
  const [barcodeState, setBarcode] = useState([])
  const seconds = 500;
  const handleSize = (e) => {
    setSize(e.target.value);}
    const handleQuantity = (e) => {
            setQuantity(e.target.value);
          };
useEffect(() => { 
    if(Props.products.length <= 2)return ;
    const found = Props.products.find((item) => item.product_id == urlParams.id);
    setSelectedProduct(found)
    // const barcodes = 
    // setBarcode(Props.products.filter(
    //             (item) =>
    //               item.barcode == selectedProduct.barcode && item.barcode != null
    //           ))
    setBarcode((perv) => Props.products.map(
        // i=> {if (i.barcode == found.barcode) return perv.concat(i) }
        i=> i.barcode == found.barcode ?  i : perv

        

    ))
              setTimeout(() => {
                  
              console.log(urlParams)
            //   setColors(barcodes);
              setSizeArr(found.sizes.split(","))
        console.log(found  , barcodeState , size)

            }, 1500);  
}, [selectedProduct])
const handleClickOpen =() => {
    setOpen(true);
  
  };

  const handleClose = () => {
    setOpen(false);
  };
  const [sizeChartOpen , setSizeChartOpen] = useState(false)
const handleSizeChartOpen = (boolean) => setSizeChartOpen(boolean)
  const descriptionElementRef = useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
    
    
    if(!selectedProduct) return(
        <div><Loading2/></div>
    )
   
    // {return JSON.stringify(selectedProduct) !=='{}'  && 
    {return sizeArr !==[]  && 
         <div>
           <Grid container> <Grid item xs={12} >
             <h2 style={{ margin: "auto", textAlign: "center" , marginBottom:"10px" }}>
               {selectedProduct.product_name}
             </h2></Grid>
    
             <Grid container item xs={12}>
             <Dialog
        open={open}
        onClose={handleClose}
        scroll="body"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        // maxWidth="lg"
        fullScreen
      >
        
       
        <img
                  style={{ width:'120%' }}
                  src={selectedProduct.imgUrl}
                  onClick={handleClose}
                />
        
        
      </Dialog>
      <Dialog
         open={sizeChartOpen}
         onClose={()=> handleSizeChartOpen(false)}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        // maxWidth={false}
        fullScreen
        
      >
        
       <DialogContent onClick={()=> handleSizeChartOpen(false)}>
        {/* <img
                  style={{ width:'120%' }}
                  src={selectedProduct.imgUrl}
                  onClick={handleClose}
                />
         */}
         <SizeChart /> 
        </DialogContent>
      </Dialog>
               <Grid  container item xs={12} lg={6}>
             {/* <Grid container item xs={6}> */}
               <Grid item xs={7}>
                
                 <img
                  style={{ maxWidth:'200px', }}
                  src={selectedProduct.imgUrl}
                  onClick={handleClickOpen}
                />
              </Grid>
              <Grid container item xs={5} style={{ justifyContent:'start',
                                          flexDirection:'column',
                                          alignContent:'start' }} >
              
                  {/* <Box display="flex"  flexDirection='column'> */}
                  {barcodeState.map((item) => (
                      item.product_id  && (
                    <Link
                      key={item.product_id}
                      to={"/products/pid=" + item.product_id}
                      style={{ textDecoration: "none", color: "default" ,display: "inlineBlock"}}
                      onClick={() => setSelectedProduct(item)}
                    >
                      <img src={item.imgUrl} style={{ maxHeight: 100 }} />
                    </Link>)
                  ))}
                {/* </Box> */}
                </Grid>
              {/* </Grid> */}
              </Grid>
              {/* <Box p={2} style={{ flexGrow: 1 }}> */}
              <Grid item xs={12} lg={6} >
              <Box display="flex"  flexDirection='column' style={{textAlign:'center'}} justifyItems='center' m={1} p={1}>
    
                <Typography p={2} align="center" variant="h5" color="secondary">
                  {selectedProduct.product_price}.EGP
                </Typography>
                <div>
                  {/* <FormControl variant="outlined" style={{maxWidth:'200px',width:'100%', margin: "auto" }}>
                    <InputLabel id="demo-simple-select-outlined-label">
                      الكمية
                    </InputLabel>
                    <Select
                      value={quantity}
                      onChange={handleQuantity}>
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                    </Select>
                  </FormControl> */}
                   <TextField
                   style={{maxWidth:'200px',width:'100%', margin: "20px", }}
              name={`makeq-${selectedProduct.product_id}`}
              id={`makeq-${selectedProduct.product_id}`}
              value={quantity}
              onChange={handleQuantity}
              select
              label="الكمية"
              variant='standard'
            
            > <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem></TextField>
                </div>
                <div>
              
                  <TextField
                  style={{maxWidth:'200px',width:'100%', margin: "20px" }}
              name={`make-${selectedProduct.product_id}`}
              id={`make-${selectedProduct.product_id}`}
              onChange={handleSize}
              value={size}
              InputLabelProps={{
                classes: { root: classes.formLabelRoot },
              }}
    
              select
              label="المقاس"
              helperText="يرجى ادخال المقاس"
              variant='standard'
    
            >
              {

              sizeArr.map((size) => {
                        return <MenuItem key={size} value={size}>{`${size}  سنوات`}</MenuItem>;
                      })}
            </TextField>
    
                </div>
                {/* <Link to="/size-chart" style={{decoration:'none',}}> */}
                  <Button onClick={()=> handleSizeChartOpen(true)} color='primary' >
                  دليل المقاسات
                  </Button>
                  {/* </Link> */}
    
                <Button
                  variant="contained"
                  onClick={() => Props.addToCart(selectedProduct, quantity, size)}
                  color="primary"
                  size="large"
                  style={{ margin: "auto" }}
                >
                  اضافة الى السلة
                </Button>
                <h4>
                  اجمالي المبلغ ={"  "} {quantity * selectedProduct.product_price}
                </h4>
                </Box>
              </Grid>
              </Grid>
              </Grid>
              </div>
       ;
      }
    }
        
         
         

    
    //   if (loading) {
    //     return (
    //       <div>
    //         <Loading2 />
    //       </div>
    //     );
    //   } else {
    //     
const mapStateToProps = (state) => {
    return {
        product: state.slctedProd,
        
}}

const mapDispatchToProps = (dispatch) => {
    return {
            addToCart: (productsInfo, quantity, size) =>
              dispatch(addToCart(productsInfo, quantity, size)),
            selectProduct: (slctedProda) => dispatch(selectProduct(slctedProda)),
}}

export default connect(mapStateToProps, mapDispatchToProps)(NewPrdetail)
