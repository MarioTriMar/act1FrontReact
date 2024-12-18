import {useEffect, useState} from "react";

export const useBooks = () => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setBooks([
                {
                    id: "1",
                    title: "Fuego y Sangre",
                    author: "George R. R. Martin",
                    genre: "Literatura fantástica",
                    stock: 10,
                    price: 27.50,
                    description: "La historia de los Targaryen cobra vida en esta obra magistral en la se que inspira la serie de HBO La Casa del Dragón, la precuela de Juego de Tronos.",
                    image: "https://images.cdn3.buscalibre.com/fit-in/360x360/cf/c6/cfc69114573f0d9344183c15b53a2c73.jpg"
                },
                {
                    id: "2",
                    title: "1984",
                    author: "George Orwell",
                    genre: "Distopía",
                    stock: 15,
                    price: 19.99,
                    description: "Un inquietante relato sobre un régimen totalitario donde la vigilancia y el control absoluto son la norma.",
                    image: "https://cdn.prod.website-files.com/6034d7d1f3e0f52c50b2adee/6254291caac6d1e42e8986df_62023ceb41cd1c2807b2841a_9788418933011.jpeg"

                },
                {
                    id: "3",
                    title: "El señor de los anillos",
                    author: "J.R.R. Tolkien",
                    genre: "Fantasía épica",
                    stock: 12,
                    price: 35.00,
                    description: "La lucha entre el bien y el mal en un mundo fantástico habitado por hobbits, elfos, enanos y humanos.",
                    image: "https://www.libreriaalberti.com/media/img/portadas/_visd_0000JPG02Q3B.jpg"

                },
                {
                    id: "4",
                    title: "Orgullo y prejuicio",
                    author: "Jane Austen",
                    genre: "Romance",
                    stock: 8,
                    price: 15.99,
                    description: "Un clásico de la literatura que explora el amor y las diferencias sociales en la Inglaterra del siglo XIX.",
                    image: "https://images.cdn2.buscalibre.com/fit-in/360x360/ff/4f/ff4f0785ea04ba644dc574171c902160.jpg"

                },
                {
                    id: "5",
                    title: "Don Quijote de la Mancha",
                    author: "Miguel de Cervantes",
                    genre: "Novela clásica",
                    stock: 20,
                    price: 25.00,
                    description: "Las aventuras de un hidalgo español que se convierte en un caballero errante en busca de justicia y gloria.",
                    image: "https://m.media-amazon.com/images/I/91CIwR3QU1L._UF1000,1000_QL80_.jpg"

                },
                {
                    id: "6",
                    title: "Crimen y castigo",
                    author: "Fiódor Dostoyevski",
                    genre: "Filosofía y crimen",
                    stock: 10,
                    price: 22.50,
                    description: "Un intenso análisis psicológico sobre la culpa y la redención a través de un crimen atroz.",
                    image: "https://cdn.prod.website-files.com/6034d7d1f3e0f52c50b2adee/6254541d8ae4df16d4e69bc8_6034d7d1f3e0f54529b2b1a1_Crimen-y-castigo-fiodor-dostoyevski-editorial-alma.jpeg"

                },
                {
                    id: "7",
                    title: "El alquimista",
                    author: "Paulo Coelho",
                    genre: "Ficción inspiracional",
                    stock: 18,
                    price: 14.99,
                    description: "Un viaje espiritual que narra las aventuras de Santiago, un joven pastor en busca de su leyenda personal.",
                    image: "https://m.media-amazon.com/images/I/81MOnJT4YiL._AC_UF894,1000_QL80_.jpg"

                },
                {
                    id: "8",
                    title: "La sombra del viento",
                    author: "Carlos Ruiz Zafón",
                    genre: "Misterio y ficción histórica",
                    stock: 0,
                    price: 24.50,
                    description: "Un joven descubre un libro maldito que desvela oscuros secretos sobre su autor y su propia familia.",
                    image: "https://images.cdn3.buscalibre.com/fit-in/360x360/cf/c6/cfc69114573f0d9344183c15b53a2c73.jpg"

                },
                {
                    id: "9",
                    title: "Harry Potter y la piedra filosofal",
                    author: "J.K. Rowling",
                    genre: "Fantasía",
                    stock: 25,
                    price: 20.00,
                    description: "El inicio de una épica saga donde un joven descubre que es un mago y debe enfrentarse al mago oscuro que mató a sus padres.",
                    image: "https://m.media-amazon.com/images/I/91R1AixEiLL._AC_UF894,1000_QL80_.jpg"

                },
                {
                    id: "10",
                    title: "Los pilares de la Tierra",
                    author: "Ken Follett",
                    genre: "Ficción histórica",
                    stock: 0,
                    price: 30.00,
                    description: "Una historia épica sobre la construcción de una catedral en la Inglaterra medieval y las vidas entrelazadas de sus personajes.",
                    image: "https://images.cdn3.buscalibre.com/fit-in/360x360/cf/c6/cfc69114573f0d9344183c15b53a2c73.jpg"

                }


            ]);
        }, 2500);
    }, []);

    return books;
}