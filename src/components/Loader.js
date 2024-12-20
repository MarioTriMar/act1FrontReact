import React from 'react';
import {ClipLoader} from "react-spinners";

export const Loader = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '700px'}}>
            <ClipLoader color="#000000" size={300}/>
        </div>
    );
}