import React, { useState, useEffect, memo } from "react";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./home.css";

import {
 
  Button, Snackbar,
 
} from "@material-ui/core";
import { FixedSizeGrid as Grid, areEqual } from 'react-window';
import "./animateClasses.css";
import { addToCart, selectProduct } from "../reducers/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {Alert} from '@material-ui/lab'

import Loading2 from "../Asset/Loading2";

const useStyles = makeStyles((theme) => ({
  alertbox: {
    // width: '100%',
    alignItems:'center',
    '& > * + *': {
      margin: theme.spacing(1),
    },
  },
}));
const InfintLoading = (Props) => {

  // const [pdProducts , setPdProducts] = useState([])
  const [anchorEl, setAnchoreEl] = useState(4);
  const [size, setSize] = useState("");
  const [listItems, setListItems] = useState([{categori: "Men's",
  imgUrl: "https://i.imgur.com/iO4cNOx.jpg",
  product_id: "091",
  product_name: "initial List",
  product_price: 799,
  barcode:"34334",
  sizes:"4,5,6"}]);
 

  const handleSize = (e) => {
    // e.preventDefault()
    setSize(e.target.value);
  };
  const handleNewSize = (e, index) => {
    let newSize = e.target.value;
    setSize(newSize);
    setAnchoreEl(`${newSize} ${index}`);
  };
  const handleBuying = (item, q, s) => {
    if (!s) {
      // alert("يرجى اختيار المقاس");
      // return(<Alert severity="error" >يرجى اختيار المقاس</Alert>)
      handleSizeAlertOpen()
      console.log(s);
    } else {
      Props.addToCart(item, q, s);
    }
  };

  // //////////////////////
  // Use Effect
  // //////////

  useEffect(() => {
    // setTimeout(() => {
      console.log("pdCard mounted");
        // if(Props.isLoadingSearch) return ;
      // setPdProducts([...Props.products])
      // if(Props.products.length > 1 )
      setListItems([...Props.products]);
    
  },[Props.fetchingProducts] );
  // useEffect(() => {
  //   if (!isFetching) return ;
  //   setTimeout(() => {
  //     console.log("pdCard mounted")

  //    setListItems(prevState => [...prevState, ...Props.products.slice(prevState.length,prevState.length+10)])
  //    setIsFetching(false)
  //    if (listItems.length === Props.products.length){setHasMore(false)}
  //   }, 1000);

  // }, [isFetching])

  // function fetchMoreListItems() {
  //     setTimeout(() => {
  //       // setListItems(prevState => ([...prevState, ...Array.from(pdProducts.keys(10), n => n + prevState.length + 1)]));
  //       setIsFetching(true);
  //     }, 500);
  //}
  const [sizeAlert , toggleSizeAlert] =useState(false)
  const handleSizeAlertOpen = () => toggleSizeAlert(true)
  const handleSizeAlertClose = (e , reason) => {
    if (reason === 'clickaway') return ;
    toggleSizeAlert(false)
  }  
  const useWindowSizes =()=>{
  const [winSize , setWin] = useState([window.innerWidth , window.innerHeight])

  // useEffect(() => {
  //   const handleResize=() => {
  //     setWin(() => [window.innerWidth , window.innerHeight])

  //   }
  //   window.addEventListener('resize' , handleResize);

  //   return () => {
  //     window.removeEventListener("resize" , handleResize)
  //   }
  // }, [winSize])
  return winSize
  }
  const [windWidht, windHeight] = useWindowSizes()

  // const Cell = ({ columnIndex, rowIndex, style }) => {
    const Cell = memo(({ columnIndex,data, rowIndex, style,  }) => {
    // <div style={style}>
    //   بند {rowIndex},{columnIndex}
    // </div>
    const [ showingList, columnCount] = data
    // console.log(showingList)
    const ind = columnIndex + rowIndex * columnCount
    const item = 
    showingList[ind]
    
    let itemSize = "";

    return ( !item ? <div></div> :
      
      <div
      style={{
        ...style,
        left: style.right + 10 ,
        top: style.top + 10,
        width: style.width - 10,
        height: style.height - 10,
        // border:'0.5px solid #d36e64',
        boxShadow:'rgba(141, 139, 148, 0.35) 0px 0px 25px'
      }}
        key={ind}
     
      >
        {item &&(
        <div style={{width: "100%",
        height: "395px",
        display: "inline-block"}}>
        <a href={"/products/pid=" + item.product_id}>
        <img src={item.imgUrl} style={{width:'100%',margin:'0px'}} /></a>
        <div style={{padding:'0 10px'}}><p style={{display:'inline',whiteSpace:"nowrap",fontSize:'1.1rem'}}    >
          {item.product_name}
        </p>
        <p style={{ paddingRight: "13px",display:'inline' }} >
          {item.product_price}ج.م
        </p></div>
        <a style={{textDecoration:'none',color:'brown'}} href={'/size-chart'}>
        <p style={{padding:'0 10px'}}> المقاسات</p></a>
        <div className="size-list">
          {item.sizes.split(",").map((size, i) => {
            return (
              <input
                key={i}
                name={`make-${ind}`}
                type="button"
                disabled={anchorEl == `${size} ${ind}`}
                value={size}
                onClick={(e) => handleNewSize(e, ind)}
              />
            );
          })}
        </div>
        <Button
          style={{
            margin: "auto",
            backgroundColor: "#fb6e6e",
            color: "#fff",
            borderRadius:0 , 
          }}
          variant="contained"
          fullWidth
          size="small"
          onClick={() => handleBuying(item, "1", size)}
        >
          شراء
        </Button>
        </div>
        )}
      </div>
    // )
    );
        },areEqual);
  const classes = useStyles();
  const cardWidth = 320;
  const cardHeight = 565;
  const columnCount = Math.floor(windWidht / cardWidth);
  const rowCount = Math.ceil(listItems.length / columnCount);
  if (listItems.length > 1) {
    return (
      <Box m="1">
        {/* <Grid container style={{justifyContent:'center'}} spacing={1} wrap='wrap'> */}
        <div  style={{
      minHeight: "100vh",
      backgroundColor: "#fff",
      marginTop: "0em",
      position: "sticky",
      top: "0px",
    }}>
          <Snackbar open={sizeAlert} autoHideDuration={20000} onClose={handleSizeAlertClose}>
        <Alert className={classes.alertbox} onClose={handleSizeAlertClose}  severity="error" >
          يرجى اختيار المقاس
        </Alert>
      </Snackbar>
        <Grid 
    className="grid"
    width={windWidht}
    
    height={windHeight + 60}
    columnCount={columnCount}
    columnWidth={cardWidth}
    rowCount={rowCount}
    rowHeight={cardHeight}
    itemData={[listItems, columnCount ]}
   
    direction="rtl"
    // height={windHeight}
    
  
  >
    {Cell}
  </Grid>
        </div>
      </Box>
    );
  } else {
    return (
      <div>
        {" "}
       loading react widow
      </div>
    );
  }
  }

const mapStateToProps =(state) => {return{
  isLoadingSearch : state.SearchRes.loading,
}}
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (productInfo, quantity, size) =>
      dispatch(addToCart(productInfo, quantity, size)),
    selectProduct: (slctedProda) => dispatch(selectProduct(slctedProda)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(InfintLoading);
