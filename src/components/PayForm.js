import React, {useContext} from "react";
import { useNavigate} from 'react-router-dom';
import {ShopCartContext} from "../context/ShopCartContext";


export const PayForm = () => {
    const navigate = useNavigate();

    const {cart, clearCart} = useContext(ShopCartContext);

    const payCart = () => {
        if(cart.isEmpty){
            alert("No hay ningún articulo en el carrito");
        }else{
            alert("Compra realizada! Gracias!");
            clearCart();
            navigate("/books");
        }


    }

    return (
        <div>
            <form className="form-pay">
                <p>Dirección de envío: <input type="text" name="direccion"/></p>
                <p>Número de tarjeta: <input type="text" name="tarjeta"/></p>
                <p>Caducidad de tarjeta: <input type="month" name="caducidad"/></p>
                <p>CVV: <input type="number" name="cvv"/></p>
            </form>
            <button onClick={payCart} className="submit-button" type="submit" value="Pagar">Pagar</button>

        </div>
    )
}