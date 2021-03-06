import React, { useState, useEffect } from "react";
// import SearchIcon from "@material-ui/icons/Search";
// import {
//   // withStyles,
//   // createMuiTheme,
//   // ThemeProvider,
//   // makeStyles,
//   // createStyles,
// } from "@material-ui/core/styles";
import {
  Box, TextField
} from "@material-ui/core";

// import moduleName from "module";
import { useHistory } from "react-router-dom";
// import axios from "axios";
import { fetchSearchResults } from "./reducers/actions";
import { connect } from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
// const theme = createMuiTheme({
//   direction: "rtl",
// });
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     gri: {},
//     formLabelRoot: {
//       backgroundColor: "#fefefe",
      
//       left:'calc(100% - 110px)',
//       margin:'auto',
//       textAlign:'right',
//       // position:'absolute'
      
//     },
//     sb:{
     
//       //   maxHeight:'100px',
 
//       //   display: 'flex',
//       //       justifyContent: 'center',
//       //       fontFamily: 'Tajawal, sans-serif',
//       //   margin:'auto',
//       //  padding: '5px',
      
//     }
//   })
// );

const Search = (props) => {
  // let cancel = "";

  const history = useHistory();
  // const classes = useStyles();
  const [query, setQuery] = useState("");

  // const classeu = useStyleu();
  const handleOnChange = (e) => {
    // let query = e.target.value;
    // setQuery(query);
    setQuery(e.target.value)
  };
  useEffect(() => {
    if (query) {
      props.onSearch(query);
      console.log("doneeeeeeee");

      history.push(`/search/`+ query);
    }
  }, [query]);
  // function onSubmit() {}
  return (
    <div className={props.className}>
     <Box className='s130' display="flex" justifyContent="center"  flexDirection='row' > 
   
        <form htmlFor="search-input">
          <div className="inner-form">
            <div className="input-field first-wrap">
            <SearchIcon   fontSize="small" />
            
              <input
                id="search-input"
                type="text"
                placeholder="ابحث عن منتجاتنا"
                value={query}
                onChange={(e) => handleOnChange(e)}
              />
            </div>
            {/* <div className="input-field second-wrap">
              <button className="btn-search" type="button">
                <SearchIcon  fontSize="large" />
              </button>
            </div> */}
          </div>
          {/* <TextField
           label="مالذي تبحث عنه؟"
            InputLabelProps={{
                      classes: { root: classes.formLabelRoot },
                    }}
                    // placeholder="ابحث عن منتجاتنا"
                value={query}
                onChange={(e) => handleOnChange(e)}
                variant="outlined"
                
                style={{width:'70%'}}
                /> */}
        </form>
       </Box> 
    </div>
  );}

const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (query) => {
      dispatch(fetchSearchResults(query));
    },
  };
};

export default connect(null, mapDispatchToProps)(Search);
