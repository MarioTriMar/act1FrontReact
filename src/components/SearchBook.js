import React, {useState} from 'react';

export const SearchBook = ({onSearch}) => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = () => {
        onSearch(searchTerm);
    }

    return (<div className="div-search">
            <input title="Título del libro" placeholder="Título del libro"
                value={searchTerm} onChange={handleInputChange} />
            <button onClick={handleSubmit}>Search</button>
        </div>
    );
}