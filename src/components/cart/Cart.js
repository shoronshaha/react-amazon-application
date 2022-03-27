import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
    console.log(cart)
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    return (
        <div className='cart'>
            <h3>Order summary</h3>
            <p>Selected Items: {cart.length} </p>
            <p>Total price: ${total} </p>
            <p>Total Shipping: {shipping}</p>
            <h4>Grand Total: $</h4>
        </div>
    );
};

export default Cart;