import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {  toggleCart } from '../redux/action';
import CartItem from './CartItem';


const Cart = () => {

    const { isCartOpen, cart } = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    const totalProduct = cart.reduce((accumulator, currentValue) => accumulator + currentValue.quantity, 0)

    const cartTotal = cart.map(item => {
        return item.price * item.quantity;
    }).reduce((preVal, curVal) => {
        return preVal + curVal;
    }, 0);


    if (isCartOpen) {
        return (
            <>
                <div id="cart">
                    <div className="cart_content">
                        <div className="cart_head">
                            <h2>Cart <small>({cart.length})</small></h2>
                            <div
                                title="Close"
                                className="close_btn"
                                onClick={() => dispatch(toggleCart(false))}
                            >
                                <span>&times;</span>
                            </div>
                        </div>

                        <div className="cart_body">
                            {

                                cart.map(item =>(
                                    <CartItem key={item.id} item={item}/>
                                ))
                            }
                        </div>

                        <div className="cart_foot">
                        <h4>Total Quantity: {totalProduct}</h4>
                            <h3>
                                <small>Total:</small>
                                <b>tk. {cartTotal.toLocaleString()}</b>
                            </h3>

                            <button
                                type="button"
                                className="checkout_btn"
                                disabled={!cartTotal}
                            >
                                Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </>
        );
    }


};

export default Cart;