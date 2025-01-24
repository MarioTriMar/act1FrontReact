import React, {useContext, useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCartShopping, faHouse, faMinus} from '@fortawesome/free-solid-svg-icons';
import {ShopCartContext} from "../context/ShopCartContext";
import {Link} from "react-router-dom";
import { useNavigate} from 'react-router-dom';

export const Header = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const {cart, clearCart, removeFromCart} = useContext(ShopCartContext);
    const navigate = useNavigate();

    const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);


    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);

    };

    const handleRemoveFromCart = (bookId) => {
        removeFromCart(bookId); // Elimina un libro del carrito
    };

    const checkOut = () =>{
        if(cart.length === 0){
            alert("No hay articulos en el carrito");
        }else{
            navigate("/checkout");
        }
    }
    return (
        <>
            <header className="header">
                <Link to={`/books`}>
                        <FontAwesomeIcon className="header__icon-focus" icon={faHouse} style={{color: "#74C0FC", height: 30, width: 60,marginTop:14,  marginLeft: 30}}
                    title="Volver a la página principal"/>
                    </Link>
                <h2 className="header__text">Relatos de Papel</h2>

                <FontAwesomeIcon className="header__icon-focus" icon={faCartShopping}
                                         style={{color: "#63E6BE", height: 30, width: 60, marginRight: 30, marginTop:14}}
                                         onClick={toggleCart} title="Ver carrito"/>



            </header>
            <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
                <h3 className="h1-cart">Carrito</h3>
                <ul>
                    {cart.map((item) => (
                        <li className="li-cart" key={item.id}>
                            {item.title} - {item.price} €
                            <FontAwesomeIcon className="icon-delete" icon={faMinus} style={{color: "#b30000", marginLeft:40, height:18, }}
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
                    <button onClick={checkOut} className="buyCart-button">Comprar</button>
                </div>

            </div>
        </>

    );
}