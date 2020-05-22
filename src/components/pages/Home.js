import React from 'react'
import './animateClasses.css'
import {Paper,Toolbar,Grid,IconButton } from '@material-ui/core'
import MenuIcon from "@material-ui/icons/Menu";
import {makeStyles,createStyles} from '@material-ui/core/styles'
import Paginationc from '../Pagination'
import Loading2 from '../Asset/Loading2'
import Search from "../Searchbar";
import {Link} from 'react-router-dom'

// import Counter from '../counter'
// import {Provider , useSelector} from 'react-redux'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      backgroundColor: "#ffffff",
      // backgroundColor: "#faeadb",
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    logo: {
        // marginRight: theme.spacing(4),
        maxHeight: "50px",
        // left: 'calc(50% - 311px)',
        //       position:'relative',
        //       marginTop:'10px',
        right: '50px',
        position:'relative',
        top:'5px',
        display:'block',
        [theme.breakpoints.up("sm")]: {
          maxHeight: "60px",
          // right: '50px',
          top:'0px',
        },
      },
      sb: {display:'block',
        [theme.breakpoints.up("sm")]: {
          width: "500px",
        },
      },
}))
const Home = (props) => {
    const classes = useStyles()
    return (<div>
   
   


<div className="area" >
<Paper component="div" style={{padding:'20px',margin:5}} > 
<h4 style={{left:'200px'}}>Welcome To my store...</h4> </Paper>

         {/* <Paper>
         <Toolbar 
            disableGutters={true}
             className={classes.toolbar}>
             
                   <span style={{ paddingTop: "10px",margin: 'auto',right: 0, position: 'fixed' }}>
                      <IconButton
                      style={{ margin: "2px" }}
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      
                      className={classes.menuButton}
                    >
                      <MenuIcon />
                    </IconButton>
                    </span>
                    <img
                      className={classes.logo}
                      src="https://i.imgur.com/SDG2AGG.png"
                    />
              
               
                  
                  
              <div className={classes.sb}>

                    <Search style={{ margin: "auto" }}
                      setFiltered={(p) => {
                        props.setFiltered(p);
                      }}
                      products={props.products}
                    />
            </div>
     
                      
                    <Link 
                     to="/cart">
                      {" "}
                      <IconButton aria-label="">
                        <MenuIcon />
                      </IconButton>
                    </Link>
                    <span
                     >
                    <Link style={{ paddingTop: "10px" }} to="/login">
                      <IconButton>
                        <MenuIcon style={{ fill: "#DD766F" }} />
                      </IconButton>
                    </Link></span>
                     
            </Toolbar>
         </Paper> */}
    </div >
</div>
    );
}
export default Home;