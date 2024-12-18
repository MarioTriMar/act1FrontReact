import React, {useContext, useState} from "react";
import '../styles/styles.css'
import {BookContext} from "../context/BookContext";
import {Book} from "../components/Book";
import {SearchBook} from "../components/SearchBook";

export const Books = () => {
    const { books } = useContext(BookContext);
    const [filteredBooks, setFilteredBooks] = useState(books);

    const handleSearch = (searchTerm) => {
        if(searchTerm === "") {
            setFilteredBooks(books);
        }else{
            const filtered = books.filter(book =>
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) && book.stock > 0
            );
            if(filtered.length === 0){
                alert("El libro que estas buscando no existe");
                setFilteredBooks(books);
            }else{
                setFilteredBooks(filtered);
            }

        }

    };

    return (
        <div className="div-books">
            <SearchBook onSearch={handleSearch} /> {/* Pasamos la función handleSearch */}
            <div className="div-cards">
                {filteredBooks
                    .filter((book) => book.stock>0)
                    .map((book, index) => (
                    <Book key={index} book={book} />
                ))}
            </div>
        </div>
    );
};