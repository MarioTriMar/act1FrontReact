import React, {useContext, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faHouse, faMinus} from '@fortawesome/free-solid-svg-icons';
import {ShopCartContext} from "../context/ShopCartContext";

export const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const {cart, clearCart, removeFromCart} = useContext(ShopCartContext);

    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);


    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const handleRemoveFromCart = (bookId) => {
        removeFromCart(bookId); // Elimina un libro del carrito
    };

    return (
        <>
            <header className="header-class">
                <FontAwesomeIcon className="icon-focus" icon={faHouse} style={{color: "#74C0FC", height: 60, width: 60, marginLeft: 30}}
                title="Volver a la página principal"/>
                <h1 className="header-text">Relatos de Papel</h1>

                <FontAwesomeIcon className="icon-focus" icon={faCartShopping}
                                 style={{color: "#63E6BE", height: 60, width: 60, marginRight: 30}}
                                 onClick={toggleCart} title="Ver carrito"
                />

            </header>
            <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
                <h1 className="h1-cart">Carrito de Compras</h1>
                <ul>
                    {cart.map((item) => (
                        <li className="li-cart" key={item.id}>
                            {item.title} - {item.price} €
                            <FontAwesomeIcon className="icon-delete" icon={faMinus} style={{color: "#b30000", marginLeft:40, height:35, }}
                                             onClick={() => handleRemoveFromCart(item.id)}
                            title="Eliminar libro del carrito"/>

                        </li>
                    ))}

                    <li className="li-cart-total">
                        Total: {totalPrice} €
                    </li>

                </ul>
                <div className="cart-buttons">
                    <button className="clearCart-button" onClick={clearCart}>Limpiar carrito</button>
                    <button className="buyCart-button">Comprar</button>
                </div>

            </div>
        </>

    );
}