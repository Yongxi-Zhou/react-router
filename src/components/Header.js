import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <h1>
            React Router
        </h1>
        <ul className = 'nav'>
            <Link to = "/">Home</Link>
            <Link to = "/profile">Profile</Link>
            <Link to = "/about">About</Link>
            <Link to = "/invoices">Invoices</Link>
            <Link to = "/user/:username">User</Link>
            <Link to = "/form">Form</Link>
        </ul>
    </>
    )
}

export default Header