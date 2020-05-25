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
const [query , setQuery] = useState("اولادي")

useEffect(() => {
console.log('mounted')
if (Props.filtered.length <=2) Props.onSearch(query) 
  console.log(urlParams)
  
}, [Props.isLoading])
  // const classes = useStyles();
  if (Props.isLoading ){return <Loading2 />}
  else {return (
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
  };
};
const mapDispatchToProps =(dispatch) => {return{
  onSearch: (query) => {
    dispatch(fetchSearchResults(query));
  },
}}

export default connect(mapStateToProps, mapDispatchToProps)(FilteredProducts);
