import React ,{useState, useEffect}from 'react'
import { fetchData } from "../../api/api";
// import PdCards from './products'
// import Product from "./prdetails";
import InfintLoading from './newProducts'
import NewPrdetail from './newPrdetail'
import {useParams} from 'react-router-dom'
import {BrowserRouter as Router , Link , Route, Switch} from 'react-router-dom'
import Loading2 from '../Asset/Loading2';
import { connect } from 'react-redux';
import { selectProduct, addToCart } from '../reducers/actions';

function Allpp (Props) {
  const urlParams = useParams()
    const [products, setProducts] = useState([
        {
          categori: "Men's",
          imgUrl: "https://i.imgur.com/iO4cNOx.jpg",
          product_id: "091",
          product_name: "قميص اولادي",
          product_price: 799,
          barcode:"34334"
        },
      ]);
      const [pid, setPid] = useState();
      const [loading, setLoading] = useState(true);
      useEffect(() => {if (loading){
         fetchData().then((res) => {
        // if(res.data.data != undefined){
        if(JSON.stringify(res.data)=== "{}"){
          alert('تم رفض الوصول لقواعد البيانات');
          console.log(`database error , res = ${res}`)}
        else setProducts([...res.data.data])
        
        // console.log(res.data)
        setLoading(false);}).catch(err => {
          console.log(err)
        
          alert('api error: خطا في الاتصال بقواعد البيانات')
        })}
      }, [ loading]);
      useEffect(() => {
        if(Boolean(urlParams.id != undefined)){
          console.log(urlParams)
          const found = products.find((item) => item.product_id == urlParams.id);
          // Props.selectProduct(found)
        }
       
     
      }, [urlParams])
      // if(products.length <= 1)
      if(loading)
    return(
      <div> <Loading2/></div>
        )
return (
    //  <Router> <Switch>
    <div>
        <Route exact path="/products/origin">
            {/* <PdCards  products={products}/> */}
            </Route>
            <Route exact path="/products/pid=:id"><NewPrdetail  products={products} pid={pid} /></Route>
            {/* <Route exact path="/products/pid=:id"> */}
              {/* <Product  products={products} pid={pid} />
              
            </Route> */}
            <Route  exact path="/products">
              <InfintLoading products={products} pid={pid} />
            </Route>
            </div>
        //     </Switch>
        // </Router>
    )
         
}
const mapStateToProps = (state) => {
  return {
      product: state.slctedProd,
      
}}

const mapDispatchToProps = (dispatch) => {
  return {
          addToCart: (productsInfo, quantity, size) =>
            dispatch(addToCart(productsInfo, quantity, size)),
          selectProduct: (slctedProda) => dispatch(selectProduct(slctedProda)),
}}

export default connect(mapStateToProps, mapDispatchToProps)(Allpp)

