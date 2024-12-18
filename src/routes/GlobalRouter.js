import React from 'react';
import {Landing} from '../views/Landing';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {Books} from "../views/Books";
import {Header} from "../components/Header";
import {BookDetails} from "../views/BookDetails";


export const GlobalRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/books" element={<Layout><Books /></Layout>} />
                <Route path="/books/:bookId" element={<Layout><BookDetails /></Layout>} />
            </Routes>
        </BrowserRouter>

    )
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
    </>
);

