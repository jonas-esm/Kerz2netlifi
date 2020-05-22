import React,{Fragment} from 'react'
import home_1  from './images/home_1.jpg'
import home_2  from './images/home_2.jpg'
import heart  from './images/heart.svg'
import cart_2  from './images/cart_2.svg'
import home_3  from './images/home_3.jpg'
import product_1  from './images/product_1.jpg'
import product_2  from './images/product_2.jpg'
import product_3  from './images/product_3.jpg'
import SimpleImageSlider from "react-simple-image-slider";
import {makeStyles ,useTheme,
  Theme, createStyles} from '@material-ui/core/styles'
import { Grid } from '@material-ui/core'
const useStyles = makeStyles((theme: Theme) =>{
  createStyles({
    root:
      { height:'434px'}
    
  })
})


export default function Home2 (props) {
  const classes = useStyles()
  const images = [
    { url: home_1 },
    { url: home_2 },
    { url: home_3 },
    
];
  return (
    <div >
      
     <Grid container 
    //  style={{position:'absolute' ,width:'499px' , height:'434px'}}
     >
       <Grid item xs={12} md={6} className={classes.root}>
      <SimpleImageSlider 
                style={{position:'relative ', margin:'auto'}}
                  height='100%'
                  width="100%"
                    images={images}
                /></Grid></Grid>
    </div>
  );}