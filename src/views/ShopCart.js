import React, {useContext} from "react";
import {ShopCartContext} from "../context/ShopCartContext";
import {BookCheckout} from "../components/BookCheckout";
import {PayForm} from "../components/PayForm";

export const ShopCart = () => {

    const {cart, removeFromCart} = useContext(ShopCartContext);
    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

    return (
        <div className="checkout">
            <PayForm/>
            <h2>Precio total: {totalPrice}</h2>

            <div className="div-card-checkout">
                {cart
                    .map((book, index) => (
                        <BookCheckout key={index} book={book} removeFromCart={removeFromCart} />
                    ))}
            </div>


        </div>
    )
}