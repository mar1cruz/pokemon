import React, {CSSProperties} from "react";
import {Link} from "react-router-dom";

export default function ErrorPage() {
    const stylesContainer: CSSProperties = {
        display: 'flex',
        gap: '10px',
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: '100vh',
        backgroundColor: 'rgb(173,41,41)'
    }

    return (
        <div style={stylesContainer}>
            <h1 style={{color: "white", fontWeight: 700, fontSize: '40px'}}>Oops!</h1>
            <p style={{color: "white", fontWeight: 700, fontSize: '20px'}}>Sorry, an unexpected error has occurred.</p>
            <Link to='/' style={{color: 'white', fontSize: '20px'}}>Go home</Link>
        </div>
    );
}