import React, {createContext, useState} from "react";

export const ShopCartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (book) => {
        setCart((prevCart) => [...prevCart, book]);
    };

    const removeFromCart = (bookId) => {
        const index= cart.findIndex((item) => item.id === bookId);
        setCart((prevCart) => [
            ...prevCart.slice(0, index),
            ...prevCart.slice(index + 1),
        ]);
    };

    const clearCart = () =>{
        setCart([]);
    };

    return (
        <ShopCartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
            {children}
        </ShopCartContext.Provider>
    );
};