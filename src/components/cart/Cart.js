import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected Items: {cart.length} </p>
            <p>Total price:</p>
            <p>Total Shipping: </p>
            <h4>Grand Total: $</h4>
        </div>
    );
};

export default Cart;