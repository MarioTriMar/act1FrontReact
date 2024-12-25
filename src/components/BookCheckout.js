import React from "react";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";


export const BookCheckout = ({ book, removeFromCart }) => {


    const handleRemoveFromCart = (bookId) => {
        removeFromCart(bookId); // Elimina un libro del carrito
    };

    return (
        <div className="cart-checkout">
            <h3>{book.title}</h3>

            <img src={book.image} alt="image"/>
            <div className="cart-checkout__card-details">
                <p>Precio: {book.price}</p>
                <p>Stock: {book.stock}</p>
            </div>
            <FontAwesomeIcon className="cart-checkout__icon" icon={faMinus} style={{color: "#b30000", height:35, }}
                             onClick={() => handleRemoveFromCart(book.id)}
                             title="Eliminar libro del carrito"/>
        </div>
    );
}