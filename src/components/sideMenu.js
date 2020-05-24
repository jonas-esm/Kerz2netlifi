import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Grid, Collapse, ListItemText } from "@material-ui/core";
import FilteredProducts from "./pages/searching";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
// import Container from '@material-ui/core/Container';
import Checkout from './pages/Checkout/CheckOut'
import {
  Divider,
  CssBaseline,
  Drawer,
  // Box,
  List,
  ListItem,
} from "@material-ui/core";
import clsx from "clsx";
import Slide from '@material-ui/core/Slide';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import MenuIcon from "@material-ui/icons/Menu";
import CartBadge from "./CartBadge";
import {
  Link,
  useHistory,
  Switch,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import {
  makeStyles,
  useTheme,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Cart from "./pages/CartPge";
import Home from "./pages/Home";
import Home2 from "./pages/Home2";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Search from "./Searchbar";
import { connect } from "react-redux";
import { fetchSearchResults } from "./reducers/actions";
import Allpp from "./pages/AllPP";
// import withFormik from './pages/withFormik'
import Form from "./Login";
import SizeChart from "./pages/SizeChart";
import {Height, ExpandLess, ExpandMore} from '@material-ui/icons';
// import { AirlineSeatIndividualSuiteSharp } from "@material-ui/icons";
const drawerWidth = 160;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      backgroundColor: "#ffffff",
      padding:'4px',
      paddingBottom:0,
      // backgroundColor: "#faeadb",
      boxShadow:'none',
      transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      // width: `calc(100% - ${drawerWidth}px)`,
      overflow:'hidden',
      transition: theme.transitions.create(["margin"], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        
      }),
      marginRight: drawerWidth,
    },
    title: {
      flexGrow: 1,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      // backgroundColor: "brown",
      backgroundColor: "#8F4556",

    },
    drawerHeader: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
      justifyContent: "flex-start",
      [theme.breakpoints.up('sm')] : {
        padding: theme.spacing(0, 0),
        display:'none'
      }
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(0),
      paddingTop: theme.spacing(12),
      background:'#fff',
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeIn,
        duration: theme.transitions.duration.leavingScreen,
      }),
      marginRight: -drawerWidth,
    },
    contentShift: {overflow:'hidden',
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginRight: 0,
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
      zIndex:9999999999,
      [theme.breakpoints.up("sm")]: {
        maxHeight: "60px",
        // right: '50px',
        top:'0px',
      },
    },
    sb: {width:'100%',
      [theme.breakpoints.up("lg")]: {
        width: "500px",
      },
    },
    moving:{
      position:'fixed',
      top:'5px',
      left:0,
      zIndex:1000000,
      [theme.breakpoints.up("sm")]: {
        position:'static'
      },

    },
    movingOpenDrwaer:{
      display:'none'
    },
    carousel:{
      width:'100%',
      [theme.breakpoints.up('xs')] : {
        maxWidth:'500px'
      }
    }
  })

);

const dftheme = createMuiTheme({
  palette: {},
  direction: "rtl",
});
function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
function ResponsiveDrawer(props) {
  // const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  // const [query, setQuery] = useState("");
  const history = useHistory();
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const onFilteration = (query) => {
    props.onFilter(query);
    setOpen(false)
    history.push(`/search`);
    console.log("done");

  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [ListItemOpen , setListItemOpen]= useState([{v:0,open:false}, {v:1,open:false} , {v:2,open:false}])
const handleDrawerItemOpen =(e) => {
  // const nestedItem = ListItemOpen.slice();
  // console.log(nestedItem)
  // const index = nestedItem.findIndex(item => item.v == e);
  // console.log(index)
  // if(3 > index >= 0 ) {
  //   nestedItem[index].open =!nestedItem[index].open ;\
  const nested= [...ListItemOpen]
  nested.map(x => {if (x.v == e)  return x.open = !x.open})
  
  setListItemOpen(nested)
  }
  // setListItemOpen({ nestedItem });


  // const drawer = "";

  return (
    <Router>
      <div className={classes.root}>
        <ThemeProvider theme={dftheme}>
          <CssBaseline />
          <HideOnScroll {...props}>
          <AppBar
            color="inherit"
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open,
            })}
          >
            <Toolbar 
            disableGutters={true}
             className={classes.toolbar}>
              <Grid
              spacing={1}
                container
                direction="row"
                justify="center"
                alignItems="center"
                
              >
                <Grid item  container
                xs={12}
                 sm={4} >
                  {" "}
                   {/* <span style={{ paddingTop: "10px",margin: 'auto',right: 0, position: 'fixed' }}> */}
                      <IconButton
                      style={{ paddingTop: "10px",margin: 'auto',right: 0, position: 'fixed'  }}
                      color="inherit"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerOpen}
                      className={classes.menuButton}
                    >
                      <MenuIcon />
                    </IconButton>
                    {/* </span> */}
                    <img
                      className={classes.logo}
                      src="https://i.imgur.com/SDG2AGG.png"
                    />
                </Grid>
               
                  
                  <Grid wrap='nowrap' container item xs={12}  sm={8}>
                

                    <Search style={{ margin: "auto" }}
                      setFiltered={(p) => {
                        props.setFiltered(p);
                      }}
                      products={props.products}
                      className={classes.sb}
                    />
                    
                  
                      
                    <Link  
                    // className={classes.moving}
                    className={clsx(classes.moving, {
                      [classes.movingOpenDrwaer]: open,
                    })}
                 
                     to="/cart">
                      {" "}
                      <IconButton aria-label="">
                        <CartBadge />
                      </IconButton>
                    </Link>
                    <span  className={clsx(classes.moving, {
                      [classes.movingOpenDrwaer]: open,
                    })} style={{left:'40px'}}
                     >
                    <Link style={{ paddingTop: "10px" }} to="/login">
                      <IconButton>
                        <AccountCircleIcon style={{ fill: "#DD766F" }} />
                      </IconButton>
                    </Link></span>
                  
                     </Grid>
                     </Grid> 
            </Toolbar>
          </AppBar>
          </HideOnScroll>
          <nav className={classes.drawer} aria-label="mailbox folders">
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader} >
                <IconButton onClick={handleDrawerClose} style={{width:'100%'}}>
                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </div>
              <Divider />
              <List>
                {/* {['Categories', 'Boys', 'Girls', 'Babys'].map((text, index) => ( */}
                <ListItem style={{ padding: 0 }} button>
                  {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} /> */}
                  <Link className="navlink" to="/" onClick={handleDrawerClose}>
                    الصفحة الرئيسية
                  </Link>
                </ListItem>
                <ListItem button style={{ padding: 0 }}>
                  {" "}
                  <Link className="navlink" to="/products" onClick={handleDrawerClose}>
                    المنتجات
                  </Link>{" "}
                </ListItem>
                <ListItem button style={{ padding: 0 }}>
                  {" "}
                  <Link className="navlink" to="/cart" onClick={handleDrawerClose}>
                    السلة
                  </Link>{" "}
                </ListItem>

                {/* ))} */}
              </List>
              <Divider />

              <List>
                <ListItem button style={{ padding: 0 ,color:'white' }} id={1} onClick={() => handleDrawerItemOpen(0)} value={0}>
                  <Link
                    className="navlink"
                    onClick={() => onFilteration("اولادي")}
                    to="/search/اولادي"
                  >
                    اولادي
                  </Link>
                  {ListItemOpen[0].open ? <ExpandLess /> : <ExpandMore />}
                  {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                      </ListItem>
                      <Collapse in={ListItemOpen[0].open} timeout="auto" unmountOnExit>
                        <List color='white' component="span" >
                    <ListItem>
                    <Link className="navlink" to="/cart" onClick={handleDrawerClose}>تيشيرت</Link>
                    </ListItem>  <ListItem>
                    <Link className="navlink" to="/cart" onClick={handleDrawerClose}>قميص</Link>
                    </ListItem>  <ListItem button>
                      {/* <ListItemText >بنطلون</ListItemText> */}
                      <Link className="navlink" to="/cart" onClick={handleDrawerClose}> بنطلون </Link>
                    </ListItem>
                  </List>
                  </Collapse>
                <ListItem button style={{ padding: 0, color:'white' }} onClick={() => handleDrawerItemOpen(1)}>
                
                  <Link
                    className="navlink"
                    onClick={() => onFilteration("بناتي")}
                    to="/search/بناتي"
                  >
                    بناتي
                  </Link>
                  {ListItemOpen[1].open ? <ExpandLess /> : <ExpandMore />}
                  {/* {open ? <ExpandLess /> : <ExpandMore />} */}
                      </ListItem>
                      <Collapse in={ListItemOpen[1].open} timeout="auto" unmountOnExit>
                        <List color='white'  disablePadding>
                    <ListItem>
                    <Link className="navlink" to="/cart" onClick={handleDrawerClose}>تيشيرت</Link>
                    </ListItem>  <ListItem>
                    <Link className="navlink" to="/cart" onClick={handleDrawerClose}>قميص</Link>
                    </ListItem>  <ListItem>
                    <Link className="navlink" to="/cart" onClick={handleDrawerClose}>بنطلون</Link>
                    </ListItem>
                  </List>
                  </Collapse>
              </List>
              <Divider />
              <List>
                <ListItem button style={{ padding: 0 }}>
                  {" "}
                  <Link className="navlink" to="/cart">
                    مقاسات
                  </Link>{" "}
                </ListItem>{" "}
              </List>
            </Drawer>
          </nav>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open,
            })}
          >
            <div className={classes.drawerHeader} />
            {/* <div className={classes.toolbar1} /> */}
            <Switch>
              <Route path="/products">
                {" "}
                {/* <PdCards products={props.products} /> */}
                <Allpp />
              </Route>
              {/* <Route prevent path="/products/:id">
              <Product products={props.products} pid={props.pid} />
            </Route> */}
              <Route exact path="/">
                <Home2 />
              </Route>
              <Route path="/cart">
                <Cart open={open} />{" "}
              </Route>
              <Route path="/search">
                <FilteredProducts />{" "}
              </Route>
              <Route path="/login">
                {/* {withFormik(Login)} */}
                <Form />
              </Route>
              
              <Route path="/orderConfirmation/address">
                    <Checkout />
                </Route>
                <Route path="/orderConfirmation/checkOut">
                <Home2 />
                </Route>
                <Route path="/orderConfirmation/review">
                <Home2 />
                </Route>
                <Route path="/size-chart">
                <SizeChart />
                </Route>
            </Switch>
          </main>
        </ThemeProvider>
      </div>
    </Router>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    onFilter: (query) => {
      dispatch(fetchSearchResults(query));
    },
  };
};

export default connect(null, mapDispatchToProps)(ResponsiveDrawer);
//8be8cb-1f363d-bb0a21-1f7a8c-0a0908
