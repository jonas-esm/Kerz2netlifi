import React,{useState,useEffect} from 'react'

// export  function newProducts() {
    
    

   

//     return (
        
//     )
// }

//////////////////////
//////////////////////
////////////////////
import { makeStyles ,createStyles,Theme} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import './home.css'
import InfiniteScroll from 'react-infinite-scroll-component';
import {
  Card,
  Button,
  
  CardActions,
  Grid,
  CardActionArea,
  CardMedia,
  Typography,
  CardContent,
 
  // Zoom,
  Grow,

} from "@material-ui/core";
import "./animateClasses.css";
import { addToCart , selectProduct} from "../reducers/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { slctedProd } from "../reducers/reducers";

import Loading2 from '../Asset/Loading2'

  
const useStyles = makeStyles((theme: Theme) => createStyles({
   
    root1: {
      backgroundColor: "RGB(255,255,255,0.5)"
    },
    root: {
     
      minHeight:350,
      margin:'4',
      [theme.breakpoints.down('sm')]:{
      
      }

    },
    media: {height: 300,
      [theme.breakpoints.down('xs')]:{
        height:300,
      },display:'flex',justifyContent:'center'},
    img: {
     height:300,
     [theme.breakpoints.down('xs')]:{
      height:300,
    }
    },
    font:{fontFamily:"Tajawal" , padding:0, marginBottom:0 , color:'#333'},
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
    //  width:'100%',
    //  height:'100%'
    }
  }));
  const InfintLoading = Props => {

// const [pdProducts , setPdProducts] = useState([])
const [anchorEl, setAnchoreEl] = useState(4)
const [size , setSize] = useState("")
const [listItems , setListItems] = useState([])
    const [isFetching , setIsFetching] = useState(false)
    const [hasMore , setHasMore] = useState(true)


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
  if(!s) {alert('يرجى اختيار المقاس')
  console.log(s)}
  else{
  Props.addToCart(item , q , s)
}
}

// //////////////////////
// Use Effect 
// //////////

useEffect(() => {
   setTimeout(() => {
     console.log("pdCard mounted")
    // setPdProducts([...Props.products])
    setListItems([...Props.products.slice(0,10)])
   }, 1000); 
  
}, [])  
useEffect(() => {
  if (!isFetching) return ;
  setTimeout(() => {
    console.log("pdCard mounted")
  
   setListItems(prevState => [...prevState, ...Props.products.slice(prevState.length,prevState.length+10)])
   setIsFetching(false)
   if (listItems.length === Props.products.length){setHasMore(false)}
  }, 1000); 
 
}, [isFetching])  


function fetchMoreListItems() {
    setTimeout(() => {
      // setListItems(prevState => ([...prevState, ...Array.from(pdProducts.keys(10), n => n + prevState.length + 1)]));
      setIsFetching(true);
    }, 500);
  }
function handleScroll() {
    if (window.innerHeight + Math.ceil(document.documentElement.scrollTop) !== document.documentElement.offsetHeight) return;
    // if(Math.ceil(window.scrollY) !== document.documentElement.scrollHeight- window.innerHeight) {
    else {console.log('Fetch more list items!');
    setIsFetching(true)}
}


const classes = useStyles();
  if (1 === 1) {
  return (
  <Box m="1">
  
    {/* <Grid container style={{justifyContent:'center'}} spacing={1} wrap='wrap'> */}
    <div><InfiniteScroll
  dataLength={listItems.length} //This is important field to render the next data
  next={fetchMoreListItems}
  hasMore={hasMore}
  loader={<div> <Loading2/></div>}
  endMessage={
    <p style={{textAlign: 'center'}}>
      <b>__________________</b>
    </p>
  }>
    <Grid container style={{justifyContent:'center'}} spacing={1} wrap='wrap'>
            
                <Grid item xs={12} style={{background:'rgb(128, 0, 32)'}}>
                <Link to="/size-chart" style={{decoration:'none',}}>
                  <Button style={{color:'#fff'}} >
                  دليل المقاسات
                  </Button>
                  </Link>
                </Grid>
            {/* {listItems.map((i, index) => (
            <div style={{margin:'23px'}} key={index}>
              div - #{index}
            </div>
          ))} */}
         
            {/* </InfiniteScroll>
        </div> */}
       {listItems.map((item ,index) => {
        let sizeArr = item.sizes.split(",")
        let itemSize = ""
        
        return ( <Grow key={index} timeout={1000} in >
          <Grid className={classes.root}  key={item.product_id} item xs={6} sm={6} md={3} lg={2} xl={2}>
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
                     
                    <Typography noWrap  component="span" className={classes.font}>
                      {item.product_name}
                    </Typography>
                    <Typography
                      variant="body1"
                      color="textSecondary"
                      component="span"
                      style={{paddingRight:'13px'}} 
                    >
                      {item.product_price}ج.م
                      
                    </Typography>
                   
                    <Link to={"/size-chart"} style={{display:'block',color:'#555',textDecoration:'none'}}>
                 
                  دليل المقاسات
                  
                  </Link>
                
                  </CardContent>
                  </CardActionArea>
              </Link>
              <CardActions style={{paddingTop:0 , paddingBottom:0}}>
               
                  
                  <div className="size-list" >
              
                  {sizeArr.map((size, i) => {return (
                  
                  <input key={i}  name={`make-${index}`} type='button' disabled={anchorEl == `${size} ${index}`} value ={size} onClick={(e)=> handleNewSize(e , index)} />
                  )})}
                 
                  </div>
                  </CardActions> 
                  <CardActions>
                <Button
                  style={{margin:'auto', backgroundColor:'#fb6e6e',color:'#fff'}}
                  variant="contained"
                  fullWidth
                 
                  size="small"
                
                  onClick={()=>handleBuying(item , "1" , size)}
                >
                 شراء
                </Button>
              </CardActions>
              
            </Card>
          </Grid>
          </Grow>
        );
      })}
    </Grid>

      </InfiniteScroll></div>
    {/* </Grid> */}
    
    
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
export default connect(null, mapDispatchToProps)(InfintLoading);