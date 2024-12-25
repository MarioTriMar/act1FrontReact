
import React, { useContext } from 'react';
import {useParams} from 'react-router-dom';
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
        alert(book.title + " añadido al carrito.");
    };

    return (
        <div className="book-details">
            <h2>{book.title}</h2>
            <p>Autor: {book.author}</p>
            <p>Género: {book.genre}</p>
            <p>{book.description}</p>
            <img src={book.image} alt="image"/>
            <div className="book-details__card-details">
                <p>Precio: {book.price} €</p>
                <p>Stock: {book.stock}</p>
            </div>
            <button className="book-details__add-button" onClick={handleAddToCart}>
                Añadir al carrito</button>


        </div>
    );
}

