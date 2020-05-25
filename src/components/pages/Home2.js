import React,{Fragment, useState} from 'react'

import home_5  from './images/home_5.jpg'
import home_6  from './images/home_6.jpg'
import home_7  from './images/home_7.jpg'
import './home.css'
import SimpleImageSlider from "react-simple-image-slider";
import {makeStyles ,useTheme,
  Theme, createStyles} from '@material-ui/core/styles'
import { Grid, ButtonGroup, Button, FormControl, RadioGroup, FormControlLabel, Radio, FormLabel, List, ListItem, FormHelperText } from '@material-ui/core'
import { Link } from 'react-router-dom'
const useStyles = makeStyles((theme: Theme) =>{
  createStyles({
    root:
      { height:'434px'},
    size:{
      '&span':{
        background:'red'
      }
    }
    
  })
})


export default function Home2(props) {
  const [size, setSize] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null)
  const handleSelection = (e) => {
    let newSize = e.target.value;
    setSize(() => {
      return newSize;
    });
    console.log(size, newSize, e.target.checked);
    setAnchorEl(newSize)
    //  e.target.style = 'background:black;'
  


  };

  const classes = useStyles();
  const images = [{ url: home_7 }, { url: home_5 }, { url: home_6 }];
  return (
    <div>
      <Grid
        container
        //  style={{position:'absolute' ,width:'499px' , height:'434px'}}
      >
         <Grid item xs={12} style={{background:'rgb(128, 0, 32)'}}>
                <Link to="/size-chart" style={{textDecoration:'none',padding:'10px',margin:'5px',color:'#fafafa'}}>
                دليل المقاسات.
                  </Link><Link to="/products" style={{textDecoration:'none',padding:'10px',margin:'5px',color:'#fafafa'}}>
                  منتجاتنا
                  </Link><Link to="/" style={{textDecoration:'none',padding:'10px',margin:'5px',color:'#fafafa'}}>
                  افضل العروض
                  </Link>
                </Grid>
        <Grid
          item
          xs={12}
          style={{ height: "400px", maxWidth: "700px", margin: "auto" }}
          className={classes.root}
        >
          <SimpleImageSlider
            slideDuration={0.5}
            style={{ position: "relative ", margin: "auto" }}
            height="100%"
            width="100%"
            images={images}
          />
        </Grid>
      </Grid>
       
     
    </div>
  );
}