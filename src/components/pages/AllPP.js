import React ,{useState, useEffect}from 'react'
import { fetchData } from "../../api/api";
// import PdCards from './products'
import Product from "./prdetails";
import InfintLoading from './newProducts'

import {BrowserRouter as Router , Link , Route, Switch} from 'react-router-dom'
import Loading2 from '../Asset/Loading2';

export default function Allpp (props) {
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
            <Route exact path="/products/pid=:id">
              <Product  products={products} pid={pid} />
              
            </Route>
            <Route  exact path="/products">
              <InfintLoading products={products} pid={pid} />
            </Route>
            </div>
        //     </Switch>
        // </Router>
    )
         
}