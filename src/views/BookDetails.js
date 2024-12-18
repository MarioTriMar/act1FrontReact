
import React, { useContext } from 'react';
import {Link, useParams} from 'react-router-dom';
import {BookContext} from '../context/BookContext';
import {ShopCartContext} from "../context/ShopCartContext";

export const BookDetails = () => {
    const { bookId } = useParams();
    const { books } = useContext(BookContext);
    const {addToCart} = useContext(ShopCartContext);
    const book = books.find(b => b.id === bookId);

    if (!book) {
        return <h2>Libro no encontrado</h2>;
    }

    const handleAddToCart = () => {
        addToCart(book);
    };

    return (
        <div className="book-details">
            <h1>{book.title}</h1>
            <h2>Autor: {book.author}</h2>
            <h2>Género: {book.genre}</h2>
            <h2>{book.description}</h2>
            <img src={book.image} alt="image"/>
            <div className="card-details">
                <h2>Precio: {book.price} €</h2>
                <h2>Stock: {book.stock}</h2>
            </div>
            <button className="add-button" onClick={handleAddToCart}>
                Añadir al carrito</button>


        </div>
    );
}

