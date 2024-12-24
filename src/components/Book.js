import React from "react";
import {Link} from "react-router-dom";


export const Book = ({ book }) => {

    return (
        <div className="card">
            <h3>{book.title}</h3>
            <p>Autor: {book.author}</p>
            <p>Género: {book.genre}</p>

            <img src={book.image}  alt="image"/>
            <div className="card-details">
                <p>Precio: {book.price}</p>
                <p>Stock: {book.stock}</p>
            </div>
            <Link to={`/books/${book.id}`}>
                <button className="add-button">Ver detalles</button>

            </Link>
        </div>
    );
}