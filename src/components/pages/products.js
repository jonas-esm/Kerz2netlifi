import React, { useState , useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import './home.css'
import {
  Card,
  Button,
  // Paper,
  CardActions,
  Grid,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
  // Container,
  Zoom,
  Paper,
  Input,
  InputLabel,
  Select,
  MenuItem,
  FormControl
, 
  OutlinedInput
, 
  InputBase
} from "@material-ui/core";
import "./animateClasses.css";
import { addToCart , selectProduct} from "../reducers/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { slctedProd } from "../reducers/reducers";

import Loading2 from '../Asset/Loading2'
import Paginationc from "../Pagination";
  
  const useStyles = makeStyles({
    root1: {
      backgroundColor: "RGB(255,255,255,0.5)"
    },
    root: {
      maxWidth: 260,
      minHeight:450,
      margin:'4'
    },
    media: {height: 280,display:'flex',justifyContent:'center'},
    img: {
     height:280
    },
    font:{fontFamily:"Tajawal" , padding:0, marginBottom:0},
    select:{
      '&:focus' :{
          background:'white',
      }
    }
    ,
    outlin:{root:{
        color:'red',
        background:'red',
      }
    },
    card:{
     width:'100%',
     height:'100%'
    }
  });
  const PdCards = Props => {

const [pdProducts , setPdProducts] = useState([])
const [anchorEl, setAnchoreEl] = useState(null)
const [size , setSize] = useState("")
const [currentPage , setCurrentPage] = useState(1)
const itemsPerPage = 17
const lastItemIndex = currentPage * itemsPerPage
const firstItemIndex = lastItemIndex - itemsPerPage
const currentItems = pdProducts.slice(firstItemIndex, lastItemIndex)
const pagesnumber = Math.ceil(pdProducts.length/itemsPerPage)
// console.log(currentPage, itemsPerPage , lastItemIndex , firstItemIndex , currentItems)
const handlePagination = (e,v) => {
  setCurrentPage(v)
}
const handleSize = (e) => {
  // e.preventDefault()
  setSize(e.target.value)
}
const handleNewSize =(e , index) => {
  let newSize = e.target.value
  setSize(newSize)
  setAnchoreEl(`${newSize} ${index}`)
}
const handleBuying =(item , q , s) => {
  Props.addToCart(item , q , s)
  setSize("")
}

// //////////////////////
// Use Effect 
// //////////
useEffect(() => {
   setTimeout(() => {
     console.log("pdCard mounted")
    setPdProducts([...Props.products])
   }, 1000); 
  
}, [])  


const classes = useStyles();
  if (pdProducts.length > 1) {
  return (
  <Box m="1">
  
    <Grid container style={{justifyContent:'center'}} spacing={1} wrap='wrap'>

      {currentItems.map((item ,index) => {
        let sizeArr = item.sizes.split(",")
        let itemSize = ""
        
        return ( <Zoom key={index} timeout={800} in >
          <Grid className={classes.root}  key={item.product_id} item xs={12} sm={6} md={4} lg={4} xl={3}>
            <Card className={classes.card}>
          
              <Link
                to={"/products/pid=" + item.product_id}
                style={{ textDecoration: "none", color: "default" }}
                onClick={() => Props.selectProduct(item)}
              >
                <CardActionArea
                  onClick={() => {
                    return <Link to={"/hello"}></Link>;
                  }}
                >
                  <CardMedia className={classes.media}>
                    <img src={item.imgUrl} className={classes.img} />
                  </CardMedia>
                  <CardContent style={{paddingBottom:0}}>
                    <Typography noWrap className={classes.font}>
                      {item.product_name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      price: {item.product_price}$
                      
                    </Typography>
                    {/* <Typography
                      variant="body1"
                      color="textSecondary"
                      component="p"
                    >
                      Sizes: {sizeArr.map((size) => {return (size +",  ")})}
                      
                    </Typography> */}
                    <Typography fontFamily="Tajawal" className={classes.font}  noWrap variant='body1'  color="textPrimary"
                      >
                      المقاسات:
                    </Typography>
                  </CardContent>
                  </CardActionArea>
              </Link>
              <CardActions>
                {/* <Button  variant="outlined" style={{marginLeft:4 }} size="small" color="primary">
                  Share
                </Button> */}
                                    {/* <FormControl size="small" fullWidth style={{margin:'auto', height:'30px'}}  variant="outlined" className={classes.formControl}>
                    <InputLabel classes={{outlined:classes.outlin}} style={{background:'white',padding:'0 4px'}} id="demo-simple-select-outlined-label" >المقاس</InputLabel>
                    <Select classes={{select:classes.select}}
                      labelId="demo-simple-select-filled-label"
                      autoWidth 
                      
                      id="demo-simple-select-filled"
                      // value={size}
                      name={`make-${index}`} id={`make-${index}`}
                      onChange={handleSize}
                    >
                      <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      {sizeArr.map(size => {return (
                      <MenuItem value={size}>{size}</MenuItem>
                      )})}
                    </Select>
                    
                  </FormControl>*/}
                  
                  <div className="size-list" >
                  {/* <span>المقاس</span>  */}
                  {sizeArr.map(size => {return (
                  
                  <input  name={`make-${index}`} type='button' disabled={anchorEl == `${size} ${index}`} value ={size} onClick={(e)=> handleNewSize(e , index)} />
                  )})}
                 
                  </div>
                  </CardActions> 
                  <CardActions>
                <Button
                  style={{margin:'auto'}}
                  variant="contained"
                  fullWidth
                  color="secondary"
                  size="small"
                  // onClick={() => Props.addToCart(item, "1" , size)}
                  onClick={()=>handleBuying(item , "1" , size)}
                >
                 شراء
                </Button>
              </CardActions>
              
            </Card>
          </Grid>
          </Zoom>
        );
      })}
    </Grid>
    
    <Paginationc count={pagesnumber} handleChange={handlePagination} page='' /> 
    </Box>
  );}
  else {return <div> <Loading2/></div>}
};

const mapDispatchToProps = dispatch => {
  return {
    addToCart: (productInfo, quantity, size) =>
      dispatch(addToCart(productInfo, quantity, size)),
      selectProduct : (slctedProda) => 
        dispatch(selectProduct(slctedProda)) 
      

    
    };
};
export default connect(null, mapDispatchToProps)(PdCards);
