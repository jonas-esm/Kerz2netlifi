import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { selectProduct, addToCart } from '../reducers/actions'

const Newnewpd = (Props) => {
  const [listItems , setListItems] = useState([])
  useEffect(() => {
    setTimeout(() => {
      console.log("pdCard mounted")
     // setPdProducts([...Props.products])
     setListItems([...Props.products.slice(0,10)])
    }, 1000); 
    console.log(listItems)
   
 })  
  
return(
  <div>Heloo from newnew product</div>
)

}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps =(dispatch)=> {
    return {
        addToCart: (productInfo, quantity, size) =>
          dispatch(addToCart(productInfo, quantity, size)),
          selectProduct : (slctedProda) => 
            dispatch(selectProduct(slctedProda)) 
          
    
        
        };
}

export default connect(mapStateToProps, mapDispatchToProps)(Newnewpd)
