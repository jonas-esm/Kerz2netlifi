import React, { useState, useEffect, memo } from "react";

// import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import "./home.css";
// import InfiniteScroll from "react-infinite-scroll-component";
import {
  // Card,
  Button,
  // CardActions,
  // Grid,
  // CardActionArea,
  // CardMedia,
  // Typography,
  // CardContent,

  // Zoom,
  // Grow,
} from "@material-ui/core";
import { FixedSizeGrid as Grid, areEqual } from 'react-window';
import "./animateClasses.css";
import { addToCart, selectProduct } from "../reducers/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { slctedProd } from "../reducers/reducers";

import Loading2 from "../Asset/Loading2";

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root1: {
//       backgroundColor: "RGB(255,255,255,0.5)",
//     },
//     root: {
//       minHeight: 350,
//       margin: "4",
//       [theme.breakpoints.down("sm")]: {},
//     },
//     media: {
//       height: 300,
//       [theme.breakpoints.down("xs")]: {
//         height: 220,
//       },
//       display: "flex",
//       justifyContent: "center",
//     },
//     img: {
//       height: 300,
//       [theme.breakpoints.down("xs")]: {
//         height: 220,
//       },
//     },
//     font: { fontFamily: "Tajawal", padding: 0, marginBottom: 0, color: "#333" },
//     select: {
//       "&:focus": {
//         background: "white",
//       },
//     },
//     outlin: {
//       root: {
//         color: "red",
//         background: "red",
//       },
//     },
//     card: {
//       //  width:'95vw',
//       //  height:'100%'
//     },
//   })
// );
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
      alert("يرجى اختيار المقاس");
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
  
  const useWindowSizes =()=>{
  const [winSize , setWin] = useState([window.innerWidth , window.innerHeight])
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
    // console.log(ind , item , showingList)
   { // let ind
    // windWidht > 500 ?  ind =  columnIndex + (4 *rowIndex ) : ind =  columnIndex + (2 *rowIndex )
  //   let item 
  //  Props.products[ind] ? 
  //    item = Props.products[ind] : item ={barcode: null,
  //     categori: null,
  //     color: "لبني",
  //     imgUrl: "",
  //     product_id: "5734975",
  //     product_name: "",
  //     product_price: null,
  //     sex: null,
  //     sizes: ""}
    // console.log(item,Boolean(item),!!item.product_price , ind)
  }
    // let sizeArr = item.sizes.split(",");
    let itemSize = "";

    return ( !item ? <div></div> :
      // showingList  > 2  && (
      <div
      style={{
        ...style,
        left: style.left + 10,
        top: style.top + 10,
        width: style.width - 10,
        height: style.height - 10,
        border:'0.5px solid #d36e64'
      }}
        key={ind}
     
      >
        {item &&(
        <div style={{width: "100%",
        height: "395px",
        display: "inline-block"}}>
        <a href={"/products/pid=" + item.product_id}>
        <img src={item.imgUrl} style={{width:'97%',margin:'4px'}} /></a>
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
  // const classes = useStyles();
  const cardWidth = 320;
  const cardHeight = 575;
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
          
        <Grid 
    className="grid"
    width={windWidht}
    
    height={windHeight}
    columnCount={columnCount}
    columnWidth={cardWidth}
    rowCount={rowCount}
    rowHeight={cardHeight}
    itemData={[listItems, columnCount ]}
    // columnCount={windWidht <= 500 ? 2 : 4}
    // columnWidth={windWidht <= 500 ? windWidht/2 : windWidht/4}
    direction="rtl"
    // height={windHeight}
    
    // rowCount={windWidht <= 500 ? Math.ceil(listItems.length /2) : Math.ceil(listItems.length / 4)}
    // rowHeight={windHeight /1.8 }
    // width={windWidht}
    
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
