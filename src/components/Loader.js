import React from 'react';
import {ClipLoader} from "react-spinners";

export const Loader = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '1500px'}}>
            <ClipLoader color="#000000" size={400}/>
        </div>
    );
}