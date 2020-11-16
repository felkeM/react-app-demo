import React from 'react';
import Navbar from '../Navbar/Navbar';
import logo from '../../assets/images/logo.svg';

export default function Header() {
    return (
        <header className="App_Header">
            <figure>
                <img src={logo} className="App_Logo" alt="logo" />
            </figure>
            <Navbar />
        </header>
    )
}
