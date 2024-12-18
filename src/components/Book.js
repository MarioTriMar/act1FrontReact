import React from "react";
import {Link} from "react-router-dom";


export const Book = ({ book }) => {
    const [bookSelected, setBookSelected] = React.useState("");


    return (
        <div className="card">
            <h1>{book.title}</h1>
            <h3>Autor: {book.author}</h3>
            <h3>Género: {book.genre}</h3>

            <img src={book.image}  alt="image"/>
            <div className="card-details">
                <h3>Precio: {book.price}</h3>
                <h3>Stock: {book.stock}</h3>
            </div>
            <Link to={`/books/${book.id}`}>
                <button className="add-button">Ver detalles</button>

            </Link>
        </div>
    );
}