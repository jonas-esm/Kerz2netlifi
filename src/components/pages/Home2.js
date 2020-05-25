import React, { Fragment, useState } from "react";

import home_5 from "./images/home_5.jpg";
import home_6 from "./images/home_6.jpg";
import home_7 from "./images/home_7.jpg";
import home_10 from "./images/home_10.jpg";
import home_11 from "./images/home_11.jpg";

import "./home.css";
// import SimpleImageSlider from "react-simple-image-slider";

import {
  makeStyles,
  useTheme,

  createStyles,
} from "@material-ui/core/styles";
import {
  Grid,
  ButtonGroup,
  Button,
  FormControl,
 
 
} from "@material-ui/core";
import { Link } from "react-router-dom";
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

const useStyles = makeStyles((theme: Theme) => {
  createStyles({
    root: { height: "434px" },
    size: {
      "&span": {
        background: "red",
      },
    },
  });
});

export default function Home2(props) {
const AutoplaySlider = withAutoplay(AwesomeSlider);

  const [size, setSize] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleSelection = (e) => {
    let newSize = e.target.value;
    setSize(() => {
      return newSize;
    });
    console.log(size, newSize, e.target.checked);
    setAnchorEl(newSize);
    //  e.target.style = 'background:black;'
  };

  const classes = useStyles();
  const images = [home_10,home_11,home_7 ,home_5 , home_6 ];
  return (
    <Fragment>
      
        <div style={{ maxWidth:'100vw',
  overflow: 'auto',
  whiteSpace: 'nowrap'}}>
          {/* <div style={{overFlow:'scroll',width:'100px', whiteSpace:'nowrap'}}> */}
          {/* <Button style={{display:'inline-block',width:'max-content',background:'#f1f1f1',  margin:'5px'}} variant="contained"> */}
             <Link
            style={{ textDecoration: "inherit", color: "inherit",display:'inline-block',width:'max-content',background:'#f1f1f1',padding:'10px',borderRadius:'2px',  margin:'5px' }}
            to="/products"
          >  منتجاتنا
            </Link>
              
             
            {/* </Button> */}
            {/* <Button style={{display:'inline-block',width:'max-content',background:'#f1f1f1',  margin:'5px'}} variant="contained"> */}
              <Link
            to="/search/اولادي"
            style={{ textDecoration: "inherit", color: "inherit",display:'inline-block',width:'max-content',background:'#f1f1f1',padding:'10px',borderRadius:'2px',  margin:'5px' }}
          > 
                  اولادي
           
         </Link>  {/* </Button> */}
          {/* <Button style={{display:'inline-block',width:'max-content',background:'#f1f1f1',  margin:'5px'}} variant="contained"> */}
              <Link
            to="/search/بناتي"
            style={{ textDecoration: "inherit", color: "inherit",display:'inline-block',width:'max-content',background:'#f1f1f1',padding:'10px',borderRadius:'2px',  margin:'5px' }}
          > 
             بناتي
             </Link> 
          {/* </Button> */}
          {/* <Button style={{display:'inline-block',width:'max-content',background:'#f1f1f1',  margin:'5px'}} variant="contained"> */}
              <Link
            to="/products"
            style={{ textDecoration: "inherit", color: "inherit",display:'inline-block',width:'max-content',background:'#f1f1f1',padding:'10px',borderRadius:'2px',  margin:'5px' }}
          > 
            افضل العروض
           </Link>
          {/*  </Button> */}
         
            {/* <Button style={{display:'inline-block',width:'max-content',background:'#f1f1f1',  margin:'5px'}} variant="contained"> */}
              <Link to="/" style={{ textDecoration: "none", color: "inherit",display:'inline-block',width:'max-content',background:'#f1f1f1',padding:'10px',borderRadius:'2px',  margin:'5px' }}>
             اخر الاخبار</Link>
           {/*  </Button>*/}
           </div> 
           {/* </div> */}
           <Grid
        container
        
        //  style={{position:'absolute' ,width:'499px' , height:'434px'}}
      >
        <Grid
          item
          xs={12}
          style={{  margin: "auto" }}
          className={classes.root}
        >
          {/* <SimpleImageSlider
            slideDuration={1}
            useGPURender={true}
            style={{ position: "relative ", margin: "auto" }}
            height="100%"
            width="100%"
            images={images}
          /> */}
      


  <AutoplaySlider 
    play={true}
    
    cancelOnInteraction={false} // should stop playing on user interaction
    interval={4000}
  
          bullets={false}
          startupScreen={(<div style={{height:'100%',width:'100%', background:'#fff'}}><h1 style={{color:'#ab5b50',margin:'auto'}}> Welcome</h1></div>)}
  >
    {images.map((img , i) => 
    <div style={{width:'100%'}} key={i} data-src={img} />
    )}
  </AutoplaySlider>

        </Grid>
      </Grid>
    </Fragment>
  );
}
