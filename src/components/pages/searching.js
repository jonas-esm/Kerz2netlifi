import React,{useState, useEffect} from "react";
import { connect } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import InfintLoading from './newProducts'
import { useParams } from "react-router-dom";
import { fetchSearchResults } from "../reducers/actions";
import Loading2 from "../Asset/Loading2";
// import {rmFromCart, fetchSearchResults} from '../reducers/actions'
// const useStyles = makeStyles({
//   table: {
//     maxWidth: 800,
//   },
//   but: {
//    width: '80%',
//    marginRight: '10%'
//   }
// });

function FilteredProducts(Props) {
//  const [products,setProducts] = useState([])
//  console.log(Props.filtered)
//  setTimeout(() => {
//    setProducts(Props.filtered)
//    console.log(products)
//  }, 3000);
const urlParams = useParams()
const [query , setQuery] = useState(() => urlParams.query)

useEffect(() => {
console.log('mounted')
if (Props.searchMessage === "Failed to fetch results.Please check network" ||Props.searchMessage === "There are no more search results. Please try a new search.") {return console.log(Props.searchMessage)}
if (Props.filtered.length <=2 ) {Props.onSearch(query) ;
  console.log('search done')
}

  console.log(urlParams)
  // if (Props.message ==="no search"){Props.onSearch}
}, [urlParams])
  // const classes = useStyles();
  if (Props.isLoading ){return <Loading2 />}
  else if(Props.searchMessage === "Failed to fetch results.Please check network") {
    return (<h2>فشل في الاتصال بقواعد البيانات</h2>)}
    else{
    return (
    <div>

      <InfintLoading products={Props.filtered} />


    </div>
    
  );}
}
const mapStateToProps = state => {
  return {
    cartItems: state.cartReducers.cart,
    total: state.cartReducers.cart.reduce(
      (tol, item) => tol + (parseInt(item.quantity) * parseInt(item.products.product_price)) ,0
      ),
      filtered : state.SearchRes.products.data,
      searchKey : state.SearchRes.query,
      isLoading : state.SearchRes.loading,
      searchMessage:state.SearchRes.message,
  };
};
const mapDispatchToProps =(dispatch) => {return{
  onSearch: (query) => {
    dispatch(fetchSearchResults(query));
  },
}}

export default connect(mapStateToProps, mapDispatchToProps)(FilteredProducts);
