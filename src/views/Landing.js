import React from 'react';
import '../styles/styles.css'
import {Loader} from "../components/Loader";
import {useRedirection} from "../hooks/useRedirection";
import {Link} from "react-router-dom";

export const Landing = () => {
    useRedirection("/books", 5000)
    return (
        <div className="landing-view">
            <Link to={"/books"}>
                <h1 className="text-landing">Bienvenidos a Relatos de Papel</h1>
            </Link>
            <Loader />

        </div>
    );
}




