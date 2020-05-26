// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import {Badge} from '@material-ui/core'
import React from 'react'
// import store from '../store'
import {connect} from 'react-redux'
function CartBadge(Props){
        

    return(
        <Badge badgeContent={Props.quantity - 1}  color="secondary">
            
        <ShoppingCartOutlinedIcon style={{fill:'#777'}} />
        </Badge>
    );
};
const mapStateToProps = (state) => {
    return{
        quantity: state.cartReducers.cart.length,
    }
}
export default connect(mapStateToProps)(CartBadge)