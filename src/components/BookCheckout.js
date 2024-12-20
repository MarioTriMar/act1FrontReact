import React, {useContext} from "react";
import {faMinus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {ShopCartContext} from "../context/ShopCartContext";


export const BookCheckout = ({ book }) => {

    const { removeFromCart} = useContext(ShopCartContext);


    const handleRemoveFromCart = (bookId) => {
        removeFromCart(bookId); // Elimina un libro del carrito
    };

    return (
        <div className="cart-checkout">
            <h3>{book.title}</h3>

            <img src={book.image} alt="image"/>
            <div className="card-details">
                <p>Precio: {book.price}</p>
                <p>Stock: {book.stock}</p>
            </div>
            <FontAwesomeIcon className="icon-delete-checkout" icon={faMinus} style={{color: "#b30000", height:35, }}
                             onClick={() => handleRemoveFromCart(book.id)}
                             title="Eliminar libro del carrito"/>
        </div>
    );
}