import React from 'react';
import '../styles/styles.css'
import {Loader} from "../components/Loader";
import {useRedirection} from "../hooks/useRedirection";

export const Landing = () => {
    useRedirection("/books", 3000)
    return (
        <div className="landing-view">
            <h1 className="text-landing">Bienvenidos a Relatos de Papel</h1>
            <Loader />
        </div>
    );
}




