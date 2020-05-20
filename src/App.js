"esversion:6";
import React, {  useState } from "react";
// import {fetchSearchResults} from './components/reducers/actions'
// import { fetchData } from "./api/api";
import {
  BrowserRouter as Router,

} from "react-router-dom";
import {useClearCache} from 'react-clear-cache'
import {connect} from 'react-redux'
import RTL from './RTL'
import ResponsiveDrawer from "./components/sideMenu";
// import {fetchPosts} from './components/reducers/actions';

function App(props) {
  const {isLatestVersion, emptyCacheStorage} =useClearCache()
  // const [products, setProducts] = useState([
  //   {
  //     categori: "Men's",
  //     imgUrl: "https://i.imgur.com/iO4cNOx.jpg",
  //     product_id: "091",
  //     product_name: "قميص اولادي",
  //     product_price: 799,
  //     barcode:"34334"
  //   },
  // ]);
  // const [posts, setPosts] = useState([
  //   {
  //     categori: "Men's",
  //     imgUrl: "https://i.imgur.com/iO4cNOx.jpg",
  //     product_id: "091",
  //     product_name: "قميص اولادي",
  //     product_price: 799,
  //     barcode:"34334"
  //   },
  // ]);
  // const [loading, setLoading] = useState(false);
  const [pid, setPid] = useState();
  const [filtered,setFiltered] = useState()
  // const [test,setTest] = useState({})
  // useEffect(() => {
  //   setLoading(true);
    
      
    
  //   fetchData().then((res) => {
  //     setProducts([...res.data.data]);
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <Router>
      <div>
        <RTL>
          {!isLatestVersion && (
            <p><a href='#' onClick={e => {
              e.preventDefault()
              emptyCacheStorage()
            }}>Update Version</a></p>
          )}
        <ResponsiveDrawer setFiltered = {p => {setFiltered(p)}}  pid={pid} />
        </RTL>
       
      </div>
    </Router>
  );
}

export default connect(null) (App);
